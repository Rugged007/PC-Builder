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
import { supabase } from "../../../supabase/supabase";

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full overflow-hidden bg-blue-300 flex items-center justify-center">
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-bold text-blue-700">
                        {(user.user_metadata?.full_name || user.email || "")
                          .charAt(0)
                          .toUpperCase()}
                      </span>
                    )}
                  </div>
                  <span className="max-w-[100px] truncate">
                    {user.user_metadata?.full_name ||
                      user.email?.split("@")[0] ||
                      "User"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link
                    to="/profile"
                    className="w-full flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/saved-builds"
                    className="w-full flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    Saved Builds
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
                  <div className="w-full flex items-center gap-2 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 md:hidden">
            <DropdownMenuItem>
              <Link to="/component-selection" className="w-full">
                Solutions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/about" className="w-full">
                About Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/contact" className="w-full">
                Contact Us
              </Link>
            </DropdownMenuItem>
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
            {user ? (
              <>
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/saved-builds" className="w-full">
                    Saved Builds
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
                  <div className="w-full text-red-600">Logout</div>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signup" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
