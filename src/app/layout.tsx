import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteConfig = {
  name: "Paula Rebollar",
  title: "Paula Rebollar | Pastry & Cuisine Chef",
  description: "The official portfolio for Paula Rebollar, a professional pastry and cuisine chef. Explore a gallery of delicious culinary creations and professional experience.",
  url: "https://paula-rodriguez-portfolio.com", // Replace with your actual domain
  ogImage: "https://paula-rodriguez-portfolio.com/og-image.jpg", // Replace with your actual OG image URL
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: "Paula Rebollar" }],
  creator: "Paula Rebollar",
  keywords: ["chef", "pastry", "cuisine", "portfolio", "food", "gallery"],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Paula Rebollar',
  url: siteConfig.url,
  jobTitle: 'Pastry & Cuisine Chef',
  worksFor: {
    '@type': 'Organization',
    name: 'Paula Rebollar Portfolio',
  },
  image: siteConfig.ogImage,
  sameAs: [
    // Add social media URLs here
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
