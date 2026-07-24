<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <router-view />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #FAF8F4;
  color: #2A2A2A;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}

main {
  padding-top: 80px; /* Height of fixed header */
}

/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Inter:wght@300;400;500;600&display=swap');
</style>