<template>
  <section class="hero-section">
    <!-- Video Background -->
    <video 
      ref="videoRef"
      class="hero-video" 
      autoplay 
      muted 
      loop 
      playsinline
      @error="handleVideoError"
      @loadeddata="handleVideoLoaded"
    >
      <source src="/images/hero/spa-hero.mp4" type="video/mp4" />
    </video>

    <!-- Overlay -->
    <div class="hero-overlay"></div>

    <!-- Content -->
    <div class="container hero-content">
      <div class="hero-text">
        <!-- Main Header -->
        <h1 class="hero-title">Best Spa in Nairobi for Massage &amp; Facials</h1>
        
        <!-- Subheader -->
        <p class="hero-subtitle">Luxury massages, facials, Moroccan baths, body scrubs, waxing &amp; wellness.</p>
        
        <div class="hero-buttons">
          <!-- Book Appointment -->
          <a href="tel:0796471899" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Appointment
          </a>
          
          <!-- Our Services -->
          <router-link to="/services" class="btn-secondary">
            Our Services
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      videoError: false
    }
  },
  methods: {
    handleVideoError(e) {
      console.error('Video error:', e)
      this.videoError = true
    },
    handleVideoLoaded() {
      console.log('Video loaded successfully!')
    }
  },
  mounted() {
    const video = this.$refs.videoRef
    if (video) {
      video.play().catch(err => {
        console.log('Autoplay prevented:', err)
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #121212;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.4) 100%);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-text {
  text-align: center;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  font-weight: 700;
  color: #FAF8F4;
  line-height: 1.2;
  margin: 0 auto 0.5rem auto;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.5);
  max-width: 800px;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #D4AF37;
  line-height: 1.7;
  margin: 0.5rem auto 2.5rem auto;
  max-width: 700px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 10px 30px -10px rgba(37, 211, 102, 0.4);
}

.btn-primary:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 15px 40px -10px rgba(37, 211, 102, 0.5);
}

.btn-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 16px;
  border: 2px solid rgba(250, 248, 244, 0.4);
  color: #FAF8F4;
  background: transparent;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(212, 175, 55, 0.15);
  border-color: #D4AF37;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 42px;
  }
  .hero-subtitle {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
    max-width: 100%;
    padding: 0 1rem;
  }
  
  .hero-subtitle {
    font-size: 18px;
    max-width: 100%;
    padding: 0 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    text-align: center;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    padding: 0.9rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 26px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 0.7rem 1.2rem;
    font-size: 14px;
    max-width: 280px;
  }
  
  .btn-icon {
    width: 16px;
    height: 16px;
  }
}

@media (min-width: 1400px) {
  .hero-title {
    font-size: 64px;
  }
  .hero-subtitle {
    font-size: 24px;
  }
  .btn-primary,
  .btn-secondary {
    padding: 1.2rem 3rem;
    font-size: 18px;
  }
}
</style>
