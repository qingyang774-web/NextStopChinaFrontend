"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  FileText,
  User,
  BookOpen,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useApplicationFormSubmission } from "@/hooks/useFormSubmission"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"

export default function ApplyPage() {
  const [formData, setFormData] = useState<any>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
      dateOfBirth: "",
    },
    academic: {
      currentEducation: "",
      institution: "",
      gpa: "",
      graduationYear: "",
      fieldOfStudy: "",
    },
    program: {
      degreeLevel: "",
      preferredProgram: "",
      preferredUniversity: "",
      startDate: "",
    },
    documents: {
      transcript: false,
      passport: false,
      languageTest: false,
      recommendation: false,
    },
    additional: {
      scholarshipInterest: "",
      personalStatement: "",
      previousExperience: "",
    },
  })

  const { isSubmitting, submitError, submitSuccess, submitApplicationForm } = useApplicationFormSubmission({
    onSuccess: () => {
      // Reset form after successful submission
      setFormData({
        personalInfo: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nationality: "",
          dateOfBirth: "",
        },
        academic: {
          currentEducation: "",
          institution: "",
          gpa: "",
          graduationYear: "",
          fieldOfStudy: "",
        },
        program: {
          degreeLevel: "",
          preferredProgram: "",
          preferredUniversity: "",
          startDate: "",
        },
        documents: {
          transcript: false,
          passport: false,
          languageTest: false,
          recommendation: false,
        },
        additional: {
          scholarshipInterest: "",
          personalStatement: "",
          previousExperience: "",
        },
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitApplicationForm(formData);
  }

  const steps = [
    { id: 1, title: "Personal Information", icon: User },
    { id: 2, title: "Academic Background", icon: BookOpen },
    { id: 3, title: "Program Selection", icon: GraduationCap },
    { id: 4, title: "Documents", icon: FileText },
    { id: 5, title: "Additional Information", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              Application Form
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Apply for <span className="text-primary">Scholarships in China</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Start your journey to study in China. Complete our comprehensive application form and our experts will
              guide you through the scholarship and university application process.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.id} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                  {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground ml-2" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitSuccess && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <p className="text-orange-800">Application submitted successfully! We will review your application and get back to you within 2 weeks.</p>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Personal Information</span>
                  </CardTitle>
                  <CardDescription>Please provide your basic personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.personalInfo.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, firstName: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.personalInfo.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, lastName: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.personalInfo.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, email: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.personalInfo.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, phone: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Select
                        value={formData.personalInfo.nationality}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, nationality: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="ng">Nigeria</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.personalInfo.dateOfBirth}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, dateOfBirth: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Background */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Academic Background</span>
                  </CardTitle>
                  <CardDescription>Tell us about your educational background</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentEducation">Current Education Level *</Label>
                      <Select
                        value={formData.academic.currentEducation}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            academic: { ...formData.academic, currentEducation: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Current/Last Institution *</Label>
                      <Input
                        id="institution"
                        placeholder="Name of your school/university"
                        value={formData.academic.institution}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            academic: { ...formData.academic, institution: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="gpa">GPA/Grade *</Label>
                      <Input
                        id="gpa"
                        placeholder="3.5 or 85%"
                        value={formData.academic.gpa}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            academic: { ...formData.academic, gpa: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graduationYear">Graduation Year *</Label>
                      <Input
                        id="graduationYear"
                        placeholder="2024"
                        value={formData.academic.graduationYear}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            academic: { ...formData.academic, graduationYear: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                      <Input
                        id="fieldOfStudy"
                        placeholder="Computer Science, Business, etc."
                        value={formData.academic.fieldOfStudy}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            academic: { ...formData.academic, fieldOfStudy: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Selection */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Program Selection</span>
                  </CardTitle>
                  <CardDescription>Choose your preferred program and university</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="degreeLevel">Degree Level *</Label>
                      <Select
                        value={formData.program.degreeLevel}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            program: { ...formData.program, degreeLevel: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select degree level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="mbbs">MBBS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredProgram">Preferred Program *</Label>
                      <Input
                        id="preferredProgram"
                        placeholder="Computer Science, Business Administration, etc."
                        value={formData.program.preferredProgram}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            program: { ...formData.program, preferredProgram: e.target.value },
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredUniversity">Preferred University</Label>
                      <Select
                        value={formData.program.preferredUniversity}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            program: { ...formData.program, preferredUniversity: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred university" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tsinghua">Tsinghua University</SelectItem>
                          <SelectItem value="peking">Peking University</SelectItem>
                          <SelectItem value="fudan">Fudan University</SelectItem>
                          <SelectItem value="shanghai-jiaotong">Shanghai Jiao Tong University</SelectItem>
                          <SelectItem value="zhejiang">Zhejiang University</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <Select
                        value={formData.program.startDate}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            program: { ...formData.program, startDate: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select start date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall-2025">Fall 2025</SelectItem>
                          <SelectItem value="spring-2026">Spring 2026</SelectItem>
                          <SelectItem value="fall-2026">Fall 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Documents Checklist */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Required Documents</span>
                  </CardTitle>
                  <CardDescription>Check the documents you have ready or can provide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="transcript"
                        checked={formData.documents.transcript}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            documents: { ...formData.documents, transcript: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="transcript">Official Transcripts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="passport"
                        checked={formData.documents.passport}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            documents: { ...formData.documents, passport: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="passport">Valid Passport</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="languageTest"
                        checked={formData.documents.languageTest}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            documents: { ...formData.documents, languageTest: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="languageTest">Language Test Scores (IELTS/TOEFL/HSK)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recommendation"
                        checked={formData.documents.recommendation}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            documents: { ...formData.documents, recommendation: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="recommendation">Letters of Recommendation</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Additional Information</span>
                  </CardTitle>
                  <CardDescription>Help us understand your goals and background better</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="scholarshipInterest">Scholarship Interest *</Label>
                    <Select
                      value={formData.additional.scholarshipInterest}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          additional: { ...formData.additional, scholarshipInterest: value },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select scholarship type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Scholarship (100% coverage)</SelectItem>
                        <SelectItem value="partial">Partial Scholarship (50-80% coverage)</SelectItem>
                        <SelectItem value="any">Any Available Scholarship</SelectItem>
                        <SelectItem value="none">No Scholarship Needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="personalStatement">Personal Statement *</Label>
                    <Textarea
                      id="personalStatement"
                      placeholder="Tell us about your academic goals, why you want to study in China, and how this program fits your career plans... (minimum 200 words)"
                      className="min-h-32"
                      value={formData.additional.personalStatement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additional: { ...formData.additional, personalStatement: e.target.value },
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousExperience">Previous Experience (Optional)</Label>
                    <Textarea
                      id="previousExperience"
                      placeholder="Any relevant work experience, internships, research, or extracurricular activities..."
                      className="min-h-24"
                      value={formData.additional.previousExperience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additional: { ...formData.additional, previousExperience: e.target.value },
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Card className="border-0 shadow-lg bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">Ready to Submit Your Application?</h3>
                    <p className="text-muted-foreground">
                      Our experts will review your application and contact you within 24 hours with next steps and
                      scholarship opportunities.
                    </p>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="text-lg px-8" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      <Footer />
     <FloatingActionButton />
    </div>
  )
}
