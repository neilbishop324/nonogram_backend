import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 p-8 sm:p-16 font-sans">
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden">
            <Image
              src="/icon.png"
              alt="Nonogram: Gridverse Logo"
              width={56}
              height={56}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">Nonogram: Gridverse</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Backend dashboard & API reference</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <section className="mb-6">
          <h2 className="text-lg font-medium">Welcome</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            This is the backend for Nonogram: Gridverse — a public puzzle collection API and game backend. Use the
            endpoints below to list, add, and report puzzles, or connect the game client.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="font-medium">Quick links</h3>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded flex flex-col">
              <span className="text-xs text-slate-500">GET</span>
              <code className="font-mono mt-1">/api/puzzles</code>
              <span className="text-sm text-slate-500 mt-2">List public puzzles (supports ?limit=&skip=)</span>
            </li>

            <li className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded flex flex-col">
              <span className="text-xs text-slate-500">POST</span>
              <code className="font-mono mt-1">/api/addPuzzle</code>
              <span className="text-sm text-slate-500 mt-2">Add a new puzzle (send JSON with a <code className="font-mono">game</code> object)</span>
            </li>

            <li className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded flex flex-col">
              <span className="text-xs text-slate-500">POST</span>
              <code className="font-mono mt-1">/api/reportPuzzle</code>
              <span className="text-sm text-slate-500 mt-2">Report a puzzle by sending JSON with a <code className="font-mono">puzzleId</code> field</span>
            </li>

            <li className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded flex flex-col">
              <span className="text-xs text-slate-500">GET</span>
              <code className="font-mono mt-1">/api/puzzleSize</code>
              <span className="text-sm text-slate-500 mt-2">Get total count of puzzles</span>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="font-medium">Quick start</h3>
          <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              Ensure the server is running. Locally: <code className="font-mono">npm start</code> or <code className="font-mono">vercel dev</code>.
            </li>
            <li>Use a tool like curl or Postman to call the endpoints above.</li>
            <li>
              For adding puzzles, POST JSON example:
              <div className="mt-2">
                <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs overflow-auto">{`{"game": { "size": 10, "type": "puzzle", "numberOfLives": 3, "solvedTable": [], "makerName": "yourName" }}`}</pre>
              </div>
            </li>
            <li>
              To report a puzzle, POST JSON example:
              <div className="mt-2">
                <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs overflow-auto">{`{"puzzleId":"60d5f4832f8fb814c8b1e9a1"}`}</pre>
              </div>
            </li>
          </ol>
        </section>

        <section>
          <h3 className="font-medium">Environment</h3>
          <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              MongoDB connection should be configured via <code className="font-mono">MONGODB_URI</code> in your environment.
            </p>
            <p className="mt-2">
              If deploying to Vercel, ensure your <code className="font-mono">build</code> script compiles TypeScript to <code className="font-mono">dist/</code> and set the Output Directory to <code className="font-mono">dist</code> in project settings.
            </p>
          </div>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto mt-6 text-center text-sm text-slate-500">
        <div>Nonogram: Gridverse — Backend · {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
