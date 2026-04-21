import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  display: 'swap', 
  variable: '--font-playfair' 
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"], 
  display: 'swap', 
  variable: '--font-lato' 
});

export const metadata: Metadata = {
  title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN, DNP",
  description: "Board-certified Psychiatric Nurse Practitioner offering medication management and therapy for anxiety, depression, ADHD, trauma, and more. Bilingual English/Spanish. Telehealth in Florida.",
  openGraph: {
    title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN, DNP",
    description: "Board-certified Psychiatric Nurse Practitioner offering medication management and therapy for anxiety, depression, ADHD, trauma, and more. Bilingual English/Spanish. Telehealth in Florida.",
    url: "https://premier-psychiatry-one.vercel.app",
    siteName: "Premier Psychiatry of Wellington",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Premier Psychiatry of Wellington",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Psychiatry of Wellington | Aylin Sanchez, PMHNP-BC, APRN, DNP",
    description: "Board-certified Psychiatric Nurse Practitioner offering medication management and therapy for anxiety, depression, ADHD, trauma, and more. Bilingual English/Spanish. Telehealth in Florida.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Premier Psychiatry of Wellington",
  "description": "Board-certified Psychiatric Nurse Practitioner offering medication management and therapy for anxiety, depression, ADHD, trauma, and more. Bilingual English/Spanish. Telehealth in Florida.",
  "url": "https://premier-psychiatry-one.vercel.app",
  "telephone": "(561) 834-5705",
  "email": "aylin@premierpsychiatrywellington.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "postalCode": "33414",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  },
  "priceRange": "$125-$250",
  "paymentAccepted": "Amex, Cash, Discover, Mastercard, PayPal, Venmo, Visa, Zelle",
  "openingHours": "Mo-Fr 09:00-17:00",
  "medicalSpecialty": "Psychiatric",
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Psychiatric Evaluation" },
    { "@type": "MedicalProcedure", "name": "Medication Management" },
    { "@type": "MedicalTherapy", "name": "Individual Therapy (CBT, DBT, CPT, ACT)" }
  ],
  "employee": {
    "@type": "Person",
    "name": "Aylin Sanchez",
    "jobTitle": "PMHNP-BC, APRN, DNP",
    "knowsLanguage": ["English", "Spanish"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-lato bg-background text-charcoal pb-16 md:pb-0">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-sage">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
