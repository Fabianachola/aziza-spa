<template>
  <section class="gallery-preview-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Gallery</h2>
        <p class="section-subtitle">A glimpse into the Aziza experience</p>
      </div>
      <div class="gallery-grid">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <img 
            :src="image.path" 
            :alt="image.label"
            loading="lazy"
            @error="handleImageError"
          />
          <div class="gallery-overlay">
            <span class="gallery-label">{{ image.label }}</span>
          </div>
        </div>
      </div>
      <div class="gallery-cta">
        <router-link to="/gallery" class="btn-secondary">View All Photos</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryPreviewSection',
  data() {
    return {
      galleryImages: [
        { label: 'Reception', path: '/images/gallery/reception.jpg' },
        { label: 'Treatment Room', path: '/images/gallery/treatment-room.jpg' },
        { label: 'Relaxation', path: '/images/gallery/relaxation.jpg' },
        { label: 'Ambiance', path: '/images/gallery/ambiance.jpg' },
        { label: 'Therapy', path: '/images/gallery/therapy.jpg' },
        { label: 'Steam', path: '/images/gallery/steam.jpg' }
      ]
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0ece6"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="16" fill="%238A8A8A" text-anchor="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.gallery-preview-section {
  padding: 80px 0;
  background: #FAF8F4;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  color: #0a1628;
  margin: 0 0 0.5rem 0;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #0a1628;
  margin: 0;
  opacity: 0.7;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1rem 1.5rem;
  background: linear-gradient(to top, rgba(10, 22, 40, 0.8), transparent);
  opacity: 1;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  background: linear-gradient(to top, rgba(10, 22, 40, 0.9), transparent);
}

.gallery-label {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  color: #FAF8F4;
}

.gallery-cta {
  text-align: center;
}

.btn-secondary {
  display: inline-block;
  padding: 0.8rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid #D4AF37;
  color: #0a1628;
  background: transparent;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #D4AF37;
  color: #FAF8F4;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .gallery-overlay {
    padding: 1.5rem 0.8rem 1rem;
  }
  
  .gallery-label {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .gallery-preview-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .gallery-overlay {
    padding: 1rem 0.5rem 0.8rem;
  }
  
  .gallery-label {
    font-size: 13px;
  }
  
  .btn-secondary {
    padding: 0.6rem 1.5rem;
    font-size: 13px;
  }
}
</style>
