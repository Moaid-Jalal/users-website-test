"use client"

import { projectsService } from "@/app/service/projectsService"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { Project } from "@/types/projectType"
import { ArrowLeft, MapPin, Calendar, Building2, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: project, error, isLoading } = projectsService.useProject(params.id);


  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };


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
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <Button onClick={() => router.back()} variant="ghost" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Button onClick={() => router.back()} variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

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
                      Year
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
                      country
                    </CardTitle>
                    <CardDescription className="text-xl">{project.country}</CardDescription>
                  </CardHeader>
                )}
              </Card>

            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-3xl">{project.title}</CardTitle>
                <CardDescription>{project.short_description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
            <Card>

              {/* <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
              </CardHeader>
              <CardContent> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-[4/3] relative">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div> */}
              {/* </CardContent> */}

            </Card>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectPage

