import { NextResponse } from 'next/server';
import Game from '@/app/models/Game';
import dbConnect from '@/app/lib/mongodb';

export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const limit = Number(searchParams.get('limit'));
        const skip = Number(searchParams.get('skip'));

        const games = await Game.find()
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        return NextResponse.json({ status: 200, games });
    } catch (error: any) {
        return NextResponse.json({ status: 500, error: error.message }, { status: 500 });
    }
}