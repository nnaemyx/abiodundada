import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const gobold = localFont({
  src: "./fonts/Gobold Regular.otf",
  variable: "--font-gobold",
  weight: "100 900",
});
const aeonik = localFont({
  src: "./fonts/Aeonik-Medium.ttf",
  variable: "--font-aeonik",
  weight: "100 900",
});

const aeoniklight = localFont({
  src: "./fonts/Aeonik-Regular.ttf",
  variable: "--font-aeoniklight",
  weight: "100 900",
});

const aeonikmedium = localFont({
  src: "./fonts/Aeonik-Medium.ttf",
  variable: "--font-aeonikmedium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abiodundada&co",
  description: "ABIODUN DADA & CO. is a composite firm of Legal Practitioners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gobold.variable} ${aeonik.variable} ${aeoniklight.variable} ${aeonikmedium.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
