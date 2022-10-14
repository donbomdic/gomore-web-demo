import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
import tw from "../lang/tw.json";
import cn from "../lang/cn.json";
// import messages from "@intlify/vite-plugin-vue-i18n/messages";

let browserLanguage = window.navigator.language;

if (["zh-TW", "zh-HK"].includes(browserLanguage)) {
  browserLanguage = "tw";
} else if (["zh-CN", "zh-SG"].includes(browserLanguage)) {
  browserLanguage = "cn";
} else {
  browserLanguage = "en";
}

const i18n = createI18n({
  locale: browserLanguage,
  messages: {
    en,
    tw,
    cn,
  },
});

export default i18n;
