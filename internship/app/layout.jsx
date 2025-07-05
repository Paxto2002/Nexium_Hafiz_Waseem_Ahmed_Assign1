// app/layout.jsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Quote Genie",
  description: "Get inspiring quotes based on your mood or topic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen text-white bg-gradient-to-b from-gray-950 via-gray-900 to-black`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <main role="main" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
