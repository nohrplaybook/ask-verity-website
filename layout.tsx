import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ask Verity — Your 24/7 AI HR manager, built for Australian businesses",
  description:
    "Ask Verity is a 24/7 AI HR manager for Australian businesses and busy HR teams. She diagnoses the employee matter, joins and records the meeting with consent, and produces the documents you need to act.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Ask Verity — Your 24/7 AI HR manager",
    description:
      "Never face a difficult people decision alone. Senior HR judgement, in the room with you, for Australian businesses.",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'%3E%3Crect width='28' height='28' rx='8.5' fill='%237657FF'/%3E%3Cpath d='M8.2 9.6 L13.9 19.9 L20.1 7.2' fill='none' stroke='white' stroke-width='2.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = { themeColor: "#17111F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
