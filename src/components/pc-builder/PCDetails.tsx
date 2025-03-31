import { useState } from "react";
import {
  ArrowLeft,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  ShoppingCart,
  Heart,
  Share2,
  Info,
  Check,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Sample PC details
const pcDetails = {
  id: "pc-1",
  name: "Apex Legend Gaming PC",
  price: 2499.99,
  rating: 4.9,
  reviewCount: 128,
  description:
    "Experience gaming at its finest with the Apex Legend Gaming PC. Built with premium components and optimized for maximum performance, this PC delivers smooth gameplay and stunning visuals for even the most demanding titles.",
  specs: {
    cpu: "Intel Core i9-13900K (24 Cores, 5.8GHz Turbo)",
    gpu: "NVIDIA GeForce RTX 4080 16GB GDDR6X",
    ram: "32GB DDR5-6000MHz RGB Memory (2x16GB)",
    storage: "2TB NVMe Gen4 SSD",
    motherboard: "ASUS ROG Strix Z790-E Gaming WiFi",
    cooling: "NZXT Kraken X73 360mm AIO Liquid Cooler",
    psu: "Corsair RM850x 850W 80+ Gold Fully Modular",
    case: "Lian Li O11 Dynamic EVO White",
    os: "Windows 11 Pro",
    warranty: "3-Year Premium Warranty",
  },
  images: [
    "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800&q=80",
    "https://images.unsplash.com/photo-1587202372634-35a1e2f76dc1?w=800&q=80",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
    "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
  ],
  features: [
    "VR Ready for immersive gaming experiences",
    "RGB lighting system with software control",
    "Tool-less design for easy upgrades",
    "Optimized airflow for better cooling",
    "Cable management system for clean aesthetics",
    "Whisper-quiet operation even under load",
  ],
  benchmarks: [
    { game: "Cyberpunk 2077", fps: "120+ FPS at 1440p Ultra Settings" },
    { game: "Call of Duty: Warzone", fps: "165+ FPS at 1440p High Settings" },
    { game: "Fortnite", fps: "240+ FPS at 1440p Epic Settings" },
    { game: "Red Dead Redemption 2", fps: "100+ FPS at 1440p Ultra Settings" },
    { game: "Apex Legends", fps: "180+ FPS at 1440p Max Settings" },
  ],
  inStock: true,
  shipping: "Free shipping (3-5 business days)",
  expressShipping: "Express shipping available (+$49.99)",
};

export default function PCDetails() {
  const [mainImage, setMainImage] = useState(pcDetails.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-blue-600 mb-6">
          <Link to="/" className="hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/prebuilt-pcs" className="hover:text-blue-800">
            Pre-Built PCs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Apex Legend Gaming PC</span>
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product images */}
          <div>
            <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden mb-4">
              <img
                src={mainImage}
                alt={pcDetails.name}
                className="w-full h-[400px] object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {pcDetails.images.map((image, index) => (
                <button
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border overflow-hidden ${mainImage === image ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-300"}`}
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`${pcDetails.name} view ${index + 1}`}
                    className="w-full h-20 object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-blue-600 text-white hover:bg-blue-500 border-none">
                  Gaming PC
                </Badge>
                {pcDetails.inStock ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                    <Check className="h-3 w-3 mr-1" /> In Stock
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">
                    Out of Stock
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                {pcDetails.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(pcDetails.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {pcDetails.rating} ({pcDetails.reviewCount} reviews)
                </span>
              </div>

              <p className="text-gray-700 mb-6">{pcDetails.description}</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-blue-900">
                    ${pcDetails.price.toFixed(2)}
                  </span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                    Save $300
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  or from $208/month with financing
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Cpu className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Processor</p>
                    <p className="text-blue-900 font-medium">
                      Intel Core i9-13900K
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Monitor className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Graphics</p>
                    <p className="text-blue-900 font-medium">RTX 4080 16GB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Memory</p>
                    <p className="text-blue-900 font-medium">32GB DDR5-6000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <HardDrive className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Storage</p>
                    <p className="text-blue-900 font-medium">2TB NVMe SSD</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6 bg-blue-100" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      className="px-3 py-2 border-r border-gray-300 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-blue-900 font-medium">
                      {quantity}
                    </span>
                    <button
                      className="px-3 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm flex items-center">
                    <Info className="h-4 w-4 mr-1 text-blue-600" />
                    Only 5 left in stock
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-500 flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Save to Wishlist
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 p-2 h-auto"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <p className="text-gray-600 text-sm">{pcDetails.shipping}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden mb-12">
          <Tabs defaultValue="specs">
            <TabsList className="w-full border-b border-blue-100 bg-blue-50 p-0 h-auto">
              <TabsTrigger
                value="specs"
                className="py-4 px-6 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-none border-r border-blue-100"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="py-4 px-6 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-none border-r border-blue-100"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="benchmarks"
                className="py-4 px-6 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-none border-r border-blue-100"
              >
                Benchmarks
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="py-4 px-6 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(pcDetails.specs).map(([key, value]) => (
                  <div key={key} className="flex">
                    <div className="w-1/3 text-gray-600 capitalize">{key}</div>
                    <div className="w-2/3 text-blue-900 font-medium">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pcDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="benchmarks" className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Performance benchmarks based on testing at 1440p resolution.
                  Actual performance may vary based on system configuration and
                  game settings.
                </p>
                <div className="space-y-4">
                  {pcDetails.benchmarks.map((benchmark, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-blue-900">
                          {benchmark.game}
                        </span>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                          {benchmark.fps}
                        </Badge>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${Math.min(100, parseInt(benchmark.fps) / 3)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-5xl font-bold text-blue-900 mb-2">
                      {pcDetails.rating}
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(pcDetails.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      {pcDetails.reviewCount} verified reviews
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-8">5★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">85%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-8">4★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">10%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-8">3★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">3%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-8">2★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "1%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">1%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-8">1★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "1%" }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b border-blue-100 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-blue-900">
                          Michael S.
                        </h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700 mt-2">
                      This PC is an absolute beast! I'm getting incredible frame
                      rates in all my games, even with settings maxed out. The
                      build quality is top-notch, and everything arrived
                      well-packaged and in perfect condition. Highly recommend!
                    </p>
                  </div>

                  <div className="border-b border-blue-100 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-blue-900">Sarah L.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">1 month ago</span>
                    </div>
                    <p className="text-gray-700 mt-2">
                      Great PC that handles everything I throw at it. The only
                      minor issue was that one of the RGB strips wasn't working
                      properly, but customer service was quick to help me
                      resolve it. Very satisfied with my purchase.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-blue-900">David K.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        2 months ago
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2">
                      I've built PCs before, but decided to go with a pre-built
                      this time to save the hassle. I'm impressed with the cable
                      management and component selection. Temperatures stay low
                      even during intense gaming sessions, and the performance
                      is exactly what I was hoping for.
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                  >
                    Load More Reviews
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800&q=80`}
                    alt="Related PC"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-blue-900 mb-1">
                    Gaming PC {item}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(42)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-900">
                      ${(1499 + item * 300).toFixed(2)}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 text-xs border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
