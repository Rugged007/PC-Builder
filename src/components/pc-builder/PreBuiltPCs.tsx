import { useState } from "react";
import {
  ArrowRight,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  Filter,
  SlidersHorizontal,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

// Define PC types
type PCCategory = "gaming" | "workstation" | "streaming" | "budget";

interface PreBuiltPC {
  id: string;
  name: string;
  price: number;
  category: PCCategory;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
  image: string;
  featured?: boolean;
  discount?: number;
  rating: number;
}

// Sample pre-built PCs data
const preBuiltPCs: PreBuiltPC[] = [
  {
    id: "pc-1",
    name: "Apex Legend Gaming PC",
    price: 2499.99,
    category: "gaming",
    specs: {
      cpu: "Intel Core i9-13900K",
      gpu: "NVIDIA RTX 4080 16GB",
      ram: "32GB DDR5-6000",
      storage: "2TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=500&q=80",
    featured: true,
    rating: 4.9,
  },
  {
    id: "pc-2",
    name: "Creator Pro Workstation",
    price: 3299.99,
    category: "workstation",
    specs: {
      cpu: "AMD Ryzen 9 7950X",
      gpu: "NVIDIA RTX 4090 24GB",
      ram: "64GB DDR5-5600",
      storage: "4TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80",
    rating: 4.8,
  },
  {
    id: "pc-3",
    name: "Stream Master Elite",
    price: 1899.99,
    category: "streaming",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA RTX 4070 12GB",
      ram: "32GB DDR5-5200",
      storage: "2TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80",
    discount: 10,
    rating: 4.7,
  },
  {
    id: "pc-4",
    name: "Budget Gamer",
    price: 999.99,
    category: "budget",
    specs: {
      cpu: "Intel Core i5-13600K",
      gpu: "NVIDIA RTX 4060 Ti 8GB",
      ram: "16GB DDR5-5200",
      storage: "1TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80",
    rating: 4.5,
  },
  {
    id: "pc-5",
    name: "Pro Workstation Ultra",
    price: 4999.99,
    category: "workstation",
    specs: {
      cpu: "Intel Core i9-13900KS",
      gpu: "NVIDIA RTX 4090 24GB",
      ram: "128GB DDR5-6000",
      storage: "8TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80",
    featured: true,
    rating: 5.0,
  },
  {
    id: "pc-6",
    name: "Compact Gaming Rig",
    price: 1499.99,
    category: "gaming",
    specs: {
      cpu: "AMD Ryzen 5 7600X",
      gpu: "NVIDIA RTX 4060 Ti 8GB",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe SSD",
    },
    image:
      "https://images.unsplash.com/photo-1624705013726-64c8e7767a4b?w=500&q=80",
    discount: 15,
    rating: 4.6,
  },
];

export default function PreBuiltPCs() {
  // Currency conversion rate
  const usdToInr = 75;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<PCCategory[]>(
    [],
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter PCs based on search, categories, and price range
  const filteredPCs = preBuiltPCs.filter((pc) => {
    const matchesSearch =
      pc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pc.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pc.specs.gpu.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(pc.category);

    const matchesPrice = pc.price >= priceRange[0] && pc.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Toggle category selection
  const toggleCategory = (category: PCCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Calculate discounted price
  const getDiscountedPrice = (pc: PreBuiltPC) => {
    if (!pc.discount) return pc.price;
    return pc.price * (1 - pc.discount / 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              Pre-Built Gaming PCs
            </h1>
            <p className="text-blue-700 mt-1">
              Ready-to-ship custom PCs for every need
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search PCs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 border-blue-200 focus:border-blue-400"
              />
            </div>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50 md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar - hidden on mobile unless toggled */}
          <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-blue-900 flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </h2>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-1 h-auto lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  ×
                </Button>
              </div>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-3">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {(
                      [
                        "gaming",
                        "workstation",
                        "streaming",
                        "budget",
                      ] as PCCategory[]
                    ).map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          className="text-blue-600 border-blue-300"
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-gray-700 capitalize cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-blue-100" />

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>
                        ₹{(priceRange[0] * usdToInr).toLocaleString("en-IN")}
                      </span>
                      <span>
                        ₹{(priceRange[1] * usdToInr).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                <Separator className="bg-blue-100" />

                {/* Special Offers */}
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-3">
                    Special Offers
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="featured"
                        className="text-blue-600 border-blue-300"
                      />
                      <Label
                        htmlFor="featured"
                        className="ml-2 text-gray-700 cursor-pointer"
                      >
                        Featured PCs
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="discount"
                        className="text-blue-600 border-blue-300"
                      />
                      <Label
                        htmlFor="discount"
                        className="ml-2 text-gray-700 cursor-pointer"
                      >
                        On Sale
                      </Label>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-500 mt-2"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 5000]);
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* PC listings */}
          <div className="lg:col-span-3">
            {/* Featured PC (only show if not filtered) */}
            {searchQuery === "" && selectedCategories.length === 0 && (
              <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden mb-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=1200&q=80"
                    alt="Featured Gaming PC"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                    <Badge className="mb-2 bg-blue-600 text-white hover:bg-blue-500 border-none self-start">
                      Featured Build
                    </Badge>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Ultimate Gaming Experience
                    </h2>
                    <p className="text-blue-100 mb-4">
                      Our most powerful pre-built gaming PC with top-tier
                      components
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-blue-800/60 text-blue-100 hover:bg-blue-700/60 border-none">
                        <Cpu className="h-3 w-3 mr-1" /> Intel Core i9-13900K
                      </Badge>
                      <Badge className="bg-blue-800/60 text-blue-100 hover:bg-blue-700/60 border-none">
                        <Monitor className="h-3 w-3 mr-1" /> NVIDIA RTX 4090
                        24GB
                      </Badge>
                      <Badge className="bg-blue-800/60 text-blue-100 hover:bg-blue-700/60 border-none">
                        <HardDrive className="h-3 w-3 mr-1" /> 2TB NVMe SSD
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        5.0 (24 reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-900">
                        ₹{(3499.99 * usdToInr).toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-gray-500">
                        or ₹{(292 * usdToInr).toLocaleString("en-IN")}/mo with
                        financing
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                    >
                      View Details
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-500">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Results count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-medium text-blue-900">
                  {filteredPCs.length}
                </span>{" "}
                results
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border border-blue-200 rounded-md p-1 text-blue-900 focus:border-blue-400 focus:ring-0">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Rated</option>
                </select>
              </div>
            </div>

            {/* PC Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPCs.map((pc) => (
                <div
                  key={pc.id}
                  className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={pc.image}
                      alt={pc.name}
                      className="w-full h-48 object-cover"
                    />
                    {pc.featured && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white hover:bg-blue-500 border-none">
                        Featured
                      </Badge>
                    )}
                    {pc.discount && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white hover:bg-red-400 border-none">
                        {pc.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">
                      {pc.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(pc.rating) ? "text-yellow-400" : "text-gray-300"} fill-current`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {pc.rating} ({Math.floor(Math.random() * 50) + 5})
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Cpu className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{pc.specs.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Monitor className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{pc.specs.gpu}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{pc.specs.ram}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <HardDrive className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">
                          {pc.specs.storage}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        {pc.discount ? (
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-blue-900">
                              ₹
                              {(
                                getDiscountedPrice(pc) * usdToInr
                              ).toLocaleString("en-IN")}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              ₹{(pc.price * usdToInr).toLocaleString("en-IN")}
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-blue-900">
                            ₹{(pc.price * usdToInr).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-blue-600 text-white hover:bg-blue-500"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredPCs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-md border border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  No PCs Found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any PCs matching your criteria.
                </p>
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-500"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 5000]);
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Build your own CTA */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3 space-y-4">
                  <Badge className="bg-blue-500/60 text-white hover:bg-blue-400/60 border-none">
                    Custom Build
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Want something more personalized?
                  </h2>
                  <p className="text-blue-100">
                    Create your perfect custom PC with our interactive builder
                    tool. Select components, check compatibility, and get
                    real-time pricing - all in one place.
                  </p>
                  <Link to="/component-selection">
                    <Button
                      size="lg"
                      className="bg-white text-blue-700 hover:bg-blue-50"
                    >
                      Start Building Your PC
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-blue-500/30 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-500/40 rounded-full flex items-center justify-center">
                      <Cpu className="h-16 w-16 md:h-20 md:w-20 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
