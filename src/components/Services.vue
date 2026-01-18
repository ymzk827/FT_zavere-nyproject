<script setup lang="ts">
import servicesData from '@/assets/services.json';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = servicesData;
</script>

<template>
  <section id="company-services" class="padding-large pb-0">
    <div class="container">
      <div class="row">
        <div
          v-for="service in services"
          :key="service.id"
          class="col-lg-3 col-md-6 pb-3 pb-lg-0"
        >
          <div class="icon-box d-flex">
            <div class="icon-box-icon pe-3 pb-3">
              <svg :class="service.icon">
                <use :xlink:href="`#${service.icon}`" />
              </svg>
            </div>
            <div class="icon-box-content">
              <h4 class="card-title mb-1 text-capitalize text-dark">{{ service.title }}</h4>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-box {
  align-items: flex-start;
}
.icon-box-icon svg {
  width: 40px;
  height: 40px;
  color: #007bff;
}
</style>
