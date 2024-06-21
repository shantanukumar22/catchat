import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "crawlchat",
  description:
    "crawlchat is a messaging app used by users share there messages picture and emojis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
