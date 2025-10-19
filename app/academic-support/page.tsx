"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, BookOpen, Globe, Award, Star, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"

export default function AcademicSupportPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-blue-500/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 text-sm">
              <BookOpen className="h-4 w-4 mr-2 inline" />
              Academic Excellence Support
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              Excel in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Academic Journey</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Comprehensive academic guidance and support throughout your studies abroad. 
              We help you <span className="font-bold text-primary">succeed academically</span> and achieve your goals with expert mentorship!
            </p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Academic Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you excel in your studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Study Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized study plans and academic roadmaps to help you stay on track with your studies.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Tutoring Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  One-on-one tutoring sessions with experienced tutors to help you understand difficult subjects.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Assignment Help</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assistance with assignments, projects, and research papers to improve your academic performance.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cultural Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Help with cultural adaptation and integration into academic and social life abroad.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-yellow-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Time Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategies and tools to help you manage your time effectively and balance studies with activities.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Exam Preparation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive exam prep support with study materials, practice tests, and revision strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">How We Support You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-step approach to academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Assessment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Evaluate your academic needs and challenges</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-green-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Planning</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Create personalized academic support plan</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Implementation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Provide ongoing support and guidance</p>
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Monitoring</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Track progress and adjust support as needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1 text-sm mb-4">
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Student Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from students who achieved academic excellence with our support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "The academic support team helped me improve my grades significantly. Their tutoring sessions were invaluable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">Ahmed Hassan</p>
                    <p className="text-sm text-gray-600">Engineering, Tsinghua University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "The cultural integration support made my transition to university life much smoother and helped me adapt quickly."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">Maria Rodriguez</p>
                    <p className="text-sm text-gray-600">Business, Peking University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "The study planning and time management strategies helped me balance my studies and personal life perfectly."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">MBBS, Zhengzhou University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction />
      </div>

      <Footer />
    </div>
    </>
  )
}
