// src/stores/cartStore.ts
import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  createdAt: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    orders: [] as Order[]
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    addItem(newItem: CartItem) {
      const existing = this.items.find(item => item.id === newItem.id)
      if (existing) {
        existing.quantity += newItem.quantity
      } else {
        this.items.push({ ...newItem })
      }
    },

    removeItem(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    },

    clearCart() {
      this.items = []
    },

    checkout() {
    if (this.items.length === 0) {
      throw new Error('Cart is empty')
    }

    const order: Order = {
      id: crypto.randomUUID(),
      items: [...this.items],
      total: this.totalPrice,
      createdAt: new Date().toISOString()
    }

    this.orders.push(order)
    this.clearCart()

    return order
  }


  }
})
