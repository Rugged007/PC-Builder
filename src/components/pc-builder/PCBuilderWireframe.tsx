import { ArrowRight, Cpu, HardDrive, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PCBuilderWireframe() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="mb-4 w-32 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-12 bg-gray-300 rounded-lg w-3/4 mb-2"></div>
              <div className="h-12 bg-gray-300 rounded-lg w-1/2"></div>
            </div>
            <div className="h-24 bg-gray-300 rounded-lg w-full"></div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-12 bg-gray-300 rounded-lg w-full sm:w-40"></div>
              <div className="h-12 bg-gray-300 rounded-lg w-full sm:w-40"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 p-2 rounded-full h-9 w-9"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 p-2 rounded-full h-9 w-9"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 p-2 rounded-full h-9 w-9"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 p-2 rounded-full h-9 w-9"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-gray-200 rounded-xl h-96 w-full">
              <div className="p-1 bg-gray-300 rounded-t-xl">
                <div className="flex items-center gap-2 px-3 py-1">
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <div className="ml-2 h-3 bg-gray-400 rounded w-24"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
                  <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
