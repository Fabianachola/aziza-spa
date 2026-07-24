<template>
  <div class="gallery-page">
    <!-- Hero Section -->
    <section class="gallery-hero">
      <div class="hero-image">
        <img 
          src="/images/gallery/gallery-hero.jpg" 
          alt="Inside Aziza Spa"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Inside <span class="highlight">Aziza Spa</span></h1>
          <p class="hero-subtitle">A visual journey through our luxury wellness sanctuary</p>
        </div>
      </div>
    </section>

    

    <!-- Pinterest Layout Gallery -->
    <section class="gallery-grid-section">
      <div class="container">
        <div class="gallery-masonry">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="gallery-item"
            :class="getItemSize(index)"
            @click="openLightbox(index)"
          >
            <img 
              :src="image.path" 
              :alt="image.alt"
              loading="lazy"
            />
            <div class="gallery-overlay">
              <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fullscreen Viewer / Lightbox -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox" aria-label="Close lightbox">✕</button>
        <button class="lightbox-prev" @click.stop="prevImage" aria-label="Previous image">‹</button>
        <button class="lightbox-next" @click.stop="nextImage" aria-label="Next image">›</button>
        <img 
          :src="filteredImages[currentIndex].path" 
          :alt="filteredImages[currentIndex].alt"
          class="lightbox-image"
          @click.stop
        />
        <div class="lightbox-counter">{{ currentIndex + 1 }} / {{ filteredImages.length }}</div>
      </div>
    </transition>

    <!-- Instagram Section -->
    <section class="instagram-section">
      <div class="container">
        <div class="instagram-header">
          <h2 class="section-title">Follow Us <span class="highlight">@AzizaSpa</span></h2>
          <p class="section-subtitle">Tag us in your photos for a chance to be featured</p>
        </div>
        <div class="instagram-grid">
          <div v-for="(post, index) in instagramPosts" :key="index" class="instagram-post">
            <img :src="post.image" :alt="'Instagram post ' + (index + 1)" loading="lazy" />
            <div class="instagram-overlay">
              <svg class="instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17" cy="7" r="1" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="instagram-cta">
          <a href="https://www.instagram.com/azizispa._/?hl=en" target="_blank" class="btn-primary">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17" cy="7" r="1" fill="currentColor"/>
            </svg>
            Follow Azizi Spa (@azizispa._)
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      activeFilter: 'all',
      lightboxOpen: false,
      currentIndex: 0,
      categories: [
        { id: 'all', name: 'All' },
        { id: 'massage', name: 'Massage' },
        { id: 'rooms', name: 'Rooms' },
        { id: 'reception', name: 'Reception' },
        { id: 'steam', name: 'Steam' },
        { id: 'facials', name: 'Facials' },
        { id: 'moroccan', name: 'Moroccan Bath' }
      ],
      galleryImages: [
        // Massage images
        { path: '/images/gallery/massage-1.jpg', alt: 'Massage therapy session', category: 'massage' },
        { path: '/images/gallery/massage-2.jpg', alt: 'Swedish massage treatment', category: 'massage' },
        { path: '/images/gallery/massage-3.jpg', alt: 'Deep tissue massage', category: 'massage' },
        // Rooms images
        { path: '/images/gallery/room-1.jpg', alt: 'Luxury treatment room', category: 'rooms' },
        { path: '/images/gallery/room-2.jpg', alt: 'Private spa suite', category: 'rooms' },
        { path: '/images/gallery/room-3.jpg', alt: 'Couples massage room', category: 'rooms' },
        // Reception images
        { path: '/images/gallery/reception-1.jpg', alt: 'Elegant reception area', category: 'reception' },
        { path: '/images/gallery/reception-2.jpg', alt: 'Welcoming lounge', category: 'reception' },
        // Steam images
        { path: '/images/gallery/steam-1.jpg', alt: 'Steam room experience', category: 'steam' },
        { path: '/images/gallery/steam-2.jpg', alt: 'Aromatic steam bath', category: 'steam' },
        // Facials images
        { path: '/images/gallery/facial-1.jpg', alt: 'Signature facial treatment', category: 'facials' },
        { path: '/images/gallery/facial-2.jpg', alt: 'Custom facial care', category: 'facials' },
        // Moroccan Bath images
        { path: '/images/gallery/moroccan-1.jpg', alt: 'Moroccan bath ritual', category: 'moroccan' },
        { path: '/images/gallery/moroccan-2.jpg', alt: 'Traditional hammam experience', category: 'moroccan' }
      ],
      instagramPosts: [
        { image: '/images/instagram/instagram-post-1.jpg' },
        { image: '/images/instagram/instagram-post-2.jpg' },
        { image: '/images/instagram/instagram-post-3.jpg' },
        { image: '/images/instagram/instagram-post-4.jpg' },
        { image: '/images/instagram/instagram-post-5.jpg' },
        { image: '/images/instagram/instagram-post-6.jpg' }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.activeFilter === 'all') {
        return this.galleryImages
      }
      return this.galleryImages.filter(img => img.category === this.activeFilter)
    }
  },
  methods: {
    getItemSize(index) {
      const sizes = ['tall', 'wide', 'large', 'small', 'tall', 'wide']
      return sizes[index % sizes.length]
    },
    openLightbox(index) {
      this.currentIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.filteredImages.length) % this.filteredImages.length
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.filteredImages.length
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (!this.lightboxOpen) return
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowLeft') this.prevImage()
      if (e.key === 'ArrowRight') this.nextImage()
    })
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.gallery-page {
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.gallery-hero {
  position: relative;
  height: clamp(300px, 60vh, 600px);
  min-height: 250px;
  max-height: 600px;
  overflow: hidden;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.7) 0%, rgba(10, 22, 40, 0.3) 100%);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fafafa;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.hero-title .highlight {
  color: #C9A96E;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 300;
  margin-top: 1rem;
  opacity: 0.9;
}

/* Filter Section */
.filter-section {
  padding: 1.5rem 0;
  background: #ffffff;
  border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 10px rgba(10, 22, 40, 0.04);
}

.filter-wrapper {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding: 0.5rem 0;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.75rem, 1vw, 0.85rem);
  font-weight: 500;
  color: #0a1628;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.6;
  min-height: 44px;
  min-width: 44px;
}

.filter-btn:hover {
  opacity: 1;
}

.filter-btn.active {
  background: #C9A96E;
  color: #0F172A;
  opacity: 1;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.3);
}

.filter-btn:active {
  transform: scale(0.95);
}

/* Pinterest Masonry Layout */
.gallery-grid-section {
  padding: clamp(2rem, 4vw, 3rem) 0 clamp(3rem, 6vw, 5rem) 0;
}

.gallery-masonry {
  column-count: 3;
  column-gap: 1.5rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f0f0f0;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.1);
}

.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.03);
}

.gallery-item.tall {
  margin-bottom: 1.5rem;
}

.gallery-item.wide {
  margin-bottom: 1.5rem;
}

.gallery-item.large {
  margin-bottom: 1.5rem;
}

.gallery-item.small {
  margin-bottom: 1.5rem;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 22, 40, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:active .gallery-overlay {
  opacity: 1;
}

.expand-icon {
  width: 40px;
  height: 40px;
  stroke: #FAF8F4;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

.gallery-item:hover .expand-icon {
  opacity: 1;
  transform: scale(1);
}

.gallery-item:active .expand-icon {
  opacity: 1;
  transform: scale(1);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-image {
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: none;
  border: none;
  color: #fafafa;
  font-size: clamp(1.5rem, 3vw, 2rem);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close:hover {
  opacity: 1;
  transform: rotate(90deg);
}

.lightbox-close:active {
  transform: rotate(90deg) scale(0.9);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fafafa;
  font-size: clamp(2rem, 4vw, 3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.5;
  padding: 1rem;
  min-height: 60px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.05);
}

.lightbox-prev:active,
.lightbox-next:active {
  transform: translateY(-50%) scale(0.9);
}

.lightbox-prev {
  left: 1.5rem;
}

.lightbox-next {
  right: 1.5rem;
}

.lightbox-counter {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(250, 248, 244, 0.5);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Instagram Section */
.instagram-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #fafafa;
}

.instagram-header {
  text-align: center;
  margin-bottom: clamp(2rem, 3vw, 3rem);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 700;
  color: #0a1628;
  margin: 0 0 0.5rem 0;
}

.section-title .highlight {
  color: #C9A96E;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
  margin: 0;
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.instagram-post {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  background: #f0f0f0;
}

.instagram-post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.instagram-post:hover img {
  transform: scale(1.05);
}

.instagram-post:active img {
  transform: scale(0.98);
}

.instagram-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.instagram-post:hover .instagram-overlay {
  opacity: 1;
}

.instagram-post:active .instagram-overlay {
  opacity: 1;
}

.instagram-icon {
  width: 40px;
  height: 40px;
  stroke: #FAF8F4;
}

.instagram-cta {
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.7rem, 1vw, 0.8rem) clamp(1.5rem, 2.5vw, 2.5rem);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.875rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: #C9A96E;
  color: #0F172A;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.3);
  min-height: 48px;
  min-width: 44px;
  cursor: pointer;
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.4);
}

.btn-primary:active {
  transform: scale(0.96);
}

.btn-primary svg {
  stroke: currentColor;
}

/* Touch Device Optimizations */
@media (hover: none) {
  .gallery-item:hover {
    transform: none;
  }
  
  .gallery-item:hover img {
    transform: none;
  }
  
  .gallery-item:hover .gallery-overlay {
    opacity: 0;
  }
  
  .gallery-item:active .gallery-overlay {
    opacity: 1;
  }
  
  .gallery-item:active img {
    transform: scale(0.98);
  }
  
  .instagram-post:hover img {
    transform: none;
  }
  
  .instagram-post:hover .instagram-overlay {
    opacity: 0;
  }
  
  .instagram-post:active .instagram-overlay {
    opacity: 1;
  }
  
  .btn-primary:hover {
    transform: none;
  }
  
  .btn-primary:active {
    transform: scale(0.96);
  }
  
  .lightbox-prev:hover,
  .lightbox-next:hover {
    background: none;
    opacity: 0.5;
  }
  
  .lightbox-prev:active,
  .lightbox-next:active {
    background: rgba(255, 255, 255, 0.05);
    opacity: 1;
    transform: translateY(-50%) scale(0.95);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .gallery-masonry {
    column-count: 2;
    column-gap: 1.2rem;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
  
  .lightbox-prev {
    left: 1rem;
  }
  
  .lightbox-next {
    right: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .gallery-masonry {
    column-count: 2;
    column-gap: 1rem;
  }
  
  .gallery-item {
    margin-bottom: 1rem;
    border-radius: 12px;
  }
  
  .filter-section {
    padding: 1rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .filter-wrapper {
    gap: 0.5rem;
    padding: 0.3rem 0;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
  }
  
  .filter-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    min-height: 40px;
    white-space: nowrap;
  }
  
  .lightbox {
    padding: 1rem;
  }
  
  .lightbox-prev,
  .lightbox-next {
    min-height: 50px;
    min-width: 50px;
    font-size: 1.8rem;
  }
  
  .lightbox-prev {
    left: 0.5rem;
  }
  
  .lightbox-next {
    right: 0.5rem;
  }
  
  .lightbox-close {
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    min-height: 40px;
    min-width: 40px;
  }
  
  .lightbox-image {
    max-width: 95%;
    max-height: 70vh;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .instagram-icon {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .gallery-masonry {
    column-count: 2;
    column-gap: 0.8rem;
  }
  
  .gallery-item {
    margin-bottom: 0.8rem;
    border-radius: 10px;
  }
  
  .gallery-item.tall,
  .gallery-item.wide,
  .gallery-item.large,
  .gallery-item.small {
    margin-bottom: 0.8rem;
  }
  
  .filter-btn {
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
    min-height: 36px;
  }
  
  .lightbox {
    padding: 0.5rem;
  }
  
  .lightbox-prev,
  .lightbox-next {
    min-height: 44px;
    min-width: 44px;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  
  .lightbox-prev {
    left: 0.25rem;
  }
  
  .lightbox-next {
    right: 0.25rem;
  }
  
  .lightbox-close {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 1.2rem;
    min-height: 36px;
    min-width: 36px;
  }
  
  .lightbox-image {
    max-width: 98%;
    max-height: 60vh;
  }
  
  .lightbox-counter {
    bottom: 1.5rem;
    font-size: 0.75rem;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  
  .instagram-icon {
    width: 28px;
    height: 28px;
  }
  
  .btn-primary {
    font-size: 0.8rem;
    padding: 0.6rem 1.5rem;
    min-height: 44px;
    width: 100%;
    justify-content: center;
  }
  
  .instagram-cta {
    padding: 0 0.5rem;
  }
}

/* Large Screens */
@media (min-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .gallery-masonry {
    column-gap: 2rem;
  }
  
  .gallery-item {
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  
  .gallery-item.tall,
  .gallery-item.wide,
  .gallery-item.large,
  .gallery-item.small {
    margin-bottom: 2rem;
  }
  
  .instagram-grid {
    gap: 1.5rem;
  }
  
  .filter-wrapper {
    gap: 1.2rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.filter-btn:focus-visible,
.btn-primary:focus-visible,
.lightbox-close:focus-visible,
.lightbox-prev:focus-visible,
.lightbox-next:focus-visible {
  outline: 3px solid #C9A96E;
  outline-offset: 2px;
}

/* Loading state for images */
.gallery-item img,
.instagram-post img {
  background: #f0f0f0;
}

.gallery-item img:not([src]),
.instagram-post img:not([src]) {
  opacity: 0;
}

/* Print Styles */
@media print {
  .gallery-hero {
    height: 300px;
  }
  
  .filter-section {
    display: none;
  }
  
  .lightbox {
    display: none !important;
  }
  
  .instagram-overlay {
    display: none;
  }
  
  .gallery-overlay {
    display: none;
  }
}
</style>