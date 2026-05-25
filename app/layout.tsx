import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotionPreferences from "./components/MotionPreferences";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Mancini | Engenheiro de Software",
  description: "Portfólio de Engenharia de Software com projetos em Spring Boot, Java, PostgreSQL e Next.js.",
  keywords: ["Software Engineer", "Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
        <MotionPreferences>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </MotionPreferences>
      </body>
    </html>
  );
}
