import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLayout } from "@fruit-shop/ui-components";
import { GlobalErrorBoundary } from "@fruit-shop/ui-components";
import { ToastProvider } from "@fruit-shop/ui-components";
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
  title: {
    default: "FruitShop - Fresh Fruits Delivered to Your Door",
    template: "%s | FruitShop"
  },
  description: "Shop for premium quality fruits with convenient packaging sizes. From farm to your doorstep in just a few clicks. Free delivery on orders over $50.",
  keywords: ["fresh fruits", "organic fruits", "fruit delivery", "healthy food", "farm fresh", "premium fruits"],
  authors: [{ name: "FruitShop Team" }],
  creator: "FruitShop",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fruitshop.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'FruitShop - Fresh Fruits Delivered',
    description: 'Premium quality fruits with convenient packaging. Farm to doorstep delivery.',
    siteName: 'FruitShop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FruitShop - Fresh Fruits Delivered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FruitShop - Fresh Fruits Delivered',
    description: 'Premium quality fruits with convenient packaging. Farm to doorstep delivery.',
    creator: '@fruitshop',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalErrorBoundary>
          <ToastProvider>
            <AppLayout>
              {children}
            </AppLayout>
          </ToastProvider>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
