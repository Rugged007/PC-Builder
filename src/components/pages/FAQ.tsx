import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-700 text-center mb-12">
            Find answers to common questions about our products and services
          </p>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              General Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  What is EliteBuilds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  EliteBuilds is a premium custom PC building service that
                  specializes in creating high-performance computers for gaming,
                  content creation, and professional work. We offer both
                  pre-built systems and custom PC building services to meet your
                  specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Currently, we only ship within India. We offer free standard
                  shipping on all orders, with express shipping options
                  available for an additional fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  How long does it take to build and ship a custom PC?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Our standard build time for custom PCs is 5-7 business days.
                  After the build is complete, shipping typically takes 3-5
                  business days for standard shipping or 1-2 business days for
                  express shipping.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Products & Components
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-4"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Do you use genuine components?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, we only use 100% genuine components from authorized
                  distributors. All our components come with their original
                  manufacturer warranty.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Can I customize a pre-built PC?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, you can customize any of our pre-built PCs by contacting
                  our support team. We'll help you make the necessary
                  adjustments to meet your requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  What operating system comes with your PCs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Our PCs come with Windows 11 Home pre-installed by default. We
                  also offer options for Windows 11 Pro or no operating system
                  if you prefer to install your own.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Payment & Pricing
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-7"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We accept all major credit and debit cards, UPI payments, net
                  banking, and PayPal. We also offer EMI options through select
                  banks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Do you offer financing options?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, we offer financing options through our partner banks. You
                  can select the EMI option during checkout to view available
                  plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Are there any hidden costs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  No, the price you see is inclusive of all taxes and fees.
                  There are no hidden costs. The only additional cost might be
                  for express shipping if you choose that option.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Warranty & Support
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-10"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  What warranty do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  All our PCs come with a 3-year warranty on labor and a 1-year
                  warranty on parts. Individual components may have longer
                  warranties from their manufacturers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-11"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  How do I claim warranty?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  To claim warranty, simply contact our support team with your
                  order details. We'll guide you through the process and arrange
                  for repairs or replacements as needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-12"
                className="border-b border-blue-100 pb-2"
              >
                <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                  Do you offer technical support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, we offer lifetime technical support for all our PCs. You
                  can contact our support team via phone, email, or live chat
                  for assistance with any issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-blue-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our support team is here to help. Contact us for personalized
              assistance.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="border border-blue-400 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                Support Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
