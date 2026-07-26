import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ExperiencePage = () => import('@/views/experience/ExperiencePage.vue')
const ServicesView = () => import('@/views/services/ServicesView.vue')
const PackagesPage = () => import('@/views/packages/PackagesPage.vue')
const GalleryView = () => import('@/views/gallery/GalleryView.vue')
const AboutView = () => import('@/views/about/AboutView.vue')
const BookingPage = () => import('@/views/booking/BookingView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/experience', name: 'experience', component: ExperiencePage },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/packages', name: 'packages', component: PackagesPage },
    { path: '/gallery', name: 'gallery', component: GalleryView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/book-appointment', name: 'booking', component: BookingPage }
  ]
})
export default router
