import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shreshta 24",
  description: "MITS Annual Tech Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-24 min-h-screen bg-tech-bg`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
