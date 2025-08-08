<template>
  <section class="min-h-screen text-white px-6 py-16">
    <div class="max-w-7xl mx-auto">

      <!-- Título -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-extrabold uppercase mb-4">{{ t("boats.title") }}</h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {{ t("boats.text") }}
        </p>
      </div>

      <!-- Imagen y Descripción -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold mb-4">{{ t("boats.subtitle") }}</h2>
          <ul class="space-y-3 text-gray-300 text-lg">
            <li>✅ {{ t("boats.description1") }}</li>
            <li>✅ {{ t("boats.description2") }}</li>
            <li>✅ {{ t("boats.description4") }}</li>
          </ul>
        </div>
        <div>
          <img 
            src="/snorkelingtour/snorkeling1.webp" 
            alt="Tour en barco en Malpaís"
            class="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      <!-- Planes -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-6">{{ t("boats.subtitle2") }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Avistamiento de Ballenas -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t("boats.plan1") }}</h3>
          <p class="text-gray-300 mb-4">
            {{ t("boats.plan1_description") }}
          </p>
          <p class="text-lg mb-2">3h</p>
          <p class="text-xl font-extrabold text-blue-400 mb-2">{{ t("boats.detail1Plan1") }}</p>
          <p class="text-xl font-extrabold text-blue-400 mb-6">{{ t("boats.detail2Plan1") }}</p>
          <a
            :href="whatsappLink(t('boats.whatsappLinkPlan1'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t("boats.button_whatsapp") }}
          </a>
        </div>

        <!-- Snorkel -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t("boats.plan2") }}</h3>
          <p class="text-gray-300 mb-4">
            {{ t("boats.plan2_description") }}
          </p>
          <p class="text-lg mb-2">3h: <span class="font-extrabold text-blue-400">$280</span></p>
          <p class="text-lg mb-6">4h: <span class="font-extrabold text-blue-400">$350</span></p>
          <a
            :href="whatsappLink(t('boats.whatsappLinkPlan2'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t("boats.button_whatsapp") }}
          </a>
        </div>

        <!-- Isla Tortuga -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t("boats.plan3") }}</h3>
          <p class="text-gray-300 mb-4">
            {{ t("boats.plan3_description") }}
          </p>
          <p class="text-lg mb-2">{{ t("boats.detail1Plan3") }}</p>
          <p class="text-3xl font-extrabold text-blue-400 mb-6">{{ t("boats.detail2Plan3") }}</p>
          <a
            :href="whatsappLink(t('boats.whatsappLinkPlan3'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t("boats.button_whatsapp") }}
          </a>
        </div>

        <!-- Viajes Privados -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t("boats.plan4") }}</h3>
          <p class="text-gray-300 mb-4">
            {{ t("boats.plan4_description") }}
          </p>
          <a
            :href="whatsappLink(t('boats.whatsappLinkPlan4'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t("boats.button_whatsapp") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const whatsappLink = (planKey: string) => {
  const baseLink = t('boats.whatsappLink') // Link base traducido desde i18n
  const planName = t(`${planKey}`) // Traducción dinámica del plan según clave
  return `${baseLink}${encodeURIComponent(planName)}`
}

</script>
