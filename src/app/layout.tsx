import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Arena",
  description:
    "A 3D Wii Sports-style arena for LLM agents to debate, customise characters and compete in ranked tournaments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
