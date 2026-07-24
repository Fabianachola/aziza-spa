<template>
  <section class="treatments-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Popular Treatments</h2>
        <p class="section-subtitle">Our most sought-after wellness experiences</p>
      </div>
      
      <div class="treatments-grid">
        <div v-for="treatment in treatments" :key="treatment.id" class="treatment-card">
          <div class="treatment-image">
            <img :src="treatment.image" :alt="treatment.title" loading="lazy" />
            <span class="treatment-duration">{{ treatment.duration }}</span>
          </div>
          <div class="treatment-content">
            <h3 class="treatment-title">{{ treatment.title }}</h3>
            <p class="treatment-description">{{ treatment.description }}</p>
            <div class="treatment-footer">
              <span class="treatment-price">{{ treatment.price }}</span>
              <router-link to="/book-appointment" class="btn-book">
                Book Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopularTreatmentsSection',
  data() {
    return {
      treatments: [
        {
          id: 1,
          title: 'Massage Therapy',
          description: 'Expert massage techniques for deep relaxation, tension relief, and overall wellness.',
          price: 'Ksh 3,000',
          duration: '60 min',
          image: '/images/services/massage-therapy.jpg'
        },
        {
          id: 2,
          title: 'Deep Tissue Massage',
          description: 'Intense relief for chronic muscle tension using deep pressure techniques.',
          price: 'Ksh 4,000',
          duration: '60 min',
          image: '/images/services/deep-tissue.jpg'
        },
        {
          id: 3,
          title: 'Waxing',
          description:'Professional waxing services for smooth, long-lasting results with gentle care for every skin type.',
          price: 'Ksh 2,000',
          duration: '60 min',
          image: '/images/services/body-rituals.jpg'
        },
        {
          id: 4,
          title: 'Hot Stone Massage',
          description: 'Warm basalt stones for deep muscle relaxation and healing.',
          price: 'Ksh 5,000',
          duration: '60 min',
          image: '/images/services/hot-stone.jpg'
        },
        {
          id: 5,
          title: 'Moroccan Bath',
          description: 'Traditional hammam experience with black soap and rhassoul clay for deep cleansing.',
          price: 'Ksh 10,000',
          duration: '90 min',
          image: '/images/services/moroccan-bath.jpg'
        },
        {
          id: 6,
          title: 'Swedish Massage',
          description: 'Gentle relaxation with long, flowing strokes to ease tension and promote overall wellness.',
          price: 'Ksh 3,000',
          duration: '60 min',
          image: '/images/services/swedish-massage.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.treatments-section {
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

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.treatment-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(10, 22, 40, 0.06);
  display: flex;
  flex-direction: column;
}

.treatment-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(10, 22, 40, 0.08);
  border-color: #D4AF37;
}

.treatment-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f0ece6;
}

.treatment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.treatment-card:hover .treatment-image img {
  transform: scale(1.05);
}

.treatment-duration {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(10px);
  color: #FAF8F4;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.treatment-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.treatment-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.4rem 0;
}

.treatment-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #0a1628;
  margin: 0 0 1.2rem 0;
  line-height: 1.6;
  opacity: 0.7;
  flex: 1;
}

.treatment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(10, 22, 40, 0.06);
}

.treatment-price {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: #D4AF37;
}

.btn-book {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #25D366;
  color: #ffffff;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}

.btn-book:hover {
  background: #128C7E;
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .treatments-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .treatments-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .treatment-content {
    padding: 1rem;
  }
  
  .treatment-title {
    font-size: 18px;
  }
  
  .treatment-description {
    font-size: 12px;
  }
  
  .treatment-price {
    font-size: 20px;
  }
  
  .btn-book {
    font-size: 10px;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .treatments-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .treatments-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .treatment-image {
    aspect-ratio: 16/9;
  }
  
  .treatment-title {
    font-size: 20px;
  }
  
  .treatment-price {
    font-size: 22px;
  }
  
  .btn-book {
    font-size: 11px;
    padding: 0.4rem 1rem;
  }
}

@media (min-width: 1400px) {
  .treatments-grid {
    gap: 2rem;
  }
  
  .treatment-title {
    font-size: 26px;
  }
  
  .treatment-description {
    font-size: 15px;
  }
  
  .treatment-price {
    font-size: 30px;
  }
  
  .btn-book {
    font-size: 13px;
    padding: 0.6rem 1.5rem;
  }
}
</style>