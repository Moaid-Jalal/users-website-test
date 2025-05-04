"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Building2, Home, Phone, Users2, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { getDictionary } from "@/lib/dictionary"
import { useEffect, useState } from "react"

interface NavbarProps {
  currentLang: string
}

const Navbar = ({ currentLang } : NavbarProps) => {
  const pathname = usePathname()
  const [dict, setDict] = useState<{ home: string, sectors: string, about: string, contact: string }>({
    home: "Home",
    sectors: "Sectors",
    about: "About",
    contact: "Contact"
  })

  useEffect(() => {
    getDictionary(currentLang).then(d => setDict({
      home: d.navbar.home,
      sectors: d.navbar.sectors,
      about: d.navbar.about,
      contact: d.navbar.contact
    }))
  }, [currentLang])

  const isActive = (path: string) => {
    return pathname === path
  }

  const NavItems = () => (
    <>
      <SheetClose asChild>
        <Link href={`/${currentLang}`} className="w-full">
          <Button 
            variant={isActive(`/${currentLang}`) ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Home className="mr-2 h-4 w-4" />
            {dict.home}
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href={`/${currentLang}/our-sectors/categories`} className="w-full">
          <Button 
            variant={isActive(`/${currentLang}/our-sectors/categories`) ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Building2 className="mr-2 h-4 w-4" />
            {dict.sectors}
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href={`/${currentLang}/about`} className="w-full">
          <Button 
            variant={isActive(`/${currentLang}/about`) ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Users2 className="mr-2 h-4 w-4" />
            {dict.about}
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href={`/${currentLang}/contact`} className="w-full">
          <Button 
            variant={isActive(`/${currentLang}/contact`) ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            {dict.contact}
          </Button>
        </Link>
      </SheetClose>
    </>
  )

  const DesktopNavItems = () => (
    <>
      <Link href={`/${currentLang}`}>
        <Button variant={isActive(`/${currentLang}`) ? 'default' : 'ghost'}>
          <Home className="mr-2 h-4 w-4" />
          {dict.home}
        </Button>
      </Link>
      <Link href={`/${currentLang}/our-sectors/categories`}>
        <Button variant={isActive(`/${currentLang}/our-sectors/categories`) ? 'default' : 'ghost'}>
          <Building2 className="mr-2 h-4 w-4" />
          {dict.sectors}
        </Button>
      </Link>
      <Link href={`/${currentLang}/about`}>
        <Button variant={isActive(`/${currentLang}/about`) ? 'default' : 'ghost'}>
          <Users2 className="mr-2 h-4 w-4" />
          {dict.about}
        </Button>
      </Link>
      <Link href={`/${currentLang}/contact`}>
        <Button variant={isActive(`/${currentLang}/contact`) ? 'default' : 'ghost'}>
          <Phone className="mr-2 h-4 w-4" />
          {dict.contact}
        </Button>
      </Link>
    </>
  )

  return (
    <nav className="border-b fixed w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center overflow-hidden">
            <Link href={`/${currentLang}`} className="flex items-center">
              <div className='w-[180px] overflow-hidden'>
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  className="object-contain"
                  alt='website logo'
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <DesktopNavItems />
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center ml-2">
            <LanguageSwitcher currentLang={currentLang}/>
          </div>

          {/* Mobile Navigation & Language Switcher */}
          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher currentLang={currentLang}/>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] p-0">
                <nav className="flex flex-col gap-1 p-4 ">
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar