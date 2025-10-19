import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Clock,
  DollarSign,
  CheckCircle,
  Globe,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Bachelor's Scholarships in China - Undergraduate Programs",
  description:
    "Explore bachelor's degree scholarships in China. Full and partial scholarships available for undergraduate programs across 200+ fields of study.",
}

export default function BachelorsScholarshipsPage() {
  const scholarshipPrograms = [
    {
      title: "Chinese Government Scholarship (CSC) - Bachelor's",
      university: "All Partner Universities",
      coverage: "100% Tuition + Living Allowance",
      duration: "4 years",
      fields: "All fields available",
      requirements: "High school diploma, Good grades",
      deadline: "March 31, 2025",
      spots: "500+ positions",
    },
    {
      title: "Beijing Government Scholarship",
      university: "Beijing Universities",
      coverage: "Full tuition + Accommodation",
      duration: "4 years",
      fields: "Engineering, Business, Arts",
      requirements: "High school diploma, English proficiency",
      deadline: "April 15, 2025",
      spots: "200 positions",
    },
    {
      title: "Shanghai Excellence Scholarship",
      university: "Shanghai Universities",
      coverage: "80% Tuition + Partial living allowance",
      duration: "4 years",
      fields: "Technology, Medicine, Finance",
      requirements: "Strong academic record",
      deadline: "May 1, 2025",
      spots: "150 positions",
    },
    {
      title: "Tsinghua University Scholarship",
      university: "Tsinghua University",
      coverage: "Full tuition + Accommodation + Stipend",
      duration: "4 years",
      fields: "Engineering, Computer Science",
      requirements: "Exceptional academic performance",
      deadline: "February 28, 2025",
      spots: "50 positions",
    },
    {
      title: "Peking University Scholarship",
      university: "Peking University",
      coverage: "Full tuition + Living allowance",
      duration: "4 years",
      fields: "Liberal Arts, Sciences, Medicine",
      requirements: "Top academic performance",
      deadline: "March 15, 2025",
      spots: "75 positions",
    },
    {
      title: "Fudan University International Scholarship",
      university: "Fudan University",
      coverage: "70% Tuition coverage",
      duration: "4 years",
      fields: "Business, International Relations",
      requirements: "Good grades, Leadership experience",
      deadline: "April 30, 2025",
      spots: "100 positions",
    },
  ]

  const popularFields = [
    "Computer Science & Technology",
    "International Business",
    "Mechanical Engineering",
    "Chinese Language & Literature",
    "International Relations",
    "Economics & Finance",
    "Civil Engineering",
    "Environmental Science",
    "Architecture",
    "Biomedical Engineering",
    "Marketing",
    "Electrical Engineering",
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
              <Link href="/scholarships" className="text-primary font-medium">
                Scholarships
              </Link>
              <Link href="/universities" className="text-foreground hover:text-primary transition-colors">
                Universities
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
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
            <Link href="/scholarships" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Scholarships
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Bachelor's Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500/5 to-blue-600/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Bachelor's Degree <span className="text-primary">Scholarships in China</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Start your undergraduate journey in China with comprehensive scholarship support. Over 200 programs
              available across top Chinese universities with full financial coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply for Bachelor's Scholarship <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Coverage Available</h3>
                <p className="text-muted-foreground">
                  Up to 100% tuition coverage plus living allowance and accommodation support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4-Year Programs</h3>
                <p className="text-muted-foreground">
                  Complete undergraduate degrees with continuous scholarship support throughout
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">200+ Programs</h3>
                <p className="text-muted-foreground">
                  Wide range of fields from engineering to liberal arts across top universities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Available Bachelor's Scholarships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive scholarship opportunities for undergraduate studies in China
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {scholarshipPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-balance">{program.title}</CardTitle>
                      <Badge variant="secondary">{program.university}</Badge>
                    </div>
                    <Badge variant="default" className="bg-primary/10 text-primary">
                      {program.spots}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Coverage:</span>
                      </div>
                      <span className="font-medium">{program.coverage}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Duration:</span>
                      </div>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Fields:</span>
                    </div>
                    <span className="text-sm font-medium">{program.fields}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Requirements:</span>
                    </div>
                    <span className="text-sm">{program.requirements}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Deadline: </span>
                      <span className="font-medium text-red-600">{program.deadline}</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Popular Fields of Study</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore the most sought-after bachelor's programs with scholarship opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularFields.map((field, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm text-balance">{field}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">General Requirements</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Basic eligibility criteria for bachelor's scholarship applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Academic Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">High school diploma or equivalent</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Minimum GPA of 3.0 or equivalent</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Official transcripts and certificates</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Letters of recommendation</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Language & Other Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">English proficiency (IELTS/TOEFL) or Chinese (HSK)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Valid passport</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Medical examination report</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Personal statement and study plan</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Start Your Bachelor's Journey in China Today
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Don't miss the opportunity to study at world-class Chinese universities with full scholarship support.
              Apply now and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply for Scholarship <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
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
                <Link href="/scholarships" className="block text-primary">
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
                <Link href="/scholarships/bachelors" className="block text-primary">
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
