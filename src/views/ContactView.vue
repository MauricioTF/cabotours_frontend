<template>
  <section class="min-h-screen flex justify-center items-center px-4 py-16 ">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white/95 backdrop-blur-md shadow-2xl rounded-xl max-w-lg w-full p-8 space-y-5 border border-gray-300"
    >
      <h2 class="text-3xl font-extrabold text-center text-[#1c1c20] mb-4">
        {{ t("contact.title") }}
      </h2>
      <p class="text-center text-gray-600 mb-6">
        {{ t("contact.text") }}
      </p>

      <!-- Nombre -->
      <div>
        <label class="block text-left mb-1 font-semibold text-gray-700">{{ t("contact.name") }}</label>
        <input
          v-model="form.name"
          type="text"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          :placeholder="t('contact.text_name')"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-left mb-1 font-semibold text-gray-700">{{ t("contact.email") }}</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          :placeholder="t('contact.text_email')"
          required
        />
      </div>

      <!-- Mensaje -->
      <div>
        <label class="block text-left mb-1 font-semibold text-gray-700">{{ t("contact.message") }}</label>
        <textarea
          v-model="form.message"
          rows="4"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          :placeholder="t('contact.text_message')"
          required
        ></textarea>
      </div>

      <!-- Mensajes -->
      <p v-if="error" class="text-red-500 text-sm text-center font-medium">{{ error }}</p>
      <p v-if="success" class="text-green-600 text-sm text-center font-medium">{{ success }}</p>

      <!-- Botón -->
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md text-lg font-semibold transition disabled:opacity-50"
        :disabled="loading"
      >
        {{ loading ? t("contact.sending") : t("contact.send") }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

declare global {
  interface Window {
    grecaptcha: any
  }
}

const form = ref({ name: "", email: "", message: "" })
const error = ref("")
const success = ref("")
const loading = ref(false)

// Claves y API
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY // Clave pública de reCAPTCHA v3
const API_URL = import.meta.env.VITE_API_URL + "/contact"

let script: HTMLScriptElement | null = null

// Cargar el script de reCAPTCHA v3
onMounted(() => {
  script = document.createElement("script")
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
  script.async = true
  script.defer = true
  document.head.appendChild(script)
})

onUnmounted(() => {
  // 🔥 Eliminar script y badge al salir de la vista
  if (script) {
    document.head.removeChild(script)
    script = null
  }

  // Eliminar el badge de la esquina si quedó renderizado
  const badge = document.querySelector(".grecaptcha-badge") as HTMLElement
  if (badge) badge.remove()
})

async function handleSubmit() {
  error.value = ""
  success.value = ""

  // Validar campos
  if (!form.value.name || !form.value.email || !form.value.message) {
    error.value = t("contact.message_error")
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    error.value = t("contact.email_error")
    return
  }

  loading.value = true

  try {
    // Obtener token de reCAPTCHA v3
    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" })

    // Enviar datos al backend
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        recaptcha_token: token,
      }),
    })

    if (!res.ok) {
      const data = await res.json()
      error.value = data.detail || t("contact.send_error")

    } else {
      success.value = t("contact.send_success")
      form.value = { name: "", email: "", message: "" }

    }

  } catch (err) {
    error.value = t("contact.server_error")
  } finally {
    loading.value = false
  }
}
</script>
