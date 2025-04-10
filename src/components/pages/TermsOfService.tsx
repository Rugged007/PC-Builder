import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-blue-900">Terms of Service</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service ("Terms") govern your use of the
              EliteBuilds website and services. By accessing or using our
              website, you agree to be bound by these Terms. If you disagree
              with any part of the terms, you may not access the service.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Use of Our Services
            </h2>
            <p className="text-gray-700 mb-4">
              Our website allows you to browse, customize, and purchase
              custom-built PCs and related products. When you place an order
              through our website, you are making an offer to purchase products.
              We reserve the right to refuse or cancel your order for any
              reason, including but not limited to product availability, errors
              in product or pricing information, or identification of fraudulent
              activity.
            </p>
            <p className="text-gray-700 mb-6">
              You must provide accurate, complete, and up-to-date information
              during the ordering process. You are responsible for maintaining
              the confidentiality of your account and password and for
              restricting access to your computer, and you agree to accept
              responsibility for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Product Information
            </h2>
            <p className="text-gray-700 mb-6">
              We strive to provide accurate product descriptions,
              specifications, and images. However, we do not warrant that
              product descriptions or other content on the site are accurate,
              complete, reliable, current, or error-free. If a product offered
              by EliteBuilds is not as described, your sole remedy is to return
              it in unused condition.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Pricing and Payment
            </h2>
            <p className="text-gray-700 mb-6">
              All prices are in Indian Rupees (INR) and are inclusive of GST
              unless otherwise stated. We reserve the right to change prices for
              products displayed at any time, and to correct pricing errors that
              may inadvertently occur. Additional information about pricing and
              payment will be provided during the checkout process.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Shipping and Delivery
            </h2>
            <p className="text-gray-700 mb-6">
              Shipping and delivery timeframes are estimates only and cannot be
              guaranteed. We are not liable for any delays in shipments. Risk of
              loss and title for items purchased from our website pass to you
              upon delivery of the items to the carrier.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Returns and Refunds
            </h2>
            <p className="text-gray-700 mb-6">
              Our return and refund policies are outlined in our Warranty
              Information page. Please refer to that page for detailed
              information about returns, exchanges, and refunds.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              The content, organization, graphics, design, compilation, and
              other matters related to the website are protected under
              applicable copyrights, trademarks, and other proprietary rights.
              Copying, redistribution, use, or publication by you of any such
              content or any part of the website is prohibited without express
              written permission from EliteBuilds.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              EliteBuilds shall not be liable for any indirect, incidental,
              special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the service.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed and construed in accordance with the
              laws of India, without regard to its conflict of law provisions.
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-blue-700 font-medium mt-2">
              Email: rugvedtaru11@gmail.com
            </p>
            <p className="text-blue-700 font-medium">Phone: +91 9588643164</p>
          </div>
        </div>
      </div>
    </div>
  );
}
