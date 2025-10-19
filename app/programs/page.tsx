"use client"

import Link from "next/link"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Star, Clock, Globe, DollarSign, GraduationCap, Filter, X } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import programsData from "@/data/programs.json"
import { useState, useMemo, useEffect } from "react"

// Type definitions
type Program = {
  id: string;
  majorName: string;
  degreeLevel: string;
  duration: string;
  language: string;
  fee: string;
  description: string;
}

type Category = {
  name: string;
  programs: Program[];
}

type Country = {
  name: string;
  flag: string;
  color: string;
  programCount: number;
  categories: Category[];
}

type ProgramsData = {
  countries: {
    china: Country;
    hungary: Country;
    italy: Country;
    [key: string]: Country;
  }
}

// Note: Metadata is handled in layout.tsx or can be set dynamically with next/head

export default function ProgramsPage() {
  const programs = (programsData as ProgramsData).countries
  
  // Filter states
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>("")
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1)
  const programsPerPage = 12

  // Color classes function
  const getColorClasses = (country: string) => {
    switch (country) {
      case 'china':
        return {
          bg: 'from-primary/10 to-primary/5',
          border: 'border-primary/20',
          accent: 'text-primary',
          button: 'bg-primary hover:bg-primary/90',
          card: 'hover:shadow-primary/20',
          badge: 'bg-primary/10 text-primary'
        }
      case 'hungary':
        return {
          bg: 'from-green-500/10 to-green-500/5',
          border: 'border-green-500/20',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          card: 'hover:shadow-green-500/20',
          badge: 'bg-green-100 text-green-700'
        }
      case 'italy':
        return {
          bg: 'from-blue-500/10 to-blue-500/5',
          border: 'border-blue-500/20',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          card: 'hover:shadow-blue-500/20',
          badge: 'bg-blue-100 text-blue-700'
        }
      default:
        return {
          bg: 'from-gray-500/10 to-gray-500/5',
          border: 'border-gray-500/20',
          accent: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700',
          card: 'hover:shadow-gray-500/20',
          badge: 'bg-gray-100 text-gray-700'
        }
    }
  }

  // Get all unique categories across all countries
  const allCategories = useMemo(() => {
    const categories = new Set<string>()
    Object.values(programs).forEach((country: Country) => {
      country.categories.forEach((category: Category) => {
        categories.add(category.name)
      })
    })
    return Array.from(categories).sort()
  }, [programs])

  // Filter programs based on selected filters
  const filteredPrograms = useMemo(() => {
    let filtered: { [key: string]: Country } = { ...programs }
    
    // Filter by country
    if (selectedCountry && programs[selectedCountry]) {
      filtered = { [selectedCountry]: programs[selectedCountry] }
    }
    
    // Filter by category and search term
    Object.keys(filtered).forEach(countryKey => {
      filtered[countryKey] = {
        ...filtered[countryKey],
        categories: filtered[countryKey].categories
          .filter((category: Category) => {
            // Filter by category
            if (selectedCategory && category.name !== selectedCategory) {
              return false
            }
            
            // Filter by search term
            if (searchTerm) {
              const searchLower = searchTerm.toLowerCase()
              return category.programs.some((program: Program) => 
                program.majorName.toLowerCase().includes(searchLower) ||
                category.name.toLowerCase().includes(searchLower)
              )
            }
            
            return true
          })
          .map((category: Category) => ({
            ...category,
            programs: searchTerm 
              ? category.programs.filter((program: Program) => 
                  program.majorName.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : category.programs
          }))
      }
    })
    
    // Remove countries with no categories
    Object.keys(filtered).forEach(countryKey => {
      if (filtered[countryKey].categories.length === 0) {
        delete filtered[countryKey]
      }
    })
    
    return filtered
  }, [programs, selectedCountry, selectedCategory, searchTerm])

  // Flatten all programs for pagination
  const allPrograms = useMemo(() => {
    const programs: Array<{
      id: string;
      majorName: string;
      degreeLevel: string;
      duration: string;
      language: string;
      fee: string;
      description: string;
      category: string;
      country: string;
      countryKey: string;
      colors: any;
    }> = []
    
    Object.entries(filteredPrograms).forEach(([countryKey, country]) => {
      const colors = getColorClasses(countryKey)
      country.categories.forEach(category => {
        category.programs.forEach(program => {
          programs.push({
            ...program,
            category: category.name,
            country: country.name,
            countryKey,
            colors
          })
        })
      })
    })
    
    return programs
  }, [filteredPrograms])

  // Pagination logic
  const totalPages = Math.ceil(allPrograms.length / programsPerPage)
  const startIndex = (currentPage - 1) * programsPerPage
  const endIndex = startIndex + programsPerPage
  const currentPrograms = allPrograms.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCountry, selectedCategory, searchTerm])

  return (
    <>
      <Head>
        <title>All Study Programs by Country | Next Stop Global</title>
        <meta name="description" content="Explore our complete catalog of study programs available across China, Hungary, and Italy. Find your perfect major with detailed information about each program." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance text-gray-900 leading-tight">
                All Study Programs by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Country</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 text-pretty max-w-4xl mx-auto leading-relaxed">
                Explore our complete catalog of <span className="font-bold text-primary">200+ programs</span> across China, Hungary, and Italy. Find detailed information about each program including duration, language, and fees.
              </p>
            </div>

         
          </div>
        </div>
      </section>

      {/* Filter and Programs Section */}
      <section className="py-8 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section with Search */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Study Programs</h2>
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, allPrograms.length)} of {allPrograms.length} programs
              </p>
            </div>
            
            {/* Search Input */}
            <div className="w-full lg:w-80">
              <input
                type="text"
                placeholder="Search by program name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-3">

                {/* Country Filter */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-sm">Countries</h3>
                      {selectedCountry && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCountry(null)}
                          className="text-gray-500 hover:text-gray-700 h-6 w-6 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className={`w-full text-left p-2 rounded-md transition-all text-sm ${
                          !selectedCountry 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        All Countries
                      </button>
                      {Object.entries(programs).map(([countryKey, country]) => (
                        <button
                          key={countryKey}
                          onClick={() => setSelectedCountry(countryKey)}
                          className={`w-full text-left p-2 rounded-md transition-all flex items-center gap-2 text-sm ${
                            selectedCountry === countryKey 
                              ? 'bg-primary text-white shadow-md' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          <img 
                            src={countryKey === 'china' ? '/china-flag.png' : countryKey === 'hungary' ? '/hungary-flag.png' : '/italy-flag.png'} 
                            alt={country.name} 
                            className="w-5 h-3 rounded-sm"
                          />
                          {country.name}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Category Filter */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-sm">Categories</h3>
                      {selectedCategory && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCategory(null)}
                          className="text-gray-500 hover:text-gray-700 h-6 w-6 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left p-2 rounded-md transition-all text-sm ${
                          !selectedCategory 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        All Categories
                      </button>
                      {allCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left p-2 rounded-md transition-all text-sm ${
                            selectedCategory === category 
                              ? 'bg-primary text-white shadow-md' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Active Filters */}
                {(selectedCountry || selectedCategory || searchTerm) && (
                  <Card className="border-0 shadow-lg bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Active Filters</h3>
                      <div className="space-y-2">
                        {selectedCountry && programs[selectedCountry] && (
                          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                            <span className="text-sm">Country: {programs[selectedCountry].name}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedCountry(null)}
                              className="h-6 w-6 p-0 text-gray-500"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                        {selectedCategory && (
                          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                            <span className="text-sm">Category: {selectedCategory}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedCategory(null)}
                              className="h-6 w-6 p-0 text-gray-500"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                        {searchTerm && (
                          <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                            <span className="text-sm">Search: "{searchTerm}"</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSearchTerm("")}
                              className="h-6 w-6 p-0 text-gray-500"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Right Content - Programs */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Study Programs</h2>
                    <p className="text-gray-600">
                      Showing {startIndex + 1}-{Math.min(endIndex, allPrograms.length)} of {allPrograms.length} programs
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>
                  </div>
                </div>

                {/* Programs Grid */}
                {allPrograms.length === 0 ? (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-12 text-center">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">No Programs Found</h3>
                      <p className="text-gray-600 mb-6">Try adjusting your filters or search terms to find more programs.</p>
                      <Button 
                        onClick={() => {
                          setSelectedCountry(null)
                          setSelectedCategory(null)
                          setSearchTerm("")
                        }}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Clear All Filters
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {currentPrograms.map((program, index) => (
                        <Card key={`${program.id}-${index}`} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={program.countryKey === 'china' ? '/china-flag.png' : program.countryKey === 'hungary' ? '/hungary-flag.png' : '/italy-flag.png'} 
                                  alt={program.country} 
                                  className="w-6 h-4 rounded-sm"
                                />
                                <Badge className={`${program.colors.badge} text-xs`}>
                                  {program.country}
                                </Badge>
                              </div>
                              <Badge className={`${program.colors.badge} text-xs`}>
                                <GraduationCap className="h-3 w-3 mr-1" />
                                {program.degreeLevel}
                              </Badge>
                            </div>
                            
                            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                              {program.majorName}
                            </h3>
                            
                            <p className="text-sm text-gray-600 mb-4">{program.category}</p>
                            
                            <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <Clock className="h-3 w-3" />
                                {program.duration}
                              </span>
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <Globe className="h-3 w-3" />
                                {program.language}
                              </span>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className={`flex-1 border ${program.colors.border} ${program.colors.accent} hover:bg-primary hover:text-white text-xs`}>
                                View Details
                              </Button>
                              <Button size="sm" className={`flex-1 ${program.colors.button} text-white text-xs`}>
                                Apply Now
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-8">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="flex items-center gap-2"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        
                        <div className="flex items-center gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            const pageNum = i + 1
                            return (
                              <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCurrentPage(pageNum)}
                                className={`w-10 h-10 ${currentPage === pageNum ? 'bg-primary text-white' : ''}`}
                              >
                                {pageNum}
                              </Button>
                            )
                          })}
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-2"
                        >
                          Next
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
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
