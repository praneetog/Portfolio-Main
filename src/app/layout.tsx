import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praneet Kashyap - Assassin Portfolio",
  description: "Elite, Assassin's Creed inspired interactive portfolio for Praneet Kashyap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
