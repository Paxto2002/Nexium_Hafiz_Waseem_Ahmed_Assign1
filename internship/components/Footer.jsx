export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-6"
    >
      <div className="container mx-auto text-center space-y-2 px-4">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} <span className="font-semibold">Quote Genie </span>. Built with 💡, ☕, and 💻.
        </p>
        <p className="text-xs text-gray-300">
          My First <span className="text-pink-400 font-medium">Next.js</span> +{" "}
          <span className="text-sky-300 font-medium">ShadCN</span> Project
        </p>
      </div>
    </footer>
  );
}
