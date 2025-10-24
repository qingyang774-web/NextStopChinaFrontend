"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, FileText, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, Clock, Users, Globe, Plane, Shield, HeartHandshake } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function VisaPage() {
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
              <Shield className="h-4 w-4 mr-2 inline" />
              Student Visa Processing Services
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
              Hassle-Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Visa Processing</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
              We handle your complete visa processing for <span className="font-bold text-primary">China, Hungary, and Italy</span>. 
              From document preparation to travel support, we make your journey smooth and stress-free.
            </p>
            
            {/* Country Flags */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <img src="/china-flag.png" alt="China" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">China</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/hungary-flag.png" alt="Hungary" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">Hungary</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/italy-flag.png" alt="Italy" className="w-8 h-6 rounded-sm shadow-md" />
                <span className="text-sm font-semibold text-gray-700">Italy</span>
              </div>
            </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Comprehensive Visa Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support for your student visa application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Document Preparation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete assistance with all required documents including forms, certificates, translations, and supporting materials for visa applications.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Application Submission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional submission of your visa application with proper documentation, embassy appointments, and continuous follow-up tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Plane className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Travel Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete travel assistance including flight bookings, airport pickup arrangements, and initial accommodation setup in your destination country.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Medical Checks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Guidance on medical examination requirements, approved clinics, and assistance with health certificate documentation for your visa.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <HeartHandshake className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  One-on-one counseling sessions with our visa experts to address your concerns and ensure a smooth application process.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-500/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Accommodation Help</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assistance in finding and securing safe, comfortable accommodation near your university before you arrive in the country.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Country-Specific Visa Information */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 px-4 py-1 text-sm mb-4">
              Country-Specific Information
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Visa Requirements by Country</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed visa information for each destination country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* China Visa */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/china-flag.png" alt="China" className="w-12 h-8 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">China (X1/X2 Visa)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Processing Time</p>
                      <p className="text-gray-600 text-sm">4-6 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa Type</p>
                      <p className="text-gray-600 text-sm">X1 (&gt;180 days) / X2 (&lt;180 days)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Key Requirements</p>
                      <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                        <li>JW202/201 Form</li>
                        <li>Admission Notice</li>
                        <li>Health Certificate</li>
                        <li>Bank Statement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hungary Visa */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/hungary-flag.png" alt="Hungary" className="w-12 h-8 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">Hungary (Schengen D)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Processing Time</p>
                      <p className="text-gray-600 text-sm">6-8 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa Type</p>
                      <p className="text-gray-600 text-sm">National D Visa (Student)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Key Requirements</p>
                      <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                        <li>Acceptance Letter</li>
                        <li>Proof of Accommodation</li>
                        <li>Travel Insurance</li>
                        <li>Financial Proof</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Italy Visa */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/italy-flag.png" alt="Italy" className="w-12 h-8 rounded-md shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">Italy (Schengen D)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Processing Time</p>
                      <p className="text-gray-600 text-sm">6-10 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Visa Type</p>
                      <p className="text-gray-600 text-sm">National D Visa (Study)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Key Requirements</p>
                      <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                        <li>University Enrollment</li>
                        <li>Declaration of Value</li>
                        <li>Health Insurance</li>
                        <li>Sufficient Funds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined approach to hassle-free visa processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-white h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Document Collection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We guide you in gathering all required documents, certificates, and supporting materials
                  </p>
                </CardContent>
              </Card>
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-orange-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-white h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Form Completion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert assistance in accurately completing all visa application forms and paperwork
                  </p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/5 to-white h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Embassy Submission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional submission to embassy/consulate with proper documentation
                  </p>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/5 to-white h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Tracking & Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous follow-up and handling of any additional requirements or queries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm mb-4">
              Required Documents
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Essential Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common documents needed for student visa applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  Academic Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Admission/Acceptance letter from university</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Academic transcripts (notarized & translated)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Degree certificates (notarized & translated)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Language proficiency certificates (if applicable)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  Personal Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Valid passport (minimum 6 months validity)</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Recent passport-size photographs</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medical examination & health certificate</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Financial proof & bank statements</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-blue-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Your Visa Process?</h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Our experienced team can handle your entire visa application process for China, Hungary, and Italy. 
              Contact us for professional assistance and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl group">
                <Link href="/contact" className="flex items-center gap-3">
                  Get Free Consultation <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl">
                <Link href="/programs">Browse Programs</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-300" />
                <span>100% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-300" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-yellow-300" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}
