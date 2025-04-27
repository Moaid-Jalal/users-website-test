"use client"

import { aboutUsService } from '@/app/service/aboutUsService'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const Footer = () => {
  const { data } = aboutUsService.useAboutUs()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>{data?.contact_info?.address}</p>
            <p>Phone: {data?.contact_info?.phone}</p>
            <p>Email: {data?.contact_info?.email}</p>
          </div>
          <div>

            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {data?.contact_info?.sociallinks && (
                <>
                  {Object.entries(data?.contact_info?.sociallinks as Record<string, string>).map(
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
          <p>&copy; {new Date().getFullYear()} KYT Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer