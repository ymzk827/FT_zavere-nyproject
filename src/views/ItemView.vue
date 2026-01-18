<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import itemsData from '@/assets/items.json';
import Shop from '@/views/ShopView.vue';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  extendedDescription: string;
}

// Get slug from route (e.g., /product/:slug)
const route = useRoute();
const slug = Number(route.params.slug); // Convert to number

// Find product from JSON based on id
const product = computed<Product | null>(() => {
  return itemsData.find((item: Product) => item.id === slug) || null;
});

const quantity = ref(1);

function increment() {
  quantity.value++;
}

function decrement() {
  if (quantity.value > 1) quantity.value--;
}

function addToCart() {
  if (!product.value) return;
  console.log(`Added ${quantity.value} x ${product.value.name} to cart`);
}

function buyNow() {
  if (!product.value) return;
  console.log(`Proceed to buy ${quantity.value} x ${product.value.name}`);
}
</script>

<template>
  <section class="product-view py-5" v-if="product">
    <div class="container">
      <div class="row g-4 align-items-center">
        <!-- Product Image -->
        <div class="col-md-6 text-center">
          <img :src="product.image" class="img-fluid" :alt="product.name" />
        </div>

        <!-- Product Details -->
        <div class="col-md-6">
          <h1 class="mb-3">{{ product.name }}</h1>
          <p class="text-muted fs-5 mb-2">$ {{ product.price.toFixed(2) }}</p>
          <p class="mb-4">{{ product.extendedDescription }}</p>

          <!-- Quantity Selector -->
          <div class="d-flex align-items-center mb-3">
            <button class="btn btn-outline-secondary me-2" @click="decrement">-</button>
            <span class="fs-5">{{ quantity }}</span>
            <button class="btn btn-outline-secondary ms-2" @click="increment">+</button>
          </div>

          <!-- Action Buttons -->
          <div class="d-flex gap-2">
            <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
            <button class="btn btn-success" @click="buyNow">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="py-5 text-center">
    <h2>Product not found</h2>
    <p>Sorry, we couldn’t find the product you are looking for.</p>
  </section>

  <Shop :itemsCount="4"/>
</template>

<style scoped>
.product-view img {
  max-width: 100%;
  border-radius: 8px;
  object-fit: contain;
}

.product-view h1 {
  font-weight: 700;
}

.product-view button {
  min-width: 120px;
}
</style>
