import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Globe,
  DollarSign,
  MapPin,
  Plane,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import countriesData from "@/data/countries.json"

export const metadata = {
  title: "Study Abroad Destinations - China, Hungary & Italy",
  description:
    "Explore top study abroad destinations. Find quality education in China, Hungary, and Italy with comprehensive scholarship opportunities.",
}

export default function CountriesPage() {
  const countries = countriesData

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Next Stop China</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/scholarships" className="text-foreground hover:text-primary transition-colors">
                Scholarships
              </Link>
              <Link href="/universities" className="text-foreground hover:text-primary transition-colors">
                Universities
              </Link>
              <Link href="/countries" className="text-primary font-medium">
                Countries
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Your Journey to <span className="text-primary">World-Class Education</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Explore exceptional study abroad destinations. From ancient civilizations to modern innovation,
              discover the perfect country for your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Study Destinations</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Choose from our carefully selected countries offering quality education and unique experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <Card
                key={country.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={country.heroImage}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
                        <p className="text-white/90 text-sm">{country.tagline}</p>
                      </div>
                      <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        width={60}
                        height={40}
                        className="rounded shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground line-clamp-3">{country.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Capital</span>
                      </div>
                      <p className="font-medium">{country.capital}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Students</span>
                      </div>
                      <p className="font-medium">{country.fastFacts.internationalStudents}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Tuition Range:</span>
                    </div>
                    <p className="font-medium text-sm">{country.fastFacts.yearlyTuition}/year</p>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild className="w-full group">
                      <Link href={`/countries/${country.slug}`}>
                        Explore {country.name}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Quick Comparison</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              See how our destinations compare at a glance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {countries.map((country) => (
                    <th key={country.id} className="px-6 py-4 text-center font-semibold">
                      {country.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4 font-medium">Universities</td>
                  {countries.map((country) => (
                    <td key={country.id} className="px-6 py-4 text-center">
                      {country.fastFacts.universities}
                    </td>
                  ))}
                </tr>
                <tr className="bg-muted/20">
                  <td className="px-6 py-4 font-medium">International Students</td>
                  {countries.map((country) => (
                    <td key={country.id} className="px-6 py-4 text-center">
                      {country.fastFacts.internationalStudents}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Yearly Tuition</td>
                  {countries.map((country) => (
                    <td key={country.id} className="px-6 py-4 text-center">
                      {country.fastFacts.yearlyTuition}
                    </td>
                  ))}
                </tr>
                <tr className="bg-muted/20">
                  <td className="px-6 py-4 font-medium">Monthly Living Cost</td>
                  {countries.map((country) => (
                    <td key={country.id} className="px-6 py-4 text-center">
                      {country.livingCost.monthly}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">English Programs</td>
                  {countries.map((country) => (
                    <td key={country.id} className="px-6 py-4 text-center">
                      {country.fastFacts.englishPrograms}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Study Abroad?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Transform your future with an international education experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Perspective</h3>
                <p className="text-muted-foreground text-sm">
                  Gain international experience and cultural awareness valued by employers worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Education</h3>
                <p className="text-muted-foreground text-sm">
                  Access world-class universities and innovative teaching methods
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Network Building</h3>
                <p className="text-muted-foreground text-sm">
                  Create lifelong connections with peers from around the world
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Life Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Develop independence, adaptability, and valuable life skills
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Start Your International Education Journey?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Get personalized guidance to choose the right destination and program for your goals.
              Our experts are here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Next Stop China</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Making higher education abroad affordable and accessible for international students worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/scholarships" className="block text-background/80 hover:text-primary transition-colors">
                  Scholarships
                </Link>
                <Link href="/universities" className="block text-background/80 hover:text-primary transition-colors">
                  Universities
                </Link>
                <Link href="/apply" className="block text-background/80 hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Countries</h4>
              <div className="space-y-2">
                {countries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/countries/${country.slug}`}
                    className="block text-background/80 hover:text-primary transition-colors"
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/80">info@nextstopchina.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">
              © 2025 Next Stop China. All rights reserved. | Making education dreams come true.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

