<template>

  <section class="relative">

    <!-- Muestra de video de fondo con texto centrado y capa oscura -->
    <section class="relative w-full h-screen overflow-hidden">
  <!-- Video de fondo -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/images/bg1.webm" type="video/mp4" />
    Tu navegador no soporta la etiqueta de video.
  </video>

  <!-- Capa oscura -->
  <div class="absolute inset-0 bg-black/50 z-10"></div>

  <!-- Contenido encima del video -->
  <div class="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight uppercase">
      {{ t('home.title') }}
    </h1>
    <h2 class="text-base md:text-xl mt-4 font-medium tracking-wide max-w-2xl">
      {{ t('home.subtitle') }}
    </h2>
    <div class="mt-8">
      <!-- Podés agregar un botón o más contenido aquí -->
    </div>
  </div>
  
  <!-- Gradiente inferior para conexión visual -->
   <div class="absolute bottom-0 left-0 w-full h-32 z-20 bg-gradient-to-b from-bg-black/50 to-[#1c1c20] pointer-events-none"></div>

</section>

<!-- Sección de título y subtítulo -->
<section class="text-center px-4 py-16  text-white">
  <h3 class="text-4xl md:text-1xl font-extrabold leading-tight mb-4 uppercase">
    {{ t('home.subtitle2') }}
  </h3>

  <h3 class="text-xl md:text-6xl font-medium text-white mb-6 ">
    {{ t('home.country') }}
  </h3>

  <a
    href="/offshore"
    class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
    :aria-label="t('home.cta_label')"
    :title="t('home.cta_title')"
  >
    {{ t('home.cta') }}
  </a>
</section>

<!-- Sección de galería -->
<section id="que-hacer" class=" py-20 px-4 text-white">
   <h2 class="text-3xl font-bold text-center mb-10">
      {{ t('gallery_home.title') }}
    </h2>
    
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-12 gap-4 auto-rows-[200px]">
      
      <!-- Imagen grande vertical -->
      <a href="/offshore" class="relative group col-span-12 sm:col-span-6 row-span-2">
        <img src="/offshorefishing/offshore-fishing5.webp" alt="Pesca" class="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h3 class="text-white text-2xl font-bold text-center">
            {{ t('gallery_home.card_offshore') }}
          </h3>
        </div>
      </a>

      <!-- Imagen cuadrada -->
      <a href="/tours" class="relative group col-span-6 sm:col-span-3 row-span-1">
        <img src="/snorkelingtour/snorkeling1.webp" alt="Tour" class="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h3 class="text-white text-lg font-semibold text-center">
            {{ t('gallery_home.card_snorkel') }}
          </h3>
        </div>
      </a>

      <!-- Imagen cuadrada -->
      <a href="/tours" class="relative group col-span-6 sm:col-span-3 row-span-1">
        <img src="/whalewatching/whale2.webp" alt="Snorkel" class="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h3 class="text-white text-lg font-semibold text-center">
            {{ t('gallery_home.card_whale') }}
          </h3>
        </div>
      </a>

      <!-- Imagen horizontal grande -->
      <a href="/tours" class="relative group col-span-12 sm:col-span-6 row-span-2">
        <img src="/tortugaisland/tortuga5.webp" alt="Tour" class="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h3 class="text-white text-lg font-semibold text-center">
            {{ t('gallery_home.card_island') }}
          </h3>
        </div>
      </a>

      <!-- Imagen vertical más pequeña -->
      <a href="/inshore" class="relative group col-span-12 sm:col-span-6 row-span-1">
        <img src="/inshorefishing/inshore-fishing2.webp" alt="Snorkel" class="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <h3 class="text-white text-lg font-semibold text-center">
            {{ t('gallery_home.card_inshore') }}
          </h3>
        </div>
      </a>
    </div>

    <!-- Botón -->
    <div class="text-center mt-12">
      <a
        href="/gallery"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
      >
        {{ t('gallery_home.button_gallery') }}
      </a>
    </div>
  </div>
</section>

<!-- Sección de comentario de experiencia 1-->
<section class="relative flex justify-center items-center px-4 py-16">
  <!-- Fondo con gradiente de blanco a gris oscuro -->
  <div class="absolute inset-0 bg-gradient-to-b from-bg[#1c1c20] to-[#2e2e34] z-0"></div>

  <!-- Tarjeta -->
  <div class="bg-white rounded-xl shadow-md max-w-2xl w-full p-6 z-10 border border-gray-200">
    <div class="flex items-start gap-4 mb-4">
      <!-- Avatar con inicial -->
      <div class="w-14 h-14 rounded-full bg-[#8d6e63] text-white flex items-center justify-center text-xl font-bold">
        T
      </div>

      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="text-base font-semibold">Teresa Carriles Cervera</h4>
          <a href="https://maps.app.goo.gl/rvSWBdCjsNVEhcwD6"   target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500">• Google Review</a>
        </div>

        <!-- Estrellas -->
        <div class="flex gap-0.5 my-1">
          <template v-for="_ in 5" :key="i">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462 1.286 3.973c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.286-3.973-3.388-2.462c-.784-.57-.38-1.81.588-1.81h4.18l1.286-3.973z" />
            </svg>
          </template>
        </div>
      </div>
    </div>

    <!-- Texto de la reseña -->
    <p class="text-base leading-relaxed">
      “... ¡Una experiencia de 10, súper recomendable !Muchísimas gracias y esperamos volver pronto.”
    </p>

    <!-- Logo de Google -->
    <div class="flex justify-end mt-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        class="h-6"
      />
    </div>
  </div>
</section>

<!-- Sección de texto e imagen letra C-->
<section class="bg-[#2e2e34] py-20 px-4 text-white">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    
    <!-- Texto centrado verticalmente -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        {{ t('information1.title') }}
      </h2>
      <p class="text-lg mb-4 leading-relaxed">
        {{ t('information1.description1') }}
      </p>
      <p class="text-lg leading-relaxed">
        {{ t('information1.description2') }}
      </p>
    </div>

    <!-- Imagen sin bordes, más pequeña y centrada -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/C.webp"
        alt="Letra decorativa"
        class="w-2/3 max-w-xs h-auto object-cover"
      />
    </div>

  </div>
</section>

<!-- Sección de comentario de experiencia 2-->
<section class="relative flex justify-center items-center px-4 py-16">
  <!-- Fondo con degradado de oscuro a claro -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#2e2e34] to-bg[#1c1c20] z-0"></div>

  <!-- Tarjeta -->
  <div class="bg-white rounded-xl shadow-md max-w-2xl w-full p-6 z-10 border border-gray-200">
    <div class="flex items-start gap-4 mb-4">
      <!-- Avatar con inicial -->
      <div class="w-14 h-14 rounded-full bg-[#7d7d7d] text-white flex items-center justify-center text-xl font-bold">
        h
      </div>

      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="text-base font-semibold">heymop</h4>
          <a href="https://maps.app.goo.gl/PBwMDdpudwUZEiZW7"   target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500">• Google Review</a>
        </div>

        <!-- Estrellas -->
        <div class="flex gap-0.5 my-1">
          <template v-for="_ in 5" :key="i">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462 1.286 3.973c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.286-3.973-3.388-2.462c-.784-.57-.38-1.81.588-1.81h4.18l1.286-3.973z" />
            </svg>
          </template>
        </div>
      </div>
    </div>

    <!-- Texto de la reseña -->
    <p class="text-base leading-relaxed">
      “Excelente tour, buenas embarcaciones y muy buenos capitanes
Altamente recomendable.”
    </p>

    <!-- Logo de Google -->
    <div class="flex justify-end mt-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        class="h-6"
      />
    </div>
  </div>
</section>


<!-- Sección de texto e imagen letra A-->
<section class="py-20 px-4 text-white">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    
        <!-- Imagen sin bordes, más pequeña y centrada -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/A.webp"
        alt="Letra decorativa"
        class="w-2/3 max-w-xs h-auto object-cover"
      />
    </div>

    <!-- Texto centrado verticalmente -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        {{ t('information2.title') }}
      </h2>
      <p class="text-lg mb-4 leading-relaxed">
        {{ t('information2.description1') }}
      </p>
      <p class="text-lg leading-relaxed">
        {{ t('information2.description2') }}
      </p>
    </div>

  </div>
</section>

<!-- Sección de comentario de experiencia 3-->
<section class="relative flex justify-center items-center px-4 py-16">
  <!-- Fondo con gradiente de blanco a gris oscuro -->
  <div class="absolute inset-0 bg-gradient-to-b from-bg[#1c1c20] to-[#2e2e34] z-0"></div>

  <!-- Tarjeta -->
  <div class="bg-white rounded-xl shadow-md max-w-2xl w-full p-6 z-10 border border-gray-200">
    <div class="flex items-start gap-4 mb-4">
      <!-- Avatar con inicial -->
      <div class="w-14 h-14 rounded-full bg-[#0288D1] text-white flex items-center justify-center text-xl font-bold">
        N
      </div>

      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="text-base font-semibold">Nicolai Schulze</h4>
          <a href="https://maps.app.goo.gl/zRALdcJT5gudBvY18"   target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500">• Google Review</a>
        </div>

        <!-- Estrellas -->
        <div class="flex gap-0.5 my-1">
          <template v-for="_ in 5" :key="i">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462 1.286 3.973c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.286-3.973-3.388-2.462c-.784-.57-.38-1.81.588-1.81h4.18l1.286-3.973z" />
            </svg>
          </template>
        </div>
      </div>
    </div>

    <!-- Texto de la reseña -->
    <p class="text-base leading-relaxed">
      “¡La pesca costera fue increíble! ¡Capturamos 10 atunes y nuestro capitán hizo un gran trabajo! Definitivamente lo recomendaría si buscas una actividad divertida.”
    </p>

    <!-- Logo de Google -->
    <div class="flex justify-end mt-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        class="h-6"
      />
    </div>
  </div>
</section>

<!-- Sección de texto e imagen letra B-->
<section class="bg-[#2e2e34] py-20 px-4 text-white">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    
    <!-- Texto centrado verticalmente -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        {{ t('information3.title') }}
      </h2>
      <p class="text-lg mb-4 leading-relaxed">
        {{ t('information3.description1') }}
      </p>
      <p class="text-lg leading-relaxed">
        {{ t('information3.description2') }}
      </p>
    </div>

    <!-- Imagen sin bordes, más pequeña y centrada -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/B.webp"
        alt="Letra decorativa"
        class="w-2/3 max-w-xs h-auto object-cover"
      />
    </div>

  </div>
</section>

<!-- Sección de comentario de experiencia 4-->
<section class="relative flex justify-center items-center px-4 py-16">
  <!-- Fondo con degradado de oscuro a claro -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#2e2e34] to-[#1c1c20] z-0"></div>

  <!-- Tarjeta -->
  <div class="bg-white rounded-xl shadow-md max-w-2xl w-full p-6 z-10 border border-gray-200">
    <div class="flex items-start gap-4 mb-4">
      <!-- Avatar con inicial -->
      <div class="w-14 h-14 rounded-full bg-[#647D43] text-white flex items-center justify-center text-xl font-bold">
        F
      </div>

      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="text-base font-semibold">Florencia Solano Umaña</h4>
          <a href="https://maps.app.goo.gl/ZKca5incHQYFzJ7VA"   target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500">• Google Review</a>
        </div>

        <!-- Estrellas -->
        <div class="flex gap-0.5 my-1">
          <template v-for="_ in 5" :key="i">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462 1.286 3.973c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.286-3.973-3.388-2.462c-.784-.57-.38-1.81.588-1.81h4.18l1.286-3.973z" />
            </svg>
          </template>
        </div>
      </div>
    </div>

    <!-- Texto de la reseña -->
    <p class="text-base leading-relaxed">
      “¡Experiencia hermosa! ¡Los mejores operadores turísticos en barco de la ciudad! ¡Me encantan vuestras vibraciones, chicos! ¡Siempre disfruto contigo! ¡Gracias siempre!”
    </p>

    <!-- Logo de Google -->
    <div class="flex justify-end mt-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        class="h-6"
      />
    </div>
  </div>
</section>

<!-- Sección de texto e imagen letra O-->
<section class="py-20 px-4 text-white">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    
        <!-- Imagen sin bordes, más pequeña y centrada -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/O.webp"
        alt="Letra decorativa"
        class="w-2/3 max-w-xs h-auto object-cover"
      />
    </div>

    <!-- Texto centrado verticalmente -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        {{ t('information4.title') }}
      </h2>
      <p class="text-lg mb-4 leading-relaxed">
        {{ t('information4.description1') }}
      </p>
      <p class="text-lg mb-4 leading-relaxed">
        {{ t('information4.description2') }}
      </p>
      <p class="text-lg leading-relaxed">
        {{ t('information4.description3') }}
      </p>
      
      <div class="flex flex-col md:flex-row items-center gap-4 mt-6">
  <p class="text-lg font-medium text-slate-800">
    {{ t('information4.message') }}
  </p>
  <a
  href="/contact"
  class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition duration-300 whitespace-nowrap"
>
  {{ t('information4.text_button') }}
</a>
</div>

    </div>

  </div>
</section>
  
</section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();


</script>


