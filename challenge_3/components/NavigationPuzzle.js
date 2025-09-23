import Link from "next/link";

export default function NavigationPuzzle() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">🔀 Navigation Puzzle</h2>
      <p>Pick a piece you already know (Navigation = choosing manually):</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="/home" className="p-3 border rounded bg-green-200">Home</Link>
        <Link href="/about" className="p-3 border rounded bg-yellow-200">About</Link>
        <Link href="/contact" className="p-3 border rounded bg-pink-200">Contact</Link>
      </div>
    </div>
  );
}
