<template>
  <NavbarVue :class="{ 'zh-lang': isZH, 'en-lang': !isZH }" />
  <router-view :class="{ 'zh-lang': isZH, 'en-lang': !isZH }"></router-view>
  <FooterVue :class="{ 'zh-lang': isZH, 'en-lang': !isZH }" />
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

    return { isZH };
  },
  watch: {
    $route(to, from) {
      if (["tw", "cn"].includes(window.location.pathname.slice(1, 3))) {
        this.isZH = true;
      } else {
        this.isZH = false;
      }
    },
  },
};
</script>

<style>
@import url("./assets/global.css");
</style>
