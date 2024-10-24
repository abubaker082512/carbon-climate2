import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Climate",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>
        <main>{children}</main>
        {/* Load external scripts using Script component */}
        <Script
          src="https://cdn.jsdelivr.net/npm/chart.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
