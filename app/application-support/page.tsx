"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe } from "lucide-react"
import Link from "next/link"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"

export default function ApplicationSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
   

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
    <CallToAction />
    <Footer />
    <FloatingActionButton />

    </div>
  )
}

