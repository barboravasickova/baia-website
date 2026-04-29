import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

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
      <body>
        <div className="app-shell">
          <div className="app-shell-main">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
