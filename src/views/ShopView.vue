<script setup lang="ts">
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import itemsData from '@/assets/items.json';

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const items: Item[] = itemsData;

// Split items into groups of 4 for swiper slides
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const slides = computed(() => chunkArray(items, 4));
</script>

<template>
  <section class="catalogue py-5">
    <div class="container">
      <h2 class="mb-4 text-center text-uppercase">Featured Collection</h2>

      <Swiper :modules="[Navigation]" navigation space-between="20">
        <SwiperSlide v-for="(group, index) in slides" :key="index">
          <div class="row g-4">
            <div
              class="col-6 col-md-3 d-flex flex-column align-items-center"
              v-for="item in group"
              :key="item.id"
            >
              <div class="card h-100 text-center border-0 shadow-sm">
                <img :src="item.image" class="card-img-top img-fluid" :alt="item.name" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text text-muted">{{ item.description }}</p>
                  <p class="fw-bold">$ {{ item.price.toFixed(2) }}</p>
                  <router-link
                    class="btn btn-primary mt-2"
                    :to="`/item/${item.id}`"
                    exact-active-class="active"
                  >
                    View Product
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.catalogue .card img {
  max-height: 200px;
  object-fit: contain;
}
</style>
