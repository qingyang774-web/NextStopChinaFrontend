"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Award, Globe, BookOpen, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"
import FloatingActionButton from "@/components/layout/FloatingActionButton"

export default function ConsultationPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 text-sm">
              <Users className="h-4 w-4 mr-2 inline" />
              Free Expert Consultation
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              Your Journey Starts with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Expert Guidance</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Get personalized advice on university selection, program matching, and application strategy for studying in 
              <span className="font-bold text-primary"> China, Hungary, and Italy</span> - absolutely free!
            </p>
            
            {/* Country Flags */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg">
                <img src="/china-flag.png" alt="China" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">China</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg">
                <img src="/hungary-flag.png" alt="Hungary" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">Hungary</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg">
                <img src="/italy-flag.png" alt="Italy" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">Italy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1 text-sm mb-4">
              Study Destinations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Why Study Abroad?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore world-class education opportunities in three amazing countries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* China Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 to-white hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/china-flag.png" alt="China" className="w-16 h-12 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">China</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">World-Class Universities</p>
                      <p className="text-gray-600 text-sm">Top-ranked institutions with cutting-edge research</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Affordable Tuition</p>
                      <p className="text-gray-600 text-sm">Low cost of living with scholarship opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Global Experience</p>
                      <p className="text-gray-600 text-sm">Learn Mandarin and immerse in rich culture</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hungary Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-500/10 to-white hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/hungary-flag.png" alt="Hungary" className="w-16 h-12 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">Hungary</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">European Education</p>
                      <p className="text-gray-600 text-sm">EU-recognized degrees with high standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Cost-Effective</p>
                      <p className="text-gray-600 text-sm">Lower tuition compared to Western Europe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Central Location</p>
                      <p className="text-gray-600 text-sm">Easy access to 26 European countries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Italy Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-500/10 to-white hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/italy-flag.png" alt="Italy" className="w-16 h-12 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">Italy</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Historic Excellence</p>
                      <p className="text-gray-600 text-sm">Home to oldest universities in the world</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Affordable Lifestyle</p>
                      <p className="text-gray-600 text-sm">Public universities with low tuition fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Cultural Heritage</p>
                      <p className="text-gray-600 text-sm">Study in the heart of art and fashion</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consultation services to guide your educational decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">University Selection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert guidance to choose the right university based on your academic goals, budget, and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Program Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find the perfect program that aligns with your career aspirations and academic background.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Application Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic planning to maximize your chances of admission and scholarship opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our streamlined consultation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Initial Contact</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Reach out to us via phone, email, or WhatsApp</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-orange-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Assessment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We assess your academic background and career goals</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Recommendation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Receive personalized university and program recommendations</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Follow-up</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Ongoing support throughout your application journey</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction />
            </div>

      <Footer />
      <FloatingActionButton />
    </div>
    </>
  )
}
