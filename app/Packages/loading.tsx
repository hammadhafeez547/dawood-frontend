import { Skeleton } from "../Admin/Dashboard/components/ui/skeleton";

export default function PackagesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero section skeleton */}
      <div className="relative w-full h-[400px] bg-gray-200 animate-pulse">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-6" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Packages list skeleton */}
      <div className="container mx-auto px-4 py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-2" />
        <Skeleton className="h-6 w-96 mx-auto mb-10" />

        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-28" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-7 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-1/3 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-6 w-16" />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
