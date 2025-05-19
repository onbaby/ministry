'use client'

import dynamic from 'next/dynamic'

// Import Header with no SSR to ensure it's only rendered on client
const Header = dynamic(() => import("@/components/header"), { ssr: false })

// Import PageTransition with no SSR to ensure it's only rendered on client
const PageTransition = dynamic(() => import("@/components/page-transition"), { ssr: false })

export { Header, PageTransition } 