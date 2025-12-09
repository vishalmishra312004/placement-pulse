import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { AuthProviderWrapper } from "@/components/auth-provider-wrapper"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://placementpulse.com'),
  title: {
    default: "Placement Pulse - MBA Placement & Internship Preparation",
    template: "%s | Placement Pulse"
  },
  description: "Master your MBA placements and summer internships with Placement Pulse. Expert guidance for GD, PI, mock interviews, resume building, and placement strategy from top MBA alumni. Trusted by students from IIM, JBIMS, Symbiosis & more.",
  keywords: [
    "MBA placement preparation",
    "MBA internship guidance", 
    "group discussion training",
    "personal interview coaching",
    "MBA placement strategy",
    "summer internship preparation",
    "MBA career guidance",
    "placement pulse",
    "IIM placement prep",
    "MBA mock interviews",
    "resume building for MBA",
    "LinkedIn optimization MBA",
    "placement training course"
  ],
  authors: [{ name: "Placement Pulse Team" }],
  creator: "Placement Pulse",
  publisher: "Placement Pulse",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://placementpulse.com',
    title: 'Placement Pulse - MBA Placement & Internship Preparation',
    description: 'Master your MBA placements and summer internships with expert guidance from top MBA alumni. Join 300+ successful students.',
    siteName: 'Placement Pulse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Placement Pulse - MBA Placement Preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placement Pulse - MBA Placement & Internship Preparation',
    description: 'Master your MBA placements and summer internships with expert guidance from top MBA alumni.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://placementpulse.com',
  },
  verification: {
    google: 'd7859fa3abc9a8c5', // Google Search Console verification
  },
}

// Disable static generation to prevent SSR issues with AuthProvider
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1392003475659330');
          fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
               src="https://www.facebook.com/tr?id=1392003475659330&ev=PageView&noscript=1"
               alt="fb-pixel" />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Placement Pulse</h2>
              <p className="text-muted-foreground">Loading your MBA placement journey...</p>
            </div>
          </div>
        }>
          <AuthProviderWrapper>
            <Navigation />
            {children}
          </AuthProviderWrapper>
        </Suspense>
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
