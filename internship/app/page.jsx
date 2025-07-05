import QuoteGenerator from "@/components/QuoteGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black flex items-center justify-center px-4 my-10">
      <div
        aria-label="Quote Box"
        className="max-w-[80%] w-full border rounded-2xl border-zinc-700 bg-zinc-900/80 backdrop-blur-md shadow-[0_20px_60px_rgba(255,255,255,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_80px_rgba(255,255,255,0.12)] p-6"
      >
        <QuoteGenerator />
      </div>
    </main>
  );
}

