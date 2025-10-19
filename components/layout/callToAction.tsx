import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, GraduationCap, Globe } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="text-center mt-32 pb-16">
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary rounded-3xl p-16 shadow-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white/90 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Our expert counselors are here to help you choose the perfect program and guide you through the entire application process.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl group">
              <Link href="/contact" className="flex items-center gap-3">
                Get Free Consultation <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2  text-primary hover:bg-white/90 hover:text-primary px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>200+ Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-green-400" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <span>3 Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
