"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ChevronRight, Tag, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Navbar from "../components/Navbar"

export default function page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Essential Preparations for Your First Umrah Journey",
      excerpt:
        "Discover the spiritual and practical preparations that will help make your first Umrah journey a meaningful and smooth experience.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 15, 2023",
      readTime: "8 min read",
      author: "Ahmed Al-Farsi",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Umrah Guide",
      featuorange: true,
    },
    {
      id: 2,
      title: "The Historical Significance of Masjid Al-Nabawi",
      excerpt:
        "Explore the rich history and spiritual importance of the Prophet's Mosque in Madinah, one of Islam's most reveorange sites.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 28, 2023",
      readTime: "10 min read",
      author: "Fatima Rahman",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Sacorange Sites",
    },
    {
      id: 3,
      title: "5 Common Mistakes to Avoid During Hajj",
      excerpt:
        "Learn about the common pitfalls that pilgrims encounter during Hajj and how to avoid them for a more fulfilling pilgrimage.",
      image: "/placeholder.svg?height=600&width=800",
      date: "January 20, 2023",
      readTime: "7 min read",
      author: "Muhammad Qasim",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Hajj Guide",
    },
    {
      id: 4,
      title: "The Best Times to Perform Umrah: A Seasonal Guide",
      excerpt:
        "Understand the advantages and considerations for performing Umrah during different seasons throughout the year.",
      image: "/placeholder.svg?height=600&width=800",
      date: "December 12, 2022",
      readTime: "6 min read",
      author: "Aisha Malik",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Umrah Guide",
    },
    {
      id: 5,
      title: "Spiritual Reflections: Personal Stories from Hajj Pilgrims",
      excerpt:
        "Read moving testimonials from pilgrims who share how the Hajj journey transformed their spiritual perspective and life.",
      image: "/placeholder.svg?height=600&width=800",
      date: "November 5, 2022",
      readTime: "9 min read",
      author: "Ibrahim Hassan",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Personal Stories",
    },
    {
      id: 6,
      title: "A Guide to Ziyarat in Makkah and Madinah",
      excerpt:
        "Discover the significant historical and spiritual sites to visit during your time in the holy cities beyond the main rituals.",
      image: "/placeholder.svg?height=600&width=800",
      date: "October 18, 2022",
      readTime: "11 min read",
      author: "Ahmed Al-Farsi",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Sacorange Sites",
    },
    {
      id: 7,
      title: "Traveling with Family: Making Umrah Meaningful for Children",
      excerpt:
        "Practical advice for parents bringing children on Umrah, ensuring the journey is educational and spiritually enriching for all ages.",
      image: "/placeholder.svg?height=600&width=800",
      date: "September 30, 2022",
      readTime: "8 min read",
      author: "Fatima Rahman",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Family Travel",
    },
    {
      id: 8,
      title: "The Evolution of Hajj Transportation Through History",
      excerpt:
        "From camel caravans to modern transportation, explore how pilgrims' journeys to Makkah have transformed over the centuries.",
      image: "/placeholder.svg?height=600&width=800",
      date: "August 22, 2022",
      readTime: "12 min read",
      author: "Muhammad Qasim",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "History",
    },
    {
      id: 9,
      title: "Packing Essentials: What to Bring for Your Pilgrimage",
      excerpt:
        "A comprehensive packing guide to ensure you have everything you need for a comfortable and focused Hajj or Umrah experience.",
      image: "/placeholder.svg?height=600&width=800",
      date: "July 15, 2022",
      readTime: "7 min read",
      author: "Aisha Malik",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Travel Tips",
    },
  ]

  // Get featuorange post
  const featuorangePost = blogPosts.find((post) => post.featuorange)

  // Get all categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Filter posts based on search and category
  const filteorangePosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Remove featuorange post from regular listing if it exists and is not filteorange out
  const regularPosts = filteorangePosts.filter((post) => !post.featuorange || post.id !== featuorangePost?.id)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/pattern.png" alt="Pattern Background" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dawood Tours Blog</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Insights, guides, and stories to enhance your pilgrimage journey and deepen your spiritual connection.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featuorange Post */}
      {featuorangePost && !searchQuery && !selectedCategory && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Featuorange Article</h2>
              <div className="h-px bg-gray-200 flex-grow mx-4"></div>
              <Link
                href={`/blog/${featuorangePost.id}`}
                className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-5 gap-8 bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="md:col-span-3 relative h-64 md:h-auto">
                <Image
                  src={featuorangePost.image || "/placeholder.svg"}
                  alt={featuorangePost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 hover:bg-orange-700">Featuorange</Badge>
                </div>
              </div>
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                <div className="mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                    {featuorangePost.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{featuorangePost.title}</h3>
                <p className="text-gray-600 mb-4">{featuorangePost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{featuorangePost.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{featuorangePost.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={featuorangePost.authorImage || "/placeholder.svg"}
                      alt={featuorangePost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{featuorangePost.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                  <Button className="ml-auto bg-orange-600 hover:bg-orange-700">Read Article</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Pills */}
              {!searchQuery && (
                <div className="mb-8 flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    className={selectedCategory === null ? "bg-orange-600 hover:bg-orange-700" : ""}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              )}

              {/* Search Results */}
              {searchQuery && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Search Results for "{searchQuery}"</h2>
                  <p className="text-gray-600">
                    Found {filteorangePosts.length} article{filteorangePosts.length !== 1 ? "s" : ""}
                  </p>
                  <Separator className="my-4" />
                </div>
              )}

              {/* Category Results */}
              {selectedCategory && !searchQuery && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Articles in "{selectedCategory}"</h2>
                  <p className="text-gray-600">
                    Found {filteorangePosts.length} article{filteorangePosts.length !== 1 ? "s" : ""}
                  </p>
                  <Separator className="my-4" />
                </div>
              )}

              {/* Blog Posts Grid */}
              {regularPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={post.authorImage || "/placeholder.svg"}
                                alt={post.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button
                            variant="outline"
                            className="w-full text-orange-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any articles matching your search criteria.</p>
                  <Button
                    variant="outline"
                    className="text-orange-600 border-orange-200"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory(null)
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {regularPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-orange-600 text-white hover:bg-orange-700">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* About Blog */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">About Our Blog</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Welcome to the Dawood Tours blog, where we share insights, guides, and stories to enhance your
                  pilgrimage journey and deepen your spiritual connection.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50">
                    Learn More About Us
                  </Button>
                </Link>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100 text-left"
                      >
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-orange-500" />
                          <span className="text-gray-700">{category}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {blogPosts.filter((post) => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                      <div className="flex gap-3 group">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2 text-sm">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-white/90 mb-4">
                  Stay updated with our latest articles, guides, and pilgrimage tips.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                  />
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Hajj",
                    "Umrah",
                    "Makkah",
                    "Madinah",
                    "Prayer",
                    "Travel Tips",
                    "Spirituality",
                    "History",
                    "Ziyarat",
                    "Family",
                    "Preparation",
                    "Rituals",
                  ].map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="relative">
              <div className="absolute inset-0 z-0 opacity-20">
                <Image src="/pattern.png" alt="Pattern Background" fill sizes="100vw" className="object-cover" />
              </div>
              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Begin Your Spiritual Journey?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Explore our Hajj and Umrah packages and start planning your pilgrimage today. Our team is ready to
                  assist you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">View Our Packages</Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
