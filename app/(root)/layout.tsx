import "../globals.css";
import type { Metadata } from "next";
import { Quicksand, Lato } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/shared/Sidebar";
import Bottombar from "@/components/shared/Bottombar";
import Header from "@/components/shared/Header";

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
          className={`${lato.variable} ${quicksand.variable} h-screen w-screen font-lato`}
        >
          <div className="flex h-full w-full flex-col">
            <div className="flex h-full w-full">
              <Sidebar />
              <div>
                <Header />
                {children}
              </div>
            </div>
            <Bottombar />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
