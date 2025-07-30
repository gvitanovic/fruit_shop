import { Search, Home, Package } from 'lucide-react';
import { Button } from '@fruit-shop/ui-components';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[600px] flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-10 h-10 text-blue-600" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl font-bold text-gray-900">404</h1>
                    <h2 className="text-2xl font-bold text-gray-700">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button>
                            <Home className="w-5 h-5 mr-2" />
                            Go Home
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button variant="outline">
                            <Package className="w-5 h-5 mr-2" />
                            Browse Products
                        </Button>
                    </Link>
                </div>

                <div className="pt-4">
                    <p className="text-sm text-gray-500">
                        Looking for something specific? Try our product search.
                    </p>
                </div>
            </div>
        </div>
    );
}
