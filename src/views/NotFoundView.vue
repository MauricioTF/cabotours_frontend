<template>
  <section class="flex flex-col items-center justify-center min-h-screen text-center px-6">
    <!-- Número 404 grande -->
    <h1 class="text-8xl md:text-9xl font-extrabold text-blue-500 drop-shadow-lg animate-bounce">
      404
    </h1>

    <!-- Texto principal -->
    <p class="text-2xl md:text-3xl font-semibold text-white mt-6">
      {{ t('notfound.title') }}
    </p>

    <!-- Descripción -->
    <p class="text-gray-400 mt-3 max-w-md">
      {{ t('notfound.description') }}
    </p>

    <!-- Botones -->
    <div class="flex gap-4 mt-8">
      <router-link
        to="/"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
      >
        🔙 {{ t('notfound.button_home') }}
      </router-link>

      <router-link
        to="/contact"
        class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
      >
        📩 {{ t('notfound.button_contact') }}
      </router-link>
    </div>

    <!-- Imagen decorativa -->
    <div class="mt-12">
      <img 
        src="/images/bg2.webp"
        alt="Decoración" 
        class="w-32 opacity-70 mx-auto"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
