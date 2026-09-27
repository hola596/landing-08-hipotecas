'use client';

import React from 'react';
import { Landmark, Clock, TrendingUp, CheckCircle2, Shield, ArrowRight, Gauge, Smartphone, Ban } from 'lucide-react';

interface NicheCaseProps {
  onOpenModal: () => void;
}

export default function NicheCaseSection({ onOpenModal }: NicheCaseProps) {
  const points = [
    {
      title: 'Altísimas Comisiones por Operación Firmada',
      desc: 'En intermediación hipotecaria (Hipotecas Broker, Financiación Punto Broker S.L.), cada operación cerrada representa comisiones de entre 3.000€ y 6.000€. Una mejora de apenas 2% en conversión significa decenas de miles de euros adicionales al mes.',
      icon: TrendingUp,
    },
    {
      title: 'Pre-Scoring en 3 Minutos',
      desc: 'Nuestros embudos incorporan filtros cuantitativos (ingresos netos, estabilidad laboral, contrato indefinido, ahorros aportados) para que tus analistas solo atiendan a clientes con viabilidad bancaria real.',
      icon: Clock,
    },
    {
      title: 'Conexión con +25 Entidades Financieras',
      desc: 'Comunica autoridad instantánea destacando acuerdos con bancos de primer nivel (Santander, BBVA, CaixaBank, Sabadell, ING) para negociar hasta el 90-100% de financiación.',
      icon: Landmark,
    },
    {
      title: 'Modelo Híbrido B2B2C (Agencias Inmobiliarias)',
      desc: 'Capta tanto a compradores finales de vivienda como a inmobiliarias colaboradoras que necesitan financiar las operaciones de sus compradores para no perder arras.',
      icon: Shield,
    },
  ];

  const technicalBenefits = [
    {
      icon: Gauge,
      title: 'Velocidad Extrema (Lighthouse 100)',
      desc: 'La palabra "hipoteca" tiene costes por clic muy altos. Una velocidad récord asegura el máximo Quality Score de Google Ads, abaratando tu CPC publicitario hasta un 35%.',
    },
    {
      icon: Smartphone,
      title: 'Optimización Móvil Sin Concesiones',
      desc: 'El 78% de las búsquedas hipotecarias en Meta Ads y TikTok Ads provienen de smartphones. Interfaz táctil ergonómica y tiempos de interacción inmediatos.',
    },
    {
      icon: Ban,
      title: 'Eliminación Total de Distracciones',
      desc: 'Sin menús de navegación, sin enlaces a blogs obsoletos ni fugas externas. Un único camino enfocado en solicitar el estudio hipotecario gratuito.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Niche Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-finance-400 uppercase">
            Caso de Uso Ideal: Intermediación Hipotecaria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Por Qué las Landings Monoproducto Dominan el Sector Hipotecario
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Empresas como Hipotecas Broker y Financiación Punto Broker S.L. multiplican su facturación al canalizar la altísima demanda de la palabra &quot;hipoteca&quot; hacia embudos de pre-scoring ultra-rápidos.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-finance-500/50 hover:shadow-xl hover:shadow-finance-500/10 transition-all group"
              >
                <div className="p-3 w-fit rounded-xl bg-finance-500/10 text-finance-400 group-hover:bg-finance-500/20 group-hover:scale-110 transition-all mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-finance-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Benefits Section */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Rendimiento Técnico Imparable
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Arquitectura Diseñada para Rentabilizar cada Euro en Anuncios
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technicalBenefits.map((item, bIdx) => {
              const Icon = item.icon;
              return (
                <div
                  key={bIdx}
                  className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 text-left"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-sky-500/10 text-sky-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-finance-400 via-finance-300 to-sky-200 hover:from-finance-300 hover:to-white shadow-xl shadow-finance-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Quiero una Landing para mi Broker Hipotecario</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
