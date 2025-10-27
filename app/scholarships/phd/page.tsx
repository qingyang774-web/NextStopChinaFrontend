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
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Globe,
  ArrowLeft,
  BookOpen,
  Microscope,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PhD Scholarships in China - Doctoral Research Programs",
  description:
    "Explore PhD scholarships in China. Full funding available for doctoral research programs across 100+ research areas with comprehensive support.",
}

export default function PhDScholarshipsPage() {
  const scholarshipPrograms = [
    {
      title: "Chinese Government Scholarship (CSC) - PhD",
      university: "All Partner Universities",
      coverage: "Full tuition + Research stipend + Accommodation",
      duration: "3-4 years",
      fields: "All research areas",
      requirements: "Master's degree, Research proposal",
      deadline: "March 31, 2025",
      spots: "200+ positions",
    },
    {
      title: "CAS-TWAS President's Fellowship",
      university: "Chinese Academy of Sciences",
      coverage: "Full funding + Research allowance",
      duration: "3-4 years",
      fields: "Natural Sciences, Engineering",
      requirements: "Master's degree, Excellent research record",
      deadline: "January 31, 2025",
      spots: "50 positions",
    },
    {
      title: "Tsinghua University PhD Scholarship",
      university: "Tsinghua University",
      coverage: "Full tuition + Monthly stipend + Research funds",
      duration: "4 years",
      fields: "Engineering, Computer Science, Management",
      requirements: "Outstanding academic performance",
      deadline: "December 15, 2024",
      spots: "30 positions",
    },
    {
      title: "Peking University PhD Fellowship",
      university: "Peking University",
      coverage: "Full funding + Conference travel support",
      duration: "4 years",
      fields: "Sciences, Humanities, Medicine",
      requirements: "Master's degree, Research experience",
      deadline: "January 15, 2025",
      spots: "40 positions",
    },
    {
      title: "USTC International PhD Program",
      university: "University of Science and Technology of China",
      coverage: "Full tuition + Living allowance + Research budget",
      duration: "3-4 years",
      fields: "Physics, Chemistry, Computer Science",
      requirements: "Strong research background",
      deadline: "February 28, 2025",
      spots: "25 positions",
    },
    {
      title: "Fudan University Doctoral Scholarship",
      university: "Fudan University",
      coverage: "Full funding + International collaboration opportunities",
      duration: "4 years",
      fields: "Medicine, Economics, International Studies",
      requirements: "Master's degree, Publications preferred",
      deadline: "March 1, 2025",
      spots: "35 positions",
    },
  ]

  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Biomedical Engineering",
    "Materials Science & Nanotechnology",
    "Environmental Science & Sustainability",
    "Quantum Physics & Computing",
    "Renewable Energy Systems",
    "Biotechnology & Genetics",
    "International Economics",
    "Climate Change Research",
    "Robotics & Automation",
    "Public Health & Epidemiology",
    "Advanced Manufacturing",
  ]

  return (
    <div className="min-h-screen bg-background">
     <Header />
     

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scholarships" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Scholarships
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">PhD Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500/5 to-purple-600/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
              <Microscope className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              PhD Research <span className="text-primary">Scholarships in China</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Pursue cutting-edge research at world-renowned Chinese institutions. Full funding available for doctoral
              programs across 100+ research areas with comprehensive support for international collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply for PhD Scholarship <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/contact">Discuss Research Interests</Link>
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
                <h3 className="text-xl font-semibold mb-2">Full Research Funding</h3>
                <p className="text-muted-foreground">
                  Complete financial support including tuition, research budget, and living stipend
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3-4 Year Programs</h3>
                <p className="text-muted-foreground">
                  Intensive doctoral research with world-class supervision and facilities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100+ Research Areas</h3>
                <p className="text-muted-foreground">
                  Cutting-edge research opportunities across sciences, engineering, and humanities
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Available PhD Scholarships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive funding opportunities for doctoral research in China
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
                      <Microscope className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Research Areas:</span>
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

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Leading Research Areas</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Cutting-edge research opportunities with world-class facilities and international collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {researchAreas.map((area, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm text-balance">{area}</h3>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">PhD Application Requirements</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Essential criteria for doctoral scholarship applications
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
                    <span className="text-sm">Master's degree in relevant field</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Excellent academic record (GPA 3.5+)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Comprehensive research proposal</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Publications or research experience preferred</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Application Materials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">English proficiency (IELTS 7.0+ or TOEFL 100+)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Three academic recommendation letters</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Detailed CV with research experience</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Interview with potential supervisor</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">PhD Scholarship Benefits</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive support for your doctoral research journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Monthly Stipend</h3>
                <p className="text-muted-foreground text-sm">¥3,500-5,000 monthly living allowance</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Research Budget</h3>
                <p className="text-muted-foreground text-sm">Dedicated funding for research materials and equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Conference Support</h3>
                <p className="text-muted-foreground text-sm">
                  Travel funding for international conferences and collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
                <p className="text-muted-foreground text-sm">World-class supervision and research guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     <CallToAction />
     <Footer />
     <FloatingActionButton />
     
    </div>
  )
}
