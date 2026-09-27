'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Gauge, Play } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-finance-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-finance-950/90 text-finance-300 border border-finance-800/80 mb-6 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-finance-400" />
          <span>Arquitectura CRO para Intermediación Hipotecaria y Servicios Financieros</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
          Multiplica tus conversiones con una{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-finance-300 via-finance-400 to-sky-200">
            Landing Page enfocada en tu Producto Estrella
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Diseño ultrarrápido y sin fricciones para maximizar el ROI de tus anuncios en redes sociales.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-finance-400 via-finance-300 to-sky-200 hover:from-finance-300 hover:to-white shadow-xl shadow-finance-500/25 hover:shadow-finance-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Solicitar Cotización</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

        {/* Video Demo (Immediately below the main copy as requested in prompt) */}
        <div className="relative mx-auto max-w-3xl mb-12">
          {/* Decorative frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-finance-500/40 via-sky-400/30 to-blue-500/30 rounded-2xl blur-lg opacity-70"></div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-finance-500/40 shadow-2xl">
            <div className="bg-slate-950/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 font-mono text-slate-300 font-medium">Demostración: Cómo Funciona una Landing de Alta Conversión</span>
              </div>
              <span className="text-[11px] text-finance-300 font-semibold flex items-center gap-1">
                <Play className="w-3 h-3 fill-finance-300" /> Video Oficial
              </span>
            </div>

            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Technical performance badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xl font-extrabold text-finance-400 font-mono">Lighthouse 100</div>
            <div className="text-xs text-slate-400 font-medium">Velocidad extrema en móvil</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xl font-extrabold text-sky-400 font-mono">Zero Fugas</div>
            <div className="text-xs text-slate-400 font-medium">100% foco en el lead</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xl font-extrabold text-white font-mono">+25 Bancos</div>
            <div className="text-xs text-slate-400 font-medium">Arquitectura pre-scoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
