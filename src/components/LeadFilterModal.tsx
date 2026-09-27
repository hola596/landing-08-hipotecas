'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Zap, HelpCircle, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

interface LeadFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFilterModal({ isOpen, onClose }: LeadFilterModalProps) {
  const [servicio, setServicio] = useState('');
  const [procesos, setProcesos] = useState('');
  const [publicidad, setPublicidad] = useState('');
  const [cuelloBotella, setCuelloBotella] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const isFormValid = Boolean(servicio && procesos && publicidad && cuelloBotella);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    // Number strictly obfuscated in JS memory - NEVER present in static HTML
    const p1 = '54911';
    const p2 = '2788';
    const p3 = '7093';
    const recipient = `${p1}${p2}${p3}`;

    // Exact requested message format:
    // "¡Hola! Vengo de la landing page y me interesa crear una landing enfocada en mi producto estrella. Aquí mis datos:
    // 1. Servicio: [Resp 1]
    // 2. Procesos: [Resp 2]
    // 3. Publicidad: [Resp 3]
    // 4. Reto: [Resp 4]
    // ¿Podemos hablar?"
    const rawMessage = `¡Hola! Vengo de la landing page y me interesa crear una landing enfocada en mi producto estrella. Aquí mis datos:\n1. Servicio: ${servicio}\n2. Procesos: ${procesos}\n3. Publicidad: ${publicidad}\n4. Reto: ${cuelloBotella}\n¿Podemos hablar?`;

    const encoded = encodeURIComponent(rawMessage);
    const targetUrl = `https://wa.me/${recipient}?text=${encoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 350);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 border border-finance-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-finance-950 text-finance-300 border border-finance-700/50 mb-2">
              <Zap className="w-3.5 h-3.5 text-finance-400" />
              <span>Filtro de Diagnóstico Estratégico</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Solicitar Cotización de Landing
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Completa los 4 pasos para preparar la propuesta exacta de tu producto estrella.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Question 1 */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              1. ¿Cuál es tu servicio o producto estrella?
            </label>
            <select
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-finance-400 focus:ring-1 focus:ring-finance-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona producto estrella...</option>
              <option value="Intermediación Hipotecaria">Intermediación Hipotecaria</option>
              <option value="Inmobiliaria B2B2C">Inmobiliaria B2B2C</option>
              <option value="Otro servicio financiero">Otro servicio financiero</option>
              <option value="Aún no lo sé">Aún no lo sé</option>
            </select>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              2. ¿Cuentas con procesos validados?
            </label>
            <select
              value={procesos}
              onChange={(e) => setProcesos(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-finance-400 focus:ring-1 focus:ring-finance-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona estado de procesos...</option>
              <option value="Sí, tengo pre-scoring rápido e integraciones">Sí, tengo pre-scoring rápido e integraciones</option>
              <option value="Sí, de forma manual">Sí, de forma manual</option>
              <option value="No, estoy empezando">No, estoy empezando</option>
            </select>
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              3. ¿Inviertes actualmente en publicidad (Ads)?
            </label>
            <select
              value={publicidad}
              onChange={(e) => setPublicidad(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-finance-400 focus:ring-1 focus:ring-finance-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona nivel de inversión en Ads...</option>
              <option value="Sí, quiero mejorar el ROI">Sí, quiero mejorar el ROI</option>
              <option value="No, pero tengo presupuesto">No, pero tengo presupuesto</option>
              <option value="No tengo presupuesto">No tengo presupuesto</option>
            </select>
          </div>

          {/* Question 4 */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              4. Tu principal cuello de botella:
            </label>
            <select
              value={cuelloBotella}
              onChange={(e) => setCuelloBotella(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-finance-400 focus:ring-1 focus:ring-finance-400 transition-all cursor-pointer"
              required
            >
              <option value="" disabled>Selecciona principal reto...</option>
              <option value="La web actual es muy lenta">La web actual es muy lenta</option>
              <option value="El cliente se distrae">El cliente se distrae</option>
              <option value="Necesito captar leads cualificados más rápido">Necesito captar leads cualificados más rápido</option>
              <option value="Solo estoy mirando">Solo estoy mirando</option>
            </select>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-finance-400 flex-shrink-0" />
            <span>Respuesta en menos de 2 horas. Diagnóstico 100% confidencial.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full mt-3 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-finance-400 via-finance-300 to-sky-200 hover:from-finance-300 hover:to-white shadow-lg shadow-finance-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
          >
            {isSubmitting ? 'Conectando con WhatsApp...' : 'Hablar con un Experto por WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
}
