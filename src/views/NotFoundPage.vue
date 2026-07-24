<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/" class="btn-primary">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FAF8F4;
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 120px;
  color: #C7A46C;
  margin: 0;
  line-height: 1;
}

.not-found h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  color: #121212;
  margin: 1rem 0;
}

.not-found p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #5A5A5A;
  margin-bottom: 2rem;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #C7A46C;
  color: #FAF8F4;
  border-radius: 16px;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
}
</style>
