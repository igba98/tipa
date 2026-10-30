import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIPA | Tanzania Intellectual Property Association",
  description:
    "The Tanzania Intellectual Property Association website is currently under construction. Contact us at info@tipa.co.tz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
