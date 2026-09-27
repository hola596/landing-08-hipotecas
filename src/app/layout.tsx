import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Landing Pages para Intermediación Hipotecaria | Servicio de Marketing Digital',
  description: 'Multiplica tus conversiones con una landing page enfocada en tu producto estrella. Diseño ultrarrápido y pre-scoring para intermediarios hipotecarios y brokers en España.',
  keywords: [
    'landing page hipotecas',
    'marketing intermediarios hipotecarios',
    'captacion hipotecas broker',
    'pre-scoring hipotecario web',
    'Google Ads hipotecas',
    'CRO financiero',
  ],
  authors: [{ name: 'Servicio de Marketing Digital', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-08-hipotecas.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Landing Pages de Alta Conversión para Intermediación Hipotecaria',
    description: 'Diseño ultrarrápido y sin fricciones para maximizar el ROI de tus anuncios en redes sociales y Google Ads.',
    url: 'https://landing-08-hipotecas.vercel.app',
    siteName: 'Servicio de Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Servicio de Desarrollo de Landing Pages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages para Brokers de Hipotecas',
    description: 'Multiplica la captación de expedientes hipotecarios cualificados con pre-scoring integrado.',
    images: ['/LOGO.png'],
  },
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
};

export const viewport: Viewport = {
  themeColor: '#060b18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
