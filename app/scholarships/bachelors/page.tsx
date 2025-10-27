import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
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
      <Header />
     

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

      <CallToAction />
      <Footer />
    

      {/* Floating WhatsApp Button */}
      <FloatingActionButton />
      
    </div>
  )
}
