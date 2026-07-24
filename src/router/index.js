import { createRouter, createWebHistory } from 'vue-router';

// Import views with their actual file names
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/services/ServicesView.vue';
import GalleryView from '@/views/gallery/GalleryView.vue';
import AboutView from '@/views/about/AboutView.vue';
import ExperienceView from '@/views/experience/ExperiencePage.vue';
import PackagesView from '@/views/packages/PackagesPage.vue';
import BookingView from '@/views/book-appointment/BookingPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Aziza Spa - Luxury Wellness Experience",
      description: "Experience premium spa treatments in a luxurious setting. Relax, recharge, and renew at Aziza Spa.",
      keywords: "spa, wellness, massage, facial, moroccan bath, luxury spa, relaxation, body treatments",
      canonical: "https://azizaspa.com/"
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: {
      title: "Premium Spa & Beauty Services | Aziza Spa",
      description: "Discover our range of luxury spa treatments including massage, facials, waxing, and body treatments.",
      keywords: "spa services, beauty treatments, massage, facial, waxing, body treatments",
      canonical: "https://azizaspa.com/services"
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
    meta: {
      title: "Spa & Beauty Gallery | Aziza Spa",
      description: "Explore our visual portfolio showcasing our luxury spa facilities and treatments.",
      keywords: "spa gallery, beauty portfolio, salon photos, luxury spa images",
      canonical: "https://azizaspa.com/gallery"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: "About Aziza Spa | Luxury Wellness Experience",
      description: "Learn about Aziza Spa - our story, founder, mission, and values.",
      keywords: "about us, spa story, founder, mission, values",
      canonical: "https://azizaspa.com/about"
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: {
      title: "The Aziza Experience | Luxury Spa Journey",
      description: "Discover the Aziza Spa experience - a journey of relaxation, rejuvenation, and wellness.",
      keywords: "spa experience, wellness journey, relaxation, luxury spa",
      canonical: "https://azizaspa.com/experience"
    }
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackagesView,
    meta: {
      title: "Spa Packages | Aziza Spa",
      description: "Explore our curated spa packages designed for ultimate relaxation and wellness.",
      keywords: "spa packages, wellness packages, massage packages, luxury spa deals",
      canonical: "https://azizaspa.com/packages"
    }
  },
  {
    path: '/book-appointment',
    name: 'book-appointment',
    component: BookingView,
    meta: {
      title: "Book Your Spa Appointment | Aziza Spa",
      description: "Book your luxury spa treatment at Aziza Spa. Schedule your personalized wellness experience today.",
      keywords: "book appointment, spa booking, schedule appointment, luxury spa booking",
      canonical: "https://azizaspa.com/book-appointment"
    }
  },
  {
    meta: {
      title: "Wellness Journal | Aziza Spa",
      description: "Explore our wellness journal featuring articles on relaxation, self-care, and holistic wellness.",
      keywords: "wellness journal, self-care, relaxation, holistic wellness, spa blog",
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Updated navigation guard - no next() callback (deprecated)
router.beforeEach((to, from) => {
  const meta = to.meta;
  document.title = meta.title || "Aziza Spa";
  
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.content = meta.description || "Experience luxury spa treatments in Nairobi.";
  }
  
  const keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta) {
    keywordsMeta.content = meta.keywords || "spa, wellness, massage, luxury spa";
  }
  
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.href = meta.canonical || "https://azizaspa.com/";
  }
  
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta) {
    ogTitleMeta.content = meta.title || "Aziza Spa";
  }
  
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionMeta) {
    ogDescriptionMeta.content = meta.description || "Experience luxury spa treatments in Nairobi.";
  }
  
  const ogUrlMeta = document.querySelector('meta[property="og:url"]');
  if (ogUrlMeta) {
    ogUrlMeta.content = meta.canonical || "https://azizaspa.com/";
  }
  
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitleMeta) {
    twitterTitleMeta.content = meta.title || "Aziza Spa";
  }
  
  const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescriptionMeta) {
    twitterDescriptionMeta.content = meta.description || "Experience luxury spa treatments in Nairobi.";
  }
  
  // Return nothing to proceed
});

export default router;
