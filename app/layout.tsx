import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAIA Portfolio",
  description: "Portfolio UX & Visual Designer Barbora Vašíčková (BAIA)"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
