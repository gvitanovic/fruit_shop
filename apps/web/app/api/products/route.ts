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
        
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch products from backend server',
            data: []
        }, { status: 500 });
    }
}