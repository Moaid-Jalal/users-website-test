"use client"

import { aboutUsService } from '@/app/service/aboutUsService'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type DictType = {
  contactUs: string
  address: string
  phone: string
  email: string
  quickLinks: string
  sectors: string
  about: string
  follow: string
  copyright: string
}

interface FooterProps {
  currentLang: string
}


const Footer = ({ currentLang } : FooterProps) => {
  const { data } = aboutUsService.useAboutUs()

  const [dict, setDict] = useState<DictType>({
    contactUs: "Contact Us",
    address: "",
    phone: "",
    email: "",
    quickLinks: "Quick Links",
    sectors: "Sectors",
    about: "About Us",
    follow: "Follow Us",
    copyright: "",
  })

  useEffect(() => {
    getDictionary(currentLang).then(d => setDict({
      contactUs: d.footer.contactUs,
      address: d.footer.address,
      phone: d.footer.phone,
      email: d.footer.email,
      quickLinks: d.footer.quickLinks,
      sectors: d.footer.sectors,
      about: d.footer.about,
      follow: d.footer.follow,
      copyright: d.footer.copyright,
    }))
  }, [currentLang])

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.contactUs}</h3>
            <p>{dict.address} :{data?.contact_info?.Address}</p>
            <p>{dict.phone} : {data?.contact_info?.Phone}</p>
            <p>{dict.email} : {data?.contact_info?.Email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${currentLang}/our-sectors/categories`} className="hover:underline">{dict.sectors}</Link></li>
              <li><Link href={`/${currentLang}/about`} className="hover:underline">{dict.about}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="hover:underline">{dict.contactUs}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.follow}</h3>
            <div className="flex space-x-4">
              {data?.contact_info?.Social_Links && (
                <>
                  {Object.entries(data?.contact_info?.Social_Links as Record<string, string>).map(
                    ([key, value], index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <a href={value} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                          <Image
                            src={`https://cdn.simpleicons.org/${key.toLowerCase()}`}
                            alt={key}
                            width={24}
                            height={24}
                            className="h-6 w-6"
                          />
                        </a>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>{dict.copyright || `© ${new Date().getFullYear()} KYT Group. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer