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

        // Return sample suggestions when backend is not available
        const { searchParams } = new URL(request.url);
        const searchQuery = searchParams.get('searchQuery') || '';

        const sampleSuggestions = ['Apple', 'Banana', 'Orange', 'Lime', 'Pineapple'];
        const filteredSuggestions = searchQuery
            ? sampleSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : [];

        return NextResponse.json({
            success: true,
            data: filteredSuggestions
        });
    }
}