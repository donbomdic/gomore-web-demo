<template>
  <ul>
    <li @click="changeLocale" value="tw">繁體中文</li>
    <span>|</span>
    <li @click="changeLocale" value="cn">简体中文</li>
    <span>|</span>
    <li @click="changeLocale" value="en">EN</li>
  </ul>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "LocaleSwitcher",
  setup() {
    const router = useRouter();

    return { router };
  },
  data() {
    return {
      localesNow: this.$i18n.locale,
      locales: ["en", "tw", "cn"],
    };
  },
  methods: {
    changeLocale(event) {
      let currentPathObject = this.router.currentRoute.value;
      this.$i18n.locale = event.target._value;
      this.router.push({ name: currentPathObject.name, params: { lang: this.$i18n.locale } });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 0 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    font-family: var(--font-family-DIN);
    color: #ffffff;
  }
  li {
    cursor: pointer;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    font-family: var(--font-family-DIN);
    color: #ffffff;
  }
}

@media screen and (max-width: 1024px) {
  ul {
    span {
      font-size: 12px;
    }
    li {
      font-size: 12px;
    }
  }
}
</style>
