'use client';

import React, { useEffect } from 'react';
import { X, Shield, FileText, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms' | 'legal';
  onClose: () => void;
  onTabChange: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-finance-400" />
            <h3 className="text-lg font-bold text-white">Cumplimiento Legal y Privacidad</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-slate-900/40 px-6 pt-2">
          <button
            onClick={() => onTabChange('privacy')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-finance-400 text-finance-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Política de Privacidad</span>
          </button>
          <button
            onClick={() => onTabChange('terms')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'border-finance-400 text-finance-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos del Servicio</span>
          </button>
          <button
            onClick={() => onTabChange('legal')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'legal'
                ? 'border-finance-400 text-finance-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Aviso Legal</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
          {activeTab === 'privacy' && (
            <>
              <h4 className="text-base font-bold text-white">Política de Privacidad (RGPD / LOPD-GDD)</h4>
              <p>
                <strong>Responsable del Tratamiento:</strong> Servicio de Marketing Digital.
              </p>
              <p>
                <strong>Finalidad del Tratamiento:</strong> Recepción y procesamiento de solicitudes de consultoría tecnológica y desarrollo de landing pages de intermediación hipotecaria.
              </p>
              <p>
                <strong>Legitimación:</strong> Consentimiento inequívoco del usuario al enviar voluntariamente el formulario interactivo.
              </p>
              <p>
                <strong>Email de Privacidad:</strong> <span className="font-mono text-finance-300">hola@serviciodemarketingdigital.com</span>.
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h4 className="text-base font-bold text-white">Términos del Servicio de Arquitectura Web</h4>
              <p>
                1. <strong>Finalidad:</strong> Diseño y desarrollo de soluciones web monoproducto de alta velocidad destinadas a la intermediación hipotecaria y servicios de financiación B2B2C.
              </p>
              <p>
                2. <strong>Rendimiento:</strong> Las páginas entregadas son optimizadas para Core Web Vitals (Lighthouse 100) y tiempos de respuesta inferiores a 1 segundo.
              </p>
              <p>
                3. <strong>Independencia Bancaria:</strong> Servicio de Marketing Digital es una agencia de desarrollo y consultoría publicitaria; no otorga préstamos ni interviene como entidad financiera.
              </p>
            </>
          )}

          {activeTab === 'legal' && (
            <>
              <h4 className="text-base font-bold text-white">Aviso Legal (LSSI-CE)</h4>
              <p>
                En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico:
              </p>
              <p>
                <strong>Titular:</strong> Servicio de Marketing Digital.
              </p>
              <p>
                <strong>Contacto Oficial:</strong> <span className="font-mono text-finance-300">hola@serviciodemarketingdigital.com</span>.
              </p>
              <p>
                Todos los derechos de propiedad intelectual e industrial están reservados.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-900 bg-finance-400 hover:bg-finance-300 transition-colors cursor-pointer"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
