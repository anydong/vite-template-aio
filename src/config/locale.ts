import { InitOptions } from "i18next";

export const initOptions: InitOptions = {
  backend: {
    // 網頁載入時去下載語言檔的位置
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  // lng: 'zh-Hans', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  fallbackLng: {
    default: ["zh-CN"],
    zh: ["zh-CN"],
  },
  supportedLngs: ["zh-CN", "en"],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};
