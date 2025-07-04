import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genie Quotes",
  description:
    "Unleash daily motivation with Genie Quotes — a magical quote generator that serves up wisdom based on your chosen theme. Built with Next.js, Tailwind CSS, and ShadCN UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
