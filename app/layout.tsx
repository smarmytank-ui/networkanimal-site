import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Network Animal | Build relationships that matter",
    template: "%s | Network Animal",
  },
  description:
    "Discover what you bring into the room, meet meaningful matches at live events, and build relationships that matter.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
