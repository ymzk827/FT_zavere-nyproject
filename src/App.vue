<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <svg style="display: none">
    <symbol xmlns="http://www.w3.org/2000/svg" id="alt-arrow-right-outline" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
        clip-rule="evenodd"
      />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="alt-arrow-left-outline" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081"
        clip-rule="evenodd"
      />
    </symbol>
  </svg>
  <Header></Header>

  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>
