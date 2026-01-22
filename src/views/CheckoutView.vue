<script setup lang="ts">
import { useCartStore } from '@/cartStore'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

function handleCheckout() {
    const order = cartStore.checkout()
    router.push({
      name: 'checkout-success',
      query: { orderId: order.id }
    })
    }
</script>

<template>
  <section class="py-5">
    <div class="container text-center">
      <h2>Checkout</h2>

      <p class="fs-5 mt-3">
        Total: <strong>$ {{ cartStore.totalPrice.toFixed(2) }}</strong>
      </p>

      <button
        class="btn btn-success btn-lg mt-4"
        @click="handleCheckout"
      >
        Confirm Order
      </button>
    </div>
  </section>
</template>
