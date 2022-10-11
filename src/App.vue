<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavbarVue from "./components/NavbarVue.vue";
import FooterVue from "./components/FooterVue.vue";
</script>

<template>
  <NavbarVue />
  <router-view></router-view>
  <FooterVue />
</template>

<style>
:root {
  --gomore-red: #9b000a;
  --gomore-red2: #860009;
  --gomore-red3: #720910;
  --gomore-white: #ffffff;

  --font-DIN: "DIN Alternate", sans-serif;
  --font-Arial: "Arial Black", sans-serif;

  --font-size-large: 20px;
  --font-size-medium: 18px;
  --font-size-small: 16px;
}

html,
body {
  margin: 0 auto;
  width: 100%;
}
</style>
