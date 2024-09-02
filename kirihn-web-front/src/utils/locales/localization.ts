import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enDictionary from './en.json';
import ruDictionary from './ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enDictionary },
      ru: { translation: ruDictionary },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
