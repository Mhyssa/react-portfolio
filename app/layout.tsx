import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";
import "./globals.css";

import { ThemeProvider } from "@/src/theme/ThemeProvider";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Marion Joly - Full Stack Developer",
  description: "Experienced web developer proficient in Vue.js, Tailwind, and Symfony. Crafting responsive and efficient web applications for enhanced user experiences. Let's bring your ideas to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable , "font-sans h-full bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
