import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import productDesignFaviconDark from "@/images/product-design-favicon-dark.svg";
import productDesignFaviconLight from "@/images/product-design-favicon-light.svg";

export const metadata: Metadata = {
  title: {
    default: "BAIA Portfolio",
    template: "%s | BAIA Portfolio"
  },
  description: "Portfolio UX & Visual Designer Barbora Vašíčková (BAIA)",
  icons: {
    icon: [
      {
        url: productDesignFaviconDark.src,
        media: "(prefers-color-scheme: light)"
      },
      {
        url: productDesignFaviconLight.src,
        media: "(prefers-color-scheme: dark)"
      }
    ]
  }
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
