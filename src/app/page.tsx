import { Metadata } from 'next';
import { Button } from '../components/atoms/Button/Button';
import { ShoppingCart, Package, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FruitShop - Fresh Fruits Delivered to Your Door',
  description: 'Shop for premium quality fruits with convenient packaging sizes. From farm to your doorstep in just a few clicks. Free delivery on orders over $50.',
  keywords: ['fresh fruits', 'organic fruits', 'fruit delivery', 'healthy food', 'farm fresh', 'premium fruits'],
  authors: [{ name: 'FruitShop Team' }],
  creator: 'FruitShop',
  publisher: 'FruitShop',
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
    title: 'FruitShop - Fresh Fruits Delivered',
    description: 'Premium quality fruits with convenient packaging. Farm to doorstep delivery.',
    url: 'https://fruitshop.com',
    siteName: 'FruitShop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Fresh fruits collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FruitShop - Fresh Fruits Delivered',
    description: 'Premium quality fruits with convenient packaging. Farm to doorstep delivery.',
    creator: '@fruitshop',
    images: ['https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1200&h=630'],
  },
  alternates: {
    canonical: 'https://fruitshop.com',
  },
};

// Generate static page at build time
export default function Home() {
  return (
    <div className="space-y-12">
      {/* SEO-optimized Hero Section */}
      <section
        className="text-center space-y-6"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Fresh Fruits
          <span className="text-blue-600"> Delivered</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Shop for premium quality fruits with convenient packaging sizes.
          From farm to your doorstep in just a few clicks. Free delivery on orders over $50.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/products">
            <Button
              size="lg"
              aria-describedby="cta-description"
            >
              <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
              Start Shopping
            </Button>
          </Link>
          <div id="cta-description" className="sr-only">
            Browse our selection of fresh fruits available for delivery
          </div>
        </div>
      </section>

      {/* Features Section with Structured Data */}
      <section
        className="grid md:grid-cols-3 gap-8"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">
          Our Key Features
        </h2>

        <article className="text-center space-y-4">
          <div
            className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
            aria-hidden="true"
          >
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Smart Packaging</h3>
          <p className="text-gray-600">
            Products sold in convenient package sizes that fit your needs perfectly.
            Reduce waste with our optimized packaging system.
          </p>
        </article>

        <article className="text-center space-y-4">
          <div
            className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
            aria-hidden="true"
          >
            <Star className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold">Premium Quality</h3>
          <p className="text-gray-600">
            Hand-picked fresh fruits sourced directly from trusted farms.
            Quality guaranteed with our 100% satisfaction promise.
          </p>
        </article>

        <article className="text-center space-y-4">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <ShoppingCart className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold">Easy Shopping</h2>
          <p className="text-gray-600">
            Intuitive filtering, sorting, and search to find exactly what you want.
            Simple checkout process with multiple payment options.
          </p>
        </article>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start shopping for fresh fruits?
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Join thousands of satisfied customers who trust us for their fresh fruit needs.
          Free delivery on your first order over $30.
        </p>
        <Link href="/products">
          <Button size="lg">
            Explore Products
          </Button>
        </Link>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FruitShop",
            "description": "Premium fresh fruit delivery service",
            "url": "https://fruitshop.com",
            "logo": "https://fruitshop.com/logo.png",
            "sameAs": [
              "https://twitter.com/fruitshop",
              "https://facebook.com/fruitshop",
              "https://instagram.com/fruitshop"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-FRUIT",
              "contactType": "Customer Service",
              "availableLanguage": ["English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Fresh Street",
              "addressLocality": "Fruit City",
              "addressRegion": "FC",
              "postalCode": "12345",
              "addressCountry": "US"
            }
          })
        }}
      />
    </div>
  );
}