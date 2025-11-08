import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import {
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  Heart,
  Shield,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - ManaraScholars Education Consultancy",
  description:
    "Learn about ManaraScholars' mission to make higher education in China affordable and accessible. Trusted partnerships, high visa success rates, and expert guidance.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
    <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              About ManaraScholars
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Making Higher Education in China <span className="text-primary">Affordable & Accessible</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              We are dedicated to helping international students achieve their academic dreams through comprehensive
              scholarship guidance and expert application support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At ManaraScholars, we believe that quality education should be accessible to everyone, regardless of
                  their financial background. Our mission is to bridge the gap between ambitious students and
                  world-class Chinese universities through comprehensive scholarship programs and expert guidance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Democratizing Education</h3>
                    <p className="text-muted-foreground">
                      Making top-tier Chinese universities accessible to students worldwide through scholarship
                      opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Providing personalized consultation and application support with industry expertise and insider
                      knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Success-Driven Approach</h3>
                    <p className="text-muted-foreground">
                      Maintaining a 95% visa success rate through meticulous preparation and proven strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/diverse-students-studying-together-at-modern-chine.jpg"
                alt="Students at Chinese university"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose ManaraScholars?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our track record speaks for itself - we deliver results that change lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">95% Visa Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our proven application strategies and meticulous preparation ensure the highest success rates in the
                  industry.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Trusted Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Direct partnerships with 50+ top Chinese universities including Tsinghua, Peking University, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Affordable Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Transparent, competitive pricing with no hidden costs. Free initial consultation for all prospective
                  students.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2000+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Partner Universities</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Visa Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">8</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/professional-education-consultant-headshot.jpg"
                  alt="Dr. Sarah Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">Chief Education Consultant</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  PhD in International Education, 10+ years experience in Chinese university admissions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/professional-visa-specialist-headshot.jpg"
                  alt="Michael Zhang"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Michael Zhang</h3>
                <p className="text-primary font-medium mb-2">Visa Specialist</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Former embassy official with expertise in student visa processing and documentation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/professional-scholarship-advisor-headshot.jpg"
                  alt="Lisa Wang"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Lisa Wang</h3>
                <p className="text-primary font-medium mb-2">Scholarship Advisor</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Specialist in scholarship applications with connections to major funding organizations
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Journey to China?</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Join thousands of successful students who have achieved their dreams with our expert guidance and
              scholarship support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

     <Footer />
      {/* Floating WhatsApp Button */}
     <FloatingActionButton />
    </div>
  )
}
