'use client';

import React from 'react';
import { Mail, ShieldCheck, Landmark } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="LOGO.png"
                alt="Servicio de Desarrollo de Landing Pages"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-sm tracking-wide">
                Servicio de Marketing Digital
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Desarrollo de landing pages monoproducto de alta conversión, pre-scoring hipotecario y ultra-velocidad para intermediarios de crédito inmobiliario y brokers financieros en España.
            </p>
          </div>

          {/* Contact and Legal Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="text-left md:text-right">
              <span className="text-xs font-semibold text-slate-200 block mb-1">Contacto Corporativo Único:</span>
              <a
                href="mailto:hola@serviciodemarketingdigital.com"
                className="inline-flex items-center gap-2 text-finance-300 hover:text-finance-200 text-sm font-mono font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hola@serviciodemarketingdigital.com</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Términos del Servicio
              </button>
              <button
                onClick={() => onOpenLegal('legal')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Aviso Legal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Servicio de Marketing Digital. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-finance-400" />
            <span>Infraestructura Segura • RGPD Compliance • Lighthouse 100</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
