"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2 } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useParams } from "next/navigation"
import { projectsService } from "@/app/service/projectsService";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";

export default function CategoryProjectsPage({ params }: { params: { slug: string } }) {
    const urlParams = useParams();
    const lang = urlParams?.lang as string || "en";
    const categoryName = params.slug;

    const {
        projects,
        error,
        isLoading,
        isValidating,
        loadMore,
        hasMore,
    } = projectsService.useInfiniteProjects(categoryName, lang);

    const [dict, setDict] = useState<any>(null);
    useEffect(() => {
        getDictionary(lang).then(d => setDict(d));
    }, [lang]);

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
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center px-4">
                    <div className="text-red-500 text-lg font-semibold mb-6">
                        {error.message || dict?.somethingWrong || "Something went wrong, try again later"}
                    </div>
                    <Link href={`/${lang}/our-sectors/categories`}>
                        <Button className="mt-2">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {dict?.backToCategories || "Back to categories"}
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
    

    if (projects.length === 0) {
        return (
            <div className="container mx-auto py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-2xl font-bold">{dict?.noProjects || "No Projects Found"}</h2>
                    <Link href={`/${lang}/our-sectors/categories`}>
                        <Button
                            variant="ghost"
                            className="mt-4"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {dict?.backToCategories || "Back to categories"}
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="container mx-auto py-24 px-4">
            <div className="mb-8">
                <Link
                    href={`/${lang}/our-sectors/categories`}
                    className="inline-flex items-center gap-2 text-primary hover:underline transition text-base font-medium"
                >
                    <ArrowLeft className="h-5 w-5" />
                    {dict?.backToCategories || "Back to categories"}
                </Link>
            </div>
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                    {categoryName} {dict?.projects || "Projects"}
                </h1>
                <p className="text-lg text-muted-foreground">
                    {dict?.exploreCategoryProjects
                        ? dict.exploreCategoryProjects.replace("{category}", categoryName)
                        : `Explore our latest ${categoryName} projects`}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
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
                                {project.creation_date && (
                                    <span className="relative z-10 rounded-full bg-gray-50 px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                        {project.creation_date}
                                    </span>
                                )}
                            </div>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.short_description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{project.short_description.slice(0, 20)}.......</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/${lang}/our-sectors/categories/${categoryName}/projects/${project.id}`} className="w-full">
                                    <Building2 className="mr-2 h-4 w-4" />
                                    {dict?.viewMoreDetails || "View More Details"}
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-8">
                    <Button onClick={loadMore} disabled={isValidating}>
                        {isLoading ? <Spinner /> : dict?.loadMore || "Load More"}
                    </Button>
                </div>
            )}
        </div>
    );
}

