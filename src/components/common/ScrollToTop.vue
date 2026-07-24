<template>
  <button v-show="showButton" @click="scrollToTop" class="scroll-to-top" aria-label="Scroll to top">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  </button>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'ScrollToTop',
  setup() {
    const showButton = ref(false)

    const handleScroll = () => {
      showButton.value = window.scrollY > 500
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showButton,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: calc(2rem + 70px);
  width: 44px;
  height: 44px;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  color: #FAF8F4;
  border: 1px solid rgba(250, 248, 244, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 999;
  opacity: 0;
  transform: translateY(20px);
}

.scroll-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.scroll-to-top:hover {
  background: #C7A46C;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .scroll-to-top {
    right: calc(1.5rem + 60px);
    width: 40px;
    height: 40px;
    bottom: 1.5rem;
  }
}
</style>
