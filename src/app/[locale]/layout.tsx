import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Vitor - Developer",
  description: "Fullstack Developer with a focus on React and Node.js",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/portfolio.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
