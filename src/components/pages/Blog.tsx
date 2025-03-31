import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Future of PC Gaming: What to Expect in 2024",
    excerpt:
      "Explore the upcoming technologies and trends that will shape PC gaming in the coming year, from new GPUs to advanced cooling solutions.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: "post-2",
    title: "Budget vs. High-End: Finding the Sweet Spot for Your PC Build",
    excerpt:
      "A comprehensive guide to balancing performance and cost when building a new PC, with recommendations for different price points.",
    date: "May 28, 2023",
    author: "Samantha Lee",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: "post-3",
    title: "Liquid Cooling vs. Air Cooling: Which Is Right for You?",
    excerpt:
      "An in-depth comparison of cooling methods to help you decide which solution best fits your PC build and usage requirements.",
    date: "May 10, 2023",
    author: "Michael Chen",
    category: "Hardware",
    image:
      "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: "post-4",
    title: "How to Optimize Your PC for Content Creation",
    excerpt:
      "Learn how to configure your system for optimal performance in video editing, 3D rendering, and other creative workloads.",
    date: "April 22, 2023",
    author: "Emma Wilson",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: "post-5",
    title: "The Complete Guide to RGB Lighting for Your PC",
    excerpt:
      "Everything you need to know about adding and synchronizing RGB lighting in your PC build for that perfect aesthetic.",
    date: "April 5, 2023",
    author: "David Park",
    category: "Customization",
    image:
      "https://images.unsplash.com/photo-1624705013726-64c8e7767a4b?w=800&q=80",
    readTime: "4 min read",
  },
  {
    id: "post-6",
    title: "Understanding Power Supply Ratings and Efficiency",
    excerpt:
      "A detailed explanation of PSU ratings, efficiency certifications, and how to choose the right power supply for your system.",
    date: "March 18, 2023",
    author: "James Rodriguez",
    category: "Hardware",
    image:
      "https://images.unsplash.com/photo-1625403125019-696c6b6e5a4a?w=800&q=80",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover md:h-60"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                      {post.category}
                    </Badge>
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button className="bg-blue-600 text-white hover:bg-blue-500">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Popular Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Gaming",
                  "Hardware",
                  "Guides",
                  "Productivity",
                  "Customization",
                ].map((category) => (
                  <Badge
                    key={category}
                    className="mr-2 mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none"
                  >
                    {category}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-blue-900">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                >
                  View All Posts
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
