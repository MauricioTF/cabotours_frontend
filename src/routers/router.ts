import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import OffshoreView from '../views/OffShoreView.vue'
import InshoreView from '../views/InShoreView.vue'
import ToursView from '../views/BoatToursView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { titleKey: "seo.home_title", descKey: "seo.home_desc" }, },
  { path: '/offshore', name: 'offshore', component: OffshoreView, meta: { titleKey: "seo.offshore_title", descKey: "seo.offshore_desc" } },
  { path: '/inshore', name: 'inshore', component: InshoreView, meta: { titleKey: "seo.inshore_title", descKey: "seo.inshore_desc" } },
  { path: '/tours', name: 'tours', component: ToursView, meta: { titleKey: "seo.tours_title", descKey: "seo.tours_desc" } },

  { path: '/gallery', name: 'gallery', component: GalleryView, meta: { titleKey: "seo.gallery_title", descKey: "seo.gallery_desc" } },
  { path: '/contact', name: 'contact', component: ContactView, meta: { titleKey: "seo.contact_title", descKey: "seo.contact_desc" } },

  {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // siempre vuelve al inicio
  }
})

export default router
