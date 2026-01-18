<script setup lang="ts">
import { ref, computed } from 'vue';
import itemsData from '@/assets/items.json';

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

// All items from JSON
const allItems: Item[] = itemsData;

// Number of items to show initially
const itemsToShow = ref(8);

// Computed list of visible items
const visibleItems = computed(() => allItems.slice(0, itemsToShow.value));

function loadMore() {
  itemsToShow.value += 8; // load 8 more each click
}
</script>

<template>
  <section class="catalogue py-5">
    <div class="container">
      <h2 class="mb-4 text-center text-uppercase">Shop Collection</h2>

      <div class="row g-4">
        <div
          class="col-6 col-md-3 d-flex flex-column align-items-center"
          v-for="item in visibleItems"
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

      <div class="text-center mt-4" v-if="visibleItems.length < allItems.length">
        <button class="btn btn-outline-primary" @click="loadMore">
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalogue .card img {
  max-height: 200px;
  object-fit: contain;
}
</style>
