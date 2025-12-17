// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verificar idioma salvo no localStorage ou usar navegador
    const savedLang = localStorage.getItem('prhima_language');
    if (savedLang) return savedLang;
    
    // Detectar idioma do navegador
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'es' ? 'es' : browserLang === 'en' ? 'en' : 'pt';
  });

  const [translations, setTranslations] = useState({});

  // Carregar traduções
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        let translations;
        switch (language) {
          case 'en':
            translations = await import('../translations/en.json');
            break;
          case 'es':
            translations = await import('../translations/es.json');
            break;
          default:
            translations = await import('../translations/pt.json');
        }
        setTranslations(translations.default || translations);
      } catch (error) {
        console.error('Erro ao carregar traduções:', error);
        // Carregar português como fallback
        const ptTranslations = await import('../translations/pt.json');
        setTranslations(ptTranslations.default || ptTranslations);
      }
    };

    loadTranslations();
    localStorage.setItem('prhima_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLang) => {
    if (['pt', 'en', 'es'].includes(newLang)) {
      setLanguage(newLang);
    }
  };

  const t = (key, params = {}) => {
    if (!translations) return key;
    
    let translation = key.split('.').reduce((obj, k) => obj?.[k], translations);
    
    if (!translation) {
      console.warn(`Tradução não encontrada para: ${key}`);
      return key;
    }

    // Substituir parâmetros
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{{${param}}}`, params[param]);
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};