<!-- src/components/common/AppHeader.vue -->
<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <!-- Mobile Menu Toggle - LEFT -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Logo -->
      <router-link to="/" class="logo">
        <img
          src="/images/logos/aziza-spa-logo.png"
          alt="Aziza Spa - Luxury Wellness"
          class="logo-image"
          width="180"
          height="48"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
          draggable="false"
        />
        <span class="logo-text">AZIZA SPA</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        <router-link to="/experience" class="nav-link" active-class="active">Experience</router-link>
        <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
        <router-link to="/packages" class="nav-link" active-class="active">Packages</router-link>
        <router-link to="/gallery" class="nav-link" active-class="active">Gallery</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>
      </nav>

      <!-- Book Now Button -->
      <router-link to="/book-appointment" class="btn-primary btn-book">
        Book Now
      </router-link>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-overlay" :class="{ 'open': isMenuOpen }" @click="closeMenu"></div>

      <!-- Mobile Nav (slides from LEFT) -->
      <nav class="mobile-nav" :class="{ 'open': isMenuOpen }">
        <div class="mobile-nav-header">
          <router-link to="/" @click="closeMenu">
            <img src="/images/logos/aziza-spa-logo.png" alt="Aziza Spa" class="mobile-logo" />
          </router-link>
          <button class="close-menu" @click="closeMenu" aria-label="Close menu">✕</button>
        </div>

        <div class="mobile-nav-links">
          <router-link to="/" class="mobile-link" @click="closeMenu">Home</router-link>
          <router-link to="/experience" class="mobile-link" @click="closeMenu">Experience</router-link>
          <router-link to="/services" class="mobile-link" @click="closeMenu">Services</router-link>
          <router-link to="/packages" class="mobile-link" @click="closeMenu">Packages</router-link>
          <router-link to="/gallery" class="mobile-link" @click="closeMenu">Gallery</router-link>
          <router-link to="/about" class="mobile-link" @click="closeMenu">About</router-link>
        </div>

        <div class="mobile-nav-footer">
          <router-link to="/book-appointment" class="btn-book-mobile" @click="closeMenu">
            Book Now
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
    }

    const closeMenu = () => {
      isMenuOpen.value = false
      document.body.style.overflow = ''
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = ''
    })

    return { isScrolled, isMenuOpen, toggleMenu, closeMenu }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.4s ease;
  background: transparent;
}
.app-header.scrolled {
  background: #fafafa;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: #121212; flex-shrink: 0; }
.logo-image { height: 48px; width: auto; max-width: 220px; object-fit: contain; flex-shrink: 0; image-rendering: -webkit-optimize-contrast; transform: translateZ(0); backface-visibility: hidden; }
.logo-text { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; letter-spacing: 0.05em; color: #121212; white-space: nowrap; }
.scrolled .logo-text { color: #121212; }

.mobile-logo { height: 32px; width: auto; max-width: 120px; object-fit: contain; display: block; flex-shrink: 0; }

.nav-links { display: flex; align-items: center; gap: 2.5rem; }
.nav-link { font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #fafafa; text-decoration: none; transition: color 0.3s ease; position: relative; letter-spacing: 0.02em; }
.scrolled .nav-link { color: #2A2A2A; }
.nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #25D366; transition: width 0.3s ease; }
.nav-link:hover::after, .nav-link.active::after { width: 100%; }
.nav-link:hover { color: #25D366; }

.btn-primary { display: inline-block; padding: 0.75rem 2rem; font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 500; text-decoration: none; border-radius: 16px; transition: all 0.3s ease; letter-spacing: 0.02em; }
.btn-book { background: #25D366; color: #ffffff; box-shadow: 0 10px 30px -10px rgba(37, 211, 102, 0.4); }
.btn-book:hover { background: #128C7E; transform: translateY(-2px); box-shadow: 0 15px 40px -10px rgba(37, 211, 102, 0.5); }

.menu-toggle { display: none; background: none; border: none; padding: 0.5rem; cursor: pointer; z-index: 1001; order: -1; }
.hamburger { display: flex; flex-direction: column; gap: 5px; width: 24px; }
.hamburger span { display: block; height: 2px; background: #FAF8F4; transition: all 0.3s ease; }
.scrolled .hamburger span { background: #2A2A2A; }
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.mobile-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 998; opacity: 0; transition: opacity 0.3s ease; }
.mobile-overlay.open { display: block; opacity: 1; }

/* Slides in from the LEFT */
.mobile-nav {
  position: fixed;
  top: 0; left: -100%;
  width: 320px; height: 100vh;
  background: #fafafa;
  z-index: 999;
  padding: 2rem;
  transition: left 0.4s ease;
  display: flex; flex-direction: column; gap: 2rem;
  overflow-y: auto;
}
.mobile-nav.open { left: 0; }

.mobile-nav-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid rgba(0,0,0,0.05); }
.close-menu { background: none; border: none; font-size: 1.5rem; color: #2A2A2A; cursor: pointer; padding: 0.5rem; }

.mobile-nav-links { display: flex; flex-direction: column; gap: 1.5rem; flex: 1; }
.mobile-link { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: #2A2A2A; text-decoration: none; transition: color 0.3s ease; }
.mobile-link:hover { color: #25D366; }

.mobile-nav-footer { padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.05); }
.btn-book-mobile { display: block; text-align: center; background: #25D366; color: #ffffff; padding: 1rem; border-radius: 16px; text-decoration: none; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1rem; transition: background 0.3s ease; }
.btn-book-mobile:hover { background: #128C7E; }

@media (max-width: 1024px) {
  .nav-links, .btn-book { display: none; }
  .menu-toggle { display: block; }
}
@media (max-width: 768px) {
  .logo-text { font-size: 1.2rem; }
  .logo-image { height: 36px; max-width: 180px; }
  .mobile-nav { width: 280px; padding: 1.5rem; }
}
@media (max-width: 480px) {
  .logo-image { height: 32px; max-width: 140px; }
  .logo-text { font-size: 1rem; }
}
</style>
