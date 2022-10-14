import { h } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import i18n from "../plugins/i18n";
import NotFound from "../components/NotFound.vue";

import Product from "../pages/product.vue";
import Commercial from "../pages/commercial.vue";

let locale = i18n.global.locale.value;

if (["en", "tw", "cn"].includes(window.location.pathname.slice(1, 3))) {
  locale = window.location.pathname.slice(1, 3);
} else if (["zh-TW", "zh-HK"].includes(window.navigator.language)) {
  locale = "tw";
} else if (["zh-CN", "zh-SG"].includes(window.navigator.language)) {
  locale = "cn";
} else {
  locale = "en";
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
          location.href = "https://www.gomore.me/en/news/";
        },
      },
      {
        path: "aboutus",
        name: "About Us",
        beforeEnter() {
          location.href = "https://www.gomore.me/en/about-us/";
        },
      },
      {
        path: "contactus",
        name: "Contact Us",
        beforeEnter() {
          location.href = "https://www.gomore.me/en/contact-us/";
        },
      },
      {
        path: "404",
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
