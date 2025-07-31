import { NextRequest, NextResponse } from 'next/server';
import { serverHttpClient } from '../../../lib/serverHttpClient';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const searchQuery = searchParams.get('searchQuery') || '';

        const data = await serverHttpClient.get(`/suggestions?searchQuery=${encodeURIComponent(searchQuery)}`);

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