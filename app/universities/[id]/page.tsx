import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
  Users,
  Award,
  BookOpen,
  Globe,
  ArrowLeft,
  Calendar,
  Building,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// University data - in a real app, this would come from a database
const universities = {
  "tsinghua-university": {
    name: "Tsinghua University",
    location: "Beijing, China",
    ranking: "#1 in China, #17 Worldwide",
    students: "50,000+",
    internationalStudents: "3,000+",
    established: "1911",
    type: "Public Research University",
    image: "/chinese-university-campus-with-international-stude.jpg",
    description:
      "Tsinghua University is China's premier institution for engineering and technology, consistently ranked as the top university in China. Known for its rigorous academic programs and cutting-edge research, Tsinghua has produced numerous leaders in technology, business, and government.",
    programs: [
      {
        level: "Bachelor's",
        fields: [
          "Computer Science",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Architecture",
          "Economics",
          "Business Administration",
        ],
        duration: "4 years",
        language: "English/Chinese",
      },
      {
        level: "Master's",
        fields: [
          "Engineering Management",
          "Computer Science",
          "MBA",
          "Public Administration",
          "Environmental Engineering",
        ],
        duration: "2-3 years",
        language: "English/Chinese",
      },
      {
        level: "PhD",
        fields: ["Engineering", "Computer Science", "Physics", "Chemistry", "Management"],
        duration: "3-4 years",
        language: "English/Chinese",
      },
    ],
    scholarships: [
      {
        name: "Chinese Government Scholarship (CSC)",
        coverage: "Full tuition + Living allowance + Accommodation",
        eligibility: "All international students",
        deadline: "March 31, 2025",
      },
      {
        name: "Tsinghua University Scholarship",
        coverage: "Full tuition + Research stipend",
        eligibility: "Exceptional academic performance",
        deadline: "February 28, 2025",
      },
      {
        name: "Beijing Government Scholarship",
        coverage: "Partial tuition + Accommodation",
        eligibility: "Good academic record",
        deadline: "April 15, 2025",
      },
    ],
    facilities: [
      "State-of-the-art laboratories",
      "Modern library with 4.6 million volumes",
      "International student dormitories",
      "Sports facilities and gymnasium",
      "Research centers and institutes",
      "Career services center",
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.5",
        "English proficiency (IELTS 6.5+ or TOEFL 90+)",
        "Personal statement",
        "Letters of recommendation",
      ],
      master: [
        "Bachelor's degree from recognized institution",
        "Minimum GPA of 3.2",
        "English proficiency (IELTS 6.5+ or TOEFL 90+)",
        "Research proposal",
        "Two academic references",
      ],
      phd: [
        "Master's degree in relevant field",
        "Strong research background",
        "English proficiency (IELTS 7.0+ or TOEFL 100+)",
        "Detailed research proposal",
        "Academic references",
      ],
    },
  },
  "peking-university": {
    name: "Peking University",
    location: "Beijing, China",
    ranking: "#2 in China, #23 Worldwide",
    students: "45,000+",
    internationalStudents: "2,500+",
    established: "1898",
    type: "Public Research University",
    image: "/chinese-university-campus-with-international-stude.jpg",
    description:
      "Peking University is China's oldest and most prestigious comprehensive university, renowned for its liberal arts, sciences, and social sciences programs. With a beautiful campus and rich history, PKU has been at the forefront of China's educational and cultural development.",
    programs: [
      {
        level: "Bachelor's",
        fields: ["Liberal Arts", "International Relations", "Economics", "Medicine", "Physics", "Chemistry"],
        duration: "4 years",
        language: "English/Chinese",
      },
      {
        level: "Master's",
        fields: ["International Relations", "Economics", "Medicine", "Law", "Literature", "Philosophy"],
        duration: "2-3 years",
        language: "English/Chinese",
      },
      {
        level: "PhD",
        fields: ["Medicine", "Physics", "Chemistry", "Literature", "Philosophy", "Economics"],
        duration: "3-4 years",
        language: "English/Chinese",
      },
    ],
    scholarships: [
      {
        name: "Chinese Government Scholarship (CSC)",
        coverage: "Full tuition + Living allowance + Accommodation",
        eligibility: "All international students",
        deadline: "March 31, 2025",
      },
      {
        name: "Peking University Scholarship",
        coverage: "Full tuition + Living allowance",
        eligibility: "Top academic performance",
        deadline: "March 15, 2025",
      },
    ],
    facilities: [
      "Historic campus with traditional architecture",
      "Comprehensive library system",
      "Medical research facilities",
      "International student services",
      "Cultural and arts centers",
      "Modern dormitories",
    ],
    admissionRequirements: {
      bachelor: [
        "High school diploma with excellent grades",
        "Minimum GPA of 3.5",
        "English or Chinese proficiency",
        "Personal statement",
        "Recommendation letters",
      ],
      master: [
        "Bachelor's degree from accredited institution",
        "Strong academic record",
        "Language proficiency test scores",
        "Research interests statement",
        "Academic references",
      ],
      phd: [
        "Master's degree in relevant field",
        "Research experience",
        "High language proficiency scores",
        "Comprehensive research proposal",
        "Strong academic recommendations",
      ],
    },
  },
  // Add more universities as needed
}

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const university = universities[params.id as keyof typeof universities]

  if (!university) {
    return {
      title: "University Not Found",
    }
  }

  return {
    title: `${university.name} - Study in China`,
    description: university.description,
  }
}

export default function UniversityDetailPage({ params }: PageProps) {
  const university = universities[params.id as keyof typeof universities]

  if (!university) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/universities" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Universities
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{university.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#129255]/5 to-[#129255]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-[#129255]/10 text-[#129255] border-[#129255]/20">
                {university.ranking}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-[#101828]">{university.name}</h1>
              <p className="text-xl text-gray-600 text-pretty leading-relaxed">{university.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#129255]" />
                  <span className="text-gray-600">Location:</span>
                </div>
                <span className="font-medium text-[#101828]">{university.location}</span>

                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-[#129255]" />
                  <span className="text-gray-600">Established:</span>
                </div>
                <span className="font-medium text-[#101828]">{university.established}</span>

                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-[#129255]" />
                  <span className="text-gray-600">Students:</span>
                </div>
                <span className="font-medium text-[#101828]">{university.students}</span>

                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-[#129255]" />
                  <span className="text-gray-600">International:</span>
                </div>
                <span className="font-medium text-[#101828]">{university.internationalStudents}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 bg-[#129255] text-white hover:bg-[#129255]/90">
                  <Link href="/apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-[#129255] text-[#129255] hover:bg-[#129255] hover:text-white">
                  <Link href="/contact">Get More Info</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={university.image || "/placeholder.svg"}
                alt={`${university.name} campus`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-[#101828]">Academic Programs</h2>
            <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
              Comprehensive degree programs across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {university.programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-[#101828]">
                    <BookOpen className="h-5 w-5 text-[#129255]" />
                    <span>{program.level} Programs</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Duration: {program.duration} | Language: {program.language}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {program.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#129255] flex-shrink-0" />
                        <span className="text-sm text-[#101828]">{field}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-[#101828]">Available Scholarships</h2>
            <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
              Financial support options for international students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {university.scholarships.map((scholarship, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-balance text-[#101828]">{scholarship.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-[#129255]" />
                      <span className="text-gray-600 text-sm">Coverage:</span>
                    </div>
                    <span className="text-sm font-medium text-[#101828]">{scholarship.coverage}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#129255]" />
                      <span className="text-gray-600 text-sm">Eligibility:</span>
                    </div>
                    <span className="text-sm text-[#101828]">{scholarship.eligibility}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm">
                      <span className="text-gray-600">Deadline: </span>
                      <span className="font-medium text-red-600">{scholarship.deadline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Campus Facilities</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              World-class facilities supporting academic excellence and student life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {university.facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{facility}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Admission Requirements</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              General requirements for different degree levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Bachelor's Degree</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {university.admissionRequirements.bachelor.map((req, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Master's Degree</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {university.admissionRequirements.master.map((req, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>PhD Degree</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {university.admissionRequirements.phd.map((req, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#129255] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-white">Ready to Apply to {university.name}?</h2>
            <p className="text-xl text-white/90 text-pretty leading-relaxed">
              Take the next step in your academic journey. Our experts will guide you through the application process
              and help you secure scholarships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 bg-white text-[#129255] hover:bg-gray-100">
                <Link href="/apply">
                  Start Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#129255] bg-transparent"
              >
                <Link href="/contact">Get Personalized Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
