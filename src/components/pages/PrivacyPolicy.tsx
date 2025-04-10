import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-blue-900">Privacy Policy</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              At EliteBuilds, we respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              The Data We Collect About You
            </h2>
            <p className="text-gray-700 mb-4">
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. It
              does not include data where the identity has been removed
              (anonymous data).
            </p>
            <p className="text-gray-700 mb-6">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Identity Data includes first name, last name, username or
                similar identifier.
              </li>
              <li className="mb-2">
                Contact Data includes billing address, delivery address, email
                address and telephone numbers.
              </li>
              <li className="mb-2">
                Financial Data includes payment card details.
              </li>
              <li className="mb-2">
                Transaction Data includes details about payments to and from you
                and other details of products you have purchased from us.
              </li>
              <li className="mb-2">
                Technical Data includes internet protocol (IP) address, your
                login data, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to
                access this website.
              </li>
              <li className="mb-2">
                Profile Data includes your username and password, purchases or
                orders made by you, your interests, preferences, feedback and
                survey responses.
              </li>
              <li>
                Usage Data includes information about how you use our website
                and services.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              How We Use Your Personal Data
            </h2>
            <p className="text-gray-700 mb-4">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li className="mb-2">
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions and they are subject to a duty of confidentiality.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Your Legal Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Request access to your personal data.</li>
              <li className="mb-2">
                Request correction of your personal data.
              </li>
              <li className="mb-2">Request erasure of your personal data.</li>
              <li className="mb-2">
                Object to processing of your personal data.
              </li>
              <li className="mb-2">
                Request restriction of processing your personal data.
              </li>
              <li className="mb-2">Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
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
