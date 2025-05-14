"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ChevronLeft, Facebook, Twitter, Linkedin, Mail, Bookmark, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/app/components/Navbar"

export default function page({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the blog post data based on the ID
  // For this example, we'll use a sample blog post
  const blogPost = {
    id: params.id,
    title: "Essential Preparations for Your First Umrah Journey",
    excerpt:
      "Discover the spiritual and practical preparations that will help make your first Umrah journey a meaningful and smooth experience.",
    content: `
      <p>Embarking on your first Umrah journey is a profound spiritual experience that requires both inner preparation and practical planning. This sacorange pilgrimage to Makkah is an opportunity for spiritual renewal, reflection, and connection with Allah.</p>
      
      <h2>Spiritual Preparation</h2>
      
      <p>Before setting foot on your journey, it's essential to prepare your heart and mind:</p>
      
      <ul>
        <li><strong>Sincere Intention (Niyyah):</strong> Begin by setting your intention purely for Allah's sake. The Prophet Muhammad (peace be upon him) said, "Actions are judged by intentions."</li>
        <li><strong>Seek Knowledge:</strong> Learn about the rituals and their significance. Understanding the spiritual meaning behind each act enhances your experience.</li>
        <li><strong>Repentance:</strong> Seek forgiveness for past sins and resolve to return with a purified heart.</li>
        <li><strong>Dua (Supplication):</strong> Prepare a list of prayers for yourself, family, friends, and the ummah.</li>
      </ul>
      
      <h2>Practical Preparations</h2>
      
      <p>Alongside spiritual readiness, practical preparations ensure a smooth journey:</p>
      
      <h3>Documentation</h3>
      
      <ul>
        <li>Valid passport with at least six months validity</li>
        <li>Umrah visa (applied through authorized agents)</li>
        <li>Travel insurance</li>
        <li>Necessary vaccinations and health certificates</li>
      </ul>
      
      <h3>Packing Essentials</h3>
      
      <p>Pack light but ensure you have these essentials:</p>
      
      <ul>
        <li><strong>Ihram for men:</strong> Two pieces of white, seamless cloth</li>
        <li><strong>Modest clothing for women:</strong> Loose, non-transparent garments</li>
        <li><strong>Comfortable footwear:</strong> You'll be walking and standing extensively</li>
        <li><strong>Personal medications and first aid</strong></li>
        <li><strong>Prayer mat, Quran, and dua books</strong></li>
        <li><strong>Toiletries and unscented products</strong> (remember that scented products are prohibited in the state of Ihram)</li>
      </ul>
      
      <h2>Physical Preparation</h2>
      
      <p>The rituals of Umrah involve considerable physical activity:</p>
      
      <ul>
        <li>Begin a walking regimen weeks before your journey</li>
        <li>Practice standing for extended periods</li>
        <li>Ensure any existing health conditions are stable</li>
        <li>Stay hydrated and maintain a balanced diet before travel</li>
      </ul>
      
      <h2>Financial Planning</h2>
      
      <p>Proper financial planning prevents stress during your journey:</p>
      
      <ul>
        <li>Budget for accommodation, transportation, and meals</li>
        <li>Set aside funds for charity (Sadaqah) and gifts (for family and friends)</li>
        <li>Carry a mix of cash and cards</li>
        <li>Inform your bank of your travel plans to avoid card blocks</li>
      </ul>
      
      <h2>Mental and Emotional Preparation</h2>
      
      <p>The crowds and intensity of the experience can be overwhelming:</p>
      
      <ul>
        <li>Prepare for crowds and practice patience</li>
        <li>Expect physical discomfort but frame it as part of the spiritual journey</li>
        <li>Connect with fellow pilgrims who have experience</li>
        <li>Mentally prepare for a transformative experience</li>
      </ul>
      
      <p>Remember, Umrah is not just a physical journey but a profound spiritual one. By preparing thoroughly in all aspects—spiritual, practical, physical, financial, and emotional—you set the foundation for a meaningful pilgrimage that will leave a lasting impact on your faith and life.</p>
      
      <p>May Allah accept your Umrah and make your journey easy, safe, and spiritually fulfilling.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    date: "March 15, 2023",
    readTime: "8 min read",
    author: "Ahmed Al-Farsi",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Ahmed Al-Farsi is a seasoned Hajj and Umrah guide with over 15 years of experience leading pilgrims through their sacorange journeys. He holds a degree in Islamic Studies and is passionate about helping first-time pilgrims prepare for their spiritual experience.",
    category: "Umrah Guide",
    tags: ["Umrah", "Preparation", "Spiritual Journey", "Travel Tips", "First-Time Pilgrims"],
    relatedPosts: [
      {
        id: 4,
        title: "The Best Times to Perform Umrah: A Seasonal Guide",
        image: "/placeholder.svg?height=600&width=800",
        category: "Umrah Guide",
      },
      {
        id: 9,
        title: "Packing Essentials: What to Bring for Your Pilgrimage",
        image: "/placeholder.svg?height=600&width=800",
        category: "Travel Tips",
      },
      {
        id: 2,
        title: "The Historical Significance of Masjid Al-Nabawi",
        image: "/placeholder.svg?height=600&width=800",
        category: "Sacorange Sites",
      },
    ],
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 mb-4">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {/* Featuorange Image */}
                <div className="relative h-80 w-full">
                  <Image
                    src={blogPost.image || "/placeholder.svg"}
                    alt={blogPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Author Info */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={blogPost.authorImage || "/placeholder.svg"}
                        alt={blogPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{blogPost.author}</p>
                      <p className="text-sm text-gray-500">Author</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
                        <Bookmark className="h-4 w-4" />
                        <span className="sr-only">Save article</span>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like article</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  <div
                    className="prose prose-orange max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {blogPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-gray-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Share this article:</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Share on Facebook</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Share on Twitter</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Share via Email</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 mt-8"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">About the Author</h3>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{blogPost.author}</h4>
                    <p className="text-gray-600 text-sm mt-1">{blogPost.authorBio}</p>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {blogPost.relatedPosts.map((post, index) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                        <div className="relative h-40">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute bottom-3 left-3">
                            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-xs">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Spiritual Preparation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Practical Preparations
                    </a>
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-600 flex items-center">
                          <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-600 flex items-center">
                          <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                          Packing Essentials
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Physical Preparation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Financial Planning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Mental and Emotional Preparation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-orange-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      Conclusion
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg shadow-md p-6 text-white"
              >
                <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-white/90 mb-4">
                  Stay updated with our latest articles, guides, and pilgrimage tips.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 placeholder:text-white/70 text-white"
                  />
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">Subscribe</Button>
                </div>
              </motion.div>
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
