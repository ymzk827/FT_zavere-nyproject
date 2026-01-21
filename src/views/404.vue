<template>
  <section class="not-found py-5 text-center">
    <div class="container">
      <h1 class="display-1 fw-bold">404</h1>
      <h2 class="mb-3">Page Not Found</h2>
      <p class="text-muted mb-4">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <router-link to="/" class="btn btn-primary">
        Go Home
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
