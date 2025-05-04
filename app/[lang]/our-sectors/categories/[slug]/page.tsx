"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

export default function Home() {
    const router = useRouter()
    const params = useParams()
    const lang = params?.lang as string || "en"
    const slug = params?.slug as string

    if (slug) {
        router.replace(`/${lang}/our-sectors/categories/${slug}/projects`)
    }

    return null
}