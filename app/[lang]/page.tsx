import { Button } from "@/components/ui/button"
import { 
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Users 
} from "lucide-react"
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


      <div className="py-16 sm:py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400">
              {dict.whyChooseUsTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {dict.whyChooseUsSubtitle}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Experience Card */}
            <div className="relative overflow-hidden group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/30 opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {dict.experience}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {dict.experienceText}
                </p>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="relative overflow-hidden group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-purple-100 dark:bg-purple-900/30 opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 mb-6 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-all duration-300">
                  <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {dict.innovation}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {dict.innovationText}
                </p>
              </div>
            </div>

            {/* Trust Card */}
            <div className="relative overflow-hidden group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-green-100 dark:bg-green-900/30 opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/20 mb-6 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-all duration-300">
                  <BadgeCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {dict.trust}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {dict.trustText}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href={`/${params.lang}/about`}>
              <Button 
                size="lg"
                className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-primary">
                {dict.aboutPageTitle}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}