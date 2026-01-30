'use client';

import React, { useState, useEffect } from 'react';
import { X, LogIn, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrochure: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenBrochure }: LoginModalProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Portal coming soon - no actual login functionality yet
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div
          className="bg-background rounded-2xl shadow-2xl w-full max-w-md animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-xl font-bold text-foreground">{t.login.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{t.login.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Coming Soon Notice */}
          <div className="mx-6 mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">{t.login.comingSoon}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-foreground mb-1">
                {t.login.email}
              </label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
                placeholder="email@company.nl"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-foreground mb-1">
                {t.login.password}
              </label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                disabled
                className="text-sm text-muted-foreground cursor-not-allowed"
              >
                {t.login.forgotPassword}
              </button>
            </div>

            <button
              type="submit"
              disabled
              className="btn-primary w-full opacity-50 cursor-not-allowed"
            >
              <LogIn size={18} className="mr-2" />
              {t.login.submit}
            </button>

            <p className="text-center text-sm text-muted-foreground">
              {t.login.noAccount}{' '}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBrochure();
                }}
                className="text-primary font-medium hover:text-primary/80"
              >
                {t.login.register}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
