<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import Shop from '@/components/ShopMini.vue';
import Services from '@/components/Services.vue';
import CategoriesMini from '@/components/ItemCategories.vue';
import ShopReviews from '@/components/ShopReviews.vue';

// ✅ Імпортуємо банери як модулі, щоб build Vite правильно їх обробив
import bannerBg from '@/assets/images/banner-image-bg.jpg';
import banner1 from '@/assets/images/banner-image.png';
import banner2 from '@/assets/images/banner-image1.png';
import banner3 from '@/assets/images/banner-image2.png';
</script>

<template>
  <main>
    <!-- Billboard / Hero -->
    <section
      id="billboard"
      class="position-relative d-flex align-items-center py-5"
      :style="`background-image: url(${bannerBg}); background-size: cover; background-repeat: no-repeat; background-position: center; height: 800px;`"
    >
      <!-- Navigation Arrows -->
      <div class="position-absolute end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next main-slider-button-next">
        <svg class="chevron-forward-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
          <use xlink:href="#alt-arrow-right-outline"></use>
        </svg>
      </div>
      <div class="position-absolute start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev main-slider-button-prev">
        <svg class="chevron-back-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
          <use xlink:href="#alt-arrow-left-outline"></use>
        </svg>
      </div>

      <Swiper
        :modules="[Navigation, Autoplay]"
        :loop="true"
        :navigation="{ nextEl: '.main-slider-button-next', prevEl: '.main-slider-button-prev' }"
        :autoplay="{ delay: 4000 }"
        class="main-swiper"
      >
        <SwiperSlide>
          <div class="container">
            <div class="row d-flex flex-column-reverse flex-md-row align-items-center">
              <div class="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                <div class="banner-content">
                  <h2>The Fine Print Book Collection</h2>
                  <p>Best Offer Save 30%. Grab it now!</p>
                  <router-link to="/shop" class="btn mt-3">Shop Collection</router-link>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img :src="banner3" class="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="container">
            <div class="row d-flex flex-column-reverse flex-md-row align-items-center">
              <div class="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                <div class="banner-content">
                  <h2>How Innovation works</h2>
                  <p>Discount available. Grab it now!</p>
                  <router-link to="/shop" class="btn mt-3">Shop Product</router-link>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img :src="banner2" class="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="container">
            <div class="row d-flex flex-column-reverse flex-md-row align-items-center">
              <div class="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                <div class="banner-content">
                  <h2>Your Heart is the Sea</h2>
                  <p>Limited stocks available. Grab it now!</p>
                  <router-link to="/shop" class="btn mt-3">Shop Collection</router-link>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img :src="banner1" class="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- Components -->
    <Services />
    <ShopReviews />
    <CategoriesMini />
    <Shop />
  </main>
</template>
