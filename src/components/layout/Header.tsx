import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../../../supabase/auth";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-transparent py-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">EliteBuilds</h1>
          </Link>
          <p className="ml-3 text-blue-700 hidden sm:block">
            Crafted for Perfection
          </p>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/component-selection">
            <Button
              variant="ghost"
              className="text-blue-700 hover:text-blue-900 hover:bg-blue-50"
            >
              Solutions
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="ghost"
              className="text-blue-700 hover:text-blue-900 hover:bg-blue-50"
            >
              About Us
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="ghost"
              className="text-blue-700 hover:text-blue-900 hover:bg-blue-50"
            >
              Contact Us
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-50 flex items-center"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link to="/blog" className="w-full">
                  Blogs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/faq" className="w-full">
                  FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/testimonials" className="w-full">
                  Testimonials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/warranty-info" className="w-full">
                  Warranty Info
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {user ? (
            <Link to="/dashboard">
              <Button className="bg-blue-600 text-white hover:bg-blue-500">
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="flex space-x-1">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 text-white hover:bg-blue-500">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </nav>

        <Button
          variant="ghost"
          className="md:hidden text-blue-700 hover:text-blue-900 hover:bg-blue-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
