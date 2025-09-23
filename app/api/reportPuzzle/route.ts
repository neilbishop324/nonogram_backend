import dbConnect from '@/app/lib/mongodb';
import Game from '@/app/models/Game';
import { Report } from '@/app/models/Report';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { puzzleId } = body;

        if (!puzzleId) {
            return NextResponse.json(
                { status: 400, error: "Puzzle ID is required" },
                { status: 400 }
            );
        }

        const puzzle = await Game.findById(puzzleId);
        if (!puzzle) {
            return NextResponse.json(
                { status: 404, error: "Puzzle not found" },
                { status: 404 }
            );
        }

        const report = new Report({
            reportedPuzzleId: puzzleId
        });

        await report.save();

        return NextResponse.json({ status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { status: 500, error: error.message },
            { status: 500 }
        );
    }
}