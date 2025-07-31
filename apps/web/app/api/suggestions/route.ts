import { NextRequest, NextResponse } from 'next/server';
import { config } from '../../../config';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const searchQuery = searchParams.get('searchQuery') || '';

        const response = await fetch(`${config.backendServer.url}/suggestions?searchQuery=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // If the backend returns data directly as array, wrap it in ApiResponse format
        if (Array.isArray(data)) {
            return NextResponse.json({
                success: true,
                data: data
            });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching suggestions:', error);

        return NextResponse.json({
            success: false,
            error: 'Failed to fetch suggestions from backend server',
            data: []
        }, { status: 500 });
    }
}