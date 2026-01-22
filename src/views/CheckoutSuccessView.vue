<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCartStore } from '@/cartStore'

const route = useRoute()
const cartStore = useCartStore()

const order = cartStore.orders.find(
  o => o.id === route.query.orderId
)
</script>

<template>
  <section class="py-5 text-center">
    <div class="container">
      <h2>Order Successful</h2>

      <p v-if="order">
        Order ID: <strong>{{ order.id }}</strong><br />
        Total paid: <strong>$ {{ order.total.toFixed(2) }}</strong>
      </p>

      <RouterLink to="/shop" class="btn btn-primary mt-4">
        Continue Shopping
      </RouterLink>
    </div>
  </section>
</template>
