import { CartRepository } from '../../../infrastructure/api/repositories'
import { Cart, CartItem } from '../../../domain/entities/Cart'
import { HttpClient } from '../../../infrastructure/api/interfaces'

// Mock HttpClient
const mockHttpClient: HttpClient = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
}

describe('CartRepository', () => {
    let cartRepository: CartRepository

    beforeEach(() => {
        cartRepository = new CartRepository(mockHttpClient)
        jest.clearAllMocks()
    })

    describe('getCart', () => {
        test('should return cart data when successful', async () => {
            const mockApiResponse = {
                data: {
                    items: [
                        {
                            productId: '1',
                            productName: 'Apple',
                            price: 2.50,
                            quantity: 3,
                            image: '/apple.jpg',
                            packageSize: 1
                        }
                    ],
                    totalPrice: 7.50,
                    totalItems: 3
                },
                success: true,
                message: 'Cart retrieved successfully'
            }

            jest.mocked(mockHttpClient.get).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.getCart()

            expect(mockHttpClient.get).toHaveBeenCalledWith('/cart')
            expect(result).toEqual(mockApiResponse.data)
        })

        test('should return empty cart when API returns null data', async () => {
            const mockApiResponse = {
                data: null,
                success: true,
                message: 'Empty cart'
            }

            jest.mocked(mockHttpClient.get).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.getCart()

            expect(result).toEqual({
                items: [],
                totalPrice: 0,
                totalItems: 0
            })
        })

        test('should handle API errors gracefully', async () => {
            jest.mocked(mockHttpClient.get).mockRejectedValue(new Error('Network error'))

            await expect(cartRepository.getCart()).rejects.toThrow('Network error')
            expect(mockHttpClient.get).toHaveBeenCalledWith('/cart')
        })
    })

    describe('addToCart', () => {
        const mockCartItem: CartItem = {
            productId: '1',
            productName: 'Apple',
            price: 2.50,
            quantity: 2,
            image: '/apple.jpg',
            packageSize: 1
        }

        test('should add item to cart and return updated cart', async () => {
            const mockApiResponse = {
                data: {
                    items: [mockCartItem],
                    totalPrice: 5.00,
                    totalItems: 2
                },
                success: true,
                message: 'Item added to cart'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.addToCart(mockCartItem)

            expect(mockHttpClient.post).toHaveBeenCalledWith('/cart', mockCartItem)
            expect(result).toEqual(mockApiResponse.data)
        })

        test('should handle add to cart failure', async () => {
            jest.mocked(mockHttpClient.post).mockRejectedValue(new Error('Add to cart failed'))

            await expect(cartRepository.addToCart(mockCartItem)).rejects.toThrow('Add to cart failed')
        })

        test('should return empty cart when API returns null on add', async () => {
            const mockApiResponse = {
                data: null,
                success: false,
                message: 'Failed to add item'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.addToCart(mockCartItem)

            expect(result).toEqual({
                items: [],
                totalPrice: 0,
                totalItems: 0
            })
        })
    })

    describe('removeFromCart', () => {
        test('should remove item from cart and return updated cart', async () => {
            const mockApiResponse = {
                data: {
                    items: [],
                    totalPrice: 0,
                    totalItems: 0
                },
                success: true,
                message: 'Item removed from cart'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.removeFromCart('1', 2)

            expect(mockHttpClient.post).toHaveBeenCalledWith('/cart/remove', {
                productId: '1',
                quantity: 2
            })
            expect(result).toEqual(mockApiResponse.data)
        })

        test('should handle partial removal correctly', async () => {
            const mockApiResponse = {
                data: {
                    items: [
                        {
                            productId: '1',
                            productName: 'Apple',
                            price: 2.50,
                            quantity: 1, // Reduced from 3 to 1
                            image: '/apple.jpg',
                            packageSize: 1
                        }
                    ],
                    totalPrice: 2.50,
                    totalItems: 1
                },
                success: true,
                message: 'Item partially removed'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.removeFromCart('1', 2)

            expect(result.items).toHaveLength(1)
            expect(result.items[0].quantity).toBe(1)
            expect(result.totalItems).toBe(1)
            expect(result.totalPrice).toBe(2.50)
        })

        test('should handle remove from cart failure', async () => {
            jest.mocked(mockHttpClient.post).mockRejectedValue(new Error('Remove from cart failed'))

            await expect(cartRepository.removeFromCart('1', 2)).rejects.toThrow('Remove from cart failed')
        })

        test('should handle invalid product ID', async () => {
            const mockApiResponse = {
                data: {
                    items: [
                        {
                            productId: '2',
                            productName: 'Banana',
                            price: 1.50,
                            quantity: 3,
                            image: '/banana.jpg',
                            packageSize: 1
                        }
                    ],
                    totalPrice: 4.50,
                    totalItems: 3
                },
                success: true,
                message: 'Product not found in cart'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.removeFromCart('999', 1)

            expect(result.items).toHaveLength(1)
            expect(result.items[0].productId).toBe('2') // Original item unchanged
        })

        test('should handle zero quantity removal', async () => {
            const mockApiResponse = {
                data: {
                    items: [
                        {
                            productId: '1',
                            productName: 'Apple',
                            price: 2.50,
                            quantity: 3,
                            image: '/apple.jpg',
                            packageSize: 1
                        }
                    ],
                    totalPrice: 7.50,
                    totalItems: 3
                },
                success: true,
                message: 'No items removed'
            }

            jest.mocked(mockHttpClient.post).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.removeFromCart('1', 0)

            expect(result.items[0].quantity).toBe(3) // Unchanged
        })
    })

    describe('Edge Cases', () => {
        test('should handle malformed API response structure', async () => {
            const malformedResponse = {
                // Missing 'data' property
                success: true,
                message: 'Success'
            }

            jest.mocked(mockHttpClient.get).mockResolvedValue(malformedResponse)

            const result = await cartRepository.getCart()

            // Should fallback to empty cart
            expect(result).toEqual({
                items: [],
                totalPrice: 0,
                totalItems: 0
            })
        })

        test('should handle empty items array', async () => {
            const mockApiResponse = {
                data: {
                    items: [],
                    totalPrice: 0,
                    totalItems: 0
                },
                success: true,
                message: 'Empty cart'
            }

            jest.mocked(mockHttpClient.get).mockResolvedValue(mockApiResponse)

            const result = await cartRepository.getCart()

            expect(result.items).toHaveLength(0)
            expect(result.totalPrice).toBe(0)
            expect(result.totalItems).toBe(0)
        })

        test('should handle network timeout', async () => {
            const timeoutError = new Error('Request timeout')
            timeoutError.name = 'TimeoutError'

            jest.mocked(mockHttpClient.get).mockRejectedValue(timeoutError)

            await expect(cartRepository.getCart()).rejects.toThrow('Request timeout')
        })

        test('should handle concurrent add operations', async () => {
            const mockItem1: CartItem = {
                productId: '1',
                productName: 'Apple',
                price: 2.50,
                quantity: 1,
                image: '/apple.jpg',
                packageSize: 1
            }

            const mockItem2: CartItem = {
                productId: '2',
                productName: 'Banana',
                price: 1.50,
                quantity: 2,
                image: '/banana.jpg',
                packageSize: 1
            }

            const mockResponse1 = {
                data: {
                    items: [mockItem1],
                    totalPrice: 2.50,
                    totalItems: 1
                },
                success: true,
                message: 'Item 1 added'
            }

            const mockResponse2 = {
                data: {
                    items: [mockItem1, mockItem2],
                    totalPrice: 5.50,
                    totalItems: 3
                },
                success: true,
                message: 'Item 2 added'
            }

            jest.mocked(mockHttpClient.post)
                .mockResolvedValueOnce(mockResponse1)
                .mockResolvedValueOnce(mockResponse2)

            const [result1, result2] = await Promise.all([
                cartRepository.addToCart(mockItem1),
                cartRepository.addToCart(mockItem2)
            ])

            expect(result1.items).toHaveLength(1)
            expect(result2.items).toHaveLength(2)
        })
    })
})
