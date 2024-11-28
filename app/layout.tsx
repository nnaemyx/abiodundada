import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  variable: "--font-aeonik",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abiodundada",
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
        className={`${gobold.variable} ${aeonik.variable} ${aeoniklight.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
