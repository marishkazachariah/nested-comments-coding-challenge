import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { commentsList } from './locales/en/comments-list';
import { common } from './locales/en/common';

export const defaultNS = 'common';
export const resources = {
  en: {
    common,
    'comments-list': commentsList,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['common'],
  defaultNS,
  resources,
});
