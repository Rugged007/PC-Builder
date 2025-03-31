import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
}

const tutorials: Tutorial[] = [
  {
    id: "tutorial-1",
    title: "How to Choose the Right CPU for Gaming",
    description:
      "Learn about different CPU options and how they impact gaming performance.",
    duration: "12 min",
    level: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80",
  },
  {
    id: "tutorial-2",
    title: "Understanding GPU Specifications",
    description:
      "A detailed look at graphics card specs and what they mean for performance.",
    duration: "15 min",
    level: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80",
  },
  {
    id: "tutorial-3",
    title: "Optimizing Airflow in Your PC Case",
    description:
      "Tips and techniques for improving cooling and airflow in your build.",
    duration: "10 min",
    level: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=500&q=80",
  },
  {
    id: "tutorial-4",
    title: "Advanced Overclocking Techniques",
    description:
      "Learn how to safely overclock your CPU and GPU for maximum performance.",
    duration: "20 min",
    level: "Advanced",
    thumbnail:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80",
  },
  {
    id: "tutorial-5",
    title: "RAM Selection and Configuration",
    description:
      "Everything you need to know about memory speeds, timings, and compatibility.",
    duration: "8 min",
    level: "Intermediate",
    thumbnail:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80",
  },
  {
    id: "tutorial-6",
    title: "Building Your First Gaming PC",
    description: "A complete step-by-step guide for first-time PC builders.",
    duration: "25 min",
    level: "Beginner",
    thumbnail:
      "https://images.unsplash.com/photo-1624705013726-64c8e7767a4b?w=500&q=80",
  },
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Tutorials</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-blue-600 px-2 py-0.5 rounded">
                        {tutorial.level}
                      </span>
                      <span className="text-xs">{tutorial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-900">
                  {tutorial.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
