import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";
import { NavDots } from "@/components/nav-dots";
import { Navbar } from "@/components/navbar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atty. Krystyll Ann Bihag | Lawyer, Cebu Philippines",
  description:
    "Cebu-based attorney practicing civil litigation, family law, criminal defense, corporate law, and local government matters. Member, IBP Cebu Chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <NavDots />
      </body>
    </html>
  );
}
