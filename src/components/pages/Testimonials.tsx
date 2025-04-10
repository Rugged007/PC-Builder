import { ArrowLeft, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  productPurchased?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Professional Gamer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    content:
      "The gaming PC I purchased from EliteBuilds has completely transformed my gaming experience. The performance is outstanding, and I've seen a significant improvement in my gameplay. The customer service was exceptional from start to finish.",
    rating: 5,
    date: "15 March 2023",
    productPurchased: "Apex Legend Gaming PC",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Content Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content:
      "As a content creator, I needed a powerful workstation that could handle video editing and rendering without breaking a sweat. EliteBuilds delivered exactly what I needed. My workflow is now much smoother, and I can focus on creating content rather than waiting for renders.",
    rating: 5,
    date: "2 April 2023",
    productPurchased: "Creator Pro Workstation",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Software Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    content:
      "I used the custom PC builder to create a development workstation tailored to my specific needs. The process was intuitive, and the team at EliteBuilds was incredibly helpful in suggesting components that would work best for my use case. The final build exceeded my expectations.",
    rating: 5,
    date: "18 May 2023",
  },
  {
    id: 4,
    name: "Ananya Desai",
    role: "Architecture Student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    content:
      "I needed a powerful PC for 3D modeling and rendering architectural designs. The team at EliteBuilds helped me configure a system that fits my budget while still delivering the performance I need. The PC handles complex models with ease.",
    rating: 4,
    date: "7 June 2023",
    productPurchased: "Custom Workstation",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Casual Gamer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    content:
      "I was looking for an affordable gaming PC that could still run modern games at decent settings. The Budget Gamer PC from EliteBuilds was perfect for my needs. Great value for money and excellent performance.",
    rating: 5,
    date: "22 July 2023",
    productPurchased: "Budget Gamer PC",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Digital Artist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    content:
      "The custom workstation I ordered has made a world of difference in my digital art workflow. Programs like Photoshop and Illustrator run smoothly even with multiple large files open. The ordering process was straightforward, and delivery was faster than expected.",
    rating: 5,
    date: "10 August 2023",
  },
];

export default function Testimonials() {
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
            Customer Testimonials
          </h1>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Quote className="h-12 w-12 text-blue-200 mx-auto mb-4" />
          <p className="text-xl text-gray-700">
            Don't just take our word for it. Here's what our customers have to
            say about their experience with EliteBuilds.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>

              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>

              {testimonial.productPurchased && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Purchased:</span>{" "}
                  {testimonial.productPurchased}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to experience the EliteBuilds difference?
          </h2>
          <p className="mb-6 text-blue-100">
            Join our satisfied customers and build your dream PC today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prebuilt-pcs">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Shop Pre-built PCs
              </Button>
            </Link>
            <Link to="/component-selection">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 border border-blue-400"
              >
                Build Your Own PC
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
