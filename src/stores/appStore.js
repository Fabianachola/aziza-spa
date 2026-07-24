import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isMenuOpen = ref(false)
  const isDarkMode = ref(false)
  const currentPage = ref('home')
  const isLoading = ref(false)
  const notification = ref(null)
  const theme = ref('light')
  const language = ref('en')
  const scrollPosition = ref(0)
  const isScrolled = ref(false)

  // Getters / Computed
  const isMobile = computed(() => window.innerWidth < 768)
  const isTablet = computed(() => window.innerWidth >= 768 && window.innerWidth < 1024)
  const isDesktop = computed(() => window.innerWidth >= 1024)
  const currentTheme = computed(() => theme.value)
  const appTitle = computed(() => {
    return 'Aziza Spa - Luxury Wellness Experience'
  })

  // Actions
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
    // Prevent body scroll when menu is open
    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  function closeMenu() {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }

  function setCurrentPage(page) {
    currentPage.value = page
  }

  function setLoading(status) {
    isLoading.value = status
  }

  function showNotification(message, type = 'info', duration = 3000) {
    notification.value = { message, type, duration }
    setTimeout(() => {
      notification.value = null
    }, duration)
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    // Apply theme to document
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('theme', theme.value)
  }

  function setTheme(newTheme) {
    theme.value = newTheme
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newTheme)
  }

  function setLanguage(newLanguage) {
    language.value = newLanguage
    localStorage.setItem('language', newLanguage)
  }

  function updateScrollPosition() {
    scrollPosition.value = window.scrollY
    isScrolled.value = window.scrollY > 50
  }

  // Initialize theme from localStorage
  function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
      if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  // Initialize language from localStorage
  function initLanguage() {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      language.value = savedLanguage
    }
  }

  // Initialize app
  function initApp() {
    initTheme()
    initLanguage()
    
    // Add scroll listener
    window.addEventListener('scroll', updateScrollPosition)
    
    // Handle window resize
    window.addEventListener('resize', () => {
      // You can add resize logic here
    })
  }

  // Clean up
  function cleanup() {
    window.removeEventListener('scroll', updateScrollPosition)
  }

  return {
    // State
    isMenuOpen,
    isDarkMode,
    currentPage,
    isLoading,
    notification,
    theme,
    language,
    scrollPosition,
    isScrolled,

    // Getters
    isMobile,
    isTablet,
    isDesktop,
    currentTheme,
    appTitle,

    // Actions
    toggleMenu,
    closeMenu,
    setCurrentPage,
    setLoading,
    showNotification,
    toggleTheme,
    setTheme,
    setLanguage,
    updateScrollPosition,
    initTheme,
    initLanguage,
    initApp,
    cleanup
  }
})
