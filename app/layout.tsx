import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Market and Solutions | Naofumi Awata",
  description: "広告の無駄打ちは終わりました。届けたい人に、届けたい場所で。",
  openGraph: {
    title: "Global Market and Solutions",
    description: "広告の無駄打ちは終わりました。届けたい人に、届けたい場所で。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
