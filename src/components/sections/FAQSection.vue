<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Everything you need to know about Azizi Spa</p>
      </div>
      <div class="faq-list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item" @click="toggleFAQ(index)">
          <div class="faq-question">
            <span class="faq-title">{{ faq.question }}</span>
            <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </div>
          <div v-show="activeIndex === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  data() {
    return {
      activeIndex: null,
      faqs: [
        { question: 'What types of massage therapies do you offer at Azizi Spa?', answer: 'Azizi Spa offers a variety of massage therapies including Full Body Massage, Swedish Massage, Deep Tissue Massage, Thai/Sport Massage, and Back Fusion Massage.' },
        { question: 'Where is Azizi Spa located and what are your operating hours?', answer: 'We are conveniently located in Westlands Metropolitan estate, Chiromo, Nairobi. Our operating hours are Monday to Sunday, from 09:00 AM to 08:00 PM.' },
        { question: 'How can I book an appointment at Azizi Spa?', answer: 'You can book an appointment by calling us directly at 0796471899. We recommend booking in advance to secure your preferred time.' },
        { question: 'Do you offer other services besides massages?', answer: 'Yes, in addition to our diverse massage offerings, we also provide Pedicure & Manicure, Waxing, Steam Bath, Facials, Skincare Treatments, and Moroccan Bath experiences.' },
        { question: 'What are the prices for your massage services?', answer: 'Our Full Body Massage is KES 3000. Other popular options include Swedish Massage at KES 4000, Deep Tissue Massage at KES 5000, and Bamboo Massage at KES 4500. Prices for other services vary.' },
        { question: 'Do you offer gift vouchers for Azizi Spa services?', answer: 'Yes, we offer luxurious gift vouchers that are perfect for any special occasion. Please inquire with our staff for more details.' }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.faq-section {
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

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: #fafafa;
  border-radius: 16px;
  padding: 1.5rem 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(10, 22, 40, 0.06);
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(10, 22, 40, 0.08);
  border-color: #D4AF37;
}

.faq-item.active {
  border-color: #D4AF37;
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.08);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.faq-title {
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: #0a1628;
  flex: 1;
}

.faq-icon {
  font-size: 24px;
  color: #D4AF37;
  font-weight: 300;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding-top: 1.2rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(10, 22, 40, 0.06);
}

.faq-answer p {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #0a1628;
  line-height: 1.8;
  margin: 0;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  .section-subtitle {
    font-size: 16px;
  }
  
  .faq-item {
    padding: 1.2rem 1.2rem;
  }
  
  .faq-title {
    font-size: 15px;
  }
  
  .faq-answer p {
    font-size: 14px;
  }
  
  .faq-icon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .faq-section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .faq-item {
    padding: 1rem;
  }
  
  .faq-title {
    font-size: 14px;
  }
  
  .faq-answer p {
    font-size: 13px;
  }
}
</style>