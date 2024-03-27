import type { Metadata } from "next";
import { Work_Sans, Crete_Round } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/provider/theme-provider";

const createRound = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-createRound",
});

const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});
export const metadata: Metadata = {
  title: "MRx's IT Blog for beginners",
  description: "Informations about IT",
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${createRound.variable} ${workSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
