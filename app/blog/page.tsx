import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Phone, Mail, MessageCircle, ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Study Abroad Tips & Success Stories",
  description:
    "Read the latest tips, guides, and success stories about studying in China, Hungary, and Italy. Get insights on scholarships, university life, and student experiences.",
}

export default function BlogPage() {
  const featuredPost = {
    slug: "complete-guide-chinese-government-scholarship-2025",
    title: "Complete Guide to Chinese Government Scholarship (CSC) 2025",
    excerpt:
      "Everything you need to know about applying for the Chinese Government Scholarship, including eligibility criteria, application process, and tips for success.",
    image: "/scholarship-announcement-chinese-university.jpg",
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Scholarships",
  }

  const blogPosts = [
    {
      slug: "top-10-universities-international-students-china",
      title: "Top 10 Universities for International Students in China",
      excerpt:
        "Discover the best Chinese universities that welcome international students with excellent programs and support services.",
      image: "/chinese-university-campus-with-international-stude.jpg",
      author: "Michael Zhang",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Universities",
    },
    {
      slug: "student-life-beijing-international-perspective",
      title: "Student Life in Beijing: An International Perspective",
      excerpt: "A firsthand account of what it's really like to study and live in Beijing as an international student.",
      image: "/diverse-students-studying-together-at-modern-chine.jpg",
      author: "Emma Johnson",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Student Life",
    },
    {
      slug: "mbbs-china-complete-guide-medical-students",
      title: "MBBS in China: Complete Guide for Medical Students",
      excerpt:
        "Everything you need to know about pursuing medical education in China, from admission requirements to career prospects.",
      image: "/chinese-university-campus-with-international-stude.jpg",
      author: "Dr. James Liu",
      date: "January 8, 2025",
      readTime: "10 min read",
      category: "MBBS",
    },
    {
      slug: "scholarship-application-tips-success-stories",
      title: "Scholarship Application Tips: Success Stories from Students",
      excerpt:
        "Learn from successful scholarship recipients about what made their applications stand out and secure funding.",
      image: "/student-success-story-chinese-university-graduatio.jpg",
      author: "Lisa Wang",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Success Stories",
    },
    {
      slug: "chinese-language-learning-international-students",
      title: "Chinese Language Learning Tips for International Students",
      excerpt:
        "Practical advice on learning Mandarin Chinese while studying in China, from basic survival phrases to academic proficiency.",
      image: "/diverse-students-studying-together-at-modern-chine.jpg",
      author: "David Kim",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Language",
    },
    {
      slug: "visa-application-process-study-china-2025",
      title: "Visa Application Process for Studying in China 2025",
      excerpt:
        "Step-by-step guide to obtaining a student visa for China, including required documents and processing times.",
      image: "/visa-guidance-international-students.jpg",
      author: "Anna Rodriguez",
      date: "December 30, 2024",
      readTime: "8 min read",
      category: "Visa Guide",
    },
    {
      slug: "study-hungary-stipendium-hungaricum-guide",
      title: "Study in Hungary: Complete Guide to Stipendium Hungaricum",
      excerpt:
        "Everything you need to know about studying in Hungary with the Stipendium Hungaricum scholarship program.",
      image: "/student-success-story-chinese-university-graduatio.jpg",
      author: "Maria Kovacs",
      date: "January 18, 2025",
      readTime: "9 min read",
      category: "Hungary",
    },
    {
      slug: "italy-university-admission-process-2025",
      title: "Italy University Admission Process 2025: Step-by-Step Guide",
      excerpt:
        "Complete guide to applying for universities in Italy, including Italian government scholarships and requirements.",
      image: "/chinese-university-campus-with-international-stude.jpg",
      author: "Giuseppe Rossi",
      date: "January 16, 2025",
      readTime: "7 min read",
      category: "Italy",
    },
  ]

  const categories = [
    { name: "All Posts", count: 27, active: true },
    { name: "Scholarships", count: 10 },
    { name: "Universities", count: 8 },
    { name: "Student Life", count: 5 },
    { name: "Success Stories", count: 4 },
    { name: "Hungary", count: 3 },
    { name: "Italy", count: 2 },
    { name: "MBBS", count: 2 },
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              Blog & Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Study in China <span className="text-primary">Tips & Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Get the latest insights, tips, and success stories from international students studying in China. Learn
              about scholarships, university life, and everything you need to know for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={category.active ? "" : "bg-transparent"}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Article</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our most popular and comprehensive guide for students
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default">{featuredPost.category}</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-balance">{featuredPost.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Latest Articles</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Stay updated with the latest tips, guides, and student experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-balance line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-lg bg-primary/5">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Stay Updated</h3>
                  <p className="text-muted-foreground">
                    Get the latest scholarship opportunities, application tips, and success stories delivered to your
                    inbox.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
