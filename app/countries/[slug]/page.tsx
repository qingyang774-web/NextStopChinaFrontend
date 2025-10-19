import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Globe,
  ArrowLeft,
  MapPin,
  Building2,
  Briefcase,
  Landmark,
  Heart,
  Award,
  Palette,
  UtensilsCrossed,
  Home,
  Utensils,
  Bus,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import countriesData from "@/data/countries.json"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return countriesData.map((country) => ({
    slug: country.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const country = countriesData.find((c) => c.slug === params.slug)

  if (!country) {
    return {
      title: "Country Not Found",
    }
  }

  return {
    title: `Study in ${country.name} - ${country.tagline}`,
    description: country.description,
  }
}

const iconMap: { [key: string]: any } = {
  GraduationCap,
  DollarSign,
  Landmark,
  Briefcase,
  Building2,
  Globe,
  Heart,
  Award,
  Palette,
  UtensilsCrossed,
  MapPin,
}

export default function CountryPage({ params }: Props) {
  const country = countriesData.find((c) => c.slug === params.slug)

  if (!country) {
    notFound()
  }

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

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/countries" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Countries
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{country.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={country.heroImage}
          alt={country.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={80}
                  height={53}
                  className="rounded shadow-lg"
                />
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold">{country.name}</h1>
                  <p className="text-xl text-white/90 mt-2">{country.tagline}</p>
                </div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">{country.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Capital</p>
              <p className="font-semibold">{country.capital}</p>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Population</p>
              <p className="font-semibold">{country.population}</p>
            </div>
            <div className="text-center">
              <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Language</p>
              <p className="font-semibold text-sm">{country.language.split(" ")[0]}</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Currency</p>
              <p className="font-semibold">{country.currency.split(" ")[0]}</p>
            </div>
            <div className="text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Timezone</p>
              <p className="font-semibold">{country.timezone}</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Universities</p>
              <p className="font-semibold">{country.fastFacts.universities}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Here */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Why Study in {country.name}?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover the unique advantages of pursuing your education in {country.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.whyStudyHere.map((reason, index) => {
              const Icon = iconMap[reason.icon] || GraduationCap
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Top Universities</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Study at prestigious institutions in {country.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.topUniversities.map((university, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-balance">{university}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Popular Programs</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore the most sought-after study programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {country.popularPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{program}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Cost of Living</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Affordable lifestyle with quality education in {country.name}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Monthly Living Expenses: {country.livingCost.monthly}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Home className="h-5 w-5 text-primary" />
                        <span>Accommodation</span>
                      </div>
                      <span className="font-semibold">{country.livingCost.accommodation}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Utensils className="h-5 w-5 text-primary" />
                        <span>Food</span>
                      </div>
                      <span className="font-semibold">{country.livingCost.food}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bus className="h-5 w-5 text-primary" />
                        <span>Transportation</span>
                      </div>
                      <span className="font-semibold">{country.livingCost.transportation}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Utilities</span>
                      </div>
                      <span className="font-semibold">{country.livingCost.utilities}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Available Scholarships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Financial support opportunities for international students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {country.scholarships.map((scholarship, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-balance mb-2">{scholarship}</h3>
                  <Button size="sm" variant="outline" asChild className="mt-4 w-full">
                    <Link href="/scholarships">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Admission Requirements</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              What you need to apply for studies in {country.name}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>Undergraduate Programs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {country.admissionRequirements.undergraduate.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>Postgraduate Programs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {country.admissionRequirements.postgraduate.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Student Life</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              What to expect as an international student in {country.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {country.studentLife.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Study in {country.name}?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Start your application today and join thousands of successful international students
              pursuing their dreams in {country.name}.
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
                <Link href="/contact">Talk to an Expert</Link>
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
                {countriesData.map((c) => (
                  <Link
                    key={c.id}
                    href={`/countries/${c.slug}`}
                    className={`block transition-colors ${
                      c.slug === country.slug ? "text-primary" : "text-background/80 hover:text-primary"
                    }`}
                  >
                    {c.name}
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

