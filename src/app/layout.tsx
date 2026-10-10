import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduGuide AI - Scholarship Platform",
  description: "An AI-powered scholarship discovery and application assistant for Indian students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" precedence="default" />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-foreground">
        <SessionProviderWrapper>
          <AuthProvider>
            {children}
          </AuthProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
