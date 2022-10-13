<template>
  <NavbarVue :class="{ 'zh-lang': isZH }" />
  <router-view :class="{ 'zh-lang': isZH }"></router-view>
  <FooterVue :class="{ 'zh-lang': isZH }" />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavbarVue from "./components/NavbarVue.vue";
import FooterVue from "./components/FooterVue.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: { NavbarVue, FooterVue },
  setup() {
    const isZH = ref(false);

    if (window.location.pathname.slice(1, 3) === "tw") {
      ("./assets/style.zh.css");
      isZH.value = true;
    }

    return { isZH };
  },
};
</script>

<style>
@font-face {
  font-family: GenYoGothic JP;
  src: url("./assets/GenYoGothicJP-N.ttf") format("truetype");
}

:root {
  --font1: Arial Black;
  --font2: DIN Alternate;
}

.zh-lang {
  --font1: GenYoGothic JP;
  --font1: GenYoGothic JP;
}

html,
body {
  margin: 0 auto;
  width: 100%;
}
</style>
