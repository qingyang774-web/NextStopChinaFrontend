"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function ApplicationSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Next Stop China</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/scholarships" className="text-foreground hover:text-primary transition-colors">Scholarships</Link>
              <Link href="/universities" className="text-foreground hover:text-primary transition-colors">Universities</Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/apply" className="flex items-center gap-2">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
              Application Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance text-gray-900">
              Application Support Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete application assistance from document preparation to visa processing with 95% success rate. 
              Let our experts guide you through every step of your university application process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Application Support Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your university application journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Document Preparation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete assistance with all required documents including transcripts, certificates, and personal statements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Application Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional review and optimization of your application to maximize your chances of acceptance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">University Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert guidance to match you with the best universities based on your profile and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visa Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete visa application support including document preparation and embassy coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Timeline Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic planning and timeline management to ensure all deadlines are met efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Follow-up Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing support and communication with universities throughout the application process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step guidance through your university application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Assess your profile and discuss your goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">University Selection</h3>
              <p className="text-gray-600">Choose the best universities for your profile</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Application Preparation</h3>
              <p className="text-gray-600">Prepare and submit all required documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow-up & Support</h3>
              <p className="text-gray-600">Track applications and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Rate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Success Rate</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven track record of successful applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <h3 className="text-xl font-semibold mb-2">Application Success Rate</h3>
              <p className="text-gray-600">Students successfully admitted to their chosen universities</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">2,500+</div>
              <h3 className="text-xl font-semibold mb-2">Students Placed</h3>
              <p className="text-gray-600">Successfully enrolled in Chinese universities</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <h3 className="text-xl font-semibold mb-2">Partner Universities</h3>
              <p className="text-gray-600">Top-tier Chinese institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Application?</h2>
            <p className="text-xl text-gray-600">
              Let our experts guide you through the entire application process. 
              Contact us today for personalized support and maximize your chances of success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Application Process <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/universities">Browse Universities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Next Stop China</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Making higher education in China affordable and accessible for international students worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-primary transition-colors">About Us</Link>
                <Link href="/scholarships" className="block text-gray-300 hover:text-primary transition-colors">Scholarships</Link>
                <Link href="/universities" className="block text-gray-300 hover:text-primary transition-colors">Universities</Link>
                <Link href="/apply" className="block text-gray-300 hover:text-primary transition-colors">Apply Now</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-2">
                <Link href="/consultation" className="block text-gray-300 hover:text-primary transition-colors">Free Consultancy</Link>
                <Link href="/scholarships" className="block text-gray-300 hover:text-primary transition-colors">Scholarship Guidance</Link>
                <Link href="/visa" className="block text-gray-300 hover:text-primary transition-colors">Visa Processing</Link>
                <Link href="/language-courses" className="block text-gray-300 hover:text-primary transition-colors">Language Courses</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">+92 346 487 6094</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">info@nextstopchina.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Next Stop China. All rights reserved. | Making education dreams come true.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

