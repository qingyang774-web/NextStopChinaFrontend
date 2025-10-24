import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CallToAction from "@/components/layout/callToAction"
import {
  GraduationCap,
  ArrowRight,
  Globe,
  DollarSign,
  MapPin,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  Calendar,
  Briefcase,
  Heart,
  Home,
  Book,
  Plane,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import countries from "@/data/countries.json"

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const country = countries.find((c) => c.slug === params.slug)

  if (!country) {
    return {
      title: "Country Not Found",
    }
  }

  return {
    title: `Study in ${country.name} - ${country.tagline} | Next Stop China`,
    description: country.description,
  }
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = countries.find((c) => c.slug === params.slug)

  if (!country) {
    notFound()
  }

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      "graduation-cap": GraduationCap,
      "dollar-sign": DollarSign,
      "globe": Globe,
      "briefcase": Briefcase,
      "star": Award,
      "map": MapPin,
      "heart": Heart,
      "book": Book,
      "palette": Award,
      "sun": Award,
      "award": Award,
    }
    return icons[iconName] || CheckCircle
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
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <Image src={country.heroImage || "/placeholder.jpg"} alt={country.name} fill className="object-cover scale-105" priority />
        </div>

        {/* Gradient Overlays - Lighter */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Animated Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-5xl text-white space-y-8">
              {/* Flag and Title */}
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-xl" />
                  <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-8 ring-white/30">
                    <Image src={country.flag || "/placeholder.svg"} alt={`${country.name} flag`} width={128} height={128} className="object-cover" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white border-white/50 backdrop-blur shadow-lg">
                      Study Destination
                    </Badge>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                      {country.name}
                    </h1>
                    <p className="text-2xl lg:text-3xl text-white/95 font-medium drop-shadow-md">{country.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-2xl text-white-800 leading-relaxed max-w-3xl backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
                {country.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-8 py-6 group"
                >
                  <Link href="/apply" className="flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/90 text-gray-800 hover:bg-white hover:text-primary backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative">
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Capital City</p>
                <p className="font-bold text-lg">{country.capital}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative">
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Population</p>
                <p className="font-bold text-lg">{country.population}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative">
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Language</p>
                <p className="font-bold text-sm leading-tight">{country.language}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative">
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Currency</p>
                <p className="font-bold text-lg">{country.currency}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Study Here */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-blue-500/5 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Key Benefits</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Why Study in <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">{country.name}?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover what makes {country.name} an exceptional study destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {country.whyStudyHere.map((reason, index) => {
              const IconComponent = getIconComponent(reason.icon)
              const colors = [
                { from: 'from-primary', to: 'to-primary/80', bg: 'bg-primary/10', hover: 'hover:bg-primary/5' },
                { from: 'from-purple-600', to: 'to-purple-500', bg: 'bg-purple-500/10', hover: 'hover:bg-purple-500/5' },
                { from: 'from-blue-600', to: 'to-blue-500', bg: 'bg-blue-500/10', hover: 'hover:bg-blue-500/5' },
                { from: 'from-primary', to: 'to-primary/80', bg: 'bg-primary/10', hover: 'hover:bg-primary/5' }
              ]
              const color = colors[index % colors.length]

              return (
                <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur`}>
                  <div className={`absolute inset-0 ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className={`absolute inset-0 ${color.bg} rounded-2xl blur-lg group-hover:blur-xl transition-all`} />
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{reason.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed text-base">{reason.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs & Scholarships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Programs */}
            <div>
              <div className="space-y-4 mb-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Academic Programs</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Popular Programs</h2>
                <p className="text-muted-foreground">Top fields of study in {country.name}</p>
              </div>
              <div className="space-y-3">
                {country.popularPrograms.map((program, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">{program}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships */}
            <div>
              <div className="space-y-4 mb-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Financial Aid</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Scholarships</h2>
                <p className="text-muted-foreground">Funding opportunities available</p>
              </div>
              <div className="space-y-4">
                {country.scholarships.map((scholarship, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-bold text-lg leading-tight">{scholarship.name}</h3>
                          <p className="text-sm text-muted-foreground">{scholarship.coverage}</p>
                          <Badge variant="secondary" className="text-xs">{scholarship.eligibility}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">Affordability</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                Cost of Living
              </h2>
              <p className="text-xl text-white/90 text-pretty">
                Transparent breakdown of estimated monthly student expenses
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Total Cost Display */}
              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
                      <DollarSign className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">{country.livingCost.monthly}</h3>
                  <p className="text-lg text-white/90 font-medium">Average Monthly Cost</p>
                </CardContent>
              </Card>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Accommodation</span>
                      <p className="text-sm text-white/80">Housing & Utilities</p>
                    </div>
                  </div>
                  <span className="font-bold text-2xl">{country.livingCost.breakdown.accommodation}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Food & Dining</span>
                      <p className="text-sm text-white/80">Groceries & Restaurants</p>
                    </div>
                  </div>
                  <span className="font-bold text-2xl">{country.livingCost.breakdown.food}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Plane className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Transportation</span>
                      <p className="text-sm text-white/80">Public Transit & Travel</p>
                    </div>
                  </div>
                  <span className="font-bold text-2xl">{country.livingCost.breakdown.transportation}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Other Expenses</span>
                      <p className="text-sm text-white/80">Entertainment & Personal</p>
                    </div>
                  </div>
                  <span className="font-bold text-2xl">{country.livingCost.breakdown.other}</span>
                </div>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
              <p className="text-center text-sm text-white/90">
                💡 <span className="font-semibold">Pro Tip:</span> Many scholarships cover accommodation and living expenses, reducing your costs significantly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities & Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Top Universities */}
            <div className="lg:col-span-3">
              <div className="space-y-4 mb-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Top Institutions</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Leading Universities</h2>
                <p className="text-muted-foreground">Premier institutions in {country.name}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {country.topUniversities.map((university, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                    <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-sm">{university}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="lg:col-span-2">
              <div className="space-y-4 mb-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Requirements</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">What You Need</h2>
              </div>
              <Card className="border-0 shadow-xl sticky top-24">
                <CardContent className="p-6 space-y-3">
                  {country.admissionRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life & Fast Facts */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Student Experience</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Life in {country.name}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {country.studentLife.slice(0, 3).map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fast Facts Grid */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Essential Information
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 opacity-90">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Academic Year</span>
                  </div>
                  <p className="text-sm pl-6">{country.fastFacts.academicYear}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 opacity-90">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">Visa</span>
                  </div>
                  <p className="text-sm pl-6">{country.fastFacts.visaRequired}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 opacity-90">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-medium">Work Rights</span>
                  </div>
                  <p className="text-sm pl-6">{country.fastFacts.partTimeWork}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 opacity-90">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Insurance</span>
                  </div>
                  <p className="text-sm pl-6">{country.fastFacts.healthInsurance}</p>
                </div>
              </div>

              {/* Top Cities Inline */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm font-medium mb-3 opacity-90">Popular Student Cities</p>
                <div className="flex flex-wrap gap-2">
                  {country.topCities.map((city, index) => (
                    <span key={index} className="px-4 py-1.5 bg-white/20 rounded-full text-sm backdrop-blur">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction />
      </div>
    </div>
  )
}

