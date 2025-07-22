import { NextRequest, NextResponse } from 'next/server';
import { config } from '../../../../config';

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(`${config.backendServer.url}/user/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error updating password:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update password' },
            { status: 500 }
        );
    }
}
