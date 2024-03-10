import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// Загрузка файлов с переводами

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18next
  .use(initReactI18next) // передаем экземпляр i18n в react-i18next, который сделает его доступным для всех компонентов через context API.
  //   .use(LanguageDetector) // с помощью плагина определяем язык пользователя в браузере

  .init({
    // передаем переводы текстов интерфейса в формате JSON
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    lng: "ru",
    fallbackLng: "ru", // если переводы на языке пользователя недоступны, то будет использоваться язык, указанный в этом поле

    interpolation: {
      escapeValue: false, // экранирование уже есть в React, поэтому отключаем
    },
  });

export default i18next;
