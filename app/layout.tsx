import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import GlobalContextProvider from "@/provider/GlobalContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fruit shop",
  description: "Fruit virtual shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
