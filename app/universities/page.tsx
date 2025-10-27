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
  Star,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import universitiesData from "@/data/universities.json"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import CallToAction from "@/components/layout/callToAction"

export const metadata = {
  title: "Partner Universities Worldwide - Top Universities in China, Hungary & Italy",
  description:
    "Explore our partner universities in China, Hungary, and Italy. Top-ranked institutions offering quality education with scholarship opportunities for international students.",
}

export default function UniversitiesPage() {
  const universities = universitiesData.universities

  const stats = [
    {
      number: "75+",
      label: "Partner Universities",
      icon: GraduationCap,
    },
    {
      number: "300+",
      label: "Degree Programs",
      icon: BookOpen,
    },
    {
      number: "95%",
      label: "Scholarship Success Rate",
      icon: Award,
    },
    {
      number: "25,000+",
      label: "International Students",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[orange-600]/5 to-[orange-600]/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-[orange-600]/10 text-[orange-600] border-[orange-600]/20">
              Partner Universities
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance text-[#101828]">
              Study at <span className="text-[orange-600]">Top Universities Worldwide</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Discover world-class education opportunities at prestigious universities in China, Hungary, and Italy. Our partner
              institutions offer comprehensive programs with scholarship support for international students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 bg-[orange-600] text-white hover:bg-[orange-600]/90">
                <Link href="/apply">
                  Apply to Universities <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent border-[orange-600] text-[orange-600] hover:bg-[orange-600] hover:text-white">
                <Link href="/contact">Get University Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[orange-600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[orange-600]" />
                    </div>
                    <div className="text-3xl font-bold text-[orange-600] mb-2">{stat.number}</div>
                    <div className="text-[#101828]">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-[#101828]">Our Partner Universities</h2>
            <p className="text-xl text-gray-600 text-pretty max-w-2xl mx-auto">
              Explore top-ranked Chinese universities offering world-class education and research opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white hover:border-[orange-600]/20 hover:border-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={university.image || "/placeholder.svg"}
                    alt={`${university.name} campus`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#101828]">
                      {university.ranking}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-[orange-600]/90 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      {university.specialty}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-[orange-600] transition-colors text-balance text-[#101828]">
                    {university.name}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-gray-600">{university.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-[orange-600]" />
                      <span className="text-gray-600">Location:</span>
                    </div>
                    <span className="font-medium text-[#101828]">{university.location}</span>

                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[orange-600]" />
                      <span className="text-gray-600">Students:</span>
                    </div>
                    <span className="font-medium text-[#101828]">{university.students.toLocaleString()}+</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-[orange-600]" />
                      <span className="text-gray-600 text-sm">Founded:</span>
                    </div>
                    <span className="text-sm font-medium text-[#101828]">{university.founded}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-[orange-600]" />
                      <span className="text-gray-600 text-sm">Specialty:</span>
                    </div>
                    <span className="text-sm font-medium text-[orange-600]">{university.specialty}</span>
                  </div>

                  <Button asChild className="w-full bg-[orange-600] text-white hover:bg-[orange-600]/90 group-hover:bg-[orange-600]/80">
                    <Link href={`/universities/${university.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose Chinese Universities?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the advantages of studying at top Chinese institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Degrees from Chinese universities are recognized worldwide, opening doors to international career
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Research Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access cutting-edge research facilities and work with leading academics in your field of study.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Immerse yourself in Chinese culture while building a global network of friends and professional
                  contacts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <CallToAction />
    
      <Footer />

    
    <FloatingActionButton />
    </div>
  )
}
