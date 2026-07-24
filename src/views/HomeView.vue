<template>
  <div class="home-page">
    <HeroSection />
    <StatisticsSection />
    <ExperiencesSection />
    <TimelineSection />
    <WhyChooseSection />
    <PopularTreatmentsSection />
    <PackagesPreviewSection />
    <GalleryPreviewSection />
    <Testimonials />
    <InstagramFeedSection />
    <FAQSection />
    <LuxuryCTASection />
    <FloatingCallButton />
    <WhatsAppButton />
    <ScrollToTop />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue';
import StatisticsSection from '@/components/sections/StatisticsSection.vue';
import ExperiencesSection from '@/components/sections/ExperiencesSection.vue';
import TimelineSection from '@/components/sections/TimelineSection.vue';
import WhyChooseSection from '@/components/sections/WhyChooseSection.vue';
import PopularTreatmentsSection from '@/components/sections/PopularTreatmentsSection.vue';
import PackagesPreviewSection from '@/components/sections/PackagesPreviewSection.vue';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection.vue';
import Testimonials from '@/components/sections/Testimonials.vue';
import InstagramFeedSection from '@/components/sections/InstagramFeedSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';
import LuxuryCTASection from '@/components/sections/LuxuryCTASection.vue';
import FloatingCallButton from '@/components/common/FloatingCallButton.vue';
import WhatsAppButton from '@/components/common/WhatsAppButton.vue';
import ScrollToTop from '@/components/common/ScrollToTop.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    StatisticsSection,
    ExperiencesSection,
    TimelineSection,
    WhyChooseSection,
    PopularTreatmentsSection,
    PackagesPreviewSection,
    GalleryPreviewSection,
    Testimonials,
    InstagramFeedSection,
    FAQSection,
    LuxuryCTASection,
    FloatingCallButton,
    WhatsAppButton,
    ScrollToTop
  }
};
</script>

<style scoped>
.home-page {
  background: #fafafa;
  min-height: 100vh;
}

/* Target Gallery Preview Section specifically */
.home-page .gallery-preview-section {
  background: #fafafa !important;
}

/* Alternative: Target by class if section has specific class */
.home-page section.gallery-preview {
  background: #fafafa !important;
}

/* Or target by section position (if Gallery is 7th section) */
.home-page > section:nth-child(7) {
  background: #fafafa !important;
}

.home-page > section {
  padding-top: clamp(40px, 6vw, 80px);
  padding-bottom: clamp(40px, 6vw, 80px);
}

.home-page > section:first-child {
  padding-top: 0;
  padding-bottom: 0;
}

.home-page > section:last-child {
  padding-bottom: 0;
}

/* IMPROVED: Better mobile padding */
@media (max-width: 1024px) {
  .home-page > section {
    padding-top: clamp(35px, 5vw, 60px);
    padding-bottom: clamp(35px, 5vw, 60px);
  }
}

@media (max-width: 768px) {
  .home-page > section {
    padding-top: clamp(30px, 4vw, 50px);
    padding-bottom: clamp(30px, 4vw, 50px);
  }
}

@media (max-width: 480px) {
  .home-page > section {
    padding-top: clamp(25px, 3vw, 40px);
    padding-bottom: clamp(25px, 3vw, 40px);
  }
}

/* NEW: Optimize for large screens (1400px+) */
@media (min-width: 1400px) {
  .home-page > section {
    padding-top: clamp(60px, 7vw, 100px);
    padding-bottom: clamp(60px, 7vw, 100px);
  }
}

/* NEW: Optimize for extra large screens (1920px+) */
@media (min-width: 1920px) {
  .home-page > section {
    padding-top: clamp(80px, 8vw, 120px);
    padding-bottom: clamp(80px, 8vw, 120px);
  }
}

/* NEW: Prevent horizontal scroll on all devices */
.home-page {
  overflow-x: hidden;
  width: 100%;
}

/* NEW: Ensure all sections respect container widths */
.home-page > section {
  width: 100%;
  max-width: 100%;
}

/* NEW: Subtle visual separation between sections (optional - remove if unwanted) */
.home-page > section:not(:first-child) {
  position: relative;
}

/* Optional: Gentle section divider - WON'T affect content display */
.home-page > section:not(:first-child)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(60%, 200px);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201, 169, 110, 0.15), transparent);
}

.home-page > section:first-child::before,
.home-page > section:last-child::before {
  display: none;
}

/* For sections that use .container inside them */
.home-page .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(0.75rem, 3vw, 2rem);
  width: 100%;
}

/* Responsive container padding */
@media (max-width: 768px) {
  .home-page .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .home-page .container {
    padding: 0 0.75rem;
  }
}

@media (min-width: 1400px) {
  .home-page .container {
    padding: 0 3rem;
  }
}

/* NEW: Print styles - won't affect display */
@media print {
  .home-page {
    background: #fafafa;
  }
  
  .home-page > section {
    padding: 2rem 0 !important;
    break-inside: avoid;
  }
  
  .home-page > section:not(:first-child)::before {
    display: none;
  }
}

/* NEW: Dark mode support - optional */
@media (prefers-color-scheme: dark) {
  .home-page {
    background: #0a1628;
  }
}

/* NEW: Accessibility - reduce motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>