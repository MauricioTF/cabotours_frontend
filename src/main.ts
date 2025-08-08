import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import router from './routers/router'
import '../src/assets/Index.css'
import './style.css'

const i18n = createI18n({
  legacy: false, // para Composition API
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})
const { t } = i18n.global

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

// SEO dinámico
router.afterEach((to) => {
  const titleKey = to.meta.titleKey as string
  const descKey = to.meta.descKey as string

  const pageTitle = titleKey ? t(titleKey) : "Cabo Tours"
  const pageDesc = descKey ? t(descKey) : "Pesca deportiva, tours y aventuras en Malpaís, Costa Rica."
  const pageUrl = window.location.href
  const pageImage = "https://tusitio.com/images/og-image.jpg" // 

  // Cambiar el título dinámicamente
  document.title = pageTitle

  // Meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement("meta")
    metaDescription.setAttribute("name", "description")
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute("content", pageDesc)

  // 🖼 Open Graph tags
  type MetaTag = { property?: string; name?: string; content: string }

const ogTags: MetaTag[] = [
  { property: "og:title", content: pageTitle },
  { property: "og:description", content: pageDesc },
  { property: "og:url", content: pageUrl },
  { property: "og:image", content: pageImage },
  { property: "og:type", content: "website" },
]

const twitterTags: MetaTag[] = [
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: pageTitle },
  { name: "twitter:description", content: pageDesc },
  { name: "twitter:image", content: pageImage },
]

const head = document.head
;[...ogTags, ...twitterTags].forEach((tag) => {
  const selector = tag.property
    ? `meta[property="${tag.property}"]`
    : `meta[name="${tag.name}"]`

  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    if (tag.property) element.setAttribute("property", tag.property)
    if (tag.name) element.setAttribute("name", tag.name)
    head.appendChild(element)
  }
  element.setAttribute("content", tag.content)
})

})
