import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakruthi Pre School | Nurturing Young Minds",
  description:
    "Prakruthi Pre School - A joyful and nurturing prenursery experience for your little ones. Enroll today for a bright future!",
  keywords: ["preschool", "prenursery", "Prakruthi", "early education", "kids"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
