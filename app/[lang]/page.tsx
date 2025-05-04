import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, ShieldCheck, Lightbulb, Hammer } from "lucide-react"
import Link from "next/link"
import { getDictionary } from '@/lib/dictionary';

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

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
              {dict.heroTitle}
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {dict.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`/${params.lang}/our-sectors/categories`}>
                <Button size="lg">
                  {dict.explore}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/${params.lang}/contact`}>
                <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                  {dict.contact}
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.featuredTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {dict.featuredSubtitle}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20">
            <Link
              href={`/${params.lang}/our-sectors/categories`}
              className="group flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white hover:bg-opacity-90 p-8 shadow-md transition hover:shadow-lg"
            >
              <Building2 className="h-8 w-8 text-white group-hover:text-black transition" />
              <span className="text-xl font-semibold text-gray-900 transition">
                {dict.explore}
              </span>
              <ArrowRight className="ml-2 h-5 w-5 text-gray-400 group-hover:text-black transition" />
            </Link>
          </div>

        </div>
      </div>


      <div className="py-16 sm:py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.whyChooseUsTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
              {dict.whyChooseUsSubtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center bg-white/5 dark:bg-muted p-6 rounded-xl shadow-md hover:shadow-lg transition group border border-primary/10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:scale-105 transition">
                <Hammer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground text-center">{dict.experience}</h3>
              <p className="text-muted-foreground text-center text-sm">{dict.experienceText}</p>
            </div>
            <div className="flex flex-col items-center bg-white/5 dark:bg-muted p-6 rounded-xl shadow-md hover:shadow-lg transition group border border-primary/10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:scale-105 transition">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground text-center">{dict.innovation}</h3>
              <p className="text-muted-foreground text-center text-sm">{dict.innovationText}</p>
            </div>
            <div className="flex flex-col items-center bg-white/5 dark:bg-muted p-6 rounded-xl shadow-md hover:shadow-lg transition group border border-primary/10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:scale-105 transition">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground text-center">{dict.trust}</h3>
              <p className="text-muted-foreground text-center text-sm">{dict.trustText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}