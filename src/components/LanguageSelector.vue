<template>
  <div class="flex items-center gap-2">
    <label for="lang-select" class="text-sm">Idioma:</label>
    <select
      id="lang-select"
      v-model="locale"
      class="border rounded px-2 py-1 text-sm"
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>
