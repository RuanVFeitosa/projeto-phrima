// src/hooks/useTranslation.jsx
import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { t, language, changeLanguage, isLoading } = useLanguage();
  
  // Função para verificar se uma tradução existe
  const hasTranslation = (key) => {
    return t(key) !== key;
  };
  
  return { t, language, changeLanguage, isLoading, hasTranslation };
};