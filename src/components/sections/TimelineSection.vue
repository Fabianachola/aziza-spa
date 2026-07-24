<template>
  <section class="timeline-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">The Aziza Experience</h2>
        <p class="section-subtitle">Your journey to relaxation begins here</p>
      </div>
      <div class="timeline">
        <div v-for="(step, index) in timelineSteps" :key="index" class="timeline-item" :class="[index % 2 === 0 ? 'left' : 'right']">
          <!-- Road Marker / Icon -->
          <div class="timeline-icon">
            <!-- Arrival - House Icon -->
            <svg v-if="step.icon === 'arrival'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
              <path d="M8 21v-6a1 1 0 011-1h6a1 1 0 011 1v6" />
            </svg>
            
            <!-- Consultation - Studio/Person Icon -->
            <svg v-else-if="step.icon === 'consultation'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
              <path d="M18 8l1 2 3-1" />
              <path d="M6 8l-1 2-3-1" />
            </svg>
            
            <!-- Treatment - Spa/Hands Icon -->
            <svg v-else-if="step.icon === 'treatment'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
              <path d="M9 8l2 2 4-4" />
            </svg>
            
            <!-- Relaxation - Lotus/Meditation Icon -->
            <svg v-else-if="step.icon === 'relaxation'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              <circle cx="12" cy="12" r="4" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            </svg>
            
            <!-- Refreshments - Cup/Tea Icon -->
            <svg v-else-if="step.icon === 'refreshments'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 21h8" />
              <path d="M12 21v-4" />
              <path d="M6 5h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z" />
              <path d="M18 13v2a3 3 0 01-3 3H9a3 3 0 01-3-3v-2" />
              <path d="M8 5V3" />
              <path d="M12 5V3" />
              <path d="M16 5V3" />
              <path d="M18 9h2a2 2 0 012 2v1a2 2 0 01-2 2h-2" />
            </svg>
            
            <!-- Checkout - Checkmark/Completion Icon -->
            <svg v-else-if="step.icon === 'checkout'" class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
              <path d="M16 8l2 2 4-4" />
            </svg>
          </div>
          
          <div class="timeline-content">
            <div class="timeline-step-number">0{{ index + 1 }}</div>
            <h3 class="timeline-title">{{ step.title }}</h3>
            <p class="timeline-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  data() {
    return {
      timelineSteps: [
        { 
          icon: 'arrival', 
          title: 'Arrival', 
          description: 'Welcome to Aziza Spa' 
        },
        { 
          icon: 'consultation', 
          title: 'Consultation', 
          description: 'Personalized treatment selection' 
        },
        { 
          icon: 'treatment', 
          title: 'Treatment', 
          description: 'Luxury spa experience' 
        },
        { 
          icon: 'relaxation', 
          title: 'Relaxation', 
          description: 'Unwind in our relaxation area' 
        },
        { 
          icon: 'refreshments', 
          title: 'Refreshments', 
          description: 'Enjoy premium refreshments' 
        },
        { 
          icon: 'checkout', 
          title: 'Checkout', 
          description: 'Depart feeling renewed' 
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.timeline-section {
  padding: 80px 0;
  background: #fafafa;
  position: relative;
  overflow: hidden;
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

/* Timeline Container - Winding Road Effect */
.timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 30px 0;
}

/* Winding Road Path - Zigzag line */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, 
    #D4AF37 0%, 
    #0a1628 20%, 
    #D4AF37 40%, 
    #0a1628 60%, 
    #D4AF37 80%, 
    #0a1628 100%
  );
  transform: translateX(-50%);
  opacity: 0.3;
  border-radius: 4px;
}

/* Wavy road effect - adding dots along the path */
.timeline::after {
  content: '';
  position: absolute;
  top: 5%;
  left: 50%;
  width: 10px;
  height: 90%;
  background: radial-gradient(circle at center, #D4AF37 2px, transparent 2px);
  background-size: 10px 30px;
  transform: translateX(-50%);
  opacity: 0.15;
}

.timeline-item {
  display: flex;
  margin-bottom: 3.5rem;
  position: relative;
  align-items: flex-start;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Alternating sides - creates the winding effect */
.timeline-item.left {
  flex-direction: row;
  padding-right: 3rem;
}

.timeline-item.right {
  flex-direction: row-reverse;
  padding-left: 3rem;
}

/* Icon Circle - Road Marker */
.timeline-icon {
  width: 72px;
  height: 72px;
  min-width: 72px;
  background: #0a1628;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #D4AF37;
  box-shadow: 0 8px 30px rgba(10, 22, 40, 0.2);
  z-index: 2;
  transition: all 0.4s ease;
  position: relative;
  margin-top: 5px;
}

/* Road marker glow effect */
.timeline-icon::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed rgba(212, 175, 55, 0.15);
  animation: spin 20s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.timeline-item:hover .timeline-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(212, 175, 55, 0.3);
  border-color: #F5D061;
}

.timeline-item:hover .timeline-icon::before {
  border-color: rgba(212, 175, 55, 0.4);
}

/* Icon inside circle */
.step-icon {
  width: 32px;
  height: 32px;
  stroke: #FAF8F4;
  stroke-width: 2;
  fill: none;
  transition: stroke 0.3s ease;
}

.timeline-item:hover .step-icon {
  stroke: #D4AF37;
}

/* Content */
.timeline-content {
  flex: 1;
  padding-top: 8px;
  max-width: 42%;
}

.timeline-item.left .timeline-content {
  text-align: right;
  padding-right: 1.5rem;
}

.timeline-item.right .timeline-content {
  text-align: left;
  padding-left: 1.5rem;
}

.timeline-step-number {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #D4AF37;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.timeline-title {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.3rem 0;
}

.timeline-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #0a1628;
  margin: 0;
  opacity: 0.75;
}

/* Small connecting dots on the road between items */
.timeline-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: #fafafa;
  border: 2px solid #D4AF37;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0;
  transition: all 0.4s ease;
}

.timeline-item:hover::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

/* Tablet */
@media (max-width: 1024px) {
  .timeline-item.left {
    padding-right: 1.5rem;
  }
  .timeline-item.right {
    padding-left: 1.5rem;
  }
  .timeline-content {
    max-width: 45%;
  }
  .timeline-title {
    font-size: 24px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .timeline::before {
    left: 30px;
    transform: none;
  }
  
  .timeline::after {
    left: 30px;
    transform: none;
  }
  
  .timeline-item {
    flex-direction: row !important;
    padding: 0 !important;
    margin-bottom: 2.5rem;
    padding-left: 3.5rem !important;
  }
  
  .timeline-item.left .timeline-content {
    text-align: left;
    padding-right: 0;
  }
  
  .timeline-item.right .timeline-content {
    text-align: left;
    padding-left: 0;
  }
  
  .timeline-icon {
    width: 56px;
    height: 56px;
    min-width: 56px;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .timeline-icon::before {
    inset: -6px;
    border-width: 1.5px;
  }
  
  .step-icon {
    width: 26px;
    height: 26px;
  }
  
  .timeline-content {
    max-width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .timeline-title {
    font-size: 22px;
  }
  
  .timeline-description {
    font-size: 14px;
  }
  
  .timeline-item::after {
    display: none;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .timeline-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  .section-subtitle {
    font-size: 14px;
  }
  
  .timeline-item {
    padding-left: 2.8rem !important;
    margin-bottom: 2rem;
  }
  
  .timeline-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-width: 2px;
  }
  
  .timeline-icon::before {
    inset: -5px;
    border-width: 1.5px;
    animation-duration: 15s;
  }
  
  .step-icon {
    width: 20px;
    height: 20px;
    stroke-width: 1.8;
  }
  
  .timeline-title {
    font-size: 18px;
  }
  
  .timeline-description {
    font-size: 13px;
  }
  
  .timeline-step-number {
    font-size: 10px;
  }
}

/* Large Desktop */
@media (min-width: 1400px) {
  .timeline-title {
    font-size: 30px;
  }
  .timeline-description {
    font-size: 18px;
  }
  .timeline-icon {
    width: 80px;
    height: 80px;
    min-width: 80px;
  }
  .step-icon {
    width: 36px;
    height: 36px;
  }
}
</style>