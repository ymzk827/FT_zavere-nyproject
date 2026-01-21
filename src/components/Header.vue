<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/cartStore.ts'
import navigationData from '@/assets/data/navigation.json'

interface NavItem {
  name: string
  dest: string
}

const navItems = navigationData as NavItem[]

// Pinia cart store
const cartStore = useCartStore()

// Counter for header
const cartCount = computed(() => cartStore.totalItems)
</script>



<template>
  <header id="header" class="site-header">
    <!-- Top Info Bar -->
    <div class="top-info border-bottom d-none d-md-block mb-3">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">
              Need any help? Call us <a href="#">112233344455</a>
            </p>
          </div>
          <div class="col-md-4 border-start border-end">
            <p class="fs-6 my-2 text-center">
              Summer sale discount off 60% off! 
              <a class="text-decoration-underline" href="index.html">Shop Now</a>
            </p>
          </div>
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">
              2-3 business days delivery & free returns
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav id="header-nav" class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="@/assets/images/main-logo.png" class="logo" alt="Logo">
        </a>

        <button 
          class="navbar-toggler d-flex d-lg-none order-3 p-2" 
          type="button" 
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar" 
          aria-controls="bdNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <svg class="navbar-icon">
            <use xlink:href="#navbar-icon"></use>
          </svg>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div class="offcanvas-header px-4 pb-0">
            <a class="navbar-brand" href="index.html">
              <img src="@/assets/images/main-logo.png" class="logo" alt="Logo">
            </a>
            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <ul id="navbar"
                class="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
                <li class="nav-item" v-for="n in  navigationData" :key="n.name">
                <router-link class="nav-link me-4" :to="n.dest" exact-active-class="active">{{ n.name }}</router-link>
                </li>
            </ul>

            <!-- User items: search & profile -->
            <div class="user-items d-flex align-items-center">
            <ul class="d-flex justify-content-end list-unstyled mb-0 align-items-center">

              <!-- Search -->
              <li class="search-item pe-3">
                <a href="#" class="search-button">
                  <svg class="search">
                    <use xlink:href="#search"></use>
                  </svg>
                </a>
              </li>

              <!-- Cart -->
              <li class="pe-3 position-relative">
                <router-link to="/cart">
                  <svg class="cart">
                    <use xlink:href="#cart"></use>
                  </svg>

                  <!-- Counter -->
                  <span
                    v-if="cartCount >= 0"
                    class="cart-badge"
                  >
                    CART: {{ cartCount }}
                  </span>
                </router-link>
              </li>

              <!-- Profile -->
              <li>
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <svg class="user">
                    <use xlink:href="#user"></use>
                  </svg>
                </a>
              </li>

            </ul>
          </div>
            </div>

        </div>
      </div>
    </nav>
  </header>
</template>
