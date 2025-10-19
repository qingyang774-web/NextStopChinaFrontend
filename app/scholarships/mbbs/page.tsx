import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Globe,
  ArrowLeft,
  Heart,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "MBBS Scholarships in China - Medical Degree Programs",
  description:
    "Explore MBBS scholarships in China. Full and partial scholarships available for medical degree programs at 50+ medical universities.",
}

export default function MBBSScholarshipsPage() {
  const scholarshipPrograms = [
    {
      title: "Chinese Government Scholarship (CSC) - MBBS",
      university: "All Partner Medical Universities",
      coverage: "100% Tuition + Living Allowance + Accommodation",
      duration: "6 years",
      language: "English Medium",
      requirements: "High school diploma, Science background",
      deadline: "March 31, 2025",
      spots: "150+ positions",
    },
    {
      title: "Capital Medical University Scholarship",
      university: "Capital Medical University",
      coverage: "Full tuition + Monthly stipend",
      duration: "6 years",
      language: "English Medium",
      requirements: "Strong science grades, Medical aptitude",
      deadline: "April 15, 2025",
      spots: "30 positions",
    },
    {
      title: "Jinan University Medical Scholarship",
      university: "Jinan University",
      coverage: "80% Tuition + Accommodation",
      duration: "6 years",
      language: "English Medium",
      requirements: "High school completion, Biology/Chemistry",
      deadline: "May 1, 2025",
      spots: "25 positions",
    },
    {
      title: "Dalian Medical University Scholarship",
      university: "Dalian Medical University",
      coverage: "Full tuition + Living support",
      duration: "6 years",
      language: "English Medium",
      requirements: "Science background, Good grades",
      deadline: "April 30, 2025",
      spots: "40 positions",
    },
    {
      title: "Shandong University Medical Program",
      university: "Shandong University",
      coverage: "70% Tuition + Partial allowance",
      duration: "6 years",
      language: "English Medium",
      requirements: "High school diploma, Medical interest",
      deadline: "March 15, 2025",
      spots: "35 positions",
    },
    {
      title: "Tianjin Medical University Scholarship",
      university: "Tianjin Medical University",
      coverage: "Full tuition + Research opportunities",
      duration: "6 years",
      language: "English Medium",
      requirements: "Strong academic record, Science subjects",
      deadline: "February 28, 2025",
      spots: "20 positions",
    },
  ]

  const topUniversities = [
    "Capital Medical University",
    "Jinan University",
    "Dalian Medical University",
    "Shandong University",
    "Tianjin Medical University",
    "China Medical University",
    "Harbin Medical University",
    "Nanjing Medical University",
    "Southern Medical University",
    "Wenzhou Medical University",
    "Xi'an Jiaotong University",
    "Zhengzhou University",
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
            <span className="text-foreground">MBBS Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500/5 to-red-600/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
              <Stethoscope className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              MBBS Degree <span className="text-primary">Scholarships in China</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Pursue your dream of becoming a doctor with MBBS programs in China. English-medium instruction, WHO
              recognition, and comprehensive scholarship support at 50+ medical universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply for MBBS Scholarship <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/contact">Get Medical Career Guidance</Link>
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
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WHO Recognition</h3>
                <p className="text-muted-foreground">
                  All programs recognized by WHO, MCI, and other international medical councils
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">English Medium</h3>
                <p className="text-muted-foreground">
                  Complete MBBS program taught in English with no language barrier
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Affordable Education</h3>
                <p className="text-muted-foreground">
                  Significantly lower costs compared to Western medical schools
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Available MBBS Scholarships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive scholarship opportunities for medical studies in China
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
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground text-sm">Language:</span>
                    </div>
                    <span className="text-sm font-medium">{program.language}</span>
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

      {/* Top Medical Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Top Medical Universities</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Study at China's leading medical institutions with international recognition
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topUniversities.map((university, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm text-balance">{university}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">MBBS Program Structure</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Comprehensive 6-year medical education program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Years 1-2: Pre-Clinical</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Basic Medical Sciences</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Anatomy, Physiology, Biochemistry</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Pathology, Pharmacology</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Medical Chinese Language</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <span>Years 3-6: Clinical</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Internal Medicine, Surgery</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Pediatrics, Gynecology</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Hospital Rotations & Internship</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Research Project & Thesis</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">MBBS Admission Requirements</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Essential criteria for medical program applications
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
                    <span className="text-sm">High school diploma with science subjects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Minimum 60% in Physics, Chemistry, Biology</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Age between 17-25 years</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Good physical and mental health</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Application Documents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">English proficiency certificate (IELTS/TOEFL)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Medical examination report</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Passport and visa documents</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Personal statement and motivation letter</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Career Prospects</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Global opportunities after completing MBBS in China
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Practice</h3>
                <p className="text-muted-foreground text-sm">
                  Practice medicine worldwide with international recognition
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Licensing Exams</h3>
                <p className="text-muted-foreground text-sm">
                  Eligible for USMLE, PLAB, MCI screening tests
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Specialization</h3>
                <p className="text-muted-foreground text-sm">
                  Pursue postgraduate specialization in various fields
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Research</h3>
                <p className="text-muted-foreground text-sm">
                  Opportunities in medical research and academia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Start Your Medical Career Journey in China Today
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Join thousands of international students who have successfully completed their MBBS in China. World-class
              education, affordable costs, and global recognition await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply for MBBS Scholarship <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Medical Career Guidance</Link>
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
                <Link href="/scholarships/mbbs" className="block text-primary">
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
                  <span className\
