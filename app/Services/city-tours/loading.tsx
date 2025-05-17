import { Skeleton } from "@/app/Admin/Dashboard/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center space-y-8">
        {/* Hero Section Skeleton */}
        <Skeleton className="w-full h-64 rounded-xl" />

        {/* Content Skeletons */}
        <div className="w-full max-w-4xl space-y-8">
          <Skeleton className="w-3/4 h-12" />
          <Skeleton className="w-full h-32" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="w-full h-64 rounded-lg" />
            <Skeleton className="w-full h-64 rounded-lg" />
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>

          <Skeleton className="w-full h-64" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="w-full h-48 rounded-lg" />
            <Skeleton className="w-full h-48 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
