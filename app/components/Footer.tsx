import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-orange-600">AniBazaar</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bringing authentic Indian pickles and traditional spices to your
              doorstep, worldwide.
            </p>
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <FaInstagram
                className="hover:text-orange-600 cursor-pointer"
                size={20}
              />
              <FaFacebook
                className="hover:text-orange-600 cursor-pointer"
                size={20}
              />
              <FaWhatsapp
                className="hover:text-orange-600 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-orange-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/category/pickles"
                  className="hover:text-orange-600"
                >
                  Authentic Pickles
                </Link>
              </li>
              <li>
                <Link href="/category/spices" className="hover:text-orange-600">
                  Pure Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/shipping" className="hover:text-orange-600">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-orange-600">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
              Newsletter
            </h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm focus:border-orange-500 outline-none"
              />
              <button className="w-full rounded-md bg-orange-600 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 dark:border-gray-900 pt-8 text-center text-xs text-gray-500">
          <p>
            © {currentYear} AniBazaar. All rights reserved. Made for Global
            Foodies.
          </p>
        </div>
      </div>
    </footer>
  );
}
