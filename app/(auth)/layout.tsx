import "../globals.css";
import type { Metadata } from "next";
import { Quicksand, Lato } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Cloudcoin",
  description:
    "An application where you can learn financial skills, list transactions and much more...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${lato.variable} ${quicksand.variable} font-lato w-screen h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
