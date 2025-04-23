"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { categoriesService } from "@/app/service/categoriesService"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Category = {
  id: string
  name: string
  description: string
  icon_svg_url: string
  project_count: number
}

export default function CategoriesPage() {
  const router = useRouter() 
  const { data: categories, isLoading, error } = categoriesService.useCategories()

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
    return <div className="container mx-auto py-24 px-4 text-center text-red-500">Error loading categories.</div>
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 text-primary">Categories</h1>
        <p className="text-xl text-muted-foreground">
          Explore our project categories.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories && categories.map((category: Category) => (
          <Card key={category.id} className="overflow-hidden">
              <div className="aspect-[16/9] relative flex items-center justify-center">
                {category.icon_svg_url ? (
                  <img
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
                  <Button className="w-full" onClick={() => router.push(`/our-sectors/categories/${category.name}`)}>
                    <Building2 className="mr-2 h-4 w-4" />
                    View projects
                  </Button>
                </CardFooter>

          </Card>
        ))}
      </div>
    </div>
  )
}
