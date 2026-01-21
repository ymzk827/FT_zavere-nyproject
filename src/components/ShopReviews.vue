<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import reviewsData from '@/assets/data/reviews.json'

interface Review {
  id: number
  author: string
  text: string
  rating: number
}

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      reviews: reviewsData as Review[],
      modules: [Navigation]
    }
  }
})
</script>





<template>
    <section id="customers-reviews" class="position-relative padding-large"
      style="background-image: url(images/banner-image-bg.jpg); background-size: cover; background-repeat: no-repeat; background-position: center; height: 600px;">
      <div class="container offset-md-3 col-md-6 ">
        <div class="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next testimonial-button-next">
        </div>
        <div class="position-absolute top-50 start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev testimonial-button-prev">
    
        </div>
        <div class="section-title mb-4 text-center">
          <h3 class="mb-4">Customers reviews</h3>
        </div>
            <Swiper
    :modules="modules"
    navigation
    loop
    class="testimonial-swiper"
    >
    <SwiperSlide
        v-for="review in reviews"
        :key="review.id"
    >
        <div class="card position-relative text-left p-5 border rounded-3">
        <blockquote>"{{ review.text }}"</blockquote>

        <div class="rating text-warning d-flex align-items-center">
            <svg
            v-for="n in review.rating"
            :key="n"
            class="star star-fill"
            >
            <use xlink:href="#star-fill"></use>
            </svg>
        </div>

        <h5 class="mt-1 fw-normal">{{ review.author }}</h5>
        </div>
  </SwiperSlide>
</Swiper>


      </div>
    </section>
</template>