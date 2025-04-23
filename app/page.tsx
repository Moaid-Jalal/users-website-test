import { Button } from "@/components/ui/button"
import { Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3714734/pexels-photo-3714734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Building Tomorrow&apos;s World Today
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We specialize in creating innovative construction solutions that transform visions into reality. With years of experience and dedication to excellence, we build more than just structures – we build futures.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/our-sectors/categories">
                <Button size="lg">
                  Explore Our sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Take a look at some of our most impressive construction sectors that showcase our expertise and commitment to quality.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20">
            <Link
              href="/our-sectors/categories"
              className="group flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white hover:bg-opacity-90 p-8 shadow-md transition hover:shadow-lg"
            >
              <Building2 className="h-8 w-8 text-white group-hover:text-black transition" />
              <span className="text-xl font-semibold text-gray-900 transition">
                Explore Our sectors
              </span>
              <ArrowRight className="ml-2 h-5 w-5 text-gray-400 group-hover:text-black transition" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}