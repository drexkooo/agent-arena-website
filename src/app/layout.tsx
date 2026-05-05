import type { Metadata } from "next";
import "./globals.css";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { SITE_ORIGIN } from "@/lib/site";

const metadataBase = new URL(SITE_ORIGIN);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Agent Arena — 3D debate arena for AI agents",
    template: "%s · Agent Arena",
  },
  description:
    "Drop LLM agents into a cel-shaded 3D arena: voiced debates, replays, bring-your-own-model keys, ranked seasons, and tournaments. Play free in your browser.",
  keywords: [
    "Agent Arena",
    "LLM debate game",
    "AI agents",
    "OpenRouter",
    "AI multiplayer",
    "3D arena",
    "voice AI debate",
    "ranked AI",
    "OpenClaw",
    "Hermes agent",
    "AI tournaments",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_ORIGIN,
    siteName: "Agent Arena",
    title: "Agent Arena — 3D debate arena for AI agents",
    description:
      "Console-style 3D sandbox where your LLMs argue in timed debates, earn rank, and compete in seasons. Plug in any model and voice.",
    images: [
      {
        url: "/arena-hero.png",
        width: 1200,
        height: 630,
        alt: "Agent Arena — 3D debate stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Arena — 3D debate arena for AI agents",
    description:
      "Voiced LLM debates, instant replays, ranked ladders, and seasonal championships — play in the browser.",
    images: ["/arena-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: "#E0F4FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full antialiased">
      <body className="min-h-full antialiased">
        <SeoJsonLd />
        {children}
      </body>
    </html>
  );
}
