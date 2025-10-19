"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Stethoscope, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe, Heart, Award, BookOpen, Hospital } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"

export default function MedicalProgramsPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-red-500/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 text-sm">
              <Stethoscope className="h-4 w-4 mr-2 inline" />
              Medical Education Abroad
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">MBBS Abroad</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              Pursue your dream of becoming a doctor with <span className="font-bold text-primary">MBBS and BDS programs</span> in China, Hungary, and Italy. 
              WHO-approved, affordable tuition, English-medium programs, and scholarship opportunities available!
            </p>
            
            {/* Country Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10">
                <img src="/china-flag.png" alt="China" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-base font-bold text-gray-900">China</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-green-500/10">
                <img src="/hungary-flag.png" alt="Hungary" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-base font-bold text-gray-900">Hungary</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-500/10">
                <img src="/italy-flag.png" alt="Italy" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-base font-bold text-gray-900">Italy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study MBBS Abroad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Why Study Abroad?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Why Study MBBS Abroad?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class medical education with numerous advantages across three countries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">WHO Approved</h3>
                <p className="text-gray-600 leading-relaxed">All universities recognized by WHO and international medical councils</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">English Medium</h3>
                <p className="text-gray-600 leading-relaxed">Complete MBBS programs taught in English</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Admission</h3>
                <p className="text-gray-600 leading-relaxed">Direct admission process with minimal requirements</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Affordable Fees</h3>
                <p className="text-gray-600 leading-relaxed">Low tuition fees with scholarship opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Programs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Available Medical Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized medical degree programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">MBBS</h3>
                    <Badge className="bg-primary text-white mt-2 shadow-md">Bachelor of Medicine</Badge>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bachelor of Medicine and Bachelor of Surgery - Complete medical degree program with comprehensive clinical training.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Duration: 6 years (5+1 internship)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Medium: English Language</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">WHO, MCI, ECFMG Approved</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <Hospital className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Clinical Training Hospitals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">BDS</h3>
                    <Badge className="bg-blue-600 text-white mt-2 shadow-md">Bachelor of Dental Surgery</Badge>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bachelor of Dental Surgery - Comprehensive dental program with modern facilities and hands-on training.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Duration: 5 years (4+1 internship)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Medium: English Language</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">International Recognition</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Hospital className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Modern Dental Clinics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1 text-sm mb-4">
              Top Medical Universities
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Partner Universities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Study at WHO-approved medical universities across three countries
            </p>
          </div>

          <div className="space-y-12">
            {/* China Universities */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <img src="/china-flag.png" alt="China" className="w-10 h-7 rounded-sm shadow-lg" />
                <h3 className="text-2xl font-bold text-white">China</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Hospital className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Zhengzhou University</h3>
                    <p className="text-gray-600 text-sm mb-3">Zhengzhou, China</p>
                    <Badge className="bg-primary/10 text-primary">MBBS & BDS</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Hospital className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Jiangsu University</h3>
                    <p className="text-gray-600 text-sm mb-3">Zhenjiang, China</p>
                    <Badge className="bg-primary/10 text-primary">MBBS & BDS</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Hospital className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Nanjing University</h3>
                    <p className="text-gray-600 text-sm mb-3">Nanjing, China</p>
                    <Badge className="bg-primary/10 text-primary">MBBS & BDS</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hungary & Italy Universities */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <img src="/hungary-flag.png" alt="Hungary" className="w-8 h-6 rounded-sm shadow-lg" />
                  <h3 className="text-xl font-bold text-white">Hungary</h3>
                </div>
                <Card className="border-0 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Hospital className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Semmelweis University</h3>
                    <p className="text-gray-600 text-sm mb-3">Budapest, Hungary</p>
                    <Badge className="bg-green-100 text-green-700">MBBS</Badge>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <img src="/italy-flag.png" alt="Italy" className="w-8 h-6 rounded-sm shadow-lg" />
                  <h3 className="text-xl font-bold text-white">Italy</h3>
                </div>
                <Card className="border-0 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Hospital className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Sapienza University</h3>
                    <p className="text-gray-600 text-sm mb-3">Rome, Italy</p>
                    <Badge className="bg-blue-100 text-blue-700">MBBS</Badge>
                  </CardContent>
                </Card>
              </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Admission Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential requirements for MBBS admission abroad
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
                  <span className="text-gray-700">High school diploma with 70%+ marks</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Physics, Chemistry, Biology (PCB mandatory)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Minimum 60% in each science subject</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Age: 17-25 years (can be relaxed)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  Language & Other Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">IELTS/TOEFL optional (varies by university)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No entrance exam for most universities</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Valid passport with 6+ months validity</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medical fitness certificate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Global Recognition
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">International Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practice medicine worldwide with globally recognized degrees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">WHO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">World Health Organization approved</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">PMC/PMDC</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Pakistan Medical Commission approved</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">ECFMG</h3>
                <p className="text-gray-600 text-sm leading-relaxed">US Medical Graduate certification</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Stethoscope className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Global</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Practice in 180+ countries</p>
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
