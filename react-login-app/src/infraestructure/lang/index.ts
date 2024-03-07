import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import es from './es'

const configureLang = () => {
  let lang = 'es'
  // lang = navigator.language.toString()
  return lang
}

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: configureLang(),
    interpolation: {
      escapeValue: false,
    },
  })
}
initI18n()

export default i18n
