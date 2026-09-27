import React from 'react';
import { faqs } from '../data/faqs';

export default function SEOHead() {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicio de Desarrollo de Landing Pages para Intermediación Hipotecaria',
    serviceType: 'Desarrollo Web y Optimización de Conversión CRO para Brokers Hipotecarios',
    description: 'Desarrollo de landing pages monoproducto de alta velocidad con pre-scoring y conexión con entidades financieras para captar clientes de hipotecas.',
    provider: {
      '@type': 'Organization',
      name: 'Servicio de Marketing Digital',
      url: 'https://landing-08-hipotecas.vercel.app',
      email: 'hola@serviciodemarketingdigital.com',
    },
    areaServed: 'ES',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landing Pages para Intermediación Hipotecaria y Financiera',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Monoproducto para Captación de Hipotecas',
            description: 'Embudo de conversión con pre-scoring para Google Ads y Meta Ads de brokers hipotecarios.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Demostración de Landing Page de Alta Conversión para Intermediación Hipotecaria',
    description: 'Cómo funciona una landing page monoproducto optimizada para intermediarios hipotecarios y financiación inmobiliaria.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
