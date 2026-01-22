<script lang="ts">
import { defineComponent } from 'vue'
import itemsData from '@/assets/data/items.json'
import categoriesData from '@/assets/data/categories.json'
import { useCartStore } from '@/cartStore'

interface Item {
  id: number
  name: string
  image: string
  price: number
  category: string
  description: string
  extendedDescription: string
}

interface Category {
  slug: string
  name: string
}

export default defineComponent({
  name: 'ShopGrid',

  data() {
    return {
      items: itemsData as Item[],
      categories: categoriesData as Category[],
      activeCategorySlug: 'all' as string,
      itemsToShow: 8,
    }
  },

  computed: {
    filteredItems(): Item[] {
      if (this.activeCategorySlug === 'all') {
        return this.items
      }
      return this.items.filter(item => item.category === this.activeCategorySlug)
    },

    visibleItems(): Item[] {
      return this.filteredItems.slice(0, this.itemsToShow)
    },

    baseUrl() {
      return import.meta.env.BASE_URL + ""
    }
  },

  

  watch: {
    '$route.params.categorySlug': {
      immediate: true,
      handler() {
        this.syncCategoryFromRoute()
        this.itemsToShow = 8
      },
    },
  },

  methods: {
    syncCategoryFromRoute() {
      const slug = this.$route.params.categorySlug as string | undefined

      if (!slug) {
        this.activeCategorySlug = 'all'
        return
      }

      const exists = this.categories.some(cat => cat.slug === slug)
      this.activeCategorySlug = exists ? slug : 'all'
    },

    setCategory(slug: string | 'all') {
      if (slug === 'all') {
        this.$router.push('/shop')
      } else {
        this.$router.push(`/shop/${slug}`)
      }
    },

    loadMore() {
      this.itemsToShow += 8
    },

    /** ✅ NEW */
    buyItem(item: Item) {
      const cartStore = useCartStore()
      cartStore.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      })
    }
  },
})
</script>


<template>
  <section class="catalogue py-5">
    <h2 class="mb-4 text-center text-uppercase">Shop Collection</h2>
    <!-- Category Filter Dropdown -->
    <div class="d-flex justify-content-center mb-4">
      <div class="dropdown">
        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{
            activeCategorySlug === 'all'
              ? 'All categories'
              : categories.find((c) => c.slug === activeCategorySlug)?.name
          }}
        </button>

        <ul class="dropdown-menu">
          <li>
            <button
              class="dropdown-item"
              :class="{ active: activeCategorySlug === 'all' }"
              @click="setCategory('all')"
            >
              All
            </button>
          </li>

          <li v-for="cat in categories" :key="cat.slug">
            <button
              class="dropdown-item"
              :class="{ active: activeCategorySlug === cat.slug }"
              @click="setCategory(cat.slug)"
            >
              {{ cat.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Items -->
    <div class="row g-4">
      <div v-for="item in visibleItems" :key="item.id" class="col-6 col-md-3">
        <div class="card h-100 text-center border-0 shadow-sm">
          <img :src="baseUrl +item.image" class="card-img-top" />

          <div class="card-body">
            <h5>{{ item.name }}</h5>
            <p class="text-muted small">{{ item.description }}</p>
            <p class="fw-bold">${{ item.price.toFixed(2) }}</p>

         <div class="d-flex justify-content-center gap-2">
          <router-link
            class="btn btn-primary btn-sm"
            :to="`/item/${item.id}`"
          >
            View
          </router-link>

          <button
            class="btn btn-success btn-sm"
            @click="buyItem(item)"
          >
            Buy
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load more -->
    <div v-if="visibleItems.length < filteredItems.length" class="text-center mt-4">
      <button class="btn btn-outline-primary" @click="loadMore">Load More</button>
    </div>
  </section>
</template>

<style scoped>
.catalogue .card img {
  max-height: 200px;
  object-fit: contain;
}
</style>
