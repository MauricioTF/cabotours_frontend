<template>
  <section class="px-6 py-20 text-white">
    <div class="max-w-7xl mx-auto">
      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="tab in ['inshore', 'offshore', 'snorkeling', 'whales', 'tortuga']"
          :key="tab"
          class="px-4 py-2 rounded-full border transition"
          :class="selectedTab === tab ? 'bg-blue-600 border-blue-600 text-white' : 'border-white hover:bg-white hover:text-black'"
          @click="selectedTab = tab as GalleryTab"
        >
          {{ t(`gallery.${tab}`) }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in images[selectedTab]"
          :key="index"
          class="relative rounded overflow-hidden shadow-lg cursor-pointer group"
          @click="openModal(item.src, item.alt)"
        >
          <img :src="item.src" :alt="item.alt" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
            <p class="text-sm">{{ t(item.text) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalOpen" class="fixed inset-0 z-50 bg-black/80 flex justify-center items-center" @click.self="modalOpen = false">
      <div class="max-w-3xl w-full px-4 relative">
        <button @click="modalOpen = false" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <img :src="modalImage.src" :alt="modalImage.alt" class="w-full rounded shadow-xl" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

type GalleryTab = 'inshore' | 'offshore' | 'snorkeling' | 'whales' | 'tortuga'

const { t } = useI18n()
const selectedTab = ref<GalleryTab>('inshore')

const modalOpen = ref(false)
const modalImage = ref({ src: '', alt: '' })

const openModal = (src: string, alt: string) => {
  modalImage.value = { src, alt }
  modalOpen.value = true
}

const images: Record<GalleryTab, { src: string; alt: string; text: string }[]> = {
  inshore: Array.from({ length: 6 }).map((_, i) => ({
    src: `/inshorefishing/inshore-fishing${i + 1}.webp`,
    alt: `Inshore fishing photo ${i + 1}`,
    text: `gallery.inshore${i + 1}`
  })),
  offshore: Array.from({ length: 6 }).map((_, i) => ({
    src: `/offshorefishing/offshore-fishing${i + 1}.webp`,
    alt: `Offshore fishing photo ${i + 1}`,
    text: `gallery.offshore${i + 1}`
  })),
  snorkeling: Array.from({ length: 6 }).map((_, i) => ({
    src: `/snorkelingtour/snorkeling${i + 1}.webp`,
    alt: `Snorkeling tour photo ${i + 1}`,
    text: `gallery.snorkeling${i + 1}`
  })),
  whales: Array.from({ length: 6 }).map((_, i) => ({
    src: `/whalewatching/whale${i + 1}.webp`,
    alt: `Whale watching photo ${i + 1}`,
    text: `gallery.whales${i + 1}`
  })),
  tortuga: Array.from({ length: 6 }).map((_, i) => ({
    src: `/tortugaisland/tortuga${i + 1}.webp`,
    alt: `Tortuga Island photo ${i + 1}`,
    text: `gallery.tortuga${i + 1}`
  })),
}
</script>
