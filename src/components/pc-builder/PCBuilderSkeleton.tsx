import { Skeleton } from "@/components/ui/skeleton";

export default function PCBuilderSkeleton() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <Skeleton className="mb-4 h-6 w-32" />
              <Skeleton className="h-12 w-3/4 mb-2" />
              <Skeleton className="h-12 w-1/2" />
            </div>
            <Skeleton className="h-24 w-full" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-full sm:w-40" />
              <Skeleton className="h-12 w-full sm:w-40" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
