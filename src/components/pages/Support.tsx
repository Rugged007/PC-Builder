import { Search, MessageCircle, Phone, Mail, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does it take to build and ship my custom PC?",
    answer:
      "We typically build and test custom PCs within 5-7 business days. Shipping time depends on your location, but usually takes 2-4 business days within the continental US.",
  },
  {
    question: "What warranty do you offer on custom builds?",
    answer:
      "All custom builds come with a 3-year warranty covering parts and labor. This includes free technical support and troubleshooting assistance throughout the warranty period.",
  },
  {
    question: "Can I upgrade my PC in the future?",
    answer:
      "Absolutely! All our PCs are built with standard components that can be easily upgraded. We also offer upgrade services if you'd prefer us to handle the installation.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Please contact our support team for specific details about your country.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. We also offer financing options through Affirm for US customers.",
  },
  {
    question: "Can I customize a pre-built PC?",
    answer:
      "Yes! You can use our PC Builder tool to modify any of our pre-built configurations. Simply select the pre-built PC you like and click 'Customize' to make changes.",
  },
  {
    question: "What operating system comes with my PC?",
    answer:
      "Our PCs come with Windows 11 Home pre-installed by default. You can upgrade to Windows 11 Pro during the configuration process for an additional fee.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also check your order status by logging into your account and viewing your order history.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          Support Center
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles..."
              className="pl-10 py-6 text-lg border-blue-200 focus:border-blue-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chat with our support team in real-time
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                  Start Chat
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Phone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Speak directly with a support agent
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                  1-800-BUILD-PC
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Mail className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Send us a message and we'll respond ASAP
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                  Send Email
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-2 mb-8">
            <TabsTrigger value="faq" className="text-lg py-3">
              <FileQuestion className="h-5 w-5 mr-2" />
              Frequently Asked Questions
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-lg py-3">
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Form
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="faq"
            className="bg-white rounded-xl shadow-md border border-blue-100 p-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-blue-900 hover:text-blue-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent
            value="contact"
            className="bg-white rounded-xl shadow-md border border-blue-100 p-6"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input className="border-blue-200 focus:border-blue-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input className="border-blue-200 focus:border-blue-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  className="border-blue-200 focus:border-blue-400"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input className="border-blue-200 focus:border-blue-400" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full min-h-[150px] rounded-md border border-blue-200 focus:border-blue-400 p-3"
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>

              <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                Submit Message
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
