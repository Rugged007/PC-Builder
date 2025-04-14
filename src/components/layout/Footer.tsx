import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 max-w-full">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700">
                Order Online or Call Our Sales Dept
              </p>
              <p className="text-blue-700 font-medium">+91 9588643164</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Email:</p>
              <p className="text-blue-700">rugvedtaru11@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-blue-600 hover:text-blue-800"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="text-blue-600 hover:text-blue-800"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/component-selection"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Configurators
                </Link>
              </li>
              <li>
                <Link
                  to="/component-selection?category=cpu&brand=intel"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Intel Desktop
                </Link>
              </li>
              <li>
                <Link
                  to="/component-selection?category=cpu&brand=amd"
                  className="text-gray-600 hover:text-blue-700"
                >
                  AMD Desktop
                </Link>
              </li>
              <li>
                <Link
                  to="/prebuilt-pcs"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Prebuilt PCs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/support"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Support Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty-info"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Warranty Info
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-700">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/pc-part-picker"
                  className="text-gray-600 hover:text-blue-700"
                >
                  PC Part Picker
                </Link>
              </li>
              <li>
                <Link
                  to="/part-selection-guide"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Part Selection Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/assembly-guide"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Assembly Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-blue-700">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">
              Company Info
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-blue-700"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p className="mb-4">
            All images appearing on this website are copyright EliteBuilds. Any
            unauthorised use of its logos and other graphics is forbidden.
            Prices and specifications are subject to change without notice.
            EliteBuilds IS NOT RESPONSIBLE FOR ANY TYPO, PHOTOGRAPH, OR
            PROGRAMME ERRORS, AND RESERVES THE RIGHT TO CANCEL ANY INCORRECT
            ORDERS.
          </p>
          <p>© {new Date().getFullYear()} EliteBuilds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
