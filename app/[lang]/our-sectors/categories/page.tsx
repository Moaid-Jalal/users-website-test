"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { categoriesService } from "@/app/service/categoriesService"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getDictionary } from "@/lib/dictionary"
import { Category } from "@/types/categories"
import Image from "next/image"

export default function CategoriesPage() {
  const params = useParams()
  const lang = params?.lang as string || "en"

  const { data: categories, isLoading, error } = categoriesService.useCategories(lang)

  const [dict, setDict] = useState<any>(null)
  useEffect(() => {
    getDictionary(lang).then(d => setDict(d))
  }, [lang])

  if (isLoading) {
    return (
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <p className="text-red-500 text-lg font-semibold mb-4">
            {error.message || dict?.somethingWrong || "Something went wrong, try again later"}
          </p>
          <Link href={`/${lang}`}>
            <Button className="mt-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {dict?.backToHome || "Back to Home"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24 px-4">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-primary hover:underline transition text-base font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          {dict?.backToHome || "Back to Home"}
        </Link>
      </div>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 text-primary">
          {dict?.categoriesPage?.title || "Categories"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {dict?.categoriesPage?.description || "Explore our project categories."}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories && categories.map((category: Category) => (
          <Card key={category.id} className="overflow-hidden">
              <div className="aspect-[16/9] relative flex items-center justify-center">
                {category.icon_svg_url ? (
                  <Image
                    src={`${category.icon_svg_url}?color=white`}
                    alt={category.name}
                    width={120}
                    height={120}
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-muted-foreground text-lg">No Icon</span>
                )}
              </div>

                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/${lang}/our-sectors/categories/${category.slug}`} className="w-full">
                    <Button className="w-full">
                      <Building2 className="mr-2 h-4 w-4" />
                      {dict?.viewProjects || "View projects"}
                    </Button>
                  </Link>
                </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
