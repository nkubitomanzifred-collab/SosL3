<!-- Contact.vue -->
<script setup>
import hill from '@/assets/TH.jpg'
</script>

<template>
  <section
    class="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${hill})` }"
  >
    <!-- Transparent Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative bg-white/20 backdrop-blur-md p-8 rounded-2xl w-96">
      <h1 class="text-4xl font-bold text-center mb-6">
        Contact Us
      </h1>

      <form class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-3 rounded-lg text-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-3 rounded-lg text-black"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          class="w-full p-3 rounded-lg text-black"
        ></textarea>

        <button
          class="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>