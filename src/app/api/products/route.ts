import { NextRequest, NextResponse } from 'next/server';
import { config } from '../../../config';

export async function GET(request: NextRequest) {
    try {
        // Extract query parameters from the request
        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search');
        const colors = searchParams.get('colors');
        const sort = searchParams.get('sort');

        // Build query string for backend server
        const backendParams = new URLSearchParams();
        if (search) backendParams.append('search', search);
        if (colors) backendParams.append('colors', colors);
        if (sort) backendParams.append('sort', sort);

        const queryString = backendParams.toString();
        const backendUrl = queryString
            ? `${config.backendServer.url}/products?${queryString}`
            : `${config.backendServer.url}/products`;

        const response = await fetch(backendUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        // If backend returned empty array but we have filters, try getting all products and filter client-side
        if (Array.isArray(data) && data.length === 0 && (search || colors || sort)) {
            const allProductsResponse = await fetch(`${config.backendServer.url}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (allProductsResponse.ok) {
                data = await allProductsResponse.json();
            }
        }

        // Transform backend data to match frontend Product interface
        let transformedData = Array.isArray(data) ? data.map(product => ({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            discount: product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0,
            stock: product.stock || 0,
            packageSize: product.package || 1,
            colors: product.colors?.map((color: string) => color.toLowerCase()) || ['green'],
            description: `Fresh ${product.name.toLowerCase()} with premium quality`,
            image: `/assets/${product.name.toLowerCase()}.jpeg`
        })) : [];

        // Apply client-side filtering if backend doesn't handle it properly
        // Filter by search query
        if (search && search.trim()) {
            const searchLower = search.toLowerCase();
            transformedData = transformedData.filter(product =>
                product.name.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower)
            );
        }

        // Filter by colors
        if (colors && colors.trim()) {
            const colorArray = colors.split(',').map(c => c.trim().toLowerCase());
            transformedData = transformedData.filter(product =>
                product.colors.some((productColor: string) => colorArray.includes(productColor))
            );
        }

        // Apply sorting based on the sort parameter or default to name-asc
        const sortOrder = sort || 'name-asc';
        transformedData.sort((a, b) => {
            switch (sortOrder) {
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'discount-desc':
                    return b.discount - a.discount;
                case 'name-asc':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return NextResponse.json({
            success: true,
            data: transformedData
        });
    } catch (error) {
        console.error('Error fetching products:', error);

        // Return sample products when backend is not available (sorted alphabetically)
        let sampleProducts = [
            {
                id: '1',
                name: 'Apple',
                price: 2.99,
                discount: 0,
                stock: 100,
                packageSize: 1,
                colors: ['green'],
                description: 'Crispy and sweet Granny Smith apples',
                image: '/assets/apple-granny-smith.jpeg'
            },
            {
                id: '2',
                name: 'Banana',
                price: 1.49,
                discount: 0,
                stock: 50,
                packageSize: 2,
                colors: ['yellow'],
                description: 'Sweet yellow bananas perfect for snacking',
                image: '/assets/banana.jpeg'
            },
            {
                id: '4',
                name: 'Lime',
                price: 0.99,
                discount: 25,
                stock: 45,
                packageSize: 3,
                colors: ['green'],
                description: 'Tangy limes perfect for cooking and drinks',
                image: '/assets/lime.jpeg'
            },
            {
                id: '3',
                name: 'Orange',
                price: 3.49,
                discount: 0,
                stock: 75,
                packageSize: 1,
                colors: ['orange'],
                description: 'Juicy Valencia oranges packed with vitamin C',
                image: '/assets/orange.jpeg'
            },
            {
                id: '5',
                name: 'Pineapple',
                price: 4.99,
                discount: 0,
                stock: 20,
                packageSize: 1,
                colors: ['yellow'],
                description: 'Tropical pineapple, sweet and juicy',
                image: '/assets/pineapple.jpeg'
            }
        ];

        // Apply client-side filtering when backend is not available
        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search');
        const colors = searchParams.get('colors');
        const sort = searchParams.get('sort');

        console.log('Fallback filtering - Received filters:', { search, colors, sort });

        // Filter by search query
        if (search && search.trim()) {
            const searchLower = search.toLowerCase();
            sampleProducts = sampleProducts.filter(product =>
                product.name.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower)
            );
        }

        // Filter by colors
        if (colors && colors.trim()) {
            const colorArray = colors.split(',').map(c => c.trim().toLowerCase());
            sampleProducts = sampleProducts.filter(product =>
                product.colors.some(productColor => colorArray.includes(productColor))
            );
        }

        // Apply sorting
        const sortOrder = sort || 'name-asc';
        sampleProducts.sort((a, b) => {
            switch (sortOrder) {
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'discount-desc':
                    return b.discount - a.discount;
                case 'name-asc':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        return NextResponse.json({
            success: true,
            data: sampleProducts
        });
    }
}