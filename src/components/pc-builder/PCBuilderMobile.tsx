import { ArrowRight, Cpu, HardDrive, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PCBuilderMobile() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-6 text-center">
            <div>
              <Badge className="mb-4 bg-blue-700 text-white hover:bg-blue-600 border-none">
                Custom PC Builder
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Build Your Dream PC
              </h1>
            </div>
            <p className="text-md text-blue-100">
              Create your perfect custom PC with our interactive builder tool.
              Select components, check compatibility, and get real-time pricing
              - all in one place.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 w-full"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-100 hover:border-blue-300 hover:text-white w-full"
              >
                View Pre-built PCs
              </Button>
            </div>
          </div>

          <div className="w-full relative">
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
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-blue-300" />
                      <span className="text-white text-sm">CPU</span>
                    </div>
                    <span className="text-blue-200 text-sm">Intel Core i9</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-blue-300" />
                      <span className="text-white text-sm">GPU</span>
                    </div>
                    <span className="text-blue-200 text-sm">RTX 4090</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-900/50 rounded-lg border border-blue-700/50">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-blue-300" />
                      <span className="text-white text-sm">Storage</span>
                    </div>
                    <span className="text-blue-200 text-sm">2TB SSD</span>
                  </div>
                  <div className="mt-3 p-2 bg-blue-600 rounded-lg text-center">
                    <span className="text-white font-bold text-sm">
                      Total: $3,499.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-2">
              <div className="bg-blue-800 p-1.5 rounded-full">
                <Cpu className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-blue-100 text-sm">Premium Components</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-800 p-1.5 rounded-full">
                <Zap className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-blue-100 text-sm">Performance Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-800 p-1.5 rounded-full">
                <HardDrive className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-blue-100 text-sm">
                Compatibility Checked
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-800 p-1.5 rounded-full">
                <Monitor className="h-4 w-4 text-blue-200" />
              </div>
              <span className="text-blue-100 text-sm">3-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
