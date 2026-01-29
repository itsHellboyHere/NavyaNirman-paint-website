import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter , Cinzel} from "next/font/google";
import Footer from "./components/Footer";
// import InitialLoader from "./components/InitialLoader";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata = {
  metadataBase: new URL("https://navyya.co.in"),
  title: {
    default: "Navyya Nirman Company",
    template: "%s | Navyya Nirman",
  },
  description: "Paint & Waterproofing Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.variable}  ${cinzel.variable} font-sans antialiased`}>
        {/* <InitialLoader/> */}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}