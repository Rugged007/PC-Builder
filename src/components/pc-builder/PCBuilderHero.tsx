import { ArrowRight, Cpu, HardDrive, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PCBuilderHero() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-700 text-white hover:bg-blue-600 border-none">
                Custom PC Builder
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Build Your Dream PC
              </h1>
            </div>
            <p className="text-lg md:text-xl text-blue-100">
              Create your perfect custom PC with our interactive builder tool.
              Select components, check compatibility, and get real-time pricing
              - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 w-full sm:w-auto"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-100 hover:border-blue-300 hover:text-white w-full sm:w-auto"
              >
                View Pre-built PCs
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-800 p-2 rounded-full">
                  <Cpu className="h-5 w-5 text-blue-200" />
                </div>
                <span className="text-blue-100">Premium Components</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-800 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-blue-200" />
                </div>
                <span className="text-blue-100">Performance Tested</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-800 p-2 rounded-full">
                  <HardDrive className="h-5 w-5 text-blue-200" />
                </div>
                <span className="text-blue-100">Compatibility Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-800 p-2 rounded-full">
                  <Monitor className="h-5 w-5 text-blue-200" />
                </div>
                <span className="text-blue-100">3-Year Warranty</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-700/60 via-blue-500/40 to-blue-900/10 rounded-3xl blur-2xl transform scale-110" />
            <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-xl shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-900 rounded-t-xl">
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
                  <div className="flex justify-between items-center p-3 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-3">
                      <Cpu className="h-5 w-5 text-blue-300" />
                      <span className="text-white">CPU</span>
                    </div>
                    <span className="text-blue-200">Intel Core i9-13900K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-blue-300" />
                      <span className="text-white">GPU</span>
                    </div>
                    <span className="text-blue-200">NVIDIA RTX 4090 24GB</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-3">
                      <HardDrive className="h-5 w-5 text-blue-300" />
                      <span className="text-white">Storage</span>
                    </div>
                    <span className="text-blue-200">2TB NVMe SSD</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-600 rounded-lg text-center">
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
