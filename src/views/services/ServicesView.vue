<template>
  <div class="services-page">
    <!-- Luxury Hero Section -->
    <section class="services-hero">
      <div class="hero-image">
        <img 
          src="/images/services/services-hero.jpg" 
          alt="Luxury Wellness Experience"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Restore Your Body.<br><span class="highlight">Calm Your Mind.</span></h1>
          <p class="hero-subtitle">
            Escape the pressure of everyday life and indulge in thoughtfully curated spa rituals 
            designed to restore balance, renew your skin, and leave you feeling completely refreshed.
          </p>
          <div class="hero-trust">
            <div class="trust-item">
              <span class="stars">★★★★★</span>
              <span class="trust-label">Rated by Hundreds of Happy Guests</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-icon"></span>
              <span class="trust-label">Open Daily</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-icon"></span>
              <span class="trust-label">Professional Therapists</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <span class="trust-icon"></span>
              <span class="trust-label">Premium Natural Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Aziza -->
    <section class="why-choose">
      <div class="container">
        <div class="why-choose-grid">
          <div v-for="item in whyChooseItems" :key="item.title" class="why-choose-item">
            <div class="why-choose-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <nav class="category-nav">
      <div class="container">
        <div class="category-list">
          <a 
            v-for="category in categories" 
            :key="category.id"
            :href="`#${category.id}`"
            class="category-link"
            :class="{ 'active': activeCategory === category.id }"
            @click.prevent="scrollToCategory(category.id)"
          >
            {{ category.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Massage Section -->
    <section id="massage" class="service-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Massage Therapies</h2>
          <p class="section-description">
            Every massage is carefully designed to your body's needs, whether you're seeking deep muscle recovery, 
            complete relaxation, or relief from everyday stress.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in massageServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Body Treatments Section -->
    <section id="body" class="service-section alternate">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Body Treatments</h2>
          <p class="section-description">
            Indulge in luxurious body rituals that exfoliate, hydrate, and renew your skin while providing 
            complete relaxation from head to toe.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in bodyServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facials Section -->
    <section id="facials" class="service-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Facial Treatments</h2>
          <p class="section-description">
            Reveal naturally radiant skin with personalised facial treatments using premium skincare products 
            that nourish, hydrate, and restore your complexion.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in facialServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Waxing Section -->
    <section id="waxing" class="service-section alternate">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Waxing Services</h2>
          <p class="section-description">
            Professional waxing services designed to provide smooth, long-lasting results with minimal discomfort.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in waxingServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nail Care Section (New) -->
    <section id="nails" class="service-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nail Care</h2>
          <p class="section-description">
            Professional nail care services designed to give you perfectly groomed hands and feet with a luxurious finish.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in nailServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Moroccan Bath Section -->
    <section id="moroccan" class="service-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Moroccan Bath</h2>
          <p class="section-description">
            A traditional Moroccan bathing ritual that combines deep cleansing, exfoliation, and relaxation 
            for the ultimate spa experience.
          </p>
        </div>
        <div class="service-grid">
          <div v-for="(service, index) in moroccanServices" :key="service.name" class="service-card" :class="{ 'reverse': index % 2 !== 0 }">
            <div class="service-image">
              <img :src="service.image" :alt="service.name" loading="lazy" />
              <div class="service-badge" v-if="service.badge">
                <span>{{ service.badge }}</span>
              </div>
            </div>
            <div class="service-content">
              <div class="service-meta-top">
                <span class="duration">🕒 {{ service.duration }}</span>
                <span class="price">{{ service.price }}</span>
              </div>
              <h3>{{ service.name }}</h3>
              <p class="service-description">{{ service.longDescription }}</p>
              
              <div class="service-features">
                <div class="feature-group">
                  <h4>Perfect For</h4>
                  <ul>
                    <li v-for="item in service.perfectFor" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
                <div class="feature-group">
                  <h4>What You'll Experience</h4>
                  <ul>
                    <li v-for="item in service.experience" :key="item">✓ {{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="service-includes">
                <span v-for="include in service.includes" :key="include" class="include-tag">
                  ✓ {{ include }}
                </span>
              </div>

              <div class="service-journey">
                <h4>Your Experience</h4>
                <div class="journey-steps">
                  <span v-for="(step, idx) in service.journey" :key="idx" class="journey-step">
                    {{ step }}
                    <span v-if="idx < service.journey.length - 1" class="journey-arrow">↓</span>
                  </span>
                </div>
              </div>

              <BookingButtons :treatment="service.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="comparison-section">
      <div class="container">
        <h2 class="section-title">Compare Our Treatments</h2>
        <div class="table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Treatment</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Best For</th>
                <th>Book</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in allServices" :key="service.name">
                <td><strong>{{ service.name }}</strong></td>
                <td>{{ service.duration }}</td>
                <td>{{ service.price }}</td>
                <td>{{ service.perfectFor ? service.perfectFor[0] : 'All clients' }}</td>
                <td>
                  <router-link to="/book-appointment" class="btn-small">Book</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Book CTA -->
    <section class="book-cta">
      <div class="container">
        <div class="cta-wrapper">
          <h2>Your Moment of Relaxation Awaits</h2>
          <p>Take time for yourself with treatments designed to restore balance, renew your skin, and leave you feeling completely refreshed.</p>
          <div class="cta-buttons">
            <router-link to="/book-appointment" class="btn-primary">Reserve Service</router-link>
            <a href="https://wa.me/254796471899" target="_blank" class="btn-whatsapp">WhatsApp to Book</a>
            <a href="tel:+254796471899" class="btn-call">Call</a>
          </div>
          <p class="cta-note">Need help choosing a treatment? Our spa concierge is happy to recommend the perfect experience.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookingButtons from '@/components/BookingButtons.vue';

export default {
  name: 'ServicesView',
  components: {
    BookingButtons
  },
  data() {
    return {
      activeCategory: 'massage',
      isSticky: false,
      categories: [
        { id: 'massage', name: 'Massage' },
        { id: 'body', name: 'Body' },
        { id: 'facials', name: 'Facials' },
        { id: 'waxing', name: 'Waxing' },
        { id: 'nails', name: 'Nail Care' },
        { id: 'moroccan', name: 'Moroccan Bath' }
      ],
      whyChooseItems: [
        { title: 'Luxury Environment' },
        { title: 'Certified Therapists' },
        { title: 'Premium Organic Products' },
        { title: 'Private Treatment Rooms' },
        { title: 'Personalised Care' },
        { title: 'Complimentary Refreshments' }
      ],
      massageServices: [
        {
          name: 'Swedish Massage',
          duration: '60 min',
          price: 'Ksh 3,000',
          badge: 'Most Popular',
          longDescription: 'Gentle flowing techniques designed to melt away stress and restore complete body relaxation.',
          perfectFor: ['Office workers', 'First-time spa visitors', 'Stress relief', 'Better sleep'],
          experience: ['Full body relaxation', 'Improved blood circulation', 'Reduced muscle tension', 'Mental calmness', 'Increased flexibility'],
          includes: ['Essential oils', 'Warm towels', 'Herbal tea afterwards'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/swedish-massage.jpg'
        },
        {
          name: 'Deep Tissue Massage',
          duration: '60 min',
          price: 'Ksh 4,000',
          badge: 'Best Seller',
          longDescription: 'Intense therapeutic techniques targeting deep muscle layers to release chronic tension and restore mobility.',
          perfectFor: ['Athletes', 'Chronic tension', 'Muscle recovery', 'Pain management'],
          experience: ['Deep muscle release', 'Improved mobility', 'Pain relief', 'Stress reduction'],
          includes: ['Therapeutic oils', 'Hot towels', 'Hydration advice'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/deep-tissue.jpg'
        },
        {
          name: 'Thai Massage',
          duration: '90 min',
          price: 'Ksh 4,500',
          badge: 'Signature',
          longDescription: 'An ancient healing practice combining acupressure, assisted stretching, and energy work to restore balance.',
          perfectFor: ['Active individuals', 'Flexibility', 'Energy flow', 'Muscle release'],
          experience: ['Increased flexibility', 'Energy flow', 'Muscle release', 'Stress relief'],
          includes: ['Traditional techniques', 'Stretching', 'Herbal compress'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/thai-massage.jpg'
        },
        {
          name: 'Hot Stone Massage',
          duration: '60 min',
          price: 'Ksh 5,000',
          badge: 'Luxury',
          longDescription: 'Warm basalt stones combined with massage techniques for deep relaxation and muscle relief.',
          perfectFor: ['Muscle tension', 'Deep relaxation', 'Stress relief', 'Warmth therapy'],
          experience: ['Deep relaxation', 'Muscle relief', 'Warmth therapy', 'Stress reduction'],
          includes: ['Heated stones', 'Aromatherapy oils', 'Relaxation music'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/hot-stone.jpg'
        },
        {
          name: 'Aromatherapy Massage',
          duration: '60 min',
          price: 'Ksh 5,000',
          badge: 'Wellness',
          longDescription: 'Customized massage using essential oils to enhance mood, reduce stress, and promote overall wellness.',
          perfectFor: ['Stress relief', 'Emotional wellness', 'Relaxation', 'Mood enhancement'],
          experience: ['Stress relief', 'Mood enhancement', 'Deep relaxation', 'Emotional balance'],
          includes: ['Custom essential oils', 'Aromatherapy', 'Herbal tea'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/aromatherapy.jpg'
        }
      ],
      bodyServices: [
        {
          name: 'Moroccan Scrub',
          duration: '90 min',
          price: 'Ksh 5,500',
          badge: 'Signature',
          longDescription: 'A traditional Moroccan exfoliating ritual using black soap and kessa glove to reveal radiant, renewed skin.',
          perfectFor: ['Dull skin', 'Rejuvenation', 'Exfoliation', 'Detoxification'],
          experience: ['Deep exfoliation', 'Skin renewal', 'Detoxification', 'Radiant glow'],
          includes: ['Black soap', 'Kessa glove', 'Body mask'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/moroccan-scrub.jpg'
        },
        {
          name: 'Brazilian Bath',
          duration: '75 min',
          price: 'Ksh 4,000',
          badge: 'Hydrating',
          longDescription: 'A tropical botanical bath experience that hydrates, nourishes, and relaxes your entire body.',
          perfectFor: ['Dry skin', 'Relaxation', 'Hydration', 'Skin nourishment'],
          experience: ['Hydration', 'Relaxation', 'Skin nourishment', 'Stress relief'],
          includes: ['Botanical ingredients', 'Aromatherapy', 'Herbal tea'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/brazilian-bath.jpg'
        },
        {
          name: 'Body Scrub',
          duration: '60 min',
          price: 'Ksh 3,000',
          badge: 'Popular',
          longDescription: 'An invigorating full-body exfoliation that removes dead skin cells and promotes smooth, radiant skin.',
          perfectFor: ['Rough skin', 'Detoxification', 'Smooth skin', 'Circulation'],
          experience: ['Exfoliation', 'Smooth skin', 'Circulation', 'Detoxification'],
          includes: ['Natural scrub', 'Body mask', 'Hydration'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/body-scrub.jpg'
        }
      ],
      facialServices: [
        {
          name: 'Signature Facial',
          duration: '120 min',
          price: 'Ksh 4,500',
          badge: 'Most Popular',
          longDescription: 'A comprehensive facial treatment that deep cleanses, rejuvenates, and restores your skin\'s natural glow.',
          perfectFor: ['All skin types', 'Deep cleansing', 'Rejuvenation', 'Skin glow'],
          experience: ['Deep cleansing', 'Skin rejuvenation', 'Natural glow', 'Relaxation'],
          includes: ['Organic products', 'Face mask', 'Serum application'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/signature-facial.jpg'
        },
        {
          name: 'Custom Facial',
          duration: '90 min',
          price: 'Ksh 4,000',
          badge: 'Personalised',
          longDescription: 'A customized facial treatment designed to address your specific skin concerns and goals.',
          perfectFor: ['Specific skin concerns', 'Personalized care', 'Targeted treatment'],
          experience: ['Personalized care', 'Targeted treatment', 'Skin improvement'],
          includes: ['Custom products', 'Skin analysis', 'Personalized advice'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/custom-facial.jpg'
        },
        {
          name: 'Deep Cleansing Facial',
          duration: '90 min',
          price: 'Ksh 3,500',
          badge: 'Clarifying',
          longDescription: 'An intensive deep-cleansing facial that removes impurities, unclogs pores, and prevents breakouts.',
          perfectFor: ['Oily/combination skin', 'Acne prevention', 'Pore cleansing', 'Skin clarity'],
          experience: ['Pore cleansing', 'Acne prevention', 'Skin clarity', 'Refreshment'],
          includes: ['Deep cleansing', 'Extractions', 'Mattifying mask'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/deep-cleansing-facial.jpg'
        }
      ],
      waxingServices: [
        {
          name: 'Full Body Waxing',
          duration: '180 min',
          price: 'Ksh 8,000',
          badge: 'Complete',
          longDescription: 'A comprehensive full-body waxing service for smooth, hair-free skin from head to toe.',
          perfectFor: ['Hair removal', 'Smooth skin', 'Confidence', 'Long-lasting results'],
          experience: ['Smooth skin', 'Hair removal', 'Confidence', 'Long-lasting results'],
          includes: ['Full body wax', 'Soothing lotion', 'Aftercare advice'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/full-body-waxing.jpg'
        },
        {
          name: 'Bikini Waxing',
          duration: '60 min',
          price: 'Ksh 3,000',
          badge: 'Essential',
          longDescription: 'Professional bikini waxing for smooth, confident skin, perfect for summer and beach season.',
          perfectFor: ['Summer', 'Beach ready', 'Confidence', 'Smooth skin'],
          experience: ['Smooth skin', 'Confidence', 'Hygiene', 'Comfort'],
          includes: ['Gentle wax', 'Soothing lotion', 'Aftercare advice'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/bikini-waxing.jpg'
        },
        {
          name: 'Chest Waxing',
          duration: '60 min',
          price: 'Ksh 2,500',
          badge: 'Grooming',
          longDescription: 'Professional chest waxing for men, providing smooth, clean results with minimal discomfort.',
          perfectFor: ['Men', 'Athletes', 'Smooth chest', 'Confidence'],
          experience: ['Smooth chest', 'Confidence', 'Hygiene', 'Comfort'],
          includes: ['Gentle wax', 'Soothing lotion', 'Aftercare advice'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/chest-waxing.jpg'
        }
      ],
      nailServices: [
        {
          name: 'Pedicure + Manicure',
          duration: '90 min',
          price: 'Ksh 3,000',
          badge: 'Essential',
          longDescription: 'A complete hand and foot care treatment that includes nail shaping, cuticle care, exfoliation, massage, and a beautiful polish finish.',
          perfectFor: ['Complete hand and foot care', 'Relaxation', 'Beautiful nails', 'Self-care'],
          experience: ['Professional nail care', 'Relaxing massage', 'Beautiful finish', 'Hydrated skin'],
          includes: ['Nail shaping', 'Cuticle care', 'Exfoliation', 'Moisturizing massage', 'Polish application'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/pedicure-manicure.jpg'
        }
      ],
      moroccanServices: [
        {
          name: 'Moroccan Bath',
          duration: '90 min',
          price: 'Ksh 10,000',
          badge: 'Luxury',
          longDescription: 'A traditional Moroccan bathing ritual that combines deep cleansing, exfoliation, and relaxation for the ultimate spa experience.',
          perfectFor: ['Deep cleanse', 'Luxury experience', 'Detoxification', 'Relaxation'],
          experience: ['Deep cleansing', 'Exfoliation', 'Detoxification', 'Ultimate relaxation'],
          includes: ['Black soap', 'Kessa glove', 'Rhassoul clay', 'Herbal tea'],
          journey: ['Consultation', 'Treatment', 'Relaxation', 'Refreshments', 'Aftercare Advice'],
          image: '/images/services/moroccan-bath.jpg'
        }
      ]
    }
  },
  computed: {
    allServices() {
      return [
        ...this.massageServices,
        ...this.bodyServices,
        ...this.facialServices,
        ...this.waxingServices,
        ...this.nailServices,
        ...this.moroccanServices
      ]
    }
  },
  methods: {
    scrollToCategory(categoryId) {
      this.activeCategory = categoryId
      const element = document.getElementById(categoryId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    },
    handleScroll() {
      this.isSticky = window.scrollY > 300
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.services-page {
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.services-hero {
  position: relative;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.8) 0%, rgba(10, 22, 40, 0.3) 100%);
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fafafa;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
}

.hero-title .highlight {
  color: #C9A96E;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  opacity: 0.9;
  line-height: 1.7;
}

.hero-trust {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 1rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #C9A96E;
  font-size: 16px;
  letter-spacing: 2px;
}

.trust-label {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  color: rgba(250, 248, 244, 0.8);
}

.trust-icon {
  font-size: 18px;
}

.trust-divider {
  width: 1px;
  height: 30px;
  background: rgba(250, 248, 244, 0.15);
}

/* Why Choose */
.why-choose {
  padding: 60px 0;
  background: #0F172A;
}

.why-choose-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.why-choose-item {
  text-align: center;
  color: #fafafa;
}

.why-choose-icon {
  font-size: 32px;
  margin-bottom: 0.5rem;
}

.why-choose-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
  color: #C9A96E;
}

.why-choose-item p {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  opacity: 0.7;
  margin: 0;
}

/* Category Navigation */
.category-nav {
  background: #fafafa;
  border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  padding: 1rem 0;
  transition: all 0.3s ease;
  z-index: 100;
}

.category-nav.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.08);
}

.category-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.category-link {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #0a1628;
  text-decoration: none;
  opacity: 0.6;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.category-link:hover,
.category-link.active {
  opacity: 1;
  border-bottom-color: #C9A96E;
  color: #C9A96E;
}

/* Service Sections */
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

.section-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.service-section {
  padding: 80px 0;
  background: #fafafa;
}

.service-section.alternate {
  background: #fafafa;
}

.service-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.service-card {
  display: flex;
  gap: 3rem;
  background: #fafafa;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(10, 22, 40, 0.06);
  transition: all 0.4s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(10, 22, 40, 0.1);
}

.service-card.reverse {
  flex-direction: row-reverse;
}

.service-image {
  flex: 1;
  position: relative;
  min-height: 400px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.03);
}

.service-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #C9A96E;
  color: #0F172A;
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.service-content {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.service-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.duration {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #0a1628;
  opacity: 0.6;
}

.price {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #C9A96E;
}

.service-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.8rem 0;
}

.service-description {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #0a1628;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
  opacity: 0.8;
}

.service-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.feature-group h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #0a1628;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
  opacity: 0.5;
}

.feature-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-group ul li {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #0a1628;
  padding: 0.2rem 0;
  opacity: 0.8;
}

.service-includes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.include-tag {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #0a1628;
  background: rgba(201, 169, 110, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  opacity: 0.8;
}

.service-journey {
  margin-bottom: 1.5rem;
}

.service-journey h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #0a1628;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.8rem 0;
  opacity: 0.5;
}

.journey-steps {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
}

.journey-step {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #0a1628;
  background: rgba(10, 22, 40, 0.04);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  opacity: 0.7;
}

.journey-arrow {
  color: #C9A96E;
  font-size: 12px;
  opacity: 0.5;
}

/* Comparison Table */
.comparison-section {
  padding: 80px 0;
  background: #0F172A;
}

.comparison-section .section-title {
  color: #fafafa;
  text-align: center;
}

.table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(250, 248, 244, 0.05);
  border-radius: 16px;
  overflow: hidden;
}

.comparison-table th {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #C9A96E;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1rem 1.5rem;
  background: rgba(201, 169, 110, 0.1);
  text-align: left;
}

.comparison-table td {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: rgba(250, 248, 244, 0.8);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(250, 248, 244, 0.05);
}

.comparison-table tr:hover td {
  background: rgba(250, 248, 244, 0.03);
}

.comparison-table td strong {
  color: #FAF8F4;
}

.btn-small {
  display: inline-block;
  padding: 0.3rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  background: #25D366;
  color: #ffffff;
  transition: all 0.3s ease;
}

.btn-small:hover {
  background: #128C7E;
}

/* Book CTA */
.book-cta {
  padding: 80px 0;
  background: #fafafa;
}

.cta-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem;
  background: #0F172A;
  border-radius: 24px;
  border: 1px solid rgba(201, 169, 110, 0.15);
  box-shadow: 0 20px 60px rgba(10, 22, 40, 0.15);
}

.cta-wrapper h2 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 700;
  color: #FAF8F4;
  margin: 0 0 1rem 0;
}

.cta-wrapper p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.7);
  margin: 0 0 2rem 0;
  line-height: 1.8;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-note {
  font-size: 14px !important;
  margin-top: 1.5rem !important;
  opacity: 0.5 !important;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: #C9A96E;
  color: #0F172A;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.3);
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.4);
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: #25D366;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.btn-call {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background: transparent;
  color: #FAF8F4;
  border: 1px solid rgba(250, 248, 244, 0.15);
  transition: all 0.3s ease;
}

.btn-call:hover {
  background: rgba(250, 248, 244, 0.05);
  transform: translateY(-2px);
}

/* ============================================
   RESPONSIVE IMPROVEMENTS - MOBILE & LARGE DEVICES
   ============================================ */

/* LARGE DEVICES (1200px - 1400px) */
@media (min-width: 1200px) and (max-width: 1400px) {
  .container {
    padding: 0 3rem;
  }
  
  .why-choose-grid {
    gap: 2rem;
  }
  
  .service-card {
    gap: 2.5rem;
  }
  
  .service-content {
    padding: 2.5rem;
  }
}

/* EXTRA LARGE DEVICES (1400px+) */
@media (min-width: 1400px) {
  .container {
    padding: 0 4rem;
  }
  
  .hero-title {
    font-size: 72px;
  }
  
  .hero-subtitle {
    font-size: 20px;
    max-width: 800px;
  }
  
  .service-card {
    gap: 4rem;
  }
  
  .service-content {
    padding: 3.5rem;
  }
  
  .service-image {
    min-height: 500px;
  }
  
  .section-title {
    font-size: 54px;
  }
  
  .why-choose-grid {
    max-width: 1300px;
    gap: 2.5rem;
  }
  
  .cta-wrapper {
    max-width: 900px;
    padding: 5rem;
  }
  
  .cta-wrapper h2 {
    font-size: 48px;
  }
}

/* ULTRA LARGE DEVICES (1920px+) */
@media (min-width: 1920px) {
  .container {
    padding: 0 6rem;
    max-width: 1600px;
  }
  
  .hero-title {
    font-size: 84px;
  }
  
  .hero-subtitle {
    font-size: 22px;
    max-width: 900px;
  }
  
  .service-card {
    gap: 5rem;
    border-radius: 30px;
  }
  
  .service-image {
    min-height: 600px;
  }
  
  .service-content {
    padding: 4rem;
  }
  
  .service-content h3 {
    font-size: 38px;
  }
  
  .section-title {
    font-size: 60px;
  }
}

/* TABLET (768px - 1024px) */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .why-choose-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .service-card {
    flex-direction: column !important;
    gap: 0;
  }
  
  .service-image {
    min-height: 300px;
    max-height: 400px;
  }
  
  .service-content {
    padding: 2rem;
  }
  
  .service-content h3 {
    font-size: 28px;
  }
  
  .service-features {
    grid-template-columns: 1fr 1fr;
  }
  
  .category-list {
    gap: 1.5rem;
  }
  
  .category-link {
    font-size: 13px;
  }
  
  .section-title {
    font-size: 38px;
  }
  
  .section-description {
    font-size: 15px;
  }
  
  .cta-wrapper {
    padding: 3rem;
  }
  
  .cta-wrapper h2 {
    font-size: 36px;
  }
}

/* MOBILE LARGE (481px - 768px) */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  /* Hero */
  .services-hero {
    height: 60vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 15px;
    padding: 0 0.5rem;
  }
  
  .hero-trust {
    flex-direction: column;
    gap: 0.6rem;
  }
  
  .trust-divider {
    display: none;
  }
  
  .trust-label {
    font-size: 12px;
  }
  
  /* Why Choose */
  .why-choose {
    padding: 40px 0;
  }
  
  .why-choose-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .why-choose-icon {
    font-size: 28px;
  }
  
  .why-choose-item h3 {
    font-size: 14px;
  }
  
  .why-choose-item p {
    font-size: 11px;
  }
  
  /* Category Nav */
  .category-nav {
    padding: 0.8rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .category-list {
    gap: 0.8rem;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 0.3rem 0;
  }
  
  .category-link {
    font-size: 12px;
    white-space: nowrap;
    padding: 0.4rem 0.8rem;
  }
  
  /* Service Sections */
  .service-section {
    padding: 50px 0;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 30px;
  }
  
  .section-description {
    font-size: 14px;
  }
  
  .service-grid {
    gap: 2.5rem;
  }
  
  .service-card {
    border-radius: 16px;
  }
  
  .service-image {
    min-height: 220px;
    max-height: 280px;
  }
  
  .service-badge {
    top: 1rem;
    left: 1rem;
    font-size: 10px;
    padding: 0.2rem 1rem;
  }
  
  .service-content {
    padding: 1.5rem;
  }
  
  .service-meta-top {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .duration {
    font-size: 13px;
  }
  
  .price {
    font-size: 24px;
  }
  
  .service-content h3 {
    font-size: 24px;
  }
  
  .service-description {
    font-size: 14px;
  }
  
  .service-features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .feature-group ul li {
    font-size: 13px;
  }
  
  .service-includes {
    gap: 0.4rem;
  }
  
  .include-tag {
    font-size: 11px;
    padding: 0.2rem 0.8rem;
  }
  
  .journey-step {
    font-size: 12px;
    padding: 0.2rem 0.8rem;
  }
  
  /* Comparison Table */
  .comparison-section {
    padding: 50px 0;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 0.6rem 0.8rem;
    font-size: 12px;
  }
  
  .btn-small {
    font-size: 11px;
    padding: 0.2rem 0.8rem;
  }
  
  /* CTA */
  .book-cta {
    padding: 50px 0;
  }
  
  .cta-wrapper {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }
  
  .cta-wrapper h2 {
    font-size: 28px;
  }
  
  .cta-wrapper p {
    font-size: 15px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    font-size: 13px;
  }
  
  .cta-note {
    font-size: 13px !important;
  }
}

/* MOBILE SMALL (480px and below) */
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .services-hero {
    height: 50vh;
    min-height: 350px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 14px;
    line-height: 1.6;
  }
  
  .why-choose-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .why-choose-item {
    padding: 0.5rem;
  }
  
  .why-choose-icon {
    font-size: 24px;
  }
  
  .service-section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 26px;
  }
  
  .section-description {
    font-size: 13px;
  }
  
  .service-image {
    min-height: 180px;
    max-height: 220px;
  }
  
  .service-content {
    padding: 1rem;
  }
  
  .service-content h3 {
    font-size: 20px;
  }
  
  .price {
    font-size: 20px;
  }
  
  .service-description {
    font-size: 13px;
  }
  
  .feature-group h4 {
    font-size: 12px;
  }
  
  .feature-group ul li {
    font-size: 12px;
  }
  
  .service-journey h4 {
    font-size: 12px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 0.4rem 0.6rem;
    font-size: 11px;
  }
  
  .comparison-table td strong {
    font-size: 12px;
  }
  
  .cta-wrapper {
    padding: 1.5rem 1rem;
  }
  
  .cta-wrapper h2 {
    font-size: 24px;
  }
  
  .cta-wrapper p {
    font-size: 14px;
  }
  
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    font-size: 12px;
    padding: 0.7rem 1.2rem;
    min-height: 44px;
  }
  
  .cta-note {
    font-size: 12px !important;
  }
}
</style>