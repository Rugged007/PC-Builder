import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  MemoryStick,
  Fan,
  Power,
  Box,
  Save,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";
import { supabase } from "../../../supabase/supabase";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define component types
type ComponentType =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "storage"
  | "cooling"
  | "psu"
  | "case";

interface Component {
  id: string;
  name: string;
  price: number;
  type: ComponentType;
  specs: string[];
  image: string;
}

// Sample component data
const sampleComponents: Record<ComponentType, Component[]> = {
  cpu: [
    {
      id: "cpu-1",
      name: "Intel Core i9-13900K",
      price: 599.99,
      type: "cpu",
      specs: ["24 Cores (8P+16E)", "36MB Cache", "Up to 5.8GHz", "125W TDP"],
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
    },
    {
      id: "cpu-2",
      name: "AMD Ryzen 9 7950X",
      price: 549.99,
      type: "cpu",
      specs: [
        "16 Cores / 32 Threads",
        "80MB Cache",
        "Up to 5.7GHz",
        "170W TDP",
      ],
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
    },
    {
      id: "cpu-3",
      name: "Intel Core i7-13700K",
      price: 399.99,
      type: "cpu",
      specs: ["16 Cores (8P+8E)", "30MB Cache", "Up to 5.4GHz", "125W TDP"],
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80",
    },
  ],
  gpu: [
    {
      id: "gpu-1",
      name: "NVIDIA RTX 4090 24GB",
      price: 1599.99,
      type: "gpu",
      specs: ["24GB GDDR6X", "16384 CUDA Cores", "2.52 GHz Boost", "450W TDP"],
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
    },
    {
      id: "gpu-2",
      name: "AMD Radeon RX 7900 XTX",
      price: 999.99,
      type: "gpu",
      specs: [
        "24GB GDDR6",
        "12288 Stream Processors",
        "2.5 GHz Boost",
        "355W TDP",
      ],
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
    },
    {
      id: "gpu-3",
      name: "NVIDIA RTX 4080 16GB",
      price: 1199.99,
      type: "gpu",
      specs: ["16GB GDDR6X", "9728 CUDA Cores", "2.51 GHz Boost", "320W TDP"],
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80",
    },
  ],
  motherboard: [
    {
      id: "mb-1",
      name: "ASUS ROG Maximus Z790 Hero",
      price: 629.99,
      type: "motherboard",
      specs: ["Intel Z790 Chipset", "DDR5 Memory", "PCIe 5.0", "Wi-Fi 6E"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
    {
      id: "mb-2",
      name: "MSI MPG X670E Carbon WiFi",
      price: 479.99,
      type: "motherboard",
      specs: ["AMD X670E Chipset", "DDR5 Memory", "PCIe 5.0", "Wi-Fi 6E"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
  ],
  ram: [
    {
      id: "ram-1",
      name: "G.Skill Trident Z5 RGB 32GB",
      price: 189.99,
      type: "ram",
      specs: ["DDR5-6000", "CL30", "2x16GB", "RGB Lighting"],
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&q=80",
    },
    {
      id: "ram-2",
      name: "Corsair Vengeance RGB 64GB",
      price: 259.99,
      type: "ram",
      specs: ["DDR5-5600", "CL36", "2x32GB", "RGB Lighting"],
      image:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&q=80",
    },
  ],
  storage: [
    {
      id: "storage-1",
      name: "Samsung 990 PRO 2TB",
      price: 219.99,
      type: "storage",
      specs: [
        "NVMe PCIe 4.0",
        "7,450 MB/s Read",
        "6,900 MB/s Write",
        "MLC V-NAND",
      ],
      image:
        "https://images.unsplash.com/photo-1597138804456-e7dca7f59d64?w=400&q=80",
    },
    {
      id: "storage-2",
      name: "WD Black SN850X 4TB",
      price: 399.99,
      type: "storage",
      specs: [
        "NVMe PCIe 4.0",
        "7,300 MB/s Read",
        "6,600 MB/s Write",
        "3D NAND",
      ],
      image:
        "https://images.unsplash.com/photo-1597138804456-e7dca7f59d64?w=400&q=80",
    },
  ],
  cooling: [
    {
      id: "cooling-1",
      name: "NZXT Kraken X73 RGB",
      price: 199.99,
      type: "cooling",
      specs: [
        "360mm Radiator",
        "RGB Lighting",
        "Liquid Cooling",
        "CAM Software",
      ],
      image:
        "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=400&q=80",
    },
    {
      id: "cooling-2",
      name: "Noctua NH-D15",
      price: 99.99,
      type: "cooling",
      specs: ["Dual Tower", "Air Cooling", "165mm Height", "Silent Operation"],
      image:
        "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=400&q=80",
    },
  ],
  psu: [
    {
      id: "psu-1",
      name: "Corsair HX1000i",
      price: 249.99,
      type: "psu",
      specs: [
        "1000W",
        "Platinum Efficiency",
        "Fully Modular",
        "iCUE Compatible",
      ],
      image:
        "https://images.unsplash.com/photo-1625403125019-696c6b6e5a4a?w=400&q=80",
    },
    {
      id: "psu-2",
      name: "EVGA SuperNOVA 850 G6",
      price: 149.99,
      type: "psu",
      specs: ["850W", "Gold Efficiency", "Fully Modular", "Eco Mode"],
      image:
        "https://images.unsplash.com/photo-1625403125019-696c6b6e5a4a?w=400&q=80",
    },
  ],
  case: [
    {
      id: "case-1",
      name: "Lian Li O11 Dynamic EVO",
      price: 169.99,
      type: "case",
      specs: [
        "Mid Tower",
        "Tempered Glass",
        "Excellent Airflow",
        "Multiple Radiator Support",
      ],
      image:
        "https://images.unsplash.com/photo-1587202372634-35a1e2f76dc1?w=400&q=80",
    },
    {
      id: "case-2",
      name: "Fractal Design Meshify 2",
      price: 149.99,
      type: "case",
      specs: ["Mid Tower", "Mesh Front Panel", "High Airflow", "USB-C"],
      image:
        "https://images.unsplash.com/photo-1587202372634-35a1e2f76dc1?w=400&q=80",
    },
  ],
};

// Component icons mapping
const componentIcons: Record<ComponentType, React.ReactNode> = {
  cpu: <Cpu className="h-5 w-5" />,
  gpu: <Monitor className="h-5 w-5" />,
  motherboard: <Box className="h-5 w-5" />,
  ram: <MemoryStick className="h-5 w-5" />,
  storage: <HardDrive className="h-5 w-5" />,
  cooling: <Fan className="h-5 w-5" />,
  psu: <Power className="h-5 w-5" />,
  case: <Box className="h-5 w-5" />,
};

export default function ComponentSelection() {
  // Currency conversion rate
  const usdToInr = 75;
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<ComponentType | null>("cpu");
  const [selectedComponents, setSelectedComponents] = useState<
    Record<ComponentType, Component | null>
  >({
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    cooling: null,
    psu: null,
    case: null,
  });
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [buildName, setBuildName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  // Calculate total price
  const totalPrice = Object.values(selectedComponents)
    .filter(Boolean)
    .reduce((sum, component) => sum + (component?.price || 0), 0);

  // Handle component selection
  const selectComponent = (component: Component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [component.type]: component,
    }));
  };

  // Save build to database
  const saveBuild = async () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to save your build",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!buildName.trim()) {
      toast({
        title: "Build Name Required",
        description: "Please enter a name for your build",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    setSaveStatus("idle");

    try {
      const { error } = await supabase.from("saved_builds").insert({
        user_id: user.id,
        name: buildName,
        components: selectedComponents,
        total_price: totalPrice,
      });

      if (error) throw error;

      setSaveStatus("success");
      toast({
        title: "Build Saved",
        description: "Your build has been saved successfully",
      });

      // Close dialog after a short delay
      setTimeout(() => {
        setSaveDialogOpen(false);
        setBuildName("");
        setSaveStatus("idle");
      }, 1500);
    } catch (error) {
      console.error("Error saving build:", error);
      setSaveStatus("error");
      toast({
        title: "Error",
        description: "Failed to save your build. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    // Store selected components in localStorage for checkout page
    localStorage.setItem(
      "selectedComponents",
      JSON.stringify(selectedComponents),
    );
    localStorage.setItem("totalPrice", totalPrice.toString());
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              Custom PC Builder
            </h1>
          </div>
          <Badge className="bg-blue-600 text-white hover:bg-blue-500 border-none">
            Step {Object.values(selectedComponents).filter(Boolean).length} of 8
          </Badge>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Component selection sidebar */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 h-fit">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Components
            </h2>
            <div className="space-y-2">
              {(Object.keys(sampleComponents) as ComponentType[]).map(
                (type) => {
                  const isSelected = selectedType === type;
                  const isComplete = selectedComponents[type] !== null;

                  return (
                    <button
                      key={type}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${isSelected ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"} ${isComplete ? "border-l-4 border-l-blue-500" : ""}`}
                      onClick={() => setSelectedType(type)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full ${isComplete ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                        >
                          {componentIcons[type]}
                        </div>
                        <span
                          className={`capitalize ${isComplete ? "text-blue-800 font-medium" : "text-gray-700"}`}
                        >
                          {type}
                        </span>
                      </div>
                      {isComplete && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                          Selected
                        </Badge>
                      )}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Component options */}
          <div className="lg:col-span-2">
            {selectedType && (
              <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                <div className="p-6 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      {componentIcons[selectedType]}
                    </div>
                    <h2 className="text-xl font-semibold text-blue-900 capitalize">
                      Select {selectedType}
                    </h2>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {sampleComponents[selectedType].map((component) => {
                    const isSelected =
                      selectedComponents[selectedType]?.id === component.id;

                    return (
                      <div
                        key={component.id}
                        className={`p-4 rounded-lg border ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-200"} transition-colors cursor-pointer`}
                        onClick={() => selectComponent(component)}
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/4">
                            <img
                              src={component.image}
                              alt={component.name}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-3/4 space-y-3">
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-medium text-blue-900">
                                {component.name}
                              </h3>
                              <span className="text-lg font-bold text-blue-700">
                                ₹
                                {(component.price * usdToInr).toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {component.specs.map((spec, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                  <span className="text-sm text-gray-600">
                                    {spec}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {isSelected && (
                              <Badge className="bg-blue-500 text-white hover:bg-blue-600 border-none">
                                Selected
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary and actions */}
        <div className="mt-8 bg-white rounded-xl shadow-md border border-blue-100 p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Build Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {Object.entries(selectedComponents).map(([type, component]) => {
              if (!component) return null;

              return (
                <div
                  key={type}
                  className="p-3 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1.5 rounded-full">
                        {componentIcons[type as ComponentType]}
                      </div>
                      <span className="text-sm font-medium text-blue-800 capitalize">
                        {type}
                      </span>
                    </div>
                    <span className="text-sm text-blue-700">
                      ₹{(component.price * usdToInr).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-blue-900 truncate">
                    {component.name}
                  </p>
                </div>
              );
            })}
          </div>

          <Separator className="my-4 bg-blue-100" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-600">
                Total Components:{" "}
                {Object.values(selectedComponents).filter(Boolean).length}/8
              </p>
              <p className="text-2xl font-bold text-blue-900">
                Total: ₹{(totalPrice * usdToInr).toLocaleString("en-IN")}
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                onClick={() => setSaveDialogOpen(true)}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Build
              </Button>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-500"
                disabled={
                  Object.values(selectedComponents).filter(Boolean).length < 8
                }
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Build Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Save Your PC Build</DialogTitle>
            <DialogDescription>
              Give your build a name to save it to your profile.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="buildName" className="text-right">
                Build Name
              </Label>
              <Input
                id="buildName"
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                className="col-span-3"
                placeholder="My Gaming PC"
              />
            </div>
          </div>
          <DialogFooter>
            {saveStatus === "success" && (
              <div className="flex items-center gap-2 text-green-600 mr-auto">
                <CheckCircle className="h-5 w-5" />
                <span>Build saved successfully!</span>
              </div>
            )}
            {saveStatus === "error" && (
              <div className="flex items-center gap-2 text-red-600 mr-auto">
                <AlertCircle className="h-5 w-5" />
                <span>Failed to save build</span>
              </div>
            )}
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveBuild} disabled={isSaving}>
              {isSaving ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Saving...
                </>
              ) : (
                "Save Build"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
