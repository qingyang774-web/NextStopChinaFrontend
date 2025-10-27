"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe, BookOpen, Award, Video } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"
import FloatingActionButton from "@/components/layout/FloatingActionButton"

export default function LanguageCoursesPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 text-sm">
              <Languages className="h-4 w-4 mr-2 inline" />
              Language Training Programs
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Chinese Language</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Professional <span className="font-bold text-primary">Chinese (Mandarin) language courses</span> from beginner to advanced levels. 
              Prepare for HSK exams and your studies in China with our comprehensive training programs.
            </p>
            
            {/* Language Badge */}
            <div className="flex items-center justify-center pt-6">
              <div className="group flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
                <img src="/china-flag.png" alt="China" className="w-12 h-8 rounded-md shadow-lg" />
                <div className="text-left">
                  <span className="text-xl font-bold text-gray-900 block">Mandarin Chinese</span>
                  <span className="text-sm text-primary font-semibold">HSK 1-6 Preparation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Course
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Chinese Language Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Mandarin Chinese training designed for international students
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 via-white to-primary/10 overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-4 border-primary/10">
                    <img src="/china-flag.png" alt="China" className="w-16 h-12 rounded-md shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">Chinese Language</h3>
                    <Badge className="bg-primary text-white mt-2 shadow-md">HSK Preparation</Badge>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive Chinese language training from beginner to advanced levels. 
                  Prepare for HSK exams and master daily communication in China.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">HSK 1-6 Preparation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Speaking & Listening Practice</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Cultural Integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1 text-sm mb-4">
              Learning Paths
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Course Levels</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning paths for all proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-500/10 to-white hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-orange-600 text-white px-4 py-2 text-base">Beginner</Badge>
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Foundation Level</h3>
                <p className="text-gray-600">Basic vocabulary, grammar, and pronunciation</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Basic conversation skills</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Essential vocabulary (500+ words)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Simple grammar structures</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-full justify-center py-2 border-orange-600 text-orange-600 font-semibold">3-6 months</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-500/10 to-white hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-yellow-600 text-white px-4 py-2 text-base">Intermediate</Badge>
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Intermediate Level</h3>
                <p className="text-gray-600">Enhanced communication and academic skills</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Complex conversations</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Academic vocabulary (2000+ words)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Advanced grammar</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-full justify-center py-2 border-yellow-600 text-yellow-600 font-semibold">6-12 months</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-500/10 to-white hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-red-600 text-white px-4 py-2 text-base">Advanced</Badge>
                  <Award className="h-6 w-6 text-red-600" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Advanced Level</h3>
                <p className="text-gray-600">Professional and academic proficiency</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Professional communication</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Academic writing (5000+ words)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Cultural fluency</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-full justify-center py-2 border-red-600 text-red-600 font-semibold">12+ months</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Outstanding Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes our language training programs stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Small Class Sizes</h3>
                <p className="text-gray-600 leading-relaxed">Maximum 8 students per class for personalized attention and better learning</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Certified Teachers</h3>
                <p className="text-gray-600 leading-relaxed">Native speakers with professional teaching qualifications and experience</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Schedule</h3>
                <p className="text-gray-600 leading-relaxed">Morning, evening, and weekend classes available to fit your schedule</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cultural Integration</h3>
                <p className="text-gray-600 leading-relaxed">Learn language with cultural context and practices for better understanding</p>
              </CardContent>
            </Card>
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
