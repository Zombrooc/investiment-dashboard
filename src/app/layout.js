import { Inter as FontSans } from "next/font/google"

import "./globals.css";

import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Investiment Dashboard",
  description: "Plataforma criada para controle dos investimentos de ações, FIIs e afins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "bg-background font-sans antialiased",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
