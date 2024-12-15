import { createI18n } from 'vue-i18n';

// Translation messages
const messages = {
  en: {
    login: 'Login',
    language: 'Language',
  },
  es: {
    login: 'Ingressar',
    language: 'Idioma',
  },
  pt: {
    login: 'Entrar',
    language: 'Idioma',
  },
};

// i18n instance
const i18n = createI18n({
  legacy: false, // Use the Composition API
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language
  messages,
});

export default i18n;