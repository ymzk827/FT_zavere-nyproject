<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useCartStore } from '@/cartStore'
import itemsData from '@/assets/data/items.json'

interface Item {
  id: number
  name: string
  image: string
  price: number
  description: string
}

export default defineComponent({
  name: 'ShopSwiper',

  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      items: itemsData as Item[]
    }
  },

  computed: {
    navigationModules() {
      return [Navigation]
    },

    slides(): Item[][] {
      const chunkSize = 4
      const result: Item[][] = []
      for (let i = 0; i < this.items.length; i += chunkSize) {
        result.push(this.items.slice(i, i + chunkSize))
      }
      return result
    }
  },

  methods: {
    buyItem(item: Item) {
      const cartStore = useCartStore()
      cartStore.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      })
      console.log(`Added ${item.name} to cart`)
    },
     scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  }
})
</script>

<template>
  <section class="catalogue py-5">
    <div class="container">
      <h2 class="mb-4 text-center text-uppercase">Featured Collection</h2>

      <Swiper :modules="navigationModules" navigation space-between="20">
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
                  <div class="d-flex gap-2 justify-content-center mt-2">
                    <router-link
                      class="btn btn-primary"
                      :to="`/item/${item.id}`"
                      @click="scrollToTop"
                    >
                      See More
                    </router-link>

                    <button class="btn btn-success" @click="buyItem(item)">
                      Buy
                    </button>
                  </div>
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
