<template>
  <div class="footer">
    <div class="copyright">隱私權保護政策 © GoMore Inc. All rights reserved.</div>
    <div class="locale-switcher">
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script setup>
import LocaleSwitcher from "./LocaleSwitcher.vue";
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1025px) {
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0px;
    max-width: 1024px;
    width: 100%;
    height: 66px;
    margin: 0 auto;
    background: #a51a23;
    .copyright {
      margin-left: 45px;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: #ffffff;
    }
    .locale-switcher {
      margin-right: 28px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    bottom: 0px;
    width: 100vw;
    height: 80px;
    margin: 0 auto;
    background: #a51a23;
    .copyright {
      margin: 30px auto 0 auto;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
    }
    .locale-switcher {
      margin: 0 50px 0 10px;
    }
  }
}
</style>
