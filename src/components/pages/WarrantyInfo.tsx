import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WarrantyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
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
          <h1 className="text-3xl font-bold text-blue-900">
            Warranty Information
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              EliteBuilds Warranty Policy
            </h2>
            <p className="text-gray-700 mb-6">
              EliteBuilds stands behind the quality of our custom-built PCs with
              comprehensive warranty coverage designed to give you peace of mind
              with your purchase.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Standard Warranty Coverage
            </h2>
            <p className="text-gray-700 mb-4">
              All EliteBuilds custom PCs come with the following standard
              warranty coverage:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <span className="font-medium">
                  1-Year Parts & Labor Warranty:
                </span>{" "}
                Covers all components and workmanship for a full year from the
                date of delivery.
              </li>
              <li className="mb-2">
                <span className="font-medium">3-Year Technical Support:</span>{" "}
                Free technical support via phone, email, and chat for three
                years.
              </li>
              <li className="mb-2">
                <span className="font-medium">
                  30-Day DOA (Dead On Arrival) Protection:
                </span>{" "}
                If any component fails within 30 days of delivery, we'll replace
                it with express shipping at no cost.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Premium Warranty Options
            </h2>
            <p className="text-gray-700 mb-4">
              Enhance your protection with our premium warranty options:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <span className="font-medium">
                  3-Year Extended Warranty (₹4,999):
                </span>{" "}
                Extends parts and labor coverage to a full three years.
              </li>
              <li className="mb-2">
                <span className="font-medium">
                  5-Year Extended Warranty (₹8,999):
                </span>{" "}
                Our most comprehensive coverage, protecting your investment for
                five years.
              </li>
              <li className="mb-2">
                <span className="font-medium">
                  Accidental Damage Protection (₹3,499):
                </span>{" "}
                Covers repairs for accidental damage including liquid spills and
                drops for one year.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              What's Covered
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                All internal components originally supplied with your system
              </li>
              <li className="mb-2">Labor costs for diagnosis and repair</li>
              <li className="mb-2">
                Shipping costs for warranty repairs (both ways)
              </li>
              <li>System assembly and testing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              What's Not Covered
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Damage from misuse, abuse, or improper maintenance
              </li>
              <li className="mb-2">Software issues unrelated to hardware</li>
              <li className="mb-2">
                Upgrades or modifications made after purchase
              </li>
              <li className="mb-2">
                Cosmetic damage that doesn't affect performance
              </li>
              <li>Peripherals not manufactured by EliteBuilds</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              How to Obtain Warranty Service
            </h2>
            <p className="text-gray-700 mb-4">
              If you experience an issue with your EliteBuilds PC:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Contact our technical support team at support@elitebuilds.in or
                call +91 9588643164.
              </li>
              <li className="mb-2">
                Our technicians will work with you to diagnose the issue
                remotely.
              </li>
              <li className="mb-2">
                If necessary, we'll arrange for repair or replacement of the
                affected components.
              </li>
              <li>
                For eligible repairs, we offer free pickup and delivery within
                India.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Additional Information
            </h2>
            <p className="text-gray-700 mb-4">
              Individual components may also be covered by manufacturer
              warranties, which may extend beyond EliteBuilds warranty period.
              These warranties are handled directly through the respective
              manufacturers.
            </p>
            <p className="text-gray-700">
              For complete warranty details or to purchase extended warranty
              coverage, please contact our customer service team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
