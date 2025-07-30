import { CartService } from '@/domain/services/CartService'
import type { Cart, CartItem } from '@/domain/entities/Cart'
import type { Product } from '@/domain/entities/Product'

describe('CartService', () => {
    const mockCartItems: CartItem[] = [
        {
            productId: '1',
            productName: 'Apple',
            price: 2.50,
            quantity: 3,
            image: '/apple.jpg',
            packageSize: 1
        },
        {
            productId: '2',
            productName: 'Banana',
            price: 1.50,
            quantity: 5,
            image: '/banana.jpg',
            packageSize: 2
        },
        {
            productId: '1', // Duplicate product to test grouping
            productName: 'Apple',
            price: 2.50,
            quantity: 2,
            image: '/apple.jpg',
            packageSize: 1
        }
    ]

    const mockCart: Cart = {
        items: mockCartItems,
        totalPrice: 0,
        totalItems: 0
    }

    describe('calculateTotals', () => {
        test('should calculate totals for empty cart', () => {
            const result = CartService.calculateTotals(mockCart)

            // Expected: (3 * 2.50) + (5 * 1.50) + (2 * 2.50) = 7.50 + 7.50 + 5.00 = 20.00
            expect(result.totalPrice).toBe(20.00)
            // Expected: 3 + 5 + 2 = 10 items
            expect(result.totalItems).toBe(10)
        })

        test('should handle empty cart', () => {
            const emptyCart: Cart = { items: [], totalPrice: 0, totalItems: 0 }
            const result = CartService.calculateTotals(emptyCart)

            expect(result.totalPrice).toBe(0)
            expect(result.totalItems).toBe(0)
        })

        test('should handle cart with zero quantities', () => {
            const cartWithZeros: Cart = {
                items: [
                    {
                        productId: '1',
                        productName: 'Apple',
                        price: 2.50,
                        quantity: 0,
                        image: '/apple.jpg',
                        packageSize: 1
                    }
                ],
                totalPrice: 0,
                totalItems: 0
            }

            const result = CartService.calculateTotals(cartWithZeros)
            expect(result.totalPrice).toBe(0)
            expect(result.totalItems).toBe(0)
        })

        test('should handle decimal prices correctly', () => {
            const cartWithDecimals: Cart = {
                items: [
                    {
                        productId: '1',
                        productName: 'Lime',
                        price: 1.33,
                        quantity: 3,
                        image: '/lime.jpg',
                        packageSize: 1
                    }
                ],
                totalPrice: 0,
                totalItems: 0
            }

            const result = CartService.calculateTotals(cartWithDecimals)
            expect(result.totalPrice).toBe(3.99) // 1.33 * 3
            expect(result.totalItems).toBe(3)
        })
    })

    describe('getItemQuantityInCart', () => {
        test('should return correct quantity for existing product', () => {
            const quantity = CartService.getItemQuantityInCart(mockCart, '1')
            expect(quantity).toBe(5) // 3 + 2 from duplicate items
        })

        test('should return 0 for non-existing product', () => {
            const quantity = CartService.getItemQuantityInCart(mockCart, '999')
            expect(quantity).toBe(0)
        })

        test('should handle empty cart', () => {
            const emptyCart: Cart = { items: [], totalPrice: 0, totalItems: 0 }
            const quantity = CartService.getItemQuantityInCart(emptyCart, '1')
            expect(quantity).toBe(0)
        })
    })

    describe('groupItemsByProductId', () => {
        test('should group items by productId and sum quantities', () => {
            const grouped = CartService.groupItemsByProductId(mockCartItems)

            expect(grouped).toHaveLength(2)

            const appleItem = grouped.find((item: CartItem) => item.productId === '1')
            const bananaItem = grouped.find((item: CartItem) => item.productId === '2')

            expect(appleItem).toBeDefined()
            expect(appleItem?.quantity).toBe(5) // 3 + 2

            expect(bananaItem).toBeDefined()
            expect(bananaItem?.quantity).toBe(5)
        })

        test('should handle single items without grouping', () => {
            const singleItem: CartItem[] = [
                {
                    productId: '1',
                    productName: 'Apple',
                    price: 2.50,
                    quantity: 3,
                    image: '/apple.jpg',
                    packageSize: 1
                }
            ]

            const grouped = CartService.groupItemsByProductId(singleItem)
            expect(grouped).toHaveLength(1)
            expect(grouped[0].quantity).toBe(3)
        })

        test('should handle empty array', () => {
            const grouped = CartService.groupItemsByProductId([])
            expect(grouped).toHaveLength(0)
        })
    })

    describe('removeItemsPartially', () => {
        test('should remove specified quantity from cart', () => {
            const cart: Cart = {
                items: [
                    {
                        productId: '1',
                        productName: 'Apple',
                        price: 2.50,
                        quantity: 5,
                        image: '/apple.jpg',
                        packageSize: 1
                    }
                ],
                totalPrice: 12.50,
                totalItems: 5
            }

            const result = CartService.removeItemsPartially(cart, '1', 2)

            expect(result.items).toHaveLength(1)
            expect(result.items[0].quantity).toBe(3)
            expect(result.totalPrice).toBe(7.50) // Recalculated
            expect(result.totalItems).toBe(3)
        })

        test('should remove entire item when quantity to remove equals item quantity', () => {
            const cart: Cart = {
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
            }

            const result = CartService.removeItemsPartially(cart, '1', 3)

            expect(result.items).toHaveLength(0)
            expect(result.totalPrice).toBe(0)
            expect(result.totalItems).toBe(0)
        })

        test('should remove entire item when quantity to remove exceeds item quantity', () => {
            const cart: Cart = {
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
            }

            const result = CartService.removeItemsPartially(cart, '1', 10)

            expect(result.items).toHaveLength(0)
            expect(result.totalPrice).toBe(0)
            expect(result.totalItems).toBe(0)
        })

        test('should not modify cart when product does not exist', () => {
            const originalCart: Cart = {
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
            }

            const result = CartService.removeItemsPartially(originalCart, '999', 1)

            expect(result.items).toHaveLength(1)
            expect(result.totalPrice).toBe(7.50)
            expect(result.totalItems).toBe(3)
        })

        test('should handle grouped items correctly', () => {
            const cart: Cart = {
                items: [
                    {
                        productId: '1',
                        productName: 'Apple',
                        price: 2.50,
                        quantity: 3,
                        image: '/apple.jpg',
                        packageSize: 1
                    },
                    {
                        productId: '1',
                        productName: 'Apple',
                        price: 2.50,
                        quantity: 2,
                        image: '/apple.jpg',
                        packageSize: 1
                    },
                    {
                        productId: '2',
                        productName: 'Banana',
                        price: 1.50,
                        quantity: 4,
                        image: '/banana.jpg',
                        packageSize: 2
                    }
                ],
                totalPrice: 18.50,
                totalItems: 9
            }

            const result = CartService.removeItemsPartially(cart, '1', 3)

            // Should remove 3 items from product '1' (total was 5, now should be 2)
            const appleItems = result.items.filter((item: CartItem) => item.productId === '1')
            const totalApples = appleItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)

            expect(totalApples).toBe(2)
            expect(result.totalItems).toBe(6) // 2 apples + 4 bananas
        })
    })
})
