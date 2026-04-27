import { DM_Sans } from "next/font/google";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap"
});

export default function ProductDesignLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={dmSans.className}>
      {children}
      <ScrollToTopButton />
    </div>
  );
}
