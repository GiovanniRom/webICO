import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import es from "../locales/es";
import en from "../locales/en";

export const LENGUAJE_ALMACEN = "webico-lang";

function sincronizarLangDocumento(lng: string) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng.startsWith("en") ? "en" : "es";
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: LENGUAJE_ALMACEN,
    },
  })
  .then(() => {
    sincronizarLangDocumento(i18n.language);
    i18n.on("languageChanged", sincronizarLangDocumento);
  });

export default i18n;
