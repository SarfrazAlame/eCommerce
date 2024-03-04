import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpperHeader from "@/components/UpperHeader";
import RecoilProvider from "./recoil/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <UpperHeader />
          </div>
          <div>
            <Header />
          </div>
          <div>
            <Hero />
          </div>
          <RecoilProvider>{children}</RecoilProvider>
        </div>
      </body>
    </html>
  );
}
