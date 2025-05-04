"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { messagesService } from "../../service/messagesService"
import { aboutUsService } from "../../service/aboutUsService"
import { useParams } from "next/navigation"
import { getDictionary } from "@/lib/dictionary"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const params = useParams()
  const currentLang = params?.lang as string || "en"

  const { data: aboutData, error: aboutUsError, isLoading } = aboutUsService.useAboutUs(currentLang)

  const [dict, setDict] = useState<any>(null)
  useEffect(() => {
    getDictionary(currentLang).then(d => setDict(d))
  }, [currentLang])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await messagesService.sendMessage(values)

      setSuccess(true)

      toast({
        title: dict?.messageSent || "Message Sent",
        description: dict?.messageSentDesc || "We'll get back to you as soon as possible.",
      })

      form.reset()
    } catch (err) {
      setError(dict?.somethingWrong || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">{dict?.footer?.contactUs || "Contact Us"}</h1>
        <p className="text-lg text-muted-foreground">
          {dict?.contactPageDesc || "Get in touch with our team for any inquiries or project discussions."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6" />
                <div>
                  <CardTitle>{dict?.visitUs || "Visit Us"}</CardTitle>
                  <CardDescription>{aboutData?.contact_info?.Address}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6" />
                <div>
                  <CardTitle>{dict?.callUs || "Call Us"}</CardTitle>
                  <CardDescription>{aboutData?.contact_info?.Phone}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6" />
                <div>
                  <CardTitle>{dict?.emailUs || "Email Us"}</CardTitle>
                  <CardDescription>{aboutData?.contact_info?.Email}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{dict?.sendMessage || "Send us a Message"}</CardTitle>
            <CardDescription>
              {dict?.sendMessageDesc || "Fill out the form below and we'll get back to you as soon as possible."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}> 
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{dict?.name || "Name"}</FormLabel>
                      <FormControl>
                        <Input placeholder={dict?.yourName || "Your name"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{dict?.email || "Email"}</FormLabel>
                      <FormControl>
                        <Input placeholder={dict?.yourEmail || "your@email.com"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{dict?.message || "Message"}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={dict?.yourMessage || "Tell us about your project"}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (dict?.sending || 'Sending...') : (dict?.sendMessageBtn || 'Send Message')}
                </Button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && <div className="text-green-600 mt-2">{dict?.messageSentSuccess || "Message sent successfully!"}</div>}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}