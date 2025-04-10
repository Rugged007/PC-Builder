import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function ContactUs() {
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
            Contact Us
          </h1>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Have questions about our products or services? Our team is here
                to help. Reach out to us using any of the methods below, and
                we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Phone</h3>
                    <p className="text-gray-700">+91 9588643164</p>
                    <p className="text-sm text-gray-500">
                      Monday-Saturday, 10:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Email</h3>
                    <p className="text-gray-700">rugvedtaru11@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond as quickly as possible
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Address</h3>
                    <p className="text-gray-700">
                      123 Tech Park, Koramangala
                      <br />
                      Bengaluru, Karnataka 560034
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">
                  Business Hours
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[150px] border-blue-200 focus:border-blue-400"
                />
              </div>

              <Button className="bg-blue-600 text-white hover:bg-blue-500 w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow-md border border-blue-100 p-4 mb-12">
          <div className="aspect-video w-full bg-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-800 font-medium">
                Interactive map would be displayed here
              </p>
              <p className="text-gray-600 text-sm">
                123 Tech Park, Koramangala, Bengaluru, Karnataka 560034, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
