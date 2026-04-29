import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stanford RideShare",
  description: "Ride with your Stanford community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-sm relative">
          {children}
        </div>
      </body>
    </html>
  );
}
