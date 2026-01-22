<script lang="ts">
import { defineComponent } from 'vue'
import ShopMini from '@/components/ShopMini.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    ShopMini
  }
})
</script>
<!-- 2 -->
<template>
  <section class="about-page py-5">
    <div class="container">

      <div class="text-center mb-5">
        <h1 class="fw-bold">About Us</h1>
        <p class="mt-2 ">
          Who we are, what we believe in, and why we do what we do
        </p>
      </div>

      <div class="row justify-content-center mb-5">
        <div class="col-md-8">
          <h3 class="fw-semibold mb-3">Our Story</h3>

          <p class="">
            Our journey began with a simple idea — to build a store where
            quality, transparency, and user experience come first.
          </p>

          <p class="">
            Over the years, we’ve grown into a platform serving customers
            across different regions.
          </p>
        </div>
      </div>

      <div class="row text-center mb-5">
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Quality First</h5>
          <p class="">Carefully selected products.</p>
        </div>

        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Customer Focus</h5>
          <p class="">We listen and improve.</p>
        </div>

        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Transparency</h5>
          <p class="">No hidden surprises.</p>
        </div>
      </div>

      <div class="row text-center border-top pt-5 mb-5">
        <div class="col-md-3 col-6 mb-4">
          <h2 class="fw-bold">10k+</h2>
          <p class="">Customers</p>
        </div>

        <div class="col-md-3 col-6 mb-4">
          <h2 class="fw-bold">500+</h2>
          <p class="">Products</p>
        </div>

        <div class="col-md-3 col-6 mb-4">
          <h2 class="fw-bold">5+</h2>
          <p class="">Years Experience</p>
        </div>

        <div class="col-md-3 col-6 mb-4">
          <h2 class="fw-bold">24/7</h2>
          <p class="">Support</p>
        </div>
      </div>

      <!-- Shop -->
      <div class="mt-5">
        <ShopMini />
      </div>

    </div>
  </section>
</template>


<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.about-page h1 {
  letter-spacing: 0.5px;
}

.about-page p {
  line-height: 1.7;
}
</style>
