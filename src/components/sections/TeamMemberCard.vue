<!-- src/components/sections/TeamMemberCard.vue -->
<template>
  <div class="team-member-card" :class="[variant, { 'featured': isFeatured }]">
    <!-- Member Image -->
    <div class="member-image">
      <img 
        :src="member.image" 
        :alt="member.name"
        loading="lazy"
      />
      <div v-if="member.socialMedia" class="member-social">
        <a 
          v-if="member.socialMedia.instagram" 
          :href="member.socialMedia.instagram" 
          target="_blank"
          class="social-link"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="17" cy="7" r="1" fill="currentColor"/>
          </svg>
        </a>
        <a 
          v-if="member.socialMedia.linkedin" 
          :href="member.socialMedia.linkedin" 
          target="_blank"
          class="social-link"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a 
          v-if="member.socialMedia.facebook" 
          :href="member.socialMedia.facebook" 
          target="_blank"
          class="social-link"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
      </div>
      <div v-if="member.experience" class="member-experience">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {{ member.experience }} Years Experience
      </div>
    </div>

    <!-- Member Info -->
    <div class="member-info">
      <h3 class="member-name">{{ member.name }}</h3>
      <p class="member-title">{{ member.title }}</p>
      <p class="member-speciality">{{ member.speciality }}</p>

      <!-- Member Bio -->
      <p v-if="member.bio" class="member-bio">{{ member.bio }}</p>

      <!-- Member Certifications -->
      <div v-if="member.certifications && member.certifications.length" class="member-certifications">
        <div 
          v-for="(cert, index) in member.certifications" 
          :key="index"
          class="certification-badge"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
          {{ cert }}
        </div>
      </div>

      <!-- Member Footer -->
      <div class="member-footer">
        <div class="member-rating" v-if="member.rating">
          <span class="stars">★★★★★</span>
          <span class="rating-number">{{ member.rating }}</span>
        </div>
        <button 
          v-if="showBookButton"
          @click="handleBookWithMember"
          class="btn-book-member"
        >
          Book with {{ member.name.split(' ')[0] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    member: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && value.title && value.image
      }
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'compact', 'featured', 'horizontal'].includes(value)
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
    handleBookWithMember() {
      this.$emit('book-now', this.member)
    }
  }
}
</script>

<style scoped>
.team-member-card {
  background: #FAF8F4;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.team-member-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.15);
  border-color: rgba(199, 164, 108, 0.2);
}

/* Image Styles */
.member-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: #F3EFE8;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-member-card:hover .member-image img {
  transform: scale(1.05);
}

/* Social Media Overlay */
.member-social {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.team-member-card:hover .member-social {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(250, 248, 244, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #121212;
  text-decoration: none;
}

.social-link:hover {
  background: #C7A46C;
  color: #FAF8F4;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px -10px rgba(199, 164, 108, 0.3);
}

.social-link svg {
  stroke: currentColor;
}

/* Experience Badge */
.member-experience {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  color: #FAF8F4;
  padding: 0.35rem 1rem;
  border-radius: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.member-experience svg {
  opacity: 0.7;
}

/* Member Info */
.member-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.member-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 300;
  color: #121212;
  margin: 0;
  line-height: 1.2;
}

.member-title {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #C7A46C;
  margin: 0;
  letter-spacing: 0.02em;
}

.member-speciality {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #5A5A5A;
  margin: 0;
}

.member-bio {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #5A5A5A;
  margin: 0.25rem 0 0 0;
  flex: 1;
}

/* Certifications */
.member-certifications {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.certification-badge {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(199, 164, 108, 0.08);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  color: #2A2A2A;
}

.certification-badge svg {
  stroke: #C7A46C;
  flex-shrink: 0;
}

/* Footer */
.member-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
  gap: 1rem;
  flex-wrap: wrap;
}

.member-rating {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.member-rating .stars {
  color: #C7A46C;
  font-size: 14px;
  letter-spacing: 1px;
}

.member-rating .rating-number {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #5A5A5A;
}

.btn-book-member {
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

.btn-book-member:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(199, 164, 108, 0.3);
}

/* Variant: Compact */
.team-member-card.compact {
  border-radius: 16px;
}

.team-member-card.compact .member-image {
  aspect-ratio: 4/5;
}

.team-member-card.compact .member-info {
  padding: 1rem;
}

.team-member-card.compact .member-name {
  font-size: 20px;
}

.team-member-card.compact .member-bio {
  font-size: 13px;
}

/* Variant: Horizontal */
.team-member-card.horizontal {
  flex-direction: row;
}

.team-member-card.horizontal .member-image {
  aspect-ratio: 4/5;
  min-width: 250px;
  max-width: 250px;
}

.team-member-card.horizontal .member-info {
  flex: 1;
}

/* Variant: Featured */
.team-member-card.featured {
  border: 2px solid #C7A46C;
  box-shadow: 0 20px 40px -15px rgba(199, 164, 108, 0.15);
}

.team-member-card.featured .member-title {
  color: #C7A46C;
}

.team-member-card.featured .btn-book-member {
  background: #C7A46C;
}

/* Responsive */
@media (max-width: 1024px) {
  .team-member-card.horizontal {
    flex-direction: column;
  }

  .team-member-card.horizontal .member-image {
    min-width: 100%;
    max-width: 100%;
    aspect-ratio: 16/10;
  }
}

@media (max-width: 768px) {
  .member-name {
    font-size: 20px;
  }

  .member-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .btn-book-member {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }

  .member-rating {
    justify-content: center;
  }

  .member-social {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>