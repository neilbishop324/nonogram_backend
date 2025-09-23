import { NextResponse } from 'next/server';
import Game from '@/app/models/Game';
import dbConnect from '@/app/lib/mongodb';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { game } = await request.json();

        if (!game) {
            return NextResponse.json(
                { status: 400, error: "Game data is required" },
                { status: 400 }
            );
        }

        const gameValue = new Game({
            _id: game._id,
            size: game.size,
            type: game.type,
            numberOfLives: game.numberOfLives,
            solvedTable: game.solvedTable,
            makerName: game.makerName
        });

        await gameValue.save();
        return NextResponse.json({ status: 201 }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { status: 500, error: error.message },
            { status: 500 }
        );
    }
}