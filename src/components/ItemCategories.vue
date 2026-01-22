<script setup lang="ts">
import { computed } from 'vue';
import servicesData from '@/assets/data/categories.json';

interface Category {
  slug: string;
  name: string;
  image: string;
  description: string;
}

const categories: Category[] = servicesData;

const baseUrl = computed(() => {
  return import.meta.env.BASE_URL;
});
</script>


<template>
  <section id="categories" class="padding-large pt-0 mt-4">
    <div class="container">
      <div class="section-title overflow-hidden mb-4">
        <h3 class="d-flex align-items-center">Categories</h3>
      </div>

      <div class="row g-3">
        <div
          v-for="c in categories"
          :key="c.slug"
          class="col-lg-3 col-md-6"
        >
          <RouterLink
            :to="`/shop/${c.slug}`"
            class="text-decoration-none"
          >
            <div class="card border-0 rounded-3 position-relative">
              <img
                :src="c.image"
                class="img-fluid rounded-3"
                :alt="c.name"
              />

              <h6
                class="position-absolute bottom-0 start-0 bg-primary m-3 py-2 px-3 rounded-3"
              >
                <span class="text-white">{{ c.name }}</span>
              </h6>
            </div>
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

