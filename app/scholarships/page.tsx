"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe, DollarSign, Star, BookOpen } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"

export default function ScholarshipsPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 text-sm">
              <Award className="h-4 w-4 mr-2 inline" />
              Full Scholarship Support
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Scholarship Opportunities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Explore scholarship programs across <span className="font-bold text-primary">China, Hungary, and Italy</span>. 
              From full coverage to partial support, we help you find the right funding for your education abroad!
            </p>
            
            {/* Country Flags */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/china-flag.png" alt="China" className="w-8 h-6 rounded-sm shadow-md" />
                <div className="text-left">
                  <span className="text-sm font-bold text-gray-900 block">China</span>
                  <span className="text-xs text-primary font-semibold">Full Support</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/hungary-flag.png" alt="Hungary" className="w-8 h-6 rounded-sm shadow-md" />
                <div className="text-left">
                  <span className="text-sm font-bold text-gray-900 block">Hungary</span>
                  <span className="text-xs text-green-600 font-semibold">Partial Support</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/italy-flag.png" alt="Italy" className="w-8 h-6 rounded-sm shadow-md" />
                <div className="text-left">
                  <span className="text-sm font-bold text-gray-900 block">Italy</span>
                  <span className="text-xs text-blue-600 font-semibold">Limited Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* China Scholarships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src="/china-flag.png" alt="China" className="w-16 h-12 rounded-md shadow-lg" />
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-2">
                Full Support Available
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">China Scholarships</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-600 text-white shadow-md">100% Full</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">CSC Scholarship</h3>
                <p className="text-gray-600 text-sm mb-4">Chinese Government Scholarship Council program for international students</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Full tuition waiver</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Free accommodation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">¥2,500-3,500/month stipend</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Medical insurance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-yellow-500/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-yellow-600 text-white shadow-md">Full/Partial</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">University Scholarships</h3>
                <p className="text-gray-600 text-sm mb-4">Direct scholarships from Chinese universities based on merit</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-gray-700">50-100% tuition waiver</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-gray-700">Free/subsidized accommodation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-gray-700">¥1,000-2,000/month (varies)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-gray-700">Based on academic performance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-blue-600 text-white shadow-md">Full</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Provincial Scholarships</h3>
                <p className="text-gray-600 text-sm mb-4">Scholarships from Chinese provincial governments</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Full tuition coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Free dormitory</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">¥2,000-3,000/month allowance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Health insurance included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hungary Scholarships Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src="/hungary-flag.png" alt="Hungary" className="w-16 h-12 rounded-md shadow-lg" />
            <div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-1 text-sm mb-2">
                Partial Support Available
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Hungary Scholarships</h2>
            </div>
          </div>

          <div className="grid md:grid-cols gap-6 max-w-4xl mx-auto">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-600 text-white shadow-md">Partial</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">University Fee Waivers</h3>
                <p className="text-gray-600 text-sm mb-4">Partial tuition reduction by Hungarian universities</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">25-50% tuition reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Merit-based selection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">No living allowance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Student must cover remaining fees</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-green-800 font-semibold">Limited support - Contact for details</p>
                </div>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </section>

      {/* Italy Scholarships Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src="/italy-flag.png" alt="Italy" className="w-16 h-12 rounded-md shadow-lg" />
            <div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1 text-sm mb-2">
                Limited Support Available
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Italy Scholarships</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-blue-600 text-white shadow-md">Full</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Italian Government Scholarship</h3>
                <p className="text-gray-600 text-sm mb-4">Government scholarship for international students</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Full tuition coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">€900/month stipend</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Health insurance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Highly competitive</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-800 font-semibold">Note: Very limited slots available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-orange-500 text-white shadow-md">Partial</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Regional DSU Scholarships</h3>
                <p className="text-gray-600 text-sm mb-4">Regional grants for tuition reduction in Italy</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">30-50% tuition reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Income-based eligibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">No living allowance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Varies by region</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-xs text-orange-800 font-semibold">Limited support - Contact for details</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we help you secure 100% scholarships for China
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Free Assessment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We evaluate your academic profile and match you with suitable scholarships</p>
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Document Preparation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Complete assistance in preparing and organizing all required documents</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-yellow-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Application Submission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Professional submission of applications before deadlines</p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-yellow-500 to-blue-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
              </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Follow-up Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Continuous tracking and support until admission confirmation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Eligibility Criteria
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">General Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common requirements for scholarship applications (primarily for China)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  Academic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">High school diploma with 60%+ marks (Bachelor's)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bachelor degree for Master's programs</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Master degree for PhD programs</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No age restrictions for most programs</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  Language Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No language requirement (English-taught programs)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">HSK 4+ for Chinese-taught programs</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free Chinese language course (1-year preparatory)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">IELTS/TOEFL optional but recommended</span>
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