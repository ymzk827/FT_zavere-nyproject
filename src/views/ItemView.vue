<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/cartStore.ts'
import itemsData from '@/assets/data/items.json'
import Shop from '@/components/ShopMini.vue'
import { RouterLink } from 'vue-router'

interface Product {
  id: number
  name: string
  image: string
  price: number
  category: string
  description: string
  extendedDescription: string
}

export default defineComponent({
  name: 'ProductDetail',

  components: {
    Shop,
    RouterLink
  },

  data() {
    return {
      quantity: 1 as number,
      items: itemsData as Product[]
    }
  },

  computed: {
    slug(): number {
      return Number(this.$route.params.slug)
    },

    product(): Product | null {
      return this.items.find(item => item.id === this.slug) || null
    },
     baseUrl() {
      return import.meta.env.BASE_URL
    }
  },

  methods: {
    increment() {
      this.quantity++
    },

    decrement() {
      if (this.quantity > 1) this.quantity--
    },

    addToCart() {
    if (!this.product) return
    const cartStore = useCartStore() // Pinia store instance
    cartStore.addItem({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.image
    })
    console.log(`Added ${this.quantity} x ${this.product.name} to cart`)
  },

  buyNow() {
    if (!this.product) return
    const cartStore = useCartStore()
    cartStore.addItem({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.image
    })
    this.$router.push('/checkout')
    }
  }
})
</script>

<template>
  <section class="product-view py-5" v-if="product">
    <div class="container">
      <div class="row g-4 align-items-center">

        <!-- Product Image -->
        <div class="col-md-6 text-center">
          <img :src="baseUrl + product.image" class="img-fluid" :alt="product.name" />
        </div>

        <!-- Product Details -->
        <div class="col-md-6">
          <h1 class="mb-3">{{ product.name }}</h1>
          <p class="text-muted fs-5 mb-2">$ {{ product.price.toFixed(2) }}</p>

          <RouterLink :to="`/shop/${product.category}`" class="mb-4 d-inline-block">
            Category: {{ product.category }}
          </RouterLink>

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

  <!-- Mini shop below product -->
  <Shop :itemsCount="4"/>
</template>

<style scoped>
.product-view img {
  max-width: 450px;   /* 👈 control size here */
  max-height: 450px;
  width: 100%;
  object-fit: contain;
}

.product-view h1 {
  font-weight: 700;
}

.product-view button {
  min-width: 120px;
}
</style>
