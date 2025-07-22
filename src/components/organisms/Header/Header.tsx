'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Package } from 'lucide-react';
import { useCart } from '../../../hooks/useCart';
import { Badge } from '../../atoms/Badge/Badge';

export const Header = () => {
    const pathname = usePathname();
    const { data: cart } = useCart();

    const navigationItems = [
        { href: '/products', label: 'Products', icon: Package },
        { href: '/cart', label: 'Cart', icon: ShoppingCart },
        { href: '/profile', label: 'Profile', icon: User },
    ];

    return (
        <header
            role="banner"
            className="bg-white shadow-sm border-b"
            aria-label="Site header"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-bold text-xl text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                        aria-label="FruitShop home page"
                    >
                        FruitShop
                    </Link>

                    {/* Navigation */}
                    <nav
                        role="navigation"
                        aria-label="Main navigation"
                        className="flex items-center space-x-4"
                    >
                        {navigationItems.map(({ href, label, icon: Icon }) => {
                            const isActive = pathname === href;
                            const isCart = href === '/cart';
                            const cartCount = cart?.totalItems || 0;

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${isActive
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                    aria-label={isCart && cartCount > 0
                                        ? `${label} (${cartCount} items)`
                                        : label
                                    }
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <div className="relative">
                                        <Icon className="w-4 h-4" aria-hidden="true" />
                                        {isCart && cartCount > 0 && (
                                            <Badge
                                                variant="danger"
                                                className="absolute -top-2 -right-10 min-w-[1.2rem] h-4 text-xs flex items-center justify-center p-0 transform translate-x-1/2 -translate-y-1/2"
                                                aria-label={`${cartCount} items in cart`}
                                            >
                                                {cartCount}
                                            </Badge>
                                        )}
                                    </div>
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
};
