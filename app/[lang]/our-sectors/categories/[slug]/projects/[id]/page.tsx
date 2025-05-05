"use client"

import { projectsService } from "@/app/service/projectsService"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { ArrowLeft, MapPin, Calendar, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const urlParams = useParams()
  const lang = urlParams?.lang as string || "en"
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [dict, setDict] = useState<any>(null)

  const { data: project, error, isLoading } = projectsService.useProject(params.id, lang)

  useEffect(() => {
    getDictionary(lang).then(d => setDict(d))
  }, [lang])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

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
      <div className="container mx-auto py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-red-500 font-semibold mb-4">{error}</div>
            <Link href={`/${lang}/our-sectors/categories/${project.category.slug}/projects`}>
                <Button>
                    {dict?.back || "Go Back"}
                </Button>
            </Link>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold">{dict?.projectNotFound || "Project Not Found"}</h2>
            <Link href={`/${lang}/our-sectors/categories/${project.category.slug}/projects`}>
                <Button variant="ghost" className="mt-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {dict?.back || "Back"}
                </Button>
            </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="mb-8">
          <Link
            href={`/${lang}/our-sectors/categories/${project.category.slug}/projects`}
            className="inline-flex items-center gap-2 text-primary hover:underline transition text-base font-medium"
          >
              <ArrowLeft className="h-5 w-5" />
              {dict?.back || "Back"}
              </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-[16/9] relative mb-8 group">
          <Image
            src={project.images[currentImageIndex].url}
            alt={`Project image ${currentImageIndex + 1}`}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full h-full"
          />

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {project && (
          <>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <Card>
                {project.creation_date && (
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {dict?.year || "Year"}
                    </CardTitle>
                    <CardDescription className="text-xl">{project.creation_date}</CardDescription>
                  </CardHeader>
                )}
              </Card>

              <Card>
                {project.country && (
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {dict?.country || "Country"}
                    </CardTitle>
                    <CardDescription className="text-xl">{project.country}</CardDescription>
                  </CardHeader>
                )}
              </Card>
            </div>

            {/* Card for title and short_description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-3xl">{project.title}</CardTitle>
                <CardDescription>{project.short_description}</CardDescription>
              </CardHeader>
            </Card>

            {/* Card for extra_description */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{dict?.extraDescription || "Details"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.extra_description}</p>
              </CardContent>
            </Card>
            {/* ...existing code for gallery if needed... */}
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectPage

