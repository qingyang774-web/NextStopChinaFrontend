"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GraduationCap, Users, Award, Phone, Mail, ArrowRight, Globe, BookOpen, Star, TrendingUp, CheckCircle, UserCheck, Mail as MailIcon, ChevronLeft, ChevronRight, CheckCircle2, FileText, Languages, Stethoscope, Clock, Calendar, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useNewsletterSubmission } from "@/hooks/useFormSubmission"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import programsData from "@/data/programs.json"
import blogsData from "@/data/blogs.json"
import CallToAction from "@/components/layout/callToAction"

// Function to count total programs from JSON data
const getTotalProgramCount = () => {
  let totalCount = 0
  Object.values(programsData.countries).forEach((country: any) => {
    country.categories.forEach((category: any) => {
      totalCount += category.programs.length
    })
  })
  return totalCount
}

// Function to count programs for a specific country
const getCountryProgramCount = (countryKey: string) => {
  const country = programsData.countries[countryKey as keyof typeof programsData.countries]
  if (!country) return 0
  
  let count = 0
  country.categories.forEach((category: any) => {
    count += category.programs.length
  })
  return count
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  
  const { isSubmitting, submitError, submitSuccess, subscribeToNewsletter } = useNewsletterSubmission({
    onSuccess: () => {
      setNewsletterEmail("")
    },
  })

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      await subscribeToNewsletter({ email: newsletterEmail.trim(), source: 'homepage' })
    }
  }
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentCertSlide, setCurrentCertSlide] = useState(0)
  
  const certificates = [
    { src: "/Admission Letters/817240c64fa2b6e05bdc4e83dc092878.jpg", alt: "Success Certificate 1" },
    { src: "/Admission Letters/bf7aa11eee927a8943836134e9b1992c.jpg", alt: "Success Certificate 2" },
    { src: "/Admission Letters/5c0f853376fdb26ee15bf92328a62089.jpg", alt: "Success Certificate 3" },
    { src: "/Admission Letters/140e5b9682e5236a80d0e1546db33ca0.jpg", alt: "Success Certificate 4" },
    { src: "/Admission Letters/89974ed632b1c546d776dd684dccb505.jpg", alt: "Success Certificate 5" },
    { src: "/Admission Letters/af60b0f42f28214adc7622c68a647524.jpg", alt: "Success Certificate 6" },
  ]
  
  const slides = [
    {
      badge: "🇨🇳 Study in China",
      title: "World-Class Education in China",
      description: "Your gateway to top Chinese universities with scholarships. We help students secure bachelor's, master's, and PhD scholarships with expert guidance and proven success.",
      primaryButton: { text: "Explore China", href: "/countries/china" },
      secondaryButton: { text: "China Scholarships", href: "/scholarships" },
      image: "/chinese-university-campus-with-international-stude.jpg",
      alt: "Students studying at Chinese university"
    },
    {
      badge: "🇭🇺 Study in Hungary",
      title: "Affordable European Education",
      description: "Discover Hungary's prestigious universities with low tuition fees and high-quality education. Experience European culture while pursuing your academic dreams.",
      primaryButton: { text: "Explore Hungary", href: "/countries/hungary" },
      secondaryButton: { text: "Hungary Programs", href: "/scholarships" },
      image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/283/wide_fullhd_webp_hungary-budapest.webp",
      alt: "Students studying at Hungarian university"
    },
    {
      badge: "🇮🇹 Study in Italy",
      title: "Historic Excellence in Education",
      description: "Study at Italy's world-renowned universities with rich history and cutting-edge research. Experience la dolce vita while advancing your career.",
      primaryButton: { text: "Explore Italy", href: "/countries/italy" },
      secondaryButton: { text: "Italy Opportunities", href: "/scholarships" },
      image: "https://blog.remitforex.com/wp-content/uploads/2023/03/Italy-university-feature.webp",
      alt: "Students studying at Italian university"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  // Auto-slide for certificates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertSlide((prev) => (prev + 1) % certificates.length)
    }, 4000) // Change certificate every 4 seconds

    return () => clearInterval(interval)
  }, [certificates.length])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const nextSlide = () => {
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }



  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2);
          }
          50% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #fbbf24;
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink 0.75s step-end infinite;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%,rgb(15, 96, 50) 100%);
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      <Header />

      {/* Hero Section - Beautiful Carousel with University Images */}
      <section className="relative overflow-hidden h-[85vh]">
        <div
          className="relative w-full h-full overflow-hidden group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Slides Container */}

          <div className="flex h-[85vh] mb-[250px] transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    filter: 'brightness(0.6)'
                  }}
                />


                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content - Left Side */}
                      <div className="space-y-8 max-w-2xl">
                        <div className="space-y-6">
                        <Badge 
                          variant="secondary" 
                            className="w-fit bg-primary/90 text-white border-primary backdrop-blur-sm px-4 py-2 text-sm font-medium"
                        >
                          {slide.badge}
                        </Badge>
                          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight text-white drop-shadow-2xl">
                          {slide.title}
                        </h1>
                          <p className="text-lg sm:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg max-w-xl">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 shadow-xl px-8 py-4 text-lg font-semibold">
                          <Link href={slide.primaryButton.href}>
                            {slide.primaryButton.text} <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold">
                          <Link href={slide.secondaryButton.href}>{slide.secondaryButton.text}</Link>
                        </Button>
                      </div>
                    </div>
                    
                      {/* University Cards - Right Side
                      <div className="space-y-6">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:bg-white/90 hover:backdrop-blur-2xl transition-all duration-300">
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                              <div className="text-4xl">
                                {index === 0 ? "🇨🇳" : index === 1 ? "🇭🇺" : "🇮🇹"}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                {index === 0 ? "China" : index === 1 ? "Hungary" : "Italy"}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {index === 0 
                                  ? "World-class education with affordable tuition fees and extensive scholarship opportunities."
                                  : index === 1 
                                  ? "European education with Stipendium Hungaricum scholarships and low living costs."
                                  : "Historic universities with Italian government scholarships and rich cultural heritage."
                                }
                              </p>
                            </div>
                          </div>
                        </div>

                      </div> */}
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-300 rounded-full p-4 z-20 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-300 rounded-full p-4 z-20 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-white/80 hover:bg-white hover:scale-110'
                  }`}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Quick Service Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance text-gray-900 leading-tight">
              Our <span className="text-primary">Quick Services</span>
            </h2>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto leading-relaxed">
              Get instant access to our most popular services designed to make your study abroad journey seamless
            </p>
          </div>

          {/* Service Cards Container */}
          <div className="bg-white rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-20 left-32 w-40 h-40 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10 p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Student Visa */}
                <div className="group bg-white rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  {/* Moving border animation */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    {/* Top border - moves from left to right */}
                    <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    {/* Right border - moves from top to bottom */}
                    <div className="absolute top-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-200"></div>
                    {/* Bottom border - moves from right to left */}
                    <div className="absolute bottom-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out delay-400"></div>
                    {/* Left border - moves from bottom to top */}
                    <div className="absolute bottom-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-600"></div>
                  </div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-4xl">✈️</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Free Consultancy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Get expert advice on university selection, program matching, and application strategy for China, Hungary, and Italy at no cost.
                  </p>
                  <Link href="/consultation" className="text-primary font-semibold hover:text-orange-600 inline-flex items-center text-sm transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
          </div>

                {/* Test Prep */}
                <div className="group bg-white rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  {/* Moving border animation - clockwise */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    {/* Top border - moves from right to left */}
                    <div className="absolute top-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    {/* Right border - moves from bottom to top */}
                    <div className="absolute bottom-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-200"></div>
                    {/* Bottom border - moves from left to right */}
                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out delay-400"></div>
                    {/* Left border - moves from top to bottom */}
                    <div className="absolute top-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-600"></div>
                  </div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-4xl">🌍</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Scholarship Facility</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Navigate scholarship opportunities with our proven strategies and insider knowledge of universities in China, Hungary, and Italy.
                  </p>
                  <Link href="/scholarships" className="text-primary font-semibold hover:text-orange-600 inline-flex items-center text-sm transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </div>

                {/* Course Finder */}
                <div className="group bg-white rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  {/* Moving border animation - counter-clockwise */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    {/* Top border - moves from left to right */}
                    <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    {/* Left border - moves from top to bottom */}
                    <div className="absolute top-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-200"></div>
                    {/* Bottom border - moves from right to left */}
                    <div className="absolute bottom-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out delay-400"></div>
                    {/* Right border - moves from bottom to top */}
                    <div className="absolute bottom-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-600"></div>
                  </div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-4xl">🏛️</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Language Courses</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Master languages with our specialized courses. English, Chinese, Hungarian, and Italian training with certified instructors.
                  </p>
                  <Link href="/language-courses" className="text-primary font-semibold hover:text-orange-600 inline-flex items-center text-sm transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </div>

                {/* Financial Support */}
                <div className="group bg-white rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  {/* Moving border animation - diagonal */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    {/* Top border - moves from right to left */}
                    <div className="absolute top-0 right-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                    {/* Right border - moves from top to bottom */}
                    <div className="absolute top-0 right-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-200"></div>
                    {/* Bottom border - moves from left to right */}
                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out delay-400"></div>
                    {/* Left border - moves from bottom to top */}
                    <div className="absolute bottom-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-1000 ease-in-out delay-600"></div>
                  </div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <div className="text-4xl">💰</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Medical Programs</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  MBBS and BDS programs at top medical universities with international recognition and WHO accreditation.
                  </p>
                  <Link href="/medical-programs" className="text-primary font-semibold hover:text-orange-600 inline-flex items-center text-sm transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Success in <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of students worldwide to achieve their educational dreams in China, Hungary, and Italy
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Students Placed */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-xl font-bold text-white mb-2">Students Placed</p>
                <p className="text-gray-300">Successfully enrolled in universities worldwide</p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <p className="text-xl font-bold text-white mb-2">Success Rate</p>
                <p className="text-gray-300">Scholarship application success rate</p>
              </div>
            </div>

            {/* Partner Universities */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">75+</div>
                <p className="text-xl font-bold text-white mb-2">Partner Universities</p>
                <p className="text-gray-300">Top-tier institutions worldwide</p>
              </div>
            </div>

            {/* Years Experience */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
                <p className="text-xl font-bold text-white mb-2">Years Experience</p>
                <p className="text-gray-300">Helping students achieve their dreams</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Available Majors - Redesigned */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-white to-primary/10 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance text-gray-900 leading-tight">
              Popular Study <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto leading-relaxed">
              Explore our most popular programs available across China, Hungary, and Italy
            </p>
          </div>

          {/* Country Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-3 bg-gradient-to-br from-primary/10 to-white rounded-2xl px-8 py-4 shadow-xl border-2 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="/china-flag.png" alt="China" className="w-10 h-6 rounded-sm"></img>
              <div>
                <p className="font-bold text-gray-900 text-lg">China</p>
                <p className="text-xs text-gray-600">{getCountryProgramCount('china')} Programs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-orange-500 to-white rounded-2xl px-8 py-4 shadow-xl border-2 border-orange-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img src="/hungary-flag.png" alt="China" className="w-10 h-6 rounded-sm"></img>
              <div>
                <p className="font-bold text-gray-900 text-lg">Hungary</p>
                <p className="text-xs text-gray-600">{getCountryProgramCount('hungary')} Programs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-blue-500/10 to-white rounded-2xl px-8 py-4 shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img src="/italy-flag.png" alt="China" className="w-10 h-6 rounded-sm"></img>
              <div>
                <p className="font-bold text-gray-900 text-lg">Italy</p>
                <p className="text-xs text-gray-600">{getCountryProgramCount('italy')} Programs</p>
              </div>
            </div>
          </div>

          {/* Popular Majors Grid - Show Only Top 6 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Medicine */}
            <Card className="group relative border-2 border-red-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">🏥</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">Medicine</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">MBBS, Dentistry, Pharmacy, Nursing</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Engineering */}
            <Card className="group relative border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">💻</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">Engineering</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Computer, Electrical, Mechanical, Civil</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Business */}
            <Card className="group relative border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">💼</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">Business</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">MBA, Management, Finance, Marketing</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* IT & Computing */}
            <Card className="group relative border-2 border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">🖥️</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">IT & Computing</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Computer Science, Software Engineering</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Arts & Design */}
            <Card className="group relative border-2 border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">🎨</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">Arts & Design</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Fine Arts, Fashion, Graphic Design</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Architecture */}
            <Card className="group relative border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden hover:border-primary cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-5xl">🏗️</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-2xl group-hover:text-primary transition-colors">Architecture</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Architecture, Urban Planning, Design</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                    <img src="/china-flag.png" alt="China" className="w-4 h-4 rounded-sm" />
                    China
                  </Badge>
                  <Badge className="bg-orange-500/10 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/hungary-flag.png" alt="Hungary" className="w-4 h-4 rounded-sm" />
                    Hungary
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2">
                    <img src="/italy-flag.png" alt="Italy" className="w-4 h-4 rounded-sm" />
                    Italy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Show More Majors Preview */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-12">
            <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">And Many More Programs Available!</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore our complete catalog of {getTotalProgramCount()}+ programs including Sciences, Law, Tourism, Culinary Arts, Humanities, Economics, and Social Sciences across all three countries.
                </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge className="bg-white/80 text-primary px-4 py-2">Sciences</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Law</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Tourism</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Culinary Arts</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Humanities</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Economics</Badge>
                <Badge className="bg-white/80 text-primary px-4 py-2">Social Sciences</Badge>
                <Badge className="bg-primary/20 text-primary px-4 py-2">+ 10 More</Badge>
        </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl">
                <Link href="/programs" className="flex items-center gap-3">
                  View All Programs by Country <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
              <p className="text-gray-600 text-sm">
                Can't find your major? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for personalized guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">

            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-white">
              Explore Popular Destinations
            </h2>
            <p className="text-lg text-white text-pretty max-w-2xl mx-auto">
              Choose from our top study destinations and start your global education journey today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* China Card */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                  src="/chinese-university-campus-with-international-stude.jpg"
                  alt="Study in China"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">🇨🇳</span>
                    <h3 className="text-2xl font-bold text-white">China</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    World-class universities with cutting-edge research facilities and extensive scholarship programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Tuition</div>
                      <div className="text-primary">Full/Partial Scholarship</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-primary">3-4 Years</div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                    <Link href="/countries/china">Explore China</Link>
                  </Button>
                  </div>
                </CardContent>
              </Card>

            {/* Hungary Card */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                  src="https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/283/wide_fullhd_webp_hungary-budapest.webp"
                  alt="Study in Hungary"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">🇭🇺</span>
                    <h3 className="text-2xl font-bold text-white">Hungary</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Affordable European education with Stipendium Hungaricum scholarships and rich cultural experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Tuition</div>
                      <div className="text-primary">€2,000-8,000/yr</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-primary">3-4 Years</div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                    <Link href="/countries/hungary">Explore Hungary</Link>
                  </Button>
                  </div>
                </CardContent>
              </Card>

            {/* Italy Card */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                  src="https://blog.remitforex.com/wp-content/uploads/2023/03/Italy-university-feature.webp"
                  alt="Study in Italy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">🇮🇹</span>
                    <h3 className="text-2xl font-bold text-white">Italy</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Historic universities with world-renowned arts, design programs, and government scholarships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Tuition</div>
                      <div className="text-primary">€2,500-4,000/yr</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-primary">3-5 Years</div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                    <Link href="/countries/italy">Explore Italy</Link>
                  </Button>
                  </div>
                </CardContent>
              </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">ManaraScholars?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the preferred choice for students seeking quality education abroad across three amazing countries
            </p>
          </div>

          <div className="relative">
            {/* Main Content Container */}
            <div className="grid lg:grid-cols-3 gap-16 items-center">

              {/* Left Side - Image with Overlay */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/diverse-students-studying-together-at-modern-chine.jpg"
                    alt="International students studying together"
                    className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">150+</div>
                          <div className="text-xs text-gray-600 font-medium">Students Placed</div>
                  </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">95%</div>
                          <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">3</div>
                          <div className="text-xs text-gray-600 font-medium">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Why Choose Us Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold">WHY CHOOSE US </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
              </div>

              {/* Center - Content Cards */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Expert Guidance</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We provide comprehensive support to make your dream of studying abroad a reality with our expert guidance and proven track record.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Proven Results</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our dedicated team ensures 95% success rate in applications and scholarships across China, Hungary, and Italy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Feature Points */}
              <div className="space-y-6">

                {/* Feature 1 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Expert Guidance</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Get personalized advice from our experienced counselors with insider knowledge of universities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Quick Processing</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Fast-track your application with our streamlined process and efficient document handling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Proven Success</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Join 150+ successful students with our 95% success rate in scholarship applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Personal Support</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Dedicated support throughout your journey from application to arrival at your dream university.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-20 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-primary">Support Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From consultation to graduation, we provide end-to-end support for your educational journey in China, Hungary, and Italy
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Free Consultancy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Free Consultancy</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Get expert advice on university selection, program matching, and application strategy for China, Hungary, and Italy at no cost.
                </p>
                <Link href="/consultation" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
              </div>
            </div>

            {/* Scholarship Facility */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-8 w-8 text-white" />
                  </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scholarship Facility</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Navigate scholarship opportunities with our proven strategies and insider knowledge of universities in China, Hungary, and Italy.
                </p>
                <Link href="/scholarships" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </div>
            </div>

            {/* Student Visa Processing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Student Visa Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Complete visa assistance with 95% success rate. We handle all documentation and provide travel & accommodation support.
                </p>
                <Link href="/visa" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                  </div>
            </div>

            {/* Language Courses */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Languages className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Language Courses</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Master languages with our specialized courses. English, Chinese, Hungarian, and Italian training with certified instructors.
                </p>
                <Link href="/language-courses" className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
              </div>
            </div>

            {/* Medical Programs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                <h3 className="text-2xl font-bold text-white mb-4">Medical Programs</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  MBBS and BDS programs at top medical universities with international recognition and WHO accreditation.
                </p>
                <Link href="/medical-programs" className="inline-flex items-center text-red-400 font-semibold hover:text-red-300 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </div>
            </div>

            {/* Academic Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Academic Support</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Comprehensive academic guidance and ongoing support throughout your educational journey from application to graduation.
                </p>
                <Link href="/academic-support" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors group-hover:translate-x-1">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-8 border border-primary/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get personalized guidance from our expert counselors and take the first step towards your dream education abroad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl">
                  <Users className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-gray-900">
              Your Study Abroad Journey
            </h2>
            <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
              Our streamlined process to make your dream of studying abroad a reality
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Free Consultation</h3>
                <p className="text-sm text-gray-600">Discuss your goals and get personalized guidance</p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">University Selection</h3>
                <p className="text-sm text-gray-600">Choose the best university and program for you</p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Application Preparation</h3>
                <p className="text-sm text-gray-600">We help prepare all required documents</p>
              </div>

              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Visa Processing</h3>
                <p className="text-sm text-gray-600">Complete visa application and approval</p>
              </div>

              {/* Step 5 */}
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-2xl font-bold text-primary">5</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Departure & Support</h3>
                <p className="text-sm text-gray-600">Travel assistance and post-arrival support</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 px-8 py-4">
              <Link href="/apply">Start Your Journey <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Universities Logos Slider */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-balance text-white">
              Our Partner Universities
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              We work with prestigious institutions across China, Hungary, and Italy
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            {/* Slider Track */}
            <div className="flex animate-scroll">
              {/* First Set of Universities */}
              <div className="flex space-x-8 min-w-full">
                {/* Zhengzhou University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/zhengzhou.png" alt="Zhengzhou University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Zhengzhou University</div>
                    <div className="text-white/70 text-xs">Zhengzhou, China</div>
                  </div>
                </div>

                {/* Changshu University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/changsha.png" alt="Changshu University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Changshu University</div>
                    <div className="text-white/70 text-xs">Changshu, China</div>
                  </div>
                </div>

                {/* Tianjin University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/tianjin.png" alt="Tianjin University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Tianjin University</div>
                    <div className="text-white/70 text-xs">Tianjin, China</div>
                  </div>
                </div>

                {/* Shanghai Jiao Tong University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/Shanghai.png" alt="Shanghai Jiao Tong University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Shanghai Jiao Tong</div>
                    <div className="text-white/70 text-xs">Shanghai, China</div>
                  </div>
                </div>

                {/* Zhejiang University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/zhejiang.jpg" alt="Zhejiang University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Zhejiang University</div>
                    <div className="text-white/70 text-xs">Hangzhou, China</div>
                  </div>
                </div>

                {/* Nanjing University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/nanjing.png" alt="Nanjing University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Nanjing University</div>
                    <div className="text-white/70 text-xs">Nanjing, China</div>
                  </div>
                </div>

                {/* Jiangsu University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/Jiangsu_University_logo.png" alt="Jiangsu University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Jiangsu University</div>
                    <div className="text-white/70 text-xs">Zhenjiang, China</div>
                  </div>
                </div>

                {/* Harbin Institute of Technology */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <img src="/placeholder-logo.png" alt="Harbin Institute" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Harbin Institute</div>
                    <div className="text-white/70 text-xs">Harbin, China</div>
                  </div>
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="flex space-x-8 min-w-full">
                {/* Zhengzhou University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/zhengzhou.png" alt="Zhengzhou University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Zhengzhou University</div>
                    <div className="text-white/70 text-xs">Zhengzhou, China</div>
                  </div>
                </div>

                {/* Changshu University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/changsha.png" alt="Changshu University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Changshu University</div>
                    <div className="text-white/70 text-xs">Changshu, China</div>
                  </div>
                </div>

                {/* Tianjin University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/tianjin.png" alt="Tianjin University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Tianjin University</div>
                    <div className="text-white/70 text-xs">Tianjin, China</div>
                  </div>
                </div>

                {/* Shanghai Jiao Tong University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/Shanghai.png" alt="Shanghai Jiao Tong University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Shanghai Jiao Tong</div>
                    <div className="text-white/70 text-xs">Shanghai, China</div>
                  </div>
                </div>

                {/* Zhejiang University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/zhejiang.jpg" alt="Zhejiang University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Zhejiang University</div>
                    <div className="text-white/70 text-xs">Hangzhou, China</div>
                  </div>
                </div>

                {/* Nanjing University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/nanjing.png" alt="Nanjing University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Nanjing University</div>
                    <div className="text-white/70 text-xs">Nanjing, China</div>
                  </div>
                </div>

                {/* Jiangsu University */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/University logos/Jiangsu_University_logo.png" alt="Jiangsu University" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Jiangsu University</div>
                    <div className="text-white/70 text-xs">Zhenjiang, China</div>
                  </div>
                </div>

                {/* Harbin Institute of Technology */}
                <div className="flex-shrink-0 flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <img src="/placeholder-logo.png" alt="Harbin Institute" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-white font-semibold text-sm">Harbin Institute</div>
                    <div className="text-white/70 text-xs">Harbin, China</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Real stories from students who achieved their dreams of studying abroad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "ManaraScholars made my dream of studying medicine in China a reality. Their guidance was exceptional, and I secured a full scholarship at Capital Medical University."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">MBBS Student, Capital Medical University</p>
                  </div>
                  </div>
                </CardContent>
              </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "The team's expertise in scholarship applications is unmatched. I got accepted to University of Bologna with a full PhD scholarship. Highly recommended!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Ahmed Hassan</p>
                    <p className="text-sm text-muted-foreground">PhD Student, University of Bologna</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  "From application to visa processing, ManaraScholars handled everything professionally. Now I'm pursuing my Master's in Medicine at Semmelweis University."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Master's Student, Semmelweis University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Certificates Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 text-sm mb-4">
              <Award className="h-4 w-4 mr-2 inline" />
              Documented Success
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Achievement Records</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See the documented success of our students who secured admissions at top universities
            </p>
          </div>

          {/* Success Certificates Slider */}
          <div className="relative overflow-hidden py-12">
            {/* Decorative Elements - Gradient Overlays */}
            {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
              <div className="absolute top-1/2 left-0 w-40 h-full bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent"></div>
              <div className="absolute top-1/2 right-0 w-40 h-full bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent"></div>
            </div> */}

            <div className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentCertSlide * 33.333}%)` }}>
              {certificates.map((cert, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="relative group overflow-hidden rounded-2xl bg-white shadow-2xl transform transition-all duration-500 hover:scale-105 border-4 border-white/20">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <Badge className="bg-primary text-white">Successful Placement</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentCertSlide((prev) => (prev - 1 + certificates.length) % certificates.length)}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 border-2 border-primary/30 hover:border-primary text-white backdrop-blur-sm w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentCertSlide((prev) => (prev + 1) % certificates.length)}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 border-2 border-primary/30 hover:border-primary text-white backdrop-blur-sm w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCertSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCertSlide === index
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-300 text-lg">
              Each certificate represents a student who successfully achieved their dream of studying abroad
            </p>
            <Button size="lg" variant="outline" asChild className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white px-8 py-4 bg-white/5 backdrop-blur-sm">
              <Link href="/contact">Start Your Success Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-gray-900">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
              Watch real stories from our students who achieved their dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Card 1 */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img
                  src="/student-success-story-chinese-university-graduatio.jpg"
                  alt="Student Success Video"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">From Nigeria to Beijing: Sarah's MBBS Journey</h3>
                <p className="text-gray-600 text-sm mb-3">Watch how Sarah secured a full scholarship at Capital Medical University</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    5:30
                  </span>
                  <span>•</span>
                  <span>MBBS Graduate</span>
                  </div>
                </CardContent>
              </Card>

            {/* Video Card 2 */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img
                  src="/diverse-students-studying-together-at-modern-chine.jpg"
                  alt="Virtual Campus Tour"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Virtual Campus Tour: Semmelweis University</h3>
                <p className="text-gray-600 text-sm mb-3">Explore Hungary's premier medical university through our virtual tour</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    4:15
                  </span>
                  <span>•</span>
                  <span>Campus Tour</span>
                  </div>
                </CardContent>
              </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
              <Link href="/blog">Watch More Stories</Link>
              </Button>
          </div>
        </div>
      </section>


      {/* Blog/News Teaser */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about scholarships, application deadlines, and study abroad opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogsData.posts.slice(0, 3).map((post, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 text-balance">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
              Find answers to common questions about studying abroad
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                What countries do you provide services for?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                We provide comprehensive services for students looking to study in China, Hungary, and Italy. Our expert counselors assist with university selection, application processing, scholarship guidance, and visa support for all three countries.
                </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you offer scholarship assistance?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes! We help students apply for various scholarships including Chinese Government Scholarship (CSC), Stipendium Hungaricum (Hungary), Italian Government Scholarships, and university-specific scholarships. Our success rate is 95%.
                  </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                What is the application timeline?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                The application process typically takes 3-6 months from initial consultation to visa approval. We recommend starting at least 6-8 months before your desired intake. Application deadlines vary by country and university.
                  </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                What are the language requirements?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Most programs require IELTS 6.0+ or TOEFL 80+ for English-taught programs. For Chinese programs, HSK 4+ is required. Italian programs may require Italian B2 level. We also offer language preparation courses for all requirements.
                </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you help with visa processing?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes, we provide complete visa processing support including document preparation, application submission, and follow-up. We also offer travel assistance and post-arrival support to ensure a smooth transition.
                </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                What are the tuition fees and living costs?
                <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Tuition fees vary by country: China ($3,000-5,000/year), Hungary (€2,000-8,000/year), Italy (€2,500-4,000/year). Living costs range from $400-800/month depending on the city and lifestyle. Many scholarships cover both tuition and living expenses.
                  </div>
            </details>
                  </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 px-8 py-4">
              <Link href="/contact">Ask More Questions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Community */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Connect With Us on <span className="text-primary">Social Media</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Follow us for daily updates, success stories, and study abroad tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <p className="text-lg font-bold text-white mb-2">Support Available</p>
                <p className="text-gray-300 text-sm mb-4">Message us on WhatsApp</p>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </Button>
              </div>
            </div>

            {/* Instagram */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">Daily</div>
                <p className="text-lg font-bold text-white mb-2">Updates & Tips</p>
                <p className="text-gray-300 text-sm mb-4">Follow us on Instagram</p>
                <Button size="sm" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  <a href="https://instagram.com/manarascholars" target="_blank" rel="noopener noreferrer">Follow</a>
                </Button>
              </div>
            </div>

            {/* Facebook */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">Community</div>
                <p className="text-lg font-bold text-white mb-2">Support & News</p>
                <p className="text-gray-300 text-sm mb-4">Follow us on Facebook</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="https://facebook.com/manarascholars" target="_blank" rel="noopener noreferrer">Follow</a>
                </Button>
              </div>
            </div>

            {/* Telegram */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-2">Instant</div>
                <p className="text-lg font-bold text-white mb-2">Updates & Alerts</p>
                <p className="text-gray-300 text-sm mb-4">Join our Telegram</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="https://t.me/manarascholars" target="_blank" rel="noopener noreferrer">Join Channel</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
     <CallToAction />

      <Footer />
      <FloatingActionButton />
    </div>
  )
}
