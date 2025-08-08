
<template>

  <header class="bg-gradient-to-b from-[#1c1c20] to-transparent text-white fixed top-0 left-0 w-full z-50 px-6 py-3">
  <nav class="max-w-7xl mx-auto flex justify-between items-center">
    <!-- Logo -->
    <router-link to="/" class="text-xl font-bold text-white">
      <img 
        src="/images/bg2.webp"
        alt="logo Cabo Tours" 
        class="w-16 md:w-20 opacity-70"
      />
    </router-link>

    <!-- Controles móviles (menú + idioma) -->
    <div class="flex items-center gap-3 md:hidden">
      <!-- Idioma (solo móvil) -->
      <button @click="switchLanguage" class="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
        <img v-if="locale === 'es'" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="EN" class="w-full h-full object-cover" />
        <img v-else src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" alt="ES" class="w-full h-full object-cover" />
      </button>

      <!-- Botón menú móvil -->
      <button @click="toggleMobileMenu" class="text-white focus:outline-none">
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú de escritorio -->
    <ul class="hidden md:flex gap-6 text-sm font-medium items-center">
      <li>
        <router-link to="/" class="hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400" :class="{ 'text-blue-400 border-blue-400': isActive('/') }">
          {{ t('menu.home') }}
        </router-link>
      </li>

      <li class="relative" id="dropdownMenu">
        <button @click.stop="toggleMenu" class="hover:text-blue-400 flex items-center gap-1 transition">
          {{ t('menu.activities') }}
          <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul v-if="open" class="absolute bg-white text-black shadow-md rounded mt-2 w-52 z-50 border">
          <li><router-link to="/offshore" class="block px-4 py-2 hover:bg-gray-100" @click="closeMenu">{{ t('activities.offshore') }}</router-link></li>
          <li><router-link to="/inshore" class="block px-4 py-2 hover:bg-gray-100" @click="closeMenu">{{ t('activities.inshore') }}</router-link></li>
          <li><router-link to="/tours" class="block px-4 py-2 hover:bg-gray-100" @click="closeMenu">{{ t('activities.tours') }}</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/gallery" class="hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400" :class="{ 'text-blue-400 border-blue-400': isActive('/gallery') }">
          {{ t('menu.gallery') }}
        </router-link>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400" :class="{ 'text-blue-400 border-blue-400': isActive('/contact') }">
          {{ t('menu.contact') }}
        </router-link>
      </li>

      <!-- Idioma (escritorio) -->
      <li class="hidden md:block">
        <button @click="switchLanguage" class="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
          <img v-if="locale === 'es'" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="EN" class="w-full h-full object-cover" />
          <img v-else src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" alt="ES" class="w-full h-full object-cover" />
        </button>
      </li>
    </ul>
  </nav>
  
  <!-- Menú móvil -->
  <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2 px-6 bg-black/95 rounded-b-lg shadow-lg pb-4">
    <router-link to="/" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('menu.home') }}</router-link>
    <router-link to="/offshore" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('activities.offshore') }}</router-link>
    <router-link to="/inshore" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('activities.inshore') }}</router-link>
    <router-link to="/tours" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('activities.tours') }}</router-link>
    <router-link to="/gallery" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('menu.gallery') }}</router-link>
    <router-link to="/contact" class="block text-sm text-white hover:text-blue-400" @click="mobileMenuOpen = false">{{ t('menu.contact') }}</router-link>
  </div>
</header>


  <main>
    <router-view />
  </main>
 

<footer class="bg-gradient-to-b from-[#1c1c20] to-[#2e2e34] text-gray-300 text-sm py-12 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

    <!-- Logo -->
    <div class="flex flex-col items-center md:items-start space-y-3">
      <img 
        src="/images/bg2.webp" 
        alt="Logo Cabo Tours" 
        class="w-28 opacity-80 mx-auto md:mx-0"
      />
      <p class="text-gray-400 text-xs">&copy; 2025 Cabo Tours. {{ t('footer.rights_reserved') }}</p>
    </div>

    <!-- Información de contacto -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-white mb-2">{{ t('footer.contact') }}</h3>
      <p class="flex items-center justify-center md:justify-start gap-2">
        <!-- Icono teléfono -->
        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.828 2.828a1 1 0 01.293.707V9a1 1 0 01-1 1H9l-2 2 4 4 2-2v-1a1 1 0 011-1h2.172a2 2 0 012 2v2.586a1 1 0 01-.293.707l-2.828 2.828a1 1 0 01-.707.293H5a2 2 0 01-2-2V5z"/>
        </svg>
        <a href="tel:+50688872280" class="hover:underline">+506 8887 2280</a>
      </p>
      <p class="flex items-center justify-center md:justify-start gap-2">
        <!-- Icono calendario -->
        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        {{ t('footer.schedule') }}
      </p>
      <p class="flex items-center justify-center md:justify-start gap-2">
        <!-- Icono ubicación -->
        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c3.866 0 7 2.239 7 5v1H5v-1c0-2.761 3.134-5 7-5z"/>
        </svg>
        <a href="https://maps.app.goo.gl/P11Fyij8WKKkbgBB8" target="_blank" rel="noopener noreferrer" class="hover:underline">
          Malpaís, Puntarenas, Costa Rica
        </a>
      </p>
    </div>

    <!-- Política y desarrollo -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-white mb-2">{{ t('footer.info') }}</h3>
      <a href="/politica" class="hover:underline block">{{ t('footer.privacy_policy') }}</a>
    <p class="flex flex-wrap justify-center md:justify-start gap-1">
  {{ t('footer.developed_by') }}
  <a
    href="https://creatividadvisual.nicepage.io/"
    target="_blank"
    rel="noopener noreferrer"
    class="text-white font-semibold hover:underline"
  >
    Creatividad Visual
  </a>
  –
  <a
    href="https://mauriciotorresfernandez.com"
    target="_blank"
    rel="noopener noreferrer"
    class="text-white font-semibold hover:underline"
  >
    Stanley TF.
  </a>
</p>


    </div>

    <!-- Redes sociales -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-white mb-2">{{ t('footer.follow_us') }}</h3>
      <div class="flex justify-center md:justify-start gap-5">
        <!-- Facebook -->
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg class="w-6 h-6 fill-current hover:text-white transition" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3H14v7A10 10 0 0 0 22 12z"/>
          </svg>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg class="w-6 h-6 fill-current hover:text-white transition" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.4.5.6.3 1.1.7 1.6 1.2.5.5.9 1 .9 1.6.2.4.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.4.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1.1-.7-1.6-1.2-.5-.5-.9-1-.9-1.6-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.4.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm5.3-11.9a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>


</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const mobileMenuOpen = ref(false)
const toggleMenu = () => (open.value = !open.value)
const closeMenu = () => (open.value = false)
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
const { t, locale } = useI18n()

const route = useRoute()
const isActive = (path: string) => route.path === path

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.getElementById('dropdownMenu')
  if (open.value && dropdown && !dropdown.contains(event.target as Node)) {
    open.value = false
  }
}

const switchLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
