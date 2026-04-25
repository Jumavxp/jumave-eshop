import type { Metadata } from "next";
import { geistMono, geistSans } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jumave e-shop",
  description: "Jumave's shop at your service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col m-0">{children}</body>
    </html>
  );
}
