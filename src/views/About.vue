<!-- About.vue -->
<script setup>
import photo from '@/assets/photo.jpg'
</script>

<template>
  <section
    class="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${photo})` }"
  >
    <!-- Transparent Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center px-6">
      <h1 class="text-5xl font-bold mb-4">About Rwanda</h1>
      <p class="text-2xl">The Land of a Thousand Hills</p>
    </div>
  </section>
</template>