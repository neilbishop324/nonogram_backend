import { NextResponse } from 'next/server';
import Game from '@/app/models/Game';
import dbConnect from '@/app/lib/mongodb';

export async function GET() {
    try {
        await dbConnect();
        const size = await Game.countDocuments();
        return NextResponse.json({ status: 200, size });
    } catch (error: any) {
        return NextResponse.json(
            { status: 500, error: error.message, size: 0 },
            { status: 500 }
        );
    }
}