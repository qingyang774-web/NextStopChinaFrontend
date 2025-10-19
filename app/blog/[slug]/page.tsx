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
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Next Stop China</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/scholarships" className="text-foreground hover:text-primary transition-colors">
                Scholarships
              </Link>
              <Link href="/universities" className="text-foreground hover:text-primary transition-colors">
                Universities
              </Link>
              <Link href="/blog" className="text-primary font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

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
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Next Stop China</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Making higher education in China affordable and accessible for international students worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/scholarships" className="block text-background/80 hover:text-primary transition-colors">
                  Scholarships
                </Link>
                <Link href="/universities" className="block text-background/80 hover:text-primary transition-colors">
                  Universities
                </Link>
                <Link href="/apply" className="block text-background/80 hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Programs</h4>
              <div className="space-y-2">
                <Link
                  href="/scholarships/bachelors"
                  className="block text-background/80 hover:text-primary transition-colors"
                >
                  Bachelor's Degrees
                </Link>
                <Link
                  href="/scholarships/masters"
                  className="block text-background/80 hover:text-primary transition-colors"
                >
                  Master's Degrees
                </Link>
                <Link
                  href="/scholarships/phd"
                  className="block text-background/80 hover:text-primary transition-colors"
                >
                  PhD Programs
                </Link>
                <Link
                  href="/scholarships/mbbs"
                  className="block text-background/80 hover:text-primary transition-colors"
                >
                  MBBS Programs
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/80">info@nextstopchina.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-background/80">WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">
              © 2025 Next Stop China. All rights reserved. | Making education dreams come true.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">WhatsApp Support</span>
        </Button>
      </div>
    </div>
  )
}
