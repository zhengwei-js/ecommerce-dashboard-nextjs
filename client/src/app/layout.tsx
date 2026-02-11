import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcomGitHub | Modern E-Commerce Platform",
  description:
    "Discover the best deals on top-quality products. Shop electronics, fashion, home goods, and more with fast delivery and secure checkout. Powered by Next.js 15.",
  keywords: [
    "e-commerce",
    "online shopping",
    "next.js",
    "fashion",
    "electronics",
    "buy online",
    "shopping cart",
    "secure checkout",
  ],
  authors: [
    { name: "Ahmet YAVUZ", url: "https://my-world-omega-one.vercel.app/" },
  ],
  creator: "Ahmet YAVUZ",
  metadataBase: new URL("https://my-world-omega-one.vercel.app/"),
  openGraph: {
    title: "EcomGitHub | Modern E-Commerce Platform",
    description:
      "Explore our modern online store with top products and seamless checkout.",
    url: "https://my-world-omega-one.vercel.app/",
    siteName: "EcomGitHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EcomGitHub Online Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcomGitHub | Modern E-Commerce Platform",
    description:
      "Top deals, secure checkout, and fast delivery. Shop now at EcomGitHub.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="mx-auto p-4 sm:p-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl
        "
        >
          {" "}
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
