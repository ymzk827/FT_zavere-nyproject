<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/cartStore'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'CartView',

  components: {
    RouterLink
  },

  data() {
    return {
      cartStore: useCartStore() // Pinia store instance
    }
  },

  computed: {
    totalItems(): number {
      return this.cartStore.totalItems
    },

    totalPrice(): number {
      return this.cartStore.totalPrice
    }
  },

  methods: {
    removeItem(id: number) {
      this.cartStore.removeItem(id)
    },

    clearCart() {
      this.cartStore.clearCart()
    }
  }
})
</script>

<template>
  <section class="cart-view py-5">
    <div class="container">
      <div v-if="cartStore.items.length > 0">
        <table class="table table-bordered table-sm align-middle text-center">
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartStore.items" :key="item.id">
                <td class="d-flex align-items-center gap-2 text-start">
                    <router-link :to="`/item/${item.id}`"> <img :src="item.image" :alt="item.name" class="cart-img" />{{ item.name }}</router-link>
                </td>
                <td>$ {{ item.price.toFixed(2) }}</td>
                <td>{{ item.quantity }}</td>
                <td>$ {{ (item.price * item.quantity).toFixed(2) }}</td>
                <td>
                    <button class="btn btn-sm btn-danger" @click="removeItem(item.id)">
                    Remove
                    </button>
                </td>
                </tr>
            </tbody>
            </table>

        <div class="d-flex justify-content-between align-items-center mt-4">
          <button class="btn btn-outline-danger" @click="clearCart">
            Clear Cart
          </button>
          <div class="fs-5 fw-bold">
            Total: $ {{ totalPrice.toFixed(2) }}
          </div>
          <RouterLink to="/checkout" class="btn btn-success">
            Proceed to Checkout
          </RouterLink>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <h3>Your cart is empty</h3>
        <RouterLink to="/shop" class="btn btn-primary mt-3">
          Continue Shopping
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-view table th,
.cart-view table td {
  vertical-align: middle;
}

.cart-view table td button {
  min-width: 80px;
}

.cart-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
