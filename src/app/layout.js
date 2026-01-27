import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
// import InitialLoader from "./components/InitialLoader";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Navyya Nirman Company",
  template: "%s | Navyya Nirman",
  description: "Paint & Waterproofing Solutions",
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
      
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* <InitialLoader/> */}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}