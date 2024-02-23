import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shreshta 24",
  description: "MITS Annual Tech Fest",
  description: "Muthoot Institute Of Technology and Science presents SHRESHTA'24,enriched with the essence of culture and technology. The techno-cultural fest fosters the best of everything. Together we learn, create and innovate.",
  keywords: "arts culture heritage themeshows vibrant fun learn innovate create enhance college gaming hub space info expo artificial intelligence exhibition music entertainment dance games zest inquistive",
  viewport:"width=device-width, initial-scale=1.0",
  image: "https://i.imgur.com/zinnzSb.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-tech-bg  overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
