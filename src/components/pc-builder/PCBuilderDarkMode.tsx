import { ArrowRight, Cpu, HardDrive, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PCBuilderDarkMode() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge className="mb-4 bg-purple-700 text-white hover:bg-purple-600 border-none">
                Custom PC Builder
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Build Your Dream PC
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300">
              Create your perfect custom PC with our interactive builder tool.
              Select components, check compatibility, and get real-time pricing
              - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-500 w-full sm:w-auto"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-300 hover:border-purple-400 hover:text-white w-full sm:w-auto"
              >
                View Pre-built PCs
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-900 p-2 rounded-full">
                  <Cpu className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-gray-300">Premium Components</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-900 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-gray-300">Performance Tested</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-900 p-2 rounded-full">
                  <HardDrive className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-gray-300">Compatibility Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-900 p-2 rounded-full">
                  <Monitor className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-gray-300">3-Year Warranty</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-700/60 via-purple-500/40 to-purple-900/10 rounded-3xl blur-2xl transform scale-110" />
            <div className="bg-gray-900 backdrop-blur-sm border border-purple-700/50 rounded-xl shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900 rounded-t-xl">
                <div className="flex items-center gap-2 px-3 py-1">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-xs text-white font-medium">
                    PC Builder Tool
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg border border-purple-700/50">
                    <div className="flex items-center gap-3">
                      <Cpu className="h-5 w-5 text-purple-300" />
                      <span className="text-white">CPU</span>
                    </div>
                    <span className="text-purple-200">
                      Intel Core i9-13900K
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg border border-purple-700/50">
                    <div className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-purple-300" />
                      <span className="text-white">GPU</span>
                    </div>
                    <span className="text-purple-200">
                      NVIDIA RTX 4090 24GB
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg border border-purple-700/50">
                    <div className="flex items-center gap-3">
                      <HardDrive className="h-5 w-5 text-purple-300" />
                      <span className="text-white">Storage</span>
                    </div>
                    <span className="text-purple-200">2TB NVMe SSD</span>
                  </div>
                  <div className="mt-4 p-3 bg-purple-600 rounded-lg text-center">
                    <span className="text-white font-bold">
                      Total: $3,499.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
