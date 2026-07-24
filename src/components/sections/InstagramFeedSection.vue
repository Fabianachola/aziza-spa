<template>
  <section class="instagram-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Latest Moments at Aziza Spa</h2>
        <p class="section-subtitle">Follow our journey on Instagram</p>
      </div>
      <div class="instagram-grid">
        <div v-for="(post, index) in instagramPosts" :key="index" class="instagram-post">
          <img 
            :src="post.image" 
            :alt="post.alt"
            loading="lazy"
            @error="handleImageError"
          />
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
        <a href="https://www.instagram.com/azizispa._/?hl=en" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="17" cy="7" r="1" fill="currentColor"/>
          </svg>
          Follow Azizi Spa (@azizispa._)
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InstagramFeedSection',
  data() {
    return {
      instagramPosts: [
        { image: '/images/instagram/instagram-post-1.jpg', alt: 'Aziza Spa Instagram Post 1' },
        { image: '/images/instagram/instagram-post-2.jpg', alt: 'Aziza Spa Instagram Post 2' },
        { image: '/images/instagram/instagram-post-3.jpg', alt: 'Aziza Spa Instagram Post 3' },
        { image: '/images/instagram/instagram-post-4.jpg', alt: 'Aziza Spa Instagram Post 4' },
        { image: '/images/instagram/instagram-post-5.jpg', alt: 'Aziza Spa Instagram Post 5' },
        { image: '/images/instagram/instagram-post-6.jpg', alt: 'Aziza Spa Instagram Post 6' },
        { image: '/images/instagram/instagram-post-7.jpg', alt: 'Aziza Spa Instagram Post 7' },
        { image: '/images/instagram/instagram-post-8.jpg', alt: 'Aziza Spa Instagram Post 8' }
      ]
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23f0ece6"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="40" fill="%238A8A8A" text-anchor="middle" dy=".3em"%3E📷%3C/text%3E%3C/svg%3E'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.instagram-section {
  padding: 80px 0;
  background: #fafafa;
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

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.instagram-post {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  background: #f0ece6;
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

/* Instagram Overlay with Icon */
.instagram-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 22, 40, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.instagram-post:hover .instagram-overlay {
  opacity: 1;
}

.instagram-icon {
  width: 40px;
  height: 40px;
  stroke: #FAF8F4;
  opacity: 0.9;
}

/* CTA Button */
.instagram-cta {
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  background: #D4AF37;
  color: #0a1628;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #C5A032;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
}

.btn-icon {
  width: 20px;
  height: 20px;
  stroke: #0a1628;
  stroke-width: 2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .instagram-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .instagram-icon {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  .instagram-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .btn-primary {
    padding: 0.6rem 1.5rem;
    font-size: 12px;
  }
  
  .instagram-icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 1400px) {
  .section-title {
    font-size: 56px;
  }
  .instagram-grid {
    gap: 1.5rem;
  }
}
</style>