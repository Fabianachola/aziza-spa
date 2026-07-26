<template>
  <section class="statistics-section">
    <div class="container">
      <div class="stat-grid">
        <div class="stat-item">
          <div class="stat-number">2500+</div>
          <div class="stat-label">Happy Clients</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">8+</div>
          <div class="stat-label">Premium Treatments</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">★★★★★</div>
          <div class="stat-label">4.8 Google Reviews</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics-section {
  background: #0F172A;
  padding: 60px 0;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  color: #FAF8F4;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  color: #C9A96E;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.8);
}

@media (max-width: 768px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .stat-number {
    font-size: 36px;
  }
}

@media (max-width: 480px) {
  .stat-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .stat-number {
    font-size: 30px;
  }
}
</style>
