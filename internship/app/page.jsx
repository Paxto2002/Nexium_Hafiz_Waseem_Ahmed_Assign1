import QuoteGenerator from "@/components/QuoteGenerator";
export default function Home() {
  return (
    <main aria-label="Main Section" className="min-h-screen flex items-center justify-center max-w-[80%] mx-auto">
      <QuoteGenerator />
    </main>
  );
}
