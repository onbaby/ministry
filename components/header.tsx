"use client"

import { useState, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import ActiveLink from "@/components/active-link"

// Memoized header component to prevent unnecessary re-renders
const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Use useCallback to ensure function reference stability
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Add a function to handle navigation with delay
  const handleNavigation = useCallback(() => {
    // Add a small delay before closing the menu
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300) // 300ms delay
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Apply", path: "/apply" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-xl font-bold text-amber-600"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            007 Ministry
          </motion.span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <ActiveLink key={item.path} href={item.path} exact={item.path === "/"}>
              {item.name}
            </ActiveLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/donate">
            <AnimatedButton className="bg-amber-600 hover:bg-amber-700">
              <Heart className="mr-2 h-4 w-4" /> Donate
            </AnimatedButton>
          </Link>
        </div>
        <Button 
          variant={isMenuOpen ? "default" : "ghost"} 
          size="icon" 
          className={`md:hidden ${isMenuOpen ? 'bg-white text-amber-600' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Use AnimatePresence to properly handle mobile menu animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed left-0 right-0 top-16 z-50 shadow-lg"
            style={{ 
              backgroundColor: '#FFFFFF',
              background: '#FFFFFF',
              width: '100%',
              padding: 0,
              margin: 0
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 bg-white p-4 w-full">
              {navItems.map((item) => (
                <ActiveLink
                  key={item.path}
                  href={item.path}
                  exact={item.path === "/"}
                  className="text-lg font-medium p-2"
                  onClick={handleNavigation}
                >
                  {item.name}
                </ActiveLink>
              ))}
              <Link href="/donate" onClick={handleNavigation}>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-4">
                  <Heart className="mr-2 h-4 w-4" /> Donate
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Header
