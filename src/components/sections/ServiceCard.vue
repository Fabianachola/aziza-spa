<!-- src/components/sections/ServiceCard.vue -->
<template>
  <div class="service-card" :class="[variant, { 'featured': isFeatured }]">
    <!-- Service Image -->
    <div class="service-card-image">
      <img 
        :src="service.image" 
        :alt="service.title"
        loading="lazy"
      />
      <div v-if="service.badge" class="service-badge">
        {{ service.badge }}
      </div>
      <div v-if="service.duration" class="service-duration">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {{ service.duration }}
      </div>
    </div>

    <!-- Service Content -->
    <div class="service-card-content">
      <div class="service-header">
        <h3 class="service-title">{{ service.title }}</h3>
        <div v-if="service.rating" class="service-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-number">{{ service.rating }}</span>
        </div>
      </div>

      <p class="service-description">{{ service.description }}</p>

      <!-- Service Features -->
      <div v-if="service.features && service.features.length" class="service-features">
        <div 
          v-for="(feature, index) in service.features" 
          :key="index"
          class="service-feature"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>

      <!-- Service Footer -->
      <div class="service-footer">
        <div class="service-price-wrapper">
          <span v-if="service.originalPrice" class="service-original-price">
            {{ service.originalPrice }}
          </span>
          <span class="service-price">{{ service.price }}</span>
        </div>
        <div class="service-actions">
          <button 
            v-if="showBookButton"
            @click="handleBookNow"
            class="btn-book"
          >
            Book Now
          </button>
          <router-link 
            :to="service.link || '/services'" 
            class="btn-details"
          >
            Learn More →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.title && value.description && value.price
      }
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'horizontal', 'compact', 'featured'].includes(value)
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    showBookButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ['book-now'],
  methods: {
    handleBookNow() {
      this.$emit('book-now', this.service)
    }
  }
}
</script>

<style scoped>
.service-card {
  background: #FAF8F4;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.15);
  border-color: rgba(199, 164, 108, 0.2);
}

/* Image Styles */
.service-card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  background: #F3EFE8;
}

.service-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-card-image img {
  transform: scale(1.05);
}

/* Badge Styles */
.service-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #C7A46C;
  color: #FAF8F4;
  padding: 0.35rem 1rem;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.service-duration {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  color: #FAF8F4;
  padding: 0.35rem 1rem;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.service-duration svg {
  opacity: 0.7;
}

/* Content Styles */
.service-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.service-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 300;
  color: #121212;
  margin: 0;
  line-height: 1.2;
}

.service-rating {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.service-rating .stars {
  color: #C7A46C;
  font-size: 14px;
  letter-spacing: 1px;
}

.service-rating .rating-number {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #5A5A5A;
}

.service-description {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #5A5A5A;
  margin: 0;
  flex: 1;
}

/* Features */
.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.service-feature {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(199, 164, 108, 0.08);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #2A2A2A;
}

.service-feature svg {
  stroke: #C7A46C;
  flex-shrink: 0;
}

/* Footer */
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
  gap: 1rem;
  flex-wrap: wrap;
}

.service-price-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.service-original-price {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #8A8A8A;
  text-decoration: line-through;
}

.service-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: #C7A46C;
}

.service-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.btn-book {
  padding: 0.5rem 1.25rem;
  background: #C7A46C;
  color: #FAF8F4;
  border: none;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-book:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(199, 164, 108, 0.3);
}

.btn-details {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #2A2A2A;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-details:hover {
  color: #C7A46C;
}

/* Variant: Horizontal */
.service-card.horizontal {
  flex-direction: row;
}

.service-card.horizontal .service-card-image {
  aspect-ratio: 4/3;
  min-width: 300px;
  max-width: 300px;
}

.service-card.horizontal .service-card-content {
  flex: 1;
}

/* Variant: Compact */
.service-card.compact {
  border-radius: 16px;
}

.service-card.compact .service-card-image {
  aspect-ratio: 16/10;
}

.service-card.compact .service-card-content {
  padding: 1rem;
}

.service-card.compact .service-title {
  font-size: 20px;
}

.service-card.compact .service-price {
  font-size: 22px;
}

.service-card.compact .service-description {
  font-size: 13px;
}

/* Variant: Featured */
.service-card.featured {
  border: 2px solid #C7A46C;
  box-shadow: 0 20px 40px -15px rgba(199, 164, 108, 0.15);
}

.service-card.featured .service-badge {
  background: #C7A46C;
  color: #FAF8F4;
}

.service-card.featured .service-title {
  color: #121212;
}

/* Responsive */
@media (max-width: 1024px) {
  .service-card.horizontal {
    flex-direction: column;
  }

  .service-card.horizontal .service-card-image {
    min-width: 100%;
    max-width: 100%;
    aspect-ratio: 16/10;
  }
}

@media (max-width: 768px) {
  .service-title {
    font-size: 20px;
  }

  .service-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .service-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-book,
  .btn-details {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }

  .service-price-wrapper {
    justify-content: center;
  }
}
</style>