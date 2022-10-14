<template>
  <div class="commercial">
    <div id="section1">
      <div class="section1-introduction">
        <div class="section1-content-container">
          <div class="section1-title">{{ $t("commercial.section1.title") }}</div>
          <div class="section1-line"></div>
          <div class="section1-content">{{ $t("commercial.section1.content1") }}</div>
          <div class="section1-content">{{ $t("commercial.section1.content2") }}</div>
        </div>
        <div class="section1-img">
          <img v-show="isMobile === 0" src="./assets/commercial-smart-title.png" alt="commercial-smart-tille" />
          <img v-show="isMobile === 1" src="./assets/commercial-smart-title-mobile.png" alt="commercial-smart-tille" />
        </div>
      </div>
      <div class="section1-card-container">
        <img
          class="section1-card-container-pattern"
          src="./assets/commercial-solution-card.png"
          alt="commercial-solution-card"
        />

        <img class="left" src="./assets/product-left.png" alt="product-left" @click="carouselCount(-1)" />
        <img class="right" src="./assets/product-right.png" alt="product-right" @click="carouselCount(1)" />
        <!-- Card 1 -->
        <div class="section1-card">
          <div v-show="count === 0 && isMobile === 0" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title1") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart3.png" style="transform: scale(0.5)" alt="commercial-smart3" />
              <img src="./assets/commercial-smart1.png" alt="commercial-smart1" />
              <img src="./assets/commercial-smart2.png" style="transform: scale(0.5)" alt="commercial-smart2" />
            </div>
          </div>
          <!-- Mobile -->
          <div v-show="count === 0 && isMobile === 1" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title1") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart1.png" alt="commercial-smart1" />
            </div>
          </div>
          <div v-show="count === 0" class="section1-card-content-wrapper">
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content1-1") }}
            </div>
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content1-2") }}
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="section1-card">
          <div v-show="count === 1 && isMobile === 0" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title2") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart1.png" style="transform: scale(0.5)" alt="commercial-smart1" />
              <img src="./assets/commercial-smart2.png" alt="commercial-smart2" />
              <img src="./assets/commercial-smart3.png" style="transform: scale(0.5)" alt="commercial-smart3" />
            </div>
          </div>
          <!-- Mobile -->
          <div v-show="count === 1 && isMobile === 1" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title2") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart2.png" alt="commercial-smart2" />
            </div>
          </div>
          <div v-show="count === 1" class="section1-card-content-wrapper">
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content2-1") }}
            </div>
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content2-2") }}
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="section1-card">
          <div v-show="count === 2 && isMobile === 0" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title3") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart2.png" style="transform: scale(0.5)" alt="commercial-smart2" />
              <img src="./assets/commercial-smart3.png" alt="commercial-smart3" />
              <img src="./assets/commercial-smart1.png" style="transform: scale(0.5)" alt="commercial-smart1" />
            </div>
          </div>
          <!-- Mobile -->
          <div v-show="count === 2 && isMobile === 1" class="section1-card-main">
            <div class="section1-card-title">{{ $t("commercial.section1.card.title3") }}</div>
            <div class="section1-card-img">
              <img src="./assets/commercial-smart3.png" alt="commercial-smart3" />
            </div>
          </div>
          <div v-show="count === 2" class="section1-card-content-wrapper">
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content3-1") }}
            </div>
            <div class="section1-card-content">
              {{ $t("commercial.section1.card.content3-2") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="section2">
      <div class="section2-introduction">
        <div class="section2-img">
          <img v-show="isMobile === 0" src="./assets/commercial-fitness-title.png" alt="commercial-fitness-title" />
          <img
            v-show="isMobile === 1"
            src="./assets/commercial-fitness-title-mobile.png"
            alt="commercial-fitness-title"
          />
        </div>
        <div class="section2-line"></div>
        <div class="section2-content-container">
          <div class="section2-title">{{ $t("commercial.section2.title") }}</div>
          <div class="section2-content">{{ $t("commercial.section2.content1") }}</div>
          <div class="section2-content">{{ $t("commercial.section2.content2") }}</div>
        </div>
      </div>
      <div class="section2-card-container">
        <!-- Card 1 -->
        <div
          :class="{ 'section2-card': !cardIsClick1, 'section2-card-onclick': cardIsClick1 }"
          @click="this.cardIsClick1 = !this.cardIsClick1"
        >
          <div class="section2-card-img">
            <img src="./assets/commercial-fitness1.png" alt="commercial-fitness1" />
          </div>
          <div class="section2-card-title">{{ $t("commercial.section2.card.title1") }}</div>
          <div class="section2-card-content">{{ $t("commercial.section2.card.content1") }}</div>
        </div>
        <!-- Card 2 -->
        <div
          :class="{ 'section2-card': !cardIsClick2, 'section2-card-onclick': cardIsClick2 }"
          @click="this.cardIsClick2 = !this.cardIsClick2"
        >
          <div class="section2-card-img">
            <img src="./assets/commercial-fitness2.png" alt="commercial-fitness2" />
          </div>
          <div class="section2-card-title">{{ $t("commercial.section2.card.title2") }}</div>
          <div class="section2-card-content">{{ $t("commercial.section2.card.content2") }}</div>
        </div>
        <!-- Card 3 -->
        <div
          :class="{ 'section2-card': !cardIsClick3, 'section2-card-onclick': cardIsClick3 }"
          @click="this.cardIsClick3 = !this.cardIsClick3"
        >
          <div class="section2-card-img">
            <img src="./assets/commercial-fitness3.png" alt="commercial-fitness3" />
          </div>
          <div class="section2-card-title">{{ $t("commercial.section2.card.title3") }}</div>
          <div class="section2-card-content">{{ $t("commercial.section2.card.content3") }}</div>
        </div>
      </div>
    </div>
    <div id="section3">
      <div class="section3-seperator">
        <div class="section3-seperator-title">{{ $t("commercial.section3.title") }}</div>
        <div class="section3-seperator-line"></div>
        <div class="section3-seperator-content">{{ $t("commercial.section3.content1") }}</div>
        <div class="section3-seperator-content">{{ $t("commercial.section3.content2") }}</div>
        <img src="./assets/commercial-solution-title.png" alt="commercial-solution-title" />
      </div>
      <div class="section3-container" style="background: #f8f8f8; color: #282828">
        <img v-if="isMobile === 1" src="./assets/commercial-solution1-mobile.png" alt="commercial-solution1" />
        <div class="section3-content">
          <div class="section3-content-no">01</div>
          <div class="section3-content-title">{{ $t("commercial.section3.card.title1") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content1-1") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content1-2") }}</div>
        </div>
        <img v-if="isMobile === 0" src="./assets/commercial-solution1.png" alt="commercial-solution1" />
      </div>
      <div
        v-if="isMobile === 0"
        class="section3-container"
        style="background: #a51a23; margin-bottom: 95px; color: #ffffff"
      >
        <img src="./assets/commercial-solution2.png" alt="commercial-solution2" />
        <div class="section3-content">
          <div class="section3-content-no">02</div>
          <div class="section3-content-title">{{ $t("commercial.section3.card.title2") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content2-1") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content2-2") }}</div>
        </div>
      </div>
      <!-- Mobile -->
      <div v-if="isMobile === 1" class="section3-container" style="background: #a51a23; color: #ffffff">
        <img src="./assets/commercial-solution2.png" alt="commercial-solution2-mobile" />
        <div class="section3-content">
          <div class="section3-content-no">02</div>
          <div class="section3-content-title">{{ $t("commercial.section3.card.title2") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content2-1") }}</div>
          <div class="section3-content-content">{{ $t("commercial.section3.card.content2-2") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMobile = ref(0);
    const count = ref(0);
    const cardIsClick1 = ref(false);
    const cardIsClick2 = ref(false);
    const cardIsClick3 = ref(false);

    if (window.innerWidth >= 960) {
      isMobile.value = 0;
    } else {
      isMobile.value = 1;
    }

    function resizeEventHandler(e) {
      if (window.innerWidth >= 960) {
        isMobile.value = 0;
      }
      if (window.innerWidth < 960) {
        isMobile.value = 1;
      }
    }

    function carouselCount(num) {
      if (num === 1) {
        if (count.value < 2) {
          count.value += 1;
        } else {
          count.value -= 2;
        }
      } else {
        if (count.value > 0) {
          count.value -= 1;
        } else {
          count.value += 2;
        }
      }
    }

    return { carouselCount, count, isMobile, resizeEventHandler, cardIsClick1, cardIsClick2, cardIsClick3 };
  },
  created() {
    window.addEventListener("resize", this.resizeEventHandler);
  },
  destroyed() {
    window.addEventListener("resize", this.resizeEventHandler);
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .commercial {
    #section1 {
      margin: 96px auto 0 auto;
      .section1-introduction {
        max-width: 1084px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        .section1-content-container {
          margin-top: 30px;
          max-width: 585px;
          width: 100%;
          height: 588px;
          display: flex;
          flex-direction: column;
          .section1-title {
            margin-bottom: 58px;
            margin-right: 56px;
            max-width: 529px;
            width: 100%;
            height: 51px;
            font-family: var(--font-family-Arial);
            font-size: 36px;
            font-weight: var(--font-weight-commercial-section1-title);
            line-height: var(--font-line-height-commercial-section1-title);
            letter-spacing: var(--font-letter-spacing-commercial-section1-title);
            text-align: left;
            color: #282828;
          }
          .section1-line {
            margin-top: 66px;
            position: absolute;
            width: 614px;
            height: 2px;
            background: #cf000e;
          }
          .section1-content {
            max-width: 489px;
            width: 100%;
            height: 419px;
            font-family: var(--font-family-DIN);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-section1-content);
            line-height: var(--font-line-height-commercial-section1-content);
            letter-spacing: var(--font-letter-spacing-commercial-section1-content);
            text-align: left;
          }
        }
        .section1-img {
          max-width: 455px;
          width: 100%;
          height: 588px;
        }
      }
      .section1-card-container {
        position: relative;
        max-width: 100vw;
        width: 100%;
        height: 918px;
        margin: 97px auto 0 auto;
        background: #ececec;
        .section1-card-container-pattern {
          z-index: 5;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        .left {
          z-index: 20;
          width: 50px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 350px;
          cursor: pointer;
          position: absolute;
          margin: 360px auto auto auto;
        }
        .right {
          z-index: 21;
          width: 50px;
          top: 0;
          bottom: 0;
          left: 350px;
          right: 0;
          cursor: pointer;
          position: absolute;
          margin: 360px auto auto auto;
        }
        .section1-card {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .section1-card-main {
            z-index: 15;
            margin-top: 131px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .section1-card-title {
              font-family: var(--font-family-Arial);
              font-size: 28px;
              font-weight: var(--font-weight-commercial-section1-card-title);
              line-height: var(--font-line-height-commercial-section1-card-title);
              letter-spacing: var(--font-letter-spacing-commercial-section1-card-title);
              text-align: center;
              color: #282828;
            }
            .section1-card-img {
              margin: 55px auto 0 auto;
            }
          }
          .section1-card-content-wrapper {
            max-width: 1028px;
            width: 100%;
            height: 148px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .section1-card-content {
              z-index: 15;
              font-family: var(--font-family-DIN);
              font-size: 22px;
              font-weight: var(--font-weight-commercial-section1-card-content);
              line-height: var(--font-line-height-commercial-section1-card-content);
              letter-spacing: var(--font-letter-spacing-commercial-section1-card-content);
              text-align: center;
              color: #282828;
            }
          }
        }
      }
    }
    #section2 {
      margin: 100px auto 0 auto;
      .section2-introduction {
        max-width: 1004px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .section2-line {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 615px;
          height: 2px;
          margin-top: 173px;
          background: #cf000e;
        }
        .section2-content-container {
          height: 588px;
          display: flex;
          flex-direction: column;
          // margin: 0px 0px 0 96px;

          .section2-title {
            margin-top: 107px;
            margin-left: 96px;
            font-family: var(--font-family-Arial);
            font-size: 36px;
            font-weight: var(--font-weight-commercial-section2-title);
            line-height: var(--font-line-height-commercial-section2-title);
            letter-spacing: var(--font-letter-spacing-commercial-section2-title);
            text-align: left;
          }
          .section2-content {
            margin-left: 96px;
            font-family: var(--font-family-DIN);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-section2-content);
            line-height: var(--font-line-height-commercial-section2-content);
            letter-spacing: var(--font-letter-spacing-commercial-section2-content);
            text-align: left;
            margin-top: 43px;
          }
        }
      }
      .section2-card-container {
        max-width: 1100px;
        width: 100%;
        height: 370px;
        margin: 123px auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .section2-card,
        .section2-card-onclick {
          margin: 0 6px;
          width: 355px;
          height: 432px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: -3px 3px 5px 0px #59595940;
          border-radius: 20px;
          background: #f8f8f8;
          .section2-card-img {
            margin: 50px auto 0 31px;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            background: #cf000e;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .section2-card-title {
            margin: 40px auto 0 31px;
            font-family: var(--font-family-Arial);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-section2-card-title);
            line-height: var(--font-line-height-commercial-section2-card-title);
            letter-spacing: var(--font-letter-spacing-commercial-section2-card-title);
            text-align: left;
            color: #cf000e;
          }
          .section2-card-content {
            margin: 15px 31px 0 31px;
            font-family: var(--font-family-DIN);
            font-size: 18px;
            font-weight: var(--font-weight-commercial-section2-card-content);
            line-height: var(--font-line-height-commercial-section2-card-content);
            letter-spacing: var(--font-letter-spacing-commercial-section2-card-content);
            text-align: left;
          }
        }

        .section2-card:hover,
        .section2-card-onclick:hover {
          width: 370px;
          height: 485px;
          background: linear-gradient(0deg, #fffafa, #fffafa);
          border: 2px solid #cf000e;
          box-shadow: -3px 3px 5px 0px #59595940;
          border-radius: 20px;
          .section2-card-title {
            font-size: 24px;
            font-weight: var(--font-weight-commercial-section2-card-title-hover);
            line-height: var(--font-line-height-commercial-section2-card-title-hover);
            letter-spacing: var(--font-letter-spacing-commercial-section2-card-title-hover);
          }
          .section2-card-content {
            font-size: 20px;
            font-weight: var(--font-weight-commercial-section2-card-content-hover);
            line-height: var(--font-line-height-commercial-section2-card-content-hover);
            letter-spacing: var(--font-letter-spacing-commercial-section2-card-content-hover);
          }
        }
      }
    }
    #section3 {
      margin-top: 136px;
      .section3-seperator {
        width: 100%;
        height: 367px;
        background: #781419;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        .section3-seperator-title {
          margin-top: 85px;
          font-family: var(--font-family-Arial);
          font-size: 36px;
          font-weight: var(--font-weight-commercial-section3-title);
          line-height: var(--font-line-height-commercial-section3-title);
          letter-spacing: var(--font-letter-spacing-commercial-section3-title);
          text-align: center;
          color: #ffffff;
        }
        .section3-seperator-line {
          margin-top: 15px;
          margin-bottom: 45px;
          background: white;
          width: 414px;
          height: 1px;
        }
        .section3-seperator-content {
          max-width: 1021px;
          width: 100%;
          font-family: var(--font-family-DIN);
          font-size: 22px;
          font-weight: var(--font-weight-commercial-section3-content);
          line-height: var(--font-line-height-commercial-section3-content);
          letter-spacing: var(--font-letter-spacing-commercial-section3-content);
          text-align: center;
          color: #ffffff;
        }
        img {
          position: absolute;
          left: 0;
        }
      }
      .section3-container {
        margin: 95px auto 0 auto;
        max-width: 1155px;
        width: 100%;
        height: 595px;
        display: flex;
        .section3-content {
          max-width: 752px;
          width: 100%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          position: relative;
          .section3-content-no {
            display: inline-block;
            border-bottom: 3px solid;
            margin-top: 65px;
            margin-left: 65px;
            font-family: Arial Black;
            font-size: 40px;
            font-weight: var(--font-weight-commercial-section3-content-no);
            line-height: var(--font-line-height-commercial-section3-content-no);
            letter-spacing: var(--font-letter-spacing-commercial-section3-content-no);
            text-align: left;
            padding-bottom: 3px;
          }
          .section3-content-title {
            margin-top: 40px;
            margin-left: 65px;
            font-family: var(--font-family-Arial);
            font-size: 26px;
            font-weight: var(--font-weight-commercial-section3-content-title);
            line-height: var(--font-line-height-commercial-section3-content-title);
            letter-spacing: var(--font-letter-spacing-commercial-section3-content-title);
            text-align: left;
          }
          .section3-content-content {
            margin: 28px 65px 0 65px;
            font-family: var(--font-family-DIN);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-section3-content-content);
            line-height: var(--font-line-height-commercial-section3-content-content);
            letter-spacing: var(--font-letter-spacing-commercial-section3-content-content);
            text-align: left;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .commercial {
    #section1 {
      margin: 34px auto 0 auto;
      .section1-introduction {
        max-width: 100vw;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .section1-content-container {
          height: 400px;
          display: flex;
          flex-direction: column;
          margin: 30px auto 0 auto;
          .section1-title {
            margin-left: 54px;
            margin-top: 34px;
            font-family: var(--font-family-Arial);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-mobile-section1-title);
            line-height: var(--font-line-height-commercial-mobile-section1-title);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section1-title);
            text-align: left;
            color: #282828;
          }
          .section1-line {
            margin-top: 34px;
            margin-left: 32px;
            position: absolute;
            height: 378px;
            width: 1.5px;
            background: #cf000e;
            // border: 1px solid #cf000e;
          }
          .section1-content {
            margin-left: 54px;
            margin-right: 25px;
            font-family: var(--font-family-DIN);
            font-size: 14px;
            font-weight: var(--font-weight-commercial-mobile-section1-content);
            line-height: var(--font-line-height-commercial-mobile-section1-content);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section1-content);
            text-align: left;
            color: #282828;
            margin-top: 20px;
          }
        }
        .section1-img {
          img {
            width: 100vw;
            max-height: 300px;
            object-fit: cover;
            object-position: 50% 25%;
          }
        }
      }
      .section1-card-container {
        position: relative;
        max-width: 100vw;
        width: 100%;
        height: 650px;
        margin: 50px auto 0 auto;
        background: #ececec;
        .section1-card-container-pattern {
          z-index: 5;
          position: absolute;
          width: 500px;
          right: 0;
          bottom: 0;
        }
        .left {
          z-index: 20;
          width: 50px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          cursor: pointer;
          position: absolute;
          margin: 220px auto auto 10px;
        }
        .right {
          z-index: 21;
          width: 50px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          cursor: pointer;
          position: absolute;
          margin: 220px 10px auto auto;
        }
        .section1-card {
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .section1-card-main {
            margin-top: 64px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .section1-card-title {
              font-family: var(--font-family-Arial);
              font-size: 20px;
              font-weight: var(--font-weight-commercial-mobile-section1-card-title);
              line-height: var(--font-line-height-commercial-mobile-section1-card-title);
              letter-spacing: var(--font-letter-spacing-commercial-mobile-section1-card-title);
              text-align: center;
              color: #282828;
            }
            .section1-card-img {
              z-index: 15;
              height: 205px;
              margin: 40px auto 40px auto;
              img {
                width: 173px;
              }
            }
          }
          .section1-card-content-wrapper {
            z-index: 15;
            height: 206px;
            margin: auto 35px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .section1-card-content {
              margin-top: 15px;
              font-family: var(--font-family-DIN);
              font-size: 16px;
              font-weight: var(--font-weight-commercial-mobile-section1-card-content);
              line-height: var(--font-line-height-commercial-mobile-section1-card-content);
              letter-spacing: var(--font-letter-spacing-commercial-mobile-section1-card-content);
              text-align: center;
              color: #282828;
            }
          }
        }
      }
    }
    #section2 {
      margin: 50px auto 0 auto;
      .section2-introduction {
        max-width: 100vw;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .section2-line {
          margin-top: 250px;
          margin-left: 32px;
          position: absolute;
          height: 300px;
          width: 1.5px;
          background: #cf000e;
        }
        .section2-content-container {
          height: 220px;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          .section2-title {
            margin-left: 54px;
            margin-top: 39px;
            font-family: var(--font-family-Arial);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-mobile-section2-title);
            line-height: var(--font-line-height-commercial-mobile-section2-title);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-title);
            text-align: left;
            color: #282828;
          }

          .section2-content {
            margin: 20px 25px 0 54px;
            font-family: var(--font-family-DIN);
            font-size: 14px;
            font-weight: var(--font-weight-commercial-mobile-section2-content);
            line-height: var(--font-line-height-commercial-mobile-section2-content);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-content);
            text-align: left;
          }
        }
        .section2-img {
          img {
            width: 100vw;
            max-height: 300px;
            object-fit: cover;
            object-position: 50% 15%;
          }
        }
      }
      .section2-card-container {
        max-width: 100vw;
        width: 100%;
        height: 1054px;
        margin: 80px auto 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .section2-card {
          cursor: pointer;
          margin: 0 36px 32px 36px;
          height: 330px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 1px 3px 6px 0px #59595940;
          background: #f8f8f8;
          border-radius: 20px;
          .section2-card-img {
            margin: 42px auto 0 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 45px;
              height: 45px;
            }
          }
          .section2-card-title {
            margin: 20px auto 0 22px;
            font-family: var(--font-family-Arial);
            font-size: 22px;
            font-weight: var(--font-weight-commercial-mobile-section2-card-title);
            line-height: var(--font-line-height-commercial-mobile-section2-card-title);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-card-title);
            text-align: left;
            color: #cf000e;
          }
          .section2-card-content {
            margin: 15px 21px 0 22px;
            height: 144px;
            font-family: var(--font-family-DIN);
            font-size: 14px;
            font-weight: var(--font-weight-commercial-mobile-section2-card-content);
            line-height: var(--font-line-height-commercial-mobile-section2-card-content);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-card-content);
            text-align: left;
          }
        }
        .section2-card-onclick {
          cursor: pointer;
          margin: 0 31px 10px 31px;
          height: 360px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 1px 3px 6px 0px #59595940;
          border-radius: 20px;
          background: linear-gradient(0deg, #fffafa, #fffafa);
          border: 1px solid #cf000e;
          .section2-card-img {
            margin: 32px auto 0 27px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 45px;
              height: 45px;
            }
          }
          .section2-card-title {
            margin: 20px auto 0 27px;
            font-family: var(--font-family-Arial);
            font-size: 24px;
            font-weight: var(--font-weight-commercial-mobile-section2-card-title-hover);
            line-height: var(--font-line-height-commercial-mobile-section2-card-title-hover);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-card-title-hover);
            text-align: left;

            color: #cf000e;
          }
          .section2-card-content {
            margin: 15px 27px 0 27px;
            font-family: var(--font-family-DIN);
            font-size: 16px;
            font-weight: var(--font-weight-commercial-mobile-section2-card-content-hover);
            line-height: var(--font-line-height-commercial-mobile-section2-card-content-hover);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section2-card-content-hover);
            text-align: left;
            color: #282828;
          }
        }
      }
    }
    #section3 {
      margin-top: 60px;
      .section3-seperator {
        width: 100vw;
        height: 259px;
        background: #781419;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        .section3-seperator-title {
          margin-top: 54px;
          margin-bottom: 22px;
          font-family: var(--font-family-Arial);
          font-size: 22px;
          font-weight: var(--font-weight-commercial-mobile-section3-title);
          line-height: var(--font-line-height-commercial-mobile-section3-title);
          letter-spacing: var(--font-letter-spacing-commercial-mobile-section3-title);
          text-align: center;

          color: #ffffff;
          padding-bottom: 10px;
          border-bottom: 1.5px solid white;
        }
        .section3-seperator-content {
          max-width: 90vw;
          width: 100%;
          font-family: var(--font-family-DIN);
          font-size: 14px;
          font-weight: var(--font-weight-commercial-mobile-section3-content);
          line-height: var(--font-line-height-commercial-mobile-section3-content);
          letter-spacing: var(--font-letter-spacing-commercial-mobile-section3-content);
          text-align: center;
          color: #ffffff;
        }
        img {
          width: 110vw;
          margin-top: 100px;
          margin-right: 60px;
          position: absolute;
        }
      }
      .section3-container {
        margin: 0 auto;
        max-width: 100vw;
        width: 100%;
        height: 680px;
        display: flex;
        flex-direction: column;
        img {
          height: 234px;
          object-fit: cover;
          object-position: 50% 15%;
        }
        .section3-content {
          max-width: 100vw;
          width: 100%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          .section3-content-no {
            display: inline-block;
            border-bottom: 3px solid;
            margin-top: 29px;
            margin-left: 29px;
            font-family: Arial Black;
            font-size: 30px;
            font-weight: var(--font-weight-commercial-mobile-section3-content-no);
            line-height: var(--font-line-height-commercial-mobile-section3-content-no);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section3-content-no);
            text-align: left;
            padding-bottom: 3px;
          }
          .section3-content-title {
            margin-top: 29px;
            margin-left: 29px;
            font-family: var(--font-family-Arial);
            font-size: 20px;
            font-weight: var(--font-weight-commercial-mobile-section3-content-title);
            line-height: var(--font-line-height-commercial-mobile-section3-content-title);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section3-content-title);
            text-align: left;
          }
          .section3-content-content {
            margin: 29px 30px 0 29px;
            font-family: var(--font-family-DIN);
            font-size: 15px;
            font-weight: var(--font-weight-commercial-mobile-section3-content-content);
            line-height: var(--font-line-height-commercial-mobile-section3-content-content);
            letter-spacing: var(--font-letter-spacing-commercial-mobile-section3-content-content);
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
