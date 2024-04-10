import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shajib-mqywe8grd-shajibhasan.vercel.app/"),
  referrer: "origin-when-cross-origin",
  title: "Shajib Hasan",
  icons: {
    icon: "/favicon.ico",
  },
  authors: {
    name: "Shajib Hasan",
    url: "https://github.com/Shajib1312",
  },
  description:
    "A Web Developer based in Bangladesh with expertise in React.js and Next.js frameworks.",
  openGraph: {
    title: "Shajib Hasan",
    description:
      "A Web Developer based in Bangladesh with expertise in React.js and Next.js frameworks.",
    url: "https://github.com/Shajib1312",
    siteName: "Shajib Hasan",
    locale: "en_US",
    type: "website",
    images: "/og.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dm_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
