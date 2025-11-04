import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import { ShareButton } from "@/components/blog/ShareButton"
import blogsData from "@/data/blogs.json"

// Convert posts array to object with slug as key for easy lookup
const blogPosts = blogsData.posts.reduce((acc, post) => {
  acc[post.slug] = post
  return acc
}, {} as Record<string, typeof blogsData.posts[0]>)

// Old hardcoded blog posts removed - now using blogs.json

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} - Next Stop China Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const relatedPosts = [
    {
      slug: "life-as-international-student-china",
      title: "Life as an International Student in China: A Complete Guide",
      category: "Student Life",
    },
    {
      slug: "top-universities-china-international-students",
      title: "Top 10 Universities in China for International Students",
      category: "Universities",
    },
    {
      slug: "cultural-experience-studying-china",
      title: "Cultural Immersion: Making the Most of Your Chinese Experience",
      category: "Student Life",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/blog" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">{post.title}</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <ShareButton 
                  title={post.title}
                  slug={post.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Apply for Scholarships?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Don't wait! Start your application today and take the first step towards your dream education in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/apply">
                  Start Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Expert Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Related Articles</h2>
              <p className="text-xl text-muted-foreground text-pretty">Continue reading about studying in China</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Badge variant="secondary">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-semibold text-balance line-clamp-2">{relatedPost.title}</h3>
                      <Button size="sm" asChild className="w-full">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read Article <BookOpen className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    <FloatingActionButton />

     
    </div>
  )
}
