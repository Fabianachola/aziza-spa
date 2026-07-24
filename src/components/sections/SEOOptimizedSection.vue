<!-- src/views/services/ServicesView.vue -->
<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="hero-image">
        <img 
          src="/images/services/services-hero.jpg" 
          alt="Luxury Spa Treatments at Aziza Spa - Massage, Facials, Body Treatments in Nairobi"
          loading="eager"
          width="1920"
          height="1080"
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

    <!-- Rest of your services content -->
    <!-- ... all your existing service sections ... -->
  </div>
</template>

<script>
// ... your existing script
export default {
  name: 'ServicesView',
  // ... your existing code
  head() {
    return {
      title: 'Luxury Spa Services in Nairobi | Massage, Facials & Body Treatments | Aziza Spa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FAF8F4' },
        // Primary Meta Tags
        { name: 'description', content: 'Discover premium spa services at Aziza Spa in Nairobi. From Swedish massage to Moroccan bath, facials, and body treatments. Book your luxury wellness experience today.' },
        { name: 'keywords', content: 'spa services Nairobi, luxury spa, massage therapy, facial treatments, body scrub, Moroccan bath, Swedish massage, deep tissue massage, Thai massage, hot stone massage, aromatherapy, waxing services, manicure pedicure, wellness spa, Aziza Spa' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Aziza Spa' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://azizaspa.com/services' },
        { property: 'og:title', content: 'Luxury Spa Services in Nairobi | Massage, Facials & Body Treatments | Aziza Spa' },
        { property: 'og:description', content: 'Discover premium spa services at Aziza Spa in Nairobi. From Swedish massage to Moroccan bath, facials, and body treatments. Book your luxury wellness experience today.' },
        { property: 'og:image', content: 'https://azizaspa.com/images/services/services-hero.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Aziza Spa' },
        { property: 'og:locale', content: 'en_KE' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://azizaspa.com/services' },
        { name: 'twitter:title', content: 'Luxury Spa Services in Nairobi | Massage, Facials & Body Treatments | Aziza Spa' },
        { name: 'twitter:description', content: 'Discover premium spa services at Aziza Spa in Nairobi. From Swedish massage to Moroccan bath, facials, and body treatments. Book your luxury wellness experience today.' },
        { name: 'twitter:image', content: 'https://azizaspa.com/images/services/services-hero.jpg' },
        { name: 'twitter:site', content: '@azizispa_' },
        
        // Additional SEO
        { name: 'geo.region', content: 'KE' },
        { name: 'geo.placename', content: 'Nairobi' },
        { name: 'geo.position', content: '-1.286389;36.817223' },
        { name: 'ICBM', content: '-1.286389, 36.817223' },
        
        // Canonical URL
        { rel: 'canonical', href: 'https://azizaspa.com/services' }
      ],
      link: [
        { rel: 'canonical', href: 'https://azizaspa.com/services' },
        { rel: 'alternate', hreflang: 'en', href: 'https://azizaspa.com/services' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Aziza Spa Services",
            "description": "Premium spa services including massage therapy, facial treatments, body treatments, waxing, nail care, and Moroccan bath rituals in Nairobi, Kenya.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aziza Spa",
              "image": "https://azizaspa.com/images/logos/aziza-spa-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Westlands Metropolitan Estate, Chiromo",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "telephone": "+254796471899",
              "email": "info@azizaspa.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Swedish Massage",
                    "description": "Gentle flowing techniques designed to melt away stress and restore complete body relaxation.",
                    "duration": "PT60M",
                    "price": "3000",
                    "priceCurrency": "KES"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Tissue Massage",
                    "description": "Intense therapeutic techniques targeting deep muscle layers to release chronic tension and restore mobility.",
                    "duration": "PT60M",
                    "price": "4000",
                    "priceCurrency": "KES"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Moroccan Bath",
                    "description": "A traditional Moroccan bathing ritual that combines deep cleansing, exfoliation, and relaxation for the ultimate spa experience.",
                    "duration": "PT90M",
                    "price": "10000",
                    "priceCurrency": "KES"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Signature Facial",
                    "description": "A comprehensive facial treatment that deep cleanses, rejuvenates, and restores your skin's natural glow.",
                    "duration": "PT120M",
                    "price": "4500",
                    "priceCurrency": "KES"
                  }
                }
              ]
            },
            "areaServed": {
              "@type": "City",
              "name": "Nairobi"
            }
          }
        }
      ]
    }
  }
}
</script>