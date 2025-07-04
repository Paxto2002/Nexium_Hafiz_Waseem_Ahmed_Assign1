export default function AboutPage() {
  return (
    <main className="flex items-center justify-center py-14 max-w-[80%] min-h-screen mx-auto">
      <section className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
          👋 About Me — Paxto
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a Computer Science student at the University of Balochistan, driven by a passion for building intelligent software and pushing the boundaries of what tech can do.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          <div className="rounded-xl bg-gray-900/40 p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🎯 My Mission</h3>
            <p className="text-sm text-gray-300">
              To merge deep technical knowledge with creativity, and build applications that solve real-world problems — especially in the AI/ML space.
            </p>
          </div>
          <div className="rounded-xl bg-gray-900/40 p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">📚 Current Focus</h3>
            <p className="text-sm text-gray-300">
              I'm currently sharpening my full-stack skills through the <strong>Nexium AI-First Internship</strong>, working with Next.js, Supabase, MongoDB, and automation tools like n8n.
            </p>
          </div>
          <div className="rounded-xl bg-gray-900/40 p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">🧠 Learning Pillars</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-300">
              <li>AI, Machine Learning, and Deep Learning (both theory + practice)</li>
              <li>React / Next.js + Tailwind + ShadCN UI</li>
              <li>Data Science, SQL, and Supabase backend systems</li>
            </ul>
          </div>
          <div className="rounded-xl bg-gray-900/40 p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-2">🛠️ Tech Stack</h3>
            <p className="text-sm text-gray-300">
              React, Next.js, Supabase, MongoDB, Tailwind CSS, Node.js, Python (for AI/ML), and Git/GitHub for version control.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 text-sm text-gray-500 italic">
          I'm not just learning to code — I'm training to lead, invent, and inspire.
        </div>
      </section>
    </main>
  );
}
