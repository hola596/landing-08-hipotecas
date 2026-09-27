'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-finance-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo strictly pointing to LOGO.png */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="LOGO.png"
              alt="Servicio de Desarrollo de Landing Pages"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-finance-950/80 text-finance-300 border border-finance-700/50">
            <TrendingUp className="w-3.5 h-3.5 text-finance-400" /> Especialistas en Intermediación Hipotecaria
          </span>
        </div>

        {/* Right side contact & CTA (No distracting navigation menu) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs text-slate-400">Atención a brokers y mediadores</span>
            <span className="text-xs font-mono font-medium text-finance-300 hover:text-finance-200">
              hola@serviciodemarketingdigital.com
            </span>
          </div>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-finance-400 via-finance-300 to-sky-200 hover:from-finance-300 hover:to-white shadow-lg shadow-finance-500/20 hover:shadow-finance-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Solicitar Cotización</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </header>
  );
}
