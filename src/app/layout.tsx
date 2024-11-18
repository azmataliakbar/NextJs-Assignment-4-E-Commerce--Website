
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";

import { Heebo} from "next/font/google";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Assignment-3 from Figma Design",
  description: "NextJs project, details are in page/layout/navbar/footer.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className} >
        <div className="w-full h-auto md:-w-[1462px] lg:-w-[1462px] md:h-auto lg:h-auto bg-[#043873] border-blue-400 border-4 mx-auto">
          <Navbar />
          {children}
          <Footer />
          <h4 className="text-gray-500 text-center text-sm lg:text-base mt-0 md:mt-0">
            Author: Azmat Ali
          </h4>
        </div>
      </body>
    </html>
  );
}