<template>
  <section class="experiences-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Experiences</h2>
        <p class="section-subtitle">Discover our signature wellness journeys</p>
      </div>
      
      <div class="experiences-grid">
        <div 
          v-for="exp in experiences" 
          :key="exp.title" 
          class="experience-card"
        >
          <!-- Image Container with Enhancement -->
          <div class="card-image-container">
            <img 
              :src="exp.image" 
              :alt="exp.title"
              class="card-image"
              loading="lazy"
            />
            <div class="image-overlay-gradient"></div>
          </div>
          
          <div class="card-overlay">
            <div class="card-content">
              <h3 class="experience-title">{{ exp.title }}</h3>
              <p class="experience-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperiencesSection',
  data() {
    return {
      experiences: [
        {
          title: 'Massage Therapy',
          description: 'Relax your body',
          image: '/images/experience/massage-therapy.jpg'
        },
        {
          title: 'Body Rituals',
          description: 'Steam • Scrubs • Facials',
          image: '/images/experience/body-rituals.jpg'
        },
        {
          title: 'Royal Moroccan Bath',
          description: 'Luxury Experience',
          image: '/images/experience/moroccan-bath.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.experiences-section {
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
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.experience-card {
  position: relative;
  min-height: 500px;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;
  background: #fafafa;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.experience-card:hover {
  transform: scale(1.02);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.3);
}

/* Image Container - Enhanced */
.card-image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
  /* Image Enhancement */
  image-rendering: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: scale(1.01);
}

.experience-card:hover .card-image {
  transform: scale(1.08);
}

/* Image Enhancement Effects */
.image-overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(10, 22, 40, 0.5) 0%, rgba(10, 22, 40, 0.1) 40%, rgba(10, 22, 40, 0.7) 100%);
  transition: background 0.4s ease;
}

.experience-card:hover .image-overlay-gradient {
  background: 
    linear-gradient(135deg, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.2) 40%, rgba(10, 22, 40, 0.8) 100%);
}

/* Card Overlay */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

.card-content {
  width: 100%;
  color: #FAF8F4;
}

.experience-title {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
  color: #FAF8F4;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.experience-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.9);
  margin: 0;
  text-shadow: 0 1px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .experiences-grid {
    gap: 1rem;
  }
  .experience-card {
    min-height: 400px;
  }
  .experience-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .experience-card {
    min-height: 350px;
  }
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  .experience-title {
    font-size: 26px;
  }
  .experience-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .experiences-section {
    padding: 50px 0;
  }
  .section-title {
    font-size: 28px;
  }
  .experience-card {
    min-height: 280px;
  }
  .experience-title {
    font-size: 22px;
  }
  .card-overlay {
    padding: 1.5rem;
  }
}
</style>