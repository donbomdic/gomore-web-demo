import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import i18n from "./plugins/i18n";

/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */

const app = createApp(App);
app.use(i18n).use(router).mount("#app");
