import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Navyya Nirman Company",
  description: "Waterproofing & Construction Solutions",
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  manifest: "/brand/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 'antialiased' makes the font look smoother and more premium */}
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}