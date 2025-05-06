"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users2, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { aboutUsService } from "../../service/aboutUsService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { getDictionary } from "@/lib/dictionary"

const statIcons: Record<string, JSX.Element> = {
  "Years of Experience": <Clock className="h-6 w-6" />,
  "Completed Projects": <Award className="h-6 w-6" />,
  "Professional Team": <Users2 className="h-6 w-6" />,
  "Locations": <MapPin className="h-6 w-6" />,
};

export default function AboutPage() {
  const params = useParams();
  const lang = params?.lang as string || "en";
  const { data, error, isLoading } = aboutUsService.useAboutUs(lang);

  const [dict, setDict] = useState<any>(null);
  useEffect(() => {
    getDictionary(lang).then(d => setDict(d));
  }, [lang]);

  // إعداد ترجمة العناوين للإحصائيات
  const statLabels = dict?.aboutStats || {
    "Years of Experience": "Years of Experience",
    "Completed Projects": "Completed Projects",
    "Professional Team": "Professional Team",
    "Locations": "Locations"
  };

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
  const ourStory = data?.our_story;

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">{dict?.aboutPageTitle || "About Us"}</h1>
        <p className="text-lg text-muted-foreground">
          {dict?.aboutPageDesc || "Building excellence through innovation and dedication since 2019."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {statistics.map((stat: any, index: number) => (
          <Card key={stat.label || index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {statIcons[stat.label] || <CheckCircle2 className="h-6 w-6" />}
                <div>
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                  <CardDescription>
                    {statLabels[stat.label] || stat.label}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {ourStory && (
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>{ourStory.section_title || dict?.ourStory || "Our Story"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p>
                {ourStory.content}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">{dict?.ourServices || "Our Services"}</h2>
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
          <CardTitle>{dict?.ourLocation || "Our Location"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7999206997897!2d29.109371925454756!3d37.7478378719922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f6329fa9089%3A0xda1b2d93ce3b1e40!2sAsmal%C4%B1evler%20sitesi!5e0!3m2!1sen!2sly!4v1745588001097!5m2!1sen!2sly"
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