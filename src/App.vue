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

    if (["tw", "cn"].includes(window.location.pathname.slice(1, 3))) {
      console.log("yes");
      isZH.value = true;
    }

    return { isZH };
  },
};
</script>

<style>
@import url("./assets/global.css");
</style>
