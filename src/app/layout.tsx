import type { Metadata } from "next";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Text Opacity Animation",
  description: "Text opacity animation on scroll made with Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(GeistSans.className, "tracking-tight")}>
        {children}
      </body>
    </html>
  );
}
