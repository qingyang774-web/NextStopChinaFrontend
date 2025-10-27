"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Phone, Mail, MessageCircle, MapPin, Clock, Globe, Send, CheckCircle, AlertCircle, X, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useContactFormSubmission } from "@/hooks/useFormSubmission"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });

  const { isSubmitting, submitError, submitSuccess, submitContactForm, resetForm } = useContactFormSubmission({
    onSuccess: () => {
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        message: "",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContactForm(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/professional-call-center-consultant-with-headphones.png"
            alt="Professional Call Center Consultant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
        
        {/* Background Overlay Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="w-fit mb-6 bg-white/90 text-gray-900">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-primary">Next Stop Global</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Ready to start your journey to studying in China, Hungary, or Italy? Our expert consultants are here to help you every step
              of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-gray-900">+92 326 613 4987</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-gray-900">info@nextstopglobal.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have questions about studying in China, Hungary, or Italy? Need help with your scholarship application? We're here to
                  help! Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Phone Support</h3>
                        <p className="text-muted-foreground">Call us for immediate assistance</p>
                        <p className="text-primary font-medium">+86 371 1234 5678</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM (China Time)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Email Support</h3>
                        <p className="text-muted-foreground">Send us detailed inquiries</p>
                        <p className="text-primary font-medium">info@nextstopglobal.com</p>
                        <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">WhatsApp Support</h3>
                        <p className="text-muted-foreground">Quick chat support</p>
                        <p className="text-primary font-medium">+86 371 1234 5678</p>
                        <p className="text-sm text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Office Address</h3>
                        <p className="text-muted-foreground">Visit us in person</p>
                        <p className="text-foreground">
                          Zhongyuan District
                          <br />
                          Zhengzhou, Henan Province, China
                        </p>
                        <p className="text-sm text-muted-foreground">By appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitSuccess && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <p className="text-orange-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input 
                        id="country" 
                        placeholder="Enter your country" 
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Interested Program</Label>
                      <Input 
                        id="program" 
                        placeholder="e.g., MBBS, Computer Science, Engineering" 
                        value={formData.program}
                        onChange={(e) => handleInputChange('program', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your educational goals and any specific questions you have..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     

      {/* Office Hours & Additional Info */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <p className="text-muted-foreground mt-4">All times in China Standard Time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Global Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  We serve students from over 50 countries worldwide. Our multilingual team provides support in English,
                  Chinese, Spanish, and French.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  For urgent matters related to visa applications or university deadlines, contact our emergency
                  WhatsApp line available 24/7.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="w-fit mx-auto mb-4">
              Our Location
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Located in Zhongyuan District, Zhengzhou - the heart of Henan Province, China
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d113.534670!3d34.831508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzUzLjQiTiAxMTPCsDMyJzA0LjgiRQ!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Next Stop Global Office Location - Zhengzhou, China"
                ></iframe>
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Next Stop Global Office</CardTitle>
                      <CardDescription>Zhengzhou, Henan Province</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Zhongyuan District<br />
                      Zhengzhou, Henan Province<br />
                      China
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Access</h4>
                    <p className="text-muted-foreground">
                      Easily accessible by metro, bus, and taxi from Zhengzhou city center. 
                      Close to major universities and educational institutions.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=34.831508,113.534670" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a 
                        href="https://www.google.com/maps/@34.831508,113.534670,15z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

           
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  )
}
