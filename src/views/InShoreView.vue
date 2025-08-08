<template>
  <section class="min-h-screen text-white px-6 py-16">
    <div class="max-w-7xl mx-auto">

      <!-- Título -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-extrabold uppercase mb-4"> {{ t('inshore.title') }}</h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {{ t('inshore.text') }}
        </p>
      </div>

      <!-- Sección Informativa -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <!-- Texto -->
        <div>
          <h2 class="text-3xl font-bold mb-4">{{ t('inshore.subtitle') }}</h2>
          <ul class="space-y-3 text-gray-300 text-lg">
            <li>✅ {{ t('inshore.description1') }}</li>
            <li>✅ {{ t('inshore.description2') }}</li>
            <li>✅ {{ t('inshore.description4') }}</li>
          </ul>
        </div>

        <!-- Imagen representativa -->
        <div>
          <img 
            src="/inshorefishing/inshore-fishing1.webp" 
            alt="Pesca Costera en Malpaís" 
            class="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      <!-- Planes -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-6">{{ t('inshore.subtitle2') }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Medio Día -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t('inshore.plan1') }}</h3>
          <p class="text-lg text-gray-300 mb-4">{{ t('inshore.plan1_description') }}</p>
          <p class="text-3xl font-extrabold text-blue-400 mb-6">$90/h</p>
          <a
            :href="whatsappLink(t('inshore.whatsappLinkPlan1'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t('inshore.button_whatsapp') }}
          </a>
        </div>

        <!-- Arrastre -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t('inshore.plan2') }}</h3>
          <p class="text-gray-300 mb-4">{{ t('inshore.plan2_description') }}</p>
          <a
            :href="whatsappLink(t('inshore.whatsappLinkPlan2'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t('inshore.button_whatsapp') }}
          </a>
        </div>

        <!-- Jigging -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t('inshore.plan3') }}</h3>
          <p class="text-gray-300 mb-4">{{ t('inshore.plan3_description') }}</p>
          <a
            :href="whatsappLink(t ('inshore.whatsappLinkPlan3'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t('inshore.button_whatsapp') }}
          </a>
        </div>

        <!-- Lanzado -->
        <div class="bg-white/10 rounded-xl shadow-lg border border-white/10 p-6 text-center">
          <h3 class="text-2xl font-bold mb-2">{{ t('inshore.plan4') }}</h3>
          <p class="text-gray-300 mb-4">{{ t('inshore.plan4_description') }}</p>
          <a
            :href="whatsappLink(t('inshore.whatsappLinkPlan4'))"
            target="_blank"
            class="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 {{ t('inshore.button_whatsapp') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Función para generar el link dinámico de WhatsApp según idioma y plan seleccionado
const whatsappLink = (planKey: string) => {
  const baseLink = t('inshore.whatsappLink') // Link base traducido desde i18n
  const planName = t(`${planKey}`) // Traducción dinámica del plan según clave
  return `${baseLink}${encodeURIComponent(planName)}`
}

</script>
