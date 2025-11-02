import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MaiLandingPage from "./layouts/MaiLandingPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otaku's MaiScore!",
  description: "Otaku's Personal MaiMai Score Sheet",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body id="mainbody" className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex justify-center items-center`}>
        <MaiLandingPage/>
      </body>
    </html>
  );
}
