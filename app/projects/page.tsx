"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation"
import { productsService } from "@/app/service/productsService";
import Link from "next/link";
import Image from 'next/image';


export default function ProjectsPage() {
  const router = useRouter();

  const {
    projects,
    error,
    isLoading,
    isValidating,
    loadMore,
    hasMore,
  } = productsService.useInfiniteProjects();


  if (isLoading && (!projects || projects.length === 0)) {
    return (
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex  justify-center items-center h-full">
        <div className="container mx-auto py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-red-500 font-semibold mb-4">something went wrong, try again later</div>
            <Button onClick={() => router}>Go Back home</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground">Explore our latest projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-[16/9] relative">

              <Image
                src={project.images[0].url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                quality={100}
                style={{ objectFit: "cover" }}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-x-4 mb-2 text-[13px]">
                <span className="text-sm text-muted-foreground">{project.creation_date}</span>
                <span className="relative z-10 rounded-full bg-gray-50 px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {project.category}
                </span>
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.country}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/projects/${project.id}`}>
                  <Building2 className="mr-2 h-4 w-4" />
                  View More Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button onClick={loadMore} disabled={isValidating}>
            {isLoading ? <Spinner /> : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}

