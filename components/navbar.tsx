"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Building2, Home, Phone, Users2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  const NavItems = () => (
    <>
      <SheetClose asChild>
        <Link href="/" className="w-full">
          <Button 
            variant={isActive('/') ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href="/our-sectors/categories" className="w-full">
          <Button 
            variant={isActive('/our-sectors/categories') ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Sectors
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href="/about" className="w-full">
          <Button 
            variant={isActive('/about') ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Users2 className="mr-2 h-4 w-4" />
            About
          </Button>
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link href="/contact" className="w-full">
          <Button 
            variant={isActive('/contact') ? 'default' : 'ghost'} 
            className="w-full justify-start"
            size="sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </Link>
      </SheetClose>
    </>
  )

  const DesktopNavItems = () => (
    <>
      <Link href="/">
        <Button variant={isActive('/') ? 'default' : 'ghost'}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link href="/our-sectors/categories">
        <Button variant={isActive('/our-sectors/categories') ? 'default' : 'ghost'}>
          <Building2 className="mr-2 h-4 w-4" />
          Sectors
        </Button>
      </Link>
      <Link href="/about">
        <Button variant={isActive('/about') ? 'default' : 'ghost'}>
          <Users2 className="mr-2 h-4 w-4" />
          About
        </Button>
      </Link>
      <Link href="/contact">
        <Button variant={isActive('/contact') ? 'default' : 'ghost'}>
          <Phone className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </Link>
    </>
  )

  return (
    <nav className="border-b fixed w-full bg-background z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">ktygbm</span>
            </Link>

          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <DesktopNavItems />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
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