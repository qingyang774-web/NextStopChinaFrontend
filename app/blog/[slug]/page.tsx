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
  Share2,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"


// Blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "complete-guide-chinese-government-scholarship-2025": {
    title: "Complete Guide to Chinese Government Scholarship (CSC) 2025",
    excerpt:
      "Everything you need to know about applying for the Chinese Government Scholarship, including eligibility criteria, application process, and tips for success.",
    content: `
      <p>The Chinese Government Scholarship (CSC) is one of the most prestigious and comprehensive scholarship programs available for international students wanting to study in China. This guide will walk you through everything you need to know to successfully apply for and secure this life-changing opportunity.</p>

      <h2>What is the Chinese Government Scholarship?</h2>
      <p>The Chinese Government Scholarship is a full scholarship program established by the Ministry of Education of China to promote Chinese higher education among international students. It covers tuition fees, accommodation, living allowance, and comprehensive medical insurance.</p>

      <h2>Types of CSC Scholarships</h2>
      <h3>1. Bilateral Program</h3>
      <p>This program is based on educational exchange agreements between the Chinese government and governments of other countries. Students must apply through their home country's education ministry or designated institutions.</p>

      <h3>2. Chinese University Program</h3>
      <p>This program supports excellent international students recommended by Chinese universities. Students can apply directly to participating Chinese universities.</p>

      <h3>3. Great Wall Program</h3>
      <p>Designed for students from developing countries, focusing on fields that contribute to economic and social development.</p>

      <h2>Eligibility Criteria</h2>
      <ul>
        <li>Non-Chinese citizenship</li>
        <li>Good physical and mental health</li>
        <li>Excellent academic performance</li>
        <li>Good conduct and no criminal record</li>
        <li>Age requirements vary by program level</li>
      </ul>

      <h2>Application Process</h2>
      <h3>Step 1: Choose Your Program</h3>
      <p>Research and select the university and program that best fits your academic goals and career aspirations.</p>

      <h3>Step 2: Prepare Required Documents</h3>
      <ul>
        <li>Application form</li>
        <li>Passport copy</li>
        <li>Academic transcripts</li>
        <li>Language proficiency certificates</li>
        <li>Letters of recommendation</li>
        <li>Study plan or research proposal</li>
        <li>Medical examination report</li>
      </ul>

      <h3>Step 3: Submit Application</h3>
      <p>Submit your complete application through the Chinese Scholarship Council online application system before the deadline (usually March 31st).</p>

      <h2>Tips for Success</h2>
      <ol>
        <li><strong>Start Early:</strong> Begin preparing your application at least 6 months in advance</li>
        <li><strong>Research Thoroughly:</strong> Understand the specific requirements of your chosen university and program</li>
        <li><strong>Write a Compelling Study Plan:</strong> Clearly articulate your academic goals and how the program aligns with your career objectives</li>
        <li><strong>Get Strong Recommendations:</strong> Choose recommenders who know your academic abilities well</li>
        <li><strong>Meet Language Requirements:</strong> Ensure you have the required language proficiency certificates</li>
      </ol>

      <h2>What the Scholarship Covers</h2>
      <ul>
        <li>Full tuition fees</li>
        <li>Accommodation (dormitory or housing allowance)</li>
        <li>Monthly living allowance (varies by degree level)</li>
        <li>Comprehensive medical insurance</li>
        <li>One-time settlement subsidy</li>
      </ul>

      <h2>Important Dates for 2025</h2>
      <ul>
        <li>Application Opens: January 1, 2025</li>
        <li>Application Deadline: March 31, 2025</li>
        <li>Results Announcement: June 2025</li>
        <li>Program Start: September 2025</li>
      </ul>

      <p>The Chinese Government Scholarship represents an incredible opportunity to receive world-class education while experiencing Chinese culture firsthand. With proper preparation and a strong application, you can join thousands of international students who have benefited from this prestigious program.</p>
    `,
    image: "/scholarship-announcement-chinese-university.jpg",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Scholarships",
  },
  // Add more blog posts as needed
}

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
      slug: "top-10-universities-international-students-china",
      title: "Top 10 Universities for International Students in China",
      category: "Universities",
    },
    {
      slug: "scholarship-application-tips-success-stories",
      title: "Scholarship Application Tips: Success Stories from Students",
      category: "Success Stories",
    },
    {
      slug: "visa-application-process-study-china-2025",
      title: "Visa Application Process for Studying in China 2025",
      category: "Visa Guide",
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
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
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
