import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold">🧩 Puzzle Demo</h1>
      <p className="mt-4">Learn Navigation vs Routing through puzzles!</p>
      <div className="flex justify-center gap-6 mt-6">
        <Link href="/navigation" className="p-3 border rounded bg-green-200">Navigation Puzzle</Link>
        <Link href="/routing" className="p-3 border rounded bg-blue-200">Routing Puzzle</Link>
      </div>
    </main>
  );
}
