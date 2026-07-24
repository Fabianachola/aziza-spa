<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
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
/* Import Google Fonts - MUST BE FIRST */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Inter:wght@300;400;500;600;700&display=swap');

/* Reset & Base */
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

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

::selection {
  background: #C7A46C;
  color: #FAF8F4;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #F3EFE8;
}

::-webkit-scrollbar-thumb {
  background: #C7A46C;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B8925A;
}

#app {
  min-height: 100vh;
}

main {
  padding-top: 0px;
}
</style>
