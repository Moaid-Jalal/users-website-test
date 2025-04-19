"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users2, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { aboutUsService } from "../service/aboutUsService";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

const statIcons: Record<string, JSX.Element> = {
  "Years of Experience": <Clock className="h-6 w-6" />,
  "Completed Projects": <Award className="h-6 w-6" />,
  "Professional Team": <Users2 className="h-6 w-6" />,
  "Locations": <MapPin className="h-6 w-6" />,
};

export default function AboutPage() {
  const { data, error, isLoading } = aboutUsService.useAboutUs();

  useEffect(() => {
    console.log(data)
}, [data])

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <div className="container mx-auto py-24 px-4 text-center text-red-500">Error loading data.</div>;
  }

  // Fallback if data is missing
  const statistics = data?.statistics || [];
  const services = data?.services || [];

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Building excellence through innovation and dedication since 1998.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {statistics.map((stat: any, index: number) => (
          <Card key={stat.id || index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {statIcons[stat.section_title] || <CheckCircle2 className="h-6 w-6" />}
                <div>
                  <CardTitle className="text-3xl font-bold">{stat.content}</CardTitle>
                  <CardDescription>{stat.section_title}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p>
              {data.our_story[0].content}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service: any, index: number) => (
            <Card key={service.id || index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <CardTitle>{service.section_title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647891702983!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}