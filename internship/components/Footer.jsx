export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-2 px-4">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} PaxtoQuotes. Built with 💡, ☕, and 💻.
        </p>
        <p className="text-xs text-gray-300">
          Made with <span className="text-pink-400">Next.js</span> + <span className="text-sky-300">ShadCN UI</span>
        </p>
      </div>
    </footer>
  );
}
