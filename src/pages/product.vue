<template>
  <div class="product">
    <div id="section1">
      <div class="section-banner">
        <div class="section-title">{{ $t("product.section1.title") }}</div>
        <div class="section-content">{{ $t("product.section1.content1") }}</div>
        <div class="section-content">{{ $t("product.section1.content2") }}</div>
        <div class="section-content">{{ $t("product.section1.content3") }}</div>
      </div>
      <div class="section1-card-container">
        <div class="section1-card card1">
          <div class="section1-card-title">{{ $t("product.section1.card.title1") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content1-1") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content1-2") }}</div>
        </div>
        <div class="section1-card card2">
          <div class="section1-card-title">{{ $t("product.section1.card.title2") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content2") }}</div>
        </div>
        <div class="section1-card card3">
          <div class="section1-card-title">{{ $t("product.section1.card.title3") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content3-1") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content3-2") }}</div>
        </div>
        <div class="section1-card card4">
          <div class="section1-card-title">{{ $t("product.section1.card.title4") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content4") }}</div>
        </div>
        <div class="section1-card card5">
          <div class="section1-card-title">{{ $t("product.section1.card.title5") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content5-1") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content5-2") }}</div>
        </div>
        <div class="section1-card card6">
          <div class="section1-card-title">{{ $t("product.section1.card.title6") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content6-1") }}</div>
          <div class="section1-card-content">{{ $t("product.section1.card.content6-2") }}</div>
        </div>
      </div>
    </div>
    <div id="section2">
      <div class="section-banner">
        <div class="section-title">{{ $t("product.section2.title") }}</div>
        <div class="section-content">{{ $t("product.section2.content1") }}</div>
        <div class="section-content">{{ $t("product.section2.content2") }}</div>
      </div>
      <div class="section2-container">
        <img
          v-show="count === 1 || count === 2"
          class="left"
          src="./assets/product-left.png"
          alt="product-left"
          @click="carouselCount(-1)"
        />
        <img
          v-show="count === 0 || count === 1"
          class="right"
          src="./assets/product-right.png"
          alt="product-right"
          @click="carouselCount(1)"
        />
        <div ref="cardWrapper" class="section2-card-wrapper" @scroll="handleScroll()">
          <!-- Card 1-->
          <div class="section2-card-container">
            <div class="section2-carousel">
              <img v-show="isMobile === 1" src="./assets/product-carousell1-mobile.png" alt="carousel1-1-mobile" />
              <img v-show="isMobile === 0" src="./assets/product-carousell1.png" alt="carousel1-1" />
              <img @click="carouselClick(1)" src="./assets/product-carousell2.png" alt="carousel1-2" />
              <img @click="carouselClick(2)" src="./assets/product-carousell2.png" alt="carousel1-3" />
            </div>
            <div class="section2-card">
              <img
                v-show="isMobile === 1"
                class="section2-card-img"
                src="./assets/product-indicator1-mobile.png"
                alt="product-indicator1-mobile"
              />
              <img
                v-show="isMobile === 0"
                class="section2-card-img"
                src="./assets/product-indicator1.png"
                alt="product-indicator1"
              />
              <div class="section2-card-content-container">
                <div class="section2-card-content">
                  <div class="section2-card-title">{{ $t("product.section2.card.title1") }}</div>
                  <div class="section2-card-subtitle">
                    {{ $t("product.section2.card.content1-1") }}
                  </div>
                  <ul>
                    <li>
                      {{ $t("product.section2.card.content1-2") }}
                    </li>
                    <li>{{ $t("product.section2.card.content1-3") }}</li>
                    <li>{{ $t("product.section2.card.content1-4") }}</li>
                    <li>{{ $t("product.section2.card.content1-5") }}</li>
                    <li>{{ $t("product.section2.card.content1-6") }}</li>
                    <li>{{ $t("product.section2.card.content1-7") }}</li>
                    <li>{{ $t("product.section2.card.content1-8") }}</li>
                    <li>{{ $t("product.section2.card.content1-9") }}</li>
                    <li>{{ $t("product.section2.card.content1-10") }}</li>
                    <li>{{ $t("product.section2.card.content1-11") }}</li>
                  </ul>
                  <div class="section2-card-subtitle">
                    {{ $t("product.section2.card.content1-12") }}
                  </div>
                  <ul>
                    <li>{{ $t("product.section2.card.content1-13") }}</li>
                    <li>{{ $t("product.section2.card.content1-14") }}</li>
                    <li>{{ $t("product.section2.card.content1-15") }}</li>
                    <li>{{ $t("product.section2.card.content1-16") }}</li>
                    <li>{{ $t("product.section2.card.content1-17") }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="section2-card-container">
            <div class="section2-carousel">
              <img @click="carouselClick(0)" src="./assets/product-carousell2.png" alt="carousel2-1" />
              <img v-show="isMobile === 1" src="./assets/product-carousell1-mobile.png" alt="carousel2-2-mobile" />
              <img v-show="isMobile === 0" src="./assets/product-carousell1.png" alt="carousel2-2" />
              <img @click="carouselClick(2)" src="./assets/product-carousell2.png" alt="carousel2-3" />
            </div>
            <div class="section2-card">
              <img
                v-show="isMobile === 1"
                class="section2-card-img"
                src="./assets/product-indicator2-mobile.png"
                alt="product-indicator2-mobile"
              />
              <img
                v-show="isMobile === 0"
                class="section2-card-img"
                src="./assets/product-indicator2.png"
                alt="product-indicator2"
              />
              <div class="section2-card-content-container">
                <div class="section2-card-content">
                  <div class="section2-card-title">{{ $t("product.section2.card.title2") }}</div>
                  <div class="section2-card-subtitle">
                    {{ $t("product.section2.card.content2-1") }}
                  </div>
                  <ul>
                    <li>{{ $t("product.section2.card.content2-2") }}</li>
                    <li>{{ $t("product.section2.card.content2-3") }}</li>
                    <li>{{ $t("product.section2.card.content2-4") }}</li>
                    <li>{{ $t("product.section2.card.content2-5") }}</li>
                    <li>{{ $t("product.section2.card.content2-6") }}</li>
                    <li>{{ $t("product.section2.card.content2-7") }}</li>
                    <li>{{ $t("product.section2.card.content2-8") }}</li>
                    <li>{{ $t("product.section2.card.content2-9") }}</li>
                    <li>{{ $t("product.section2.card.content2-10") }}</li>
                    <li>{{ $t("product.section2.card.content2-11") }}</li>
                  </ul>
                  <div class="section2-card-subtitle">
                    {{ $t("product.section2.card.content2-12") }}
                  </div>
                  <ul>
                    <li>{{ $t("product.section2.card.content2-13") }}</li>
                    <li>{{ $t("product.section2.card.content2-14") }}</li>
                    <li>{{ $t("product.section2.card.content2-15") }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="section2-card-container">
            <div class="section2-carousel">
              <img @click="carouselClick(0)" src="./assets/product-carousell2.png" alt="carousel3-1" />
              <img @click="carouselClick(1)" src="./assets/product-carousell2.png" alt="carousel3-2" />
              <img v-show="isMobile === 1" src="./assets/product-carousell1-mobile.png" alt="carousel3-3-mobile" />
              <img v-show="isMobile === 0" src="./assets/product-carousell1.png" alt="carousel3-3" />
            </div>
            <div class="section2-card">
              <img
                v-show="isMobile === 1"
                class="section2-card-img"
                src="./assets/product-indicator3-mobile.png"
                alt="product-indicator3-mobile"
              />
              <img
                v-show="isMobile === 0"
                class="section2-card-img"
                src="./assets/product-indicator3.png"
                alt="product-indicator3"
              />
              <div class="section2-card-content-container">
                <div class="section2-card-content">
                  <div class="section2-card-title">{{ $t("product.section2.card.title3") }}</div>
                  <div class="section2-card-subtitle">
                    {{ $t("product.section2.card.content3-1") }}
                  </div>
                  <ul>
                    <li class="content3-2">{{ $t("product.section2.card.content3-2") }}</li>
                    <li class="content3-3">{{ $t("product.section2.card.content3-3") }}</li>
                    <li>{{ $t("product.section2.card.content3-4") }}</li>
                    <li>{{ $t("product.section2.card.content3-5") }}</li>
                    <li>{{ $t("product.section2.card.content3-6") }}</li>
                    <li>{{ $t("product.section2.card.content3-7") }}</li>
                    <li>{{ $t("product.section2.card.content3-8") }}</li>
                    <li>{{ $t("product.section2.card.content3-9") }}</li>
                    <li>{{ $t("product.section2.card.content3-10") }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="section3">
      <div class="section-banner">
        <div class="section-title">{{ $t("product.section3.title1") }}</div>
        <div class="section-content">{{ $t("product.section3.content1") }}</div>
        <div class="section-content">{{ $t("product.section3.content2") }}</div>
      </div>
      <div class="section3-container">
        <div class="section3-card-title">{{ $t("product.section3.title2") }}</div>
        <div class="section3-card-container">
          <div class="section3-card">
            <img src="./assets/product-icon1.png" alt="signal1" />
            <div class="section3-card-content">{{ $t("product.section3.card.title1") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon2.png" alt="signal2" />
            <div class="section3-card-content">{{ $t("product.section3.card.title2-1") }}</div>
            <div class="section3-card-content">{{ $t("product.section3.card.title2-2") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon3.png" alt="signal3" />
            <div class="section3-card-content">{{ $t("product.section3.card.title3") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon4.png" alt="signal4" />
            <div class="section3-card-content">{{ $t("product.section3.card.title4") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon5.png" alt="signal5" />
            <div class="section3-card-content">{{ $t("product.section3.card.title5") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon6.png" alt="signal6" />
            <div class="section3-card-content">{{ $t("product.section3.card.title6") }}</div>
          </div>
          <div class="section3-card">
            <img src="./assets/product-icon7.png" alt="signal7" />
            <div class="section3-card-content">{{ $t("product.section3.card.title7") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const isMobile = ref(0);
    const count = ref(0);
    const cardWrapper = ref(null);
    let scrolled = computed({
      get: () => cardWrapper.value,
    });

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

    function carouselClick(num) {
      if (count.value === 0) {
        if (num === 1) {
          scrolled.value.scrollLeft += scrolled.value.scrollWidth / 3;
          count.value = 1;
        }
        if (num === 2) {
          scrolled.value.scrollLeft += (scrolled.value.scrollWidth / 3) * 2;
          count.value = 2;
        }
      }
      if (count.value === 1) {
        if (num === 0) {
          scrolled.value.scrollLeft -= scrolled.value.scrollWidth / 3;
          count.value = 0;
        }
        if (num === 2) {
          scrolled.value.scrollLeft += scrolled.value.scrollWidth / 3;
          count.value = 2;
        }
      }
      if (count.value === 2) {
        if (num === 0) {
          scrolled.value.scrollLeft -= (scrolled.value.scrollWidth / 3) * 2;
          count.value = 0;
        }
        if (num === 1) {
          scrolled.value.scrollLeft -= scrolled.value.scrollWidth / 3;
          count.value = 1;
        }
      }
    }

    function carouselCount(num) {
      if (num === -1 && count.value > 0) {
        count.value -= 1;
        scrolled.value.scrollLeft -= scrolled.value.scrollWidth / 3;
      }
      if (num === 1 && count.value < 2) {
        count.value += 1;
        scrolled.value.scrollLeft += scrolled.value.scrollWidth / 3;
      }
    }

    function handleScroll() {
      if (scrolled.value.scrollLeft === 0) {
        count.value = 0;
      }
      if (scrolled.value.scrollLeft > 0 && scrolled.value.scrollLeft < (scrolled.value.scrollWidth / 3) * 2) {
        count.value = 1;
      }
      if (scrolled.value.scrollLeft === (scrolled.value.scrollWidth / 3) * 2) {
        count.value = 2;
      }
    }

    return { isMobile, count, cardWrapper, resizeEventHandler, carouselCount, handleScroll, carouselClick };
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
  .product {
    #section1 {
      .section-banner {
        margin: 84px 0px 130px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator1.png");
      }
      .section1-card-container {
        max-width: 1021px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
        .card1 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai1.png");
        }
        .card2 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai2.png");
        }
        .card3 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai3.png");
        }
        .card4 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai4.png");
        }
        .card5 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai5.png");
        }
        .card6 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai6.png");
        }

        .section1-card {
          background-size: cover;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 337px;
          width: 100%;
          margin: 0 auto;
          height: 512px;
          border-radius: 10px;

          .section1-card-title {
            margin-top: 175px;
            font-family: var(--font-family-Arial);
            color: #ffffff;
            font-size: 22px;
            font-weight: var(--font-weight-products-section1-card-title);
            line-height: var(--font-line-height-products-section1-card-title);
            letter-spacing: var(--font-letter-spacing-products-section1-card-title);
          }
          .section1-card-content {
            opacity: 0;
            margin: 30px 27px 0 27px;
            font-family: var(--font-family-DIN);
            font-size: 17px;
            font-weight: var(--font-weight-products-section1-card-content);
            line-height: var(--font-line-height-products-section1-card-content);
            letter-spacing: var(--font-letter-spacing-products-section1-card-content);
          }
        }
        .card1:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai1.png");
        }
        .card2:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai2.png");
        }
        .card3:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai3.png");
        }
        .card4:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai4.png");
        }
        .card5:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai5.png");
        }
        .card6:hover {
          background-image: linear-gradient(#f5f5f5e5, #f5f5f5e5), url("./assets/product-ai6.png");
        }
        .section1-card:hover {
          .section1-card-title {
            color: #cf000e;
          }
          .section1-card-content {
            opacity: 100;
          }
        }
      }
    }
    #section2 {
      .section-banner {
        margin: 130px 0px 116px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator2.png");
      }
      .section2-container {
        max-width: 1366px;
        width: 100%;
        margin: 0 auto;
        position: relative;

        .left {
          z-index: 11;
          top: 0;
          bottom: 0;
          left: 0;
          cursor: pointer;
          position: absolute;
          margin: auto auto auto 90px;
        }
        .right {
          z-index: 10;
          top: 0;
          bottom: 0;
          right: 0;
          cursor: pointer;
          position: absolute;
          margin: auto 90px auto auto;
        }
        .section2-card-wrapper::-webkit-scrollbar {
          display: none;
        }
        .section2-card-wrapper {
          height: 680px;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          overflow-x: auto;
          // overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          .section2-card-container {
            margin: 0 auto;
            scroll-snap-align: center;
            position: relative;
            max-width: 1100px;
            width: 100%;
            height: 650px;
            background: #f4f4f4;
            box-shadow: 2px 5px 8px rgba(64, 64, 64, 0.25);
            border-radius: 25px;
            .section2-carousel {
              bottom: 0;
              left: 0;
              right: 0;
              width: 40%;
              height: 5%;
              margin: 0 auto;
              z-index: 10;
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                margin: 2px;
                cursor: pointer;
              }
            }
            .section2-card {
              margin: 0 auto;
              display: flex;
              align-items: center;
              height: 100%;
              // .section2-card-img {
              // }
              .section2-card-content-container {
                width: 100%;
                height: 100%;
                .section2-card-content {
                  margin: 83px auto auto 71px;
                  display: flex;
                  flex-direction: column;
                  .section2-card-title {
                    margin-bottom: 25px;
                    font-family: var(--font-family-Arial);
                    font-size: 32px;
                    font-weight: var(--font-weight-products-section2-card-title);
                    line-height: var(--font-line-height-products-section2-card-title);
                    letter-spacing: var(--font-letter-spacing-products-section2-card-title);
                    text-align: left;
                    color: #cf000e;
                  }
                  .section2-card-subtitle {
                    margin-bottom: 18px;
                    font-family: var(--font-family-Arial);
                    font-size: 20px;
                    font-weight: var(--font-weight-products-section2-card-subtitle);
                    line-height: var(--font-line-height-products-section2-card-subtitle);
                    letter-spacing: var(--font-letter-spacing-products-section2-card-subtitle);
                    text-align: left;
                  }
                  ul {
                    list-style-type: disc;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    margin-bottom: 32px;
                    .content3-2 {
                      // grid-row-start: 1;
                      // grid-row-end: 1;
                    }
                    .content3-3 {
                      grid-row-start: 1;
                      grid-row-end: 3;
                    }
                    li {
                      margin-right: 10px;
                      font-family: var(--font-family-DIN);
                      font-size: 16px;
                      font-weight: var(--font-weight-products-section2-card-subtitle-li);
                      line-height: var(--font-line-height-products-section2-card-subtitle-li);
                      letter-spacing: var(--font-letter-spacing-products-section2-card-subtitle-li);
                      text-align: left;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    #section3 {
      .section-banner {
        margin: 86px 0px 75px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator3.png");
      }
      .section3-container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .section3-card-title {
          font-family: var(--font-family-Arial);
          font-size: 32px;
          font-weight: var(--font-weight-products-section3-card-title);
          line-height: var(--font-line-height-products-section3-card-title);
          letter-spacing: var(--font-letter-spacing-products-section3-card-title);
          text-align: center;
        }
        .section3-card-container {
          max-width: 757px;
          width: 100%;
          margin: 50px auto 110px auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          .section3-card {
            margin: 10px 10px;
            width: 163px;
            height: 196px;
            background: #f4f4f4;
            box-shadow: 0px 2px 5px rgba(71, 71, 71, 0.25);
            border-radius: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            img {
              margin: 50px 10px 30px 10px;
            }
            .section3-card-content {
              max-width: 141px;
              font-family: var(--font-family-DIN);
              font-size: 20px;
              font-weight: var(--font-weight-products-section3-card-content);
              line-height: var(--font-line-height-products-section3-card-content);
              letter-spacing: var(--font-letter-spacing-products-section3-card-content);
              text-align: center;
            }
          }
        }
      }
    }
    .section-banner {
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .section-title {
      margin-bottom: 35px;
      font-family: var(--font-family-Arial);
      font-size: 36px;
      font-weight: var(--font-weight-products-section-title);
      line-height: var(--font-line-height-products-section-title);
      letter-spacing: var(--font-letter-spacing-products-section-title);
      text-align: center;
      color: #ffffff;
    }
    .section-content {
      max-width: 1021px;
      width: 100%;
      margin: 0 172px;
      font-family: var(--font-family-DIN);
      font-size: 22px;
      font-weight: var(--font-weight-products-section-content);
      line-height: var(--font-line-height-products-section-content);
      letter-spacing: var(--font-letter-spacing-products-section-content);
      text-align: center;
      color: #ffffff;
    }
  }
}

// RESPONSIVE WITH MAX WIDTH 959PX
@media screen and (max-width: 959px) {
  .product {
    #section1 {
      .section-banner {
        margin: 80px 0px 30px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator1-mobile.png");
      }
      .section1-card-container {
        width: 100vw;
        margin: 0 auto;
        .card1 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai1-mobile.png");
        }
        .card2 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai2-mobile.png");
        }
        .card3 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai3-mobile.png");
        }
        .card4 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai4-mobile.png");
        }
        .card5 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai5-mobile.png");
        }
        .card6 {
          background-image: linear-gradient(#241b19bf, #241b19bf), url("./assets/product-ai6-mobile.png");
        }

        .section1-card {
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          margin: 5px auto;
          height: 400px;

          .section1-card-title {
            margin-bottom: 20px;
            font-family: var(--font-family-Arial);
            color: #ffffff;
            font-size: 20px;
            font-weight: var(--font-weight-products-mobile-section1-card-title);
            line-height: var(--font-line-height-products-mobile-section1-card-title);
            letter-spacing: var(--font-letter-spacing-products-mobile-section1-card-title);
            text-align: center;
          }
          .section1-card-content {
            margin: 10px 27px;
            font-family: var(--font-family-DIN);
            font-size: 14px;
            font-weight: var(--font-weight-products-mobile-section1-card-content);
            line-height: var(--font-line-height-products-mobile-section1-card-content);
            letter-spacing: var(--font-letter-spacing-products-mobile-section1-card-content);
            text-align: left;

            color: #ffffff;
          }
        }
      }
    }
    #section2 {
      .section-banner {
        margin: 35px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator2-mobile.png");
      }
      .section2-container {
        max-width: 100vw;
        width: 100%;
        height: 930px;
        margin: 0 auto;
        position: relative;
        .left {
          z-index: 11;
          top: 0;
          bottom: 0;
          left: 0;
          width: 28px;
          cursor: pointer;
          position: absolute;
          margin: auto auto auto 5px;
        }
        .right {
          z-index: 10;
          top: 0;
          bottom: 0;
          right: 0;
          width: 28px;
          cursor: pointer;
          position: absolute;
          margin: auto 5px auto auto;
        }
        .section2-card-wrapper::-webkit-scrollbar {
          display: none;
        }
        .section2-card-wrapper {
          height: 920px;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          overflow-x: auto;
          // overscroll-behavior-inline: contain;
          scroll-snap-type: x proximity;
          .section2-card-container {
            scroll-snap-align: center;
            position: relative;
            width: 100%;
            margin: 0 auto;
            background: #f4f4f4;
            .section2-carousel {
              top: 248px;
              left: 0;
              right: 0;
              width: 40%;
              margin: 0 auto;
              z-index: 10;
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                margin: auto 4.5px;
              }
            }
            .section2-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 100vw;
                height: 274px;
                object-fit: cover;
              }
              .section2-card-content-container {
                margin-top: 30px;
                width: 100%;
                .section2-card-content {
                  margin-left: 56px;
                  margin-right: 38px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                  .section2-card-title {
                    margin-bottom: 15px;
                    font-family: var(--font-family-Arial);
                    font-size: 20px;
                    font-weight: var(--font-weight-products-mobile-section2-card-title);
                    line-height: var(--font-line-height-products-mobile-section2-card-title);
                    letter-spacing: var(--font-letter-spacing-products-mobile-section2-card-title);
                    text-align: left;
                    color: #cf000e;
                  }
                  .section2-card-subtitle {
                    margin-bottom: 18px;
                    font-family: var(--font-family-Arial);
                    font-size: 14px;
                    font-weight: var(--font-weight-products-mobile-section2-card-subtitle);
                    line-height: var(--font-line-height-products-mobile-section2-card-subtitle);
                    letter-spacing: var(--font-letter-spacing-products-mobile-section2-card-subtitle);
                    text-align: left;
                  }
                  ul {
                    margin-top: 0px;
                    padding-left: 20px;
                    list-style-type: disc;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 22px;
                    .circle {
                      display: inline-block;
                      border-radius: 180px;
                      height: 8px;
                      width: 8px;
                      background: #bebebe;
                    }
                    li {
                      margin-bottom: 5px;
                      font-family: var(--font-family-DIN);
                      font-size: 14px;
                      font-weight: var(--font-weight-products-mobile-section2-card-subtitle-li);
                      line-height: var(--font-line-height-products-mobile-section2-card-subtitle-li);
                      letter-spacing: var(--font-letter-spacing-products-mobile-section2-card-subtitle-li);
                      text-align: left;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    #section3 {
      .section-banner {
        margin: 32px 0px 30px 0px;
        background-image: linear-gradient(#810000cc, #810000cc), url("./assets/product-seperator3-mobile.png");
      }
      .section3-container {
        width: 100vw;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .section3-card-title {
          font-family: var(--font-family-Arial);
          font-size: 18px;
          font-weight: var(--font-weight-products-mobile-section3-card-title);
          line-height: var(--font-line-height-products-mobile-section3-card-title);
          letter-spacing: var(--font-letter-spacing-products-mobile-section3-card-title);
          text-align: center;
        }
        .section3-card-container {
          width: 100vw;
          margin: 30px auto 80px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          .section3-card {
            margin: 5px 5px;
            width: 95px;
            height: 116px;
            background: #f4f4f4;
            box-shadow: 0px 2px 5px rgba(71, 71, 71, 0.25);
            border-radius: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            img {
              width: 40%;
              margin: 20px 10px 20px 10px;
            }
            .section3-card-content {
              font-family: var(--font-family-DIN);
              font-size: 12px;
              font-weight: var(--font-weight-products-mobile-section3-card-content);
              line-height: var(--font-line-height-products-mobile-section3-card-content);
              letter-spacing: var(--font-letter-spacing-products-mobile-section3-card-content);
              text-align: center;
            }
          }
        }
      }
    }
    .section-banner {
      width: 100vw;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .section-title {
      margin: 0 21px;
      font-family: var(--font-family-Arial);
      font-size: 22px;
      font-weight: var(--font-weight-products-mobile-section-title);
      line-height: var(--font-line-height-products-mobile-section-title);
      letter-spacing: var(--font-letter-spacing-products-mobile-section-title);
      text-align: center;
      margin-bottom: 35px;
      color: #ffffff;
    }
    .section-content {
      margin: 5px 21px;
      font-family: var(--font-family-DIN);
      font-size: 14px;
      font-weight: var(--font-weight-products-mobile-section-content);
      line-height: var(--font-line-height-products-mobile-section-content);
      letter-spacing: var(--font-letter-spacing-products-mobile-section-content);
      text-align: center;

      color: #ffffff;
    }
  }
}
</style>
