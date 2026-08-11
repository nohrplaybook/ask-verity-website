import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const title = "Ask Verity | Your AI HR Manager for Australia";
const description =
  "Verity is the AI HR manager in your corner when a difficult people problem lands. Get clear guidance on what to do, what to say and what to document.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.askverity.io"),
  title: {
    default: title,
    template: "%s | Ask Verity",
  },
  description,
  applicationName: "Ask Verity",
  creator: "Ask Verity",
  publisher: "Ask Verity",
  keywords: [
    "AI HR manager Australia",
    "AI HR for small business",
    "virtual HR manager",
    "people management",
    "Australian workplace guidance",
    "performance conversations",
    "sick leave management",
    "reasonable workplace adjustments",
    "redundancy process Australia",
    "senior HR director on demand",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Ask Verity",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ask Verity — Your AI HR Manager for Australia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#20172b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
