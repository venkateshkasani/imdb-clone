import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/custom-components/Navbar";
import QueryProvider from "@/utils/QueryProvider";
import Footer from "@/custom-components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imdb-clone",
  description: "A Clone application of IMDB built for getting information on movies and actors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div>
       <Navbar />
       {children}
       <Footer />
       </div>
      </body>
      </QueryProvider>
    </html>
  );
}
