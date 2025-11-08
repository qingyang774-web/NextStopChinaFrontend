import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CallToAction from "@/components/layout/callToAction"
import FloatingActionButton from "@/components/layout/FloatingActionButton"
import {
  GraduationCap,
  ArrowRight,
  Globe,
  DollarSign,
  MapPin,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import countries from "@/data/countries.json"

export const metadata = {
  title: "Study Destinations - China, Hungary & Italy | ManaraScholars",
  description:
    "Explore top study destinations including China, Hungary, and Italy. Compare universities, scholarships, and living costs across different countries with ManaraScholars.",
}

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
     <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(18, 146, 85, 0.1) 0%, transparent 0%), 
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 0%)`
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                Discover Your Perfect
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Study Destination
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                Compare top study destinations around the world. From ancient civilizations to modern innovation, find
                the perfect country to pursue your academic dreams.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">1000+ Scholarships</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="font-semibold">Top Universities</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-semibold">Affordable Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Explore Destinations</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Choose Your Next <span className="text-primary">Academic Adventure</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three incredible destinations, each offering unique opportunities for international students
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {countries.map((country, index) => (
              <Card
                key={country.id}
                className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                
                <div className="relative">
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={country.heroImage || "/placeholder.jpg"}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    
                    {/* Flag Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/50 rounded-lg blur-md" />
                        <div className="relative w-24 h-16 overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                        <Image
                          src={country.flag || "/placeholder.svg"}
                          alt={`${country.name} flag`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                        </div>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Country Name */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-4xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {country.name}
                      </h2>
                      <p className="text-white/95 text-base font-medium">{country.tagline}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 space-y-6 bg-gradient-to-b from-white to-gray-50/50">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {country.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Capital</span>
                        </div>
                        <p className="font-semibold text-sm">{country.capital}</p>
                      </div>
                      <div className="space-y-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Population</span>
                        </div>
                        <p className="font-semibold text-sm">{country.population}</p>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Living Cost</span>
                        </div>
                        <span className="font-bold text-primary">{country.livingCost.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Scholarships</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          {country.scholarships.length} Available
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Universities</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          {country.topUniversities.length}+
                        </Badge>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className="w-full mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group/btn" 
                      size="lg"
                    >
                      <Link href={`/countries/${country.slug}`} className="flex items-center justify-center">
                        Explore {country.name} 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Benefits</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Why Study <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">Abroad?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the life-changing benefits of international education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Global Perspective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gain international exposure and cross-cultural understanding that lasts a lifetime
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Quality Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access world-class universities and cutting-edge research facilities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Career Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enhance your employability with valuable international experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Network Building</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build a global network of friends and professional contacts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <CallToAction />
    <Footer />
    <FloatingActionButton />
    </div>
  )
}

