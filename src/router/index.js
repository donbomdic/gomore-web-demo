import { h } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import i18n from "../plugins/i18n";
import NotFound from "../components/NotFound.vue";

import Product from "../pages/product.vue";
import Commercial from "../pages/commercial.vue";
import { compileScript } from "vue/compiler-sfc";

let locale = i18n.global.locale.value;
let localeOut = i18n.global.locale.value;

if (["en", "tw", "cn"].includes(window.location.pathname.slice(1, 3))) {
  locale = window.location.pathname.slice(1, 3);
} else if (["zh-TW", "zh-HK"].includes(window.navigator.language)) {
  locale = "tw";
  localeOut = "zh-tw";
} else if (["zh-CN", "zh-SG"].includes(window.navigator.language)) {
  locale = "cn";
  localeOut = "zh-cn";
} else {
  locale = "en";
  localeOut = "en";
}

const routes = [
  {
    path: "/",
    redirect: `${locale}/product`,
  },
  {
    path: "/:lang/",
    redirect: `${locale}/product`,
  },
  {
    path: "/:lang",
    redirect: `/:lang/product`,
    template: "",
    children: [
      {
        path: "product",
        name: "Product",
        component: Product,
      },
      {
        path: "commercial",
        name: "Commercial",
        component: Commercial,
      },
      {
        path: "news",
        name: "News",
        beforeEnter() {
          if (i18n.global.locale.value === "tw") {
            localeOut = "zh-tw/?page_id=20";
          } else if (i18n.global.locale.value === "cn") {
            localeOut = "zh-cn/消息/";
          } else {
            localeOut = "en/news/";
          }
          location.href = `https://www.gomore.me/${localeOut}`;
        },
      },
      {
        path: "aboutus",
        name: "About Us",
        beforeEnter() {
          if (i18n.global.locale.value === "tw") {
            localeOut = "zh-tw/關於我們/";
          } else if (i18n.global.locale.value === "cn") {
            localeOut = "zh-cn/关于我们/";
          } else {
            localeOut = "en/about-us/";
          }
          location.href = `https://www.gomore.me/${localeOut}`;
        },
      },
      {
        path: "contactus",
        name: "Contact Us",
        beforeEnter() {
          if (i18n.global.locale.value === "tw") {
            localeOut = "zh-tw/聯絡我們/";
          } else if (i18n.global.locale.value === "cn") {
            localeOut = "zh-cn/联络我们/";
          } else {
            localeOut = "en/contact-us/";
          }
          location.href = `https://www.gomore.me/${localeOut}`;
        },
      },
      {
        path: "official",
        name: "Official",
        beforeEnter() {
          if (i18n.global.locale.value === "tw") {
            localeOut = "zh-tw";
          } else if (i18n.global.locale.value === "cn") {
            localeOut = "zh-cn";
          } else {
            localeOut = "en";
          }
          location.href = `https://www.gomore.me/${localeOut}/`;
        },
      },
      {
        path: "/*",
        name: "NotFound",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  if (!["en", "tw", "cn"].includes(lang)) {
    return next("en");
  }

  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang;
  }

  return next();
});

export default router;
