<template>
  <section class="statistics-section">
    <div class="container">
      <div class="statistics-grid">
        <div v-for="stat in statistics" :key="stat.label" class="stat-item">
          <div class="stat-number">{{ stat.value }}</div>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatisticsSection',
  data() {
    return {
      statistics: [
        { value: '2500+', label: 'Happy Clients' },
        { value: '8+', label: 'Premium Treatments' },
        { value: '★★★★★', label: '4.8 Google Reviews' },
        { value: '100%', label: 'Professional Therapists' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.statistics-section {
  padding: 80px 0;
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Numbers - Playfair Display, Gold (#D4AF37) */
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  color: #D4AF37;
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

/* Labels - Poppins, Dark Blue (#0a1628) */
.stat-label {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #0a1628;
  margin: 0;
  letter-spacing: 0.02em;
}

@media (max-width: 1024px) {
  .stat-number {
    font-size: 40px;
  }
  .stat-label {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .stat-number {
    font-size: 36px;
  }
  .stat-label {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .statistics-section {
    padding: 50px 0;
  }
  .statistics-grid {
    gap: 1.5rem;
  }
  .stat-number {
    font-size: 30px;
  }
  .stat-label {
    font-size: 13px;
  }
}
</style>