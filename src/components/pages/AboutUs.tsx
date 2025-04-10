import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 mr-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            About Us
          </h1>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8 mb-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                EliteBuilds: India's Premier Custom PC Builder
              </h2>
              <p className="text-gray-600">
                Founded in 2018, we've been crafting high-performance custom PCs
                for gamers, content creators, and professionals across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  At EliteBuilds, we're committed to delivering cutting-edge
                  computing solutions tailored to your specific needs. We
                  believe that everyone deserves a PC that performs exactly how
                  they need it to, without compromise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  We aim to be the most trusted name in custom PC building
                  across India, known for exceptional quality, unmatched
                  customer service, and innovative solutions that push the
                  boundaries of what's possible.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Why Choose EliteBuilds?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">
                      Expert Craftsmanship
                    </span>
                    <p className="text-gray-600">
                      Our technicians have years of experience building and
                      optimizing high-performance systems.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">
                      Premium Components
                    </span>
                    <p className="text-gray-600">
                      We use only the highest quality, genuine parts from
                      trusted brands and authorized distributors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">
                      Rigorous Testing
                    </span>
                    <p className="text-gray-600">
                      Every system undergoes extensive stress testing and
                      quality control before shipping.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 mt-0.5">
                    4
                  </div>
                  <div>
                    <span className="font-medium text-blue-800">
                      Exceptional Support
                    </span>
                    <p className="text-gray-600">
                      Our technical support team is available to help with any
                      questions or issues you might encounter.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Our Team
              </h3>
              <p className="text-gray-700 mb-6">
                EliteBuilds is powered by a team of passionate PC enthusiasts,
                experienced technicians, and customer service professionals. We
                take pride in our work and are committed to delivering the best
                possible experience to our customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-3 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rugved"
                      alt="Rugved Taru"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-blue-800">Rugved Taru</h4>
                  <p className="text-gray-600 text-sm">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-3 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
                      alt="Amit Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-blue-800">Amit Sharma</h4>
                  <p className="text-gray-600 text-sm">Technical Director</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-3 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
                      alt="Priya Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-blue-800">Priya Patel</h4>
                  <p className="text-gray-600 text-sm">Customer Support Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
