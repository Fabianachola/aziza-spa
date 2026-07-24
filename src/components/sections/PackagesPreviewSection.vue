<template>
  <section class="packages-preview-section">
    <div class="packages-image">
      <img 
        src="/images/packages/essential-escape.jpg" 
        alt="Essential Escape Package"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PackagesPreviewSection'
}
</script>

<style scoped>
.packages-preview-section {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

.packages-image {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.packages-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .packages-preview-section {
    height: 100vh;
  }
  
  .packages-image {
    height: 100vh;
  }
  
  .packages-image img {
    object-fit: contain;
  }
}

@media (max-width: 480px) {
  .packages-preview-section {
    height: 100vh;
  }
  
  .packages-image {
    height: 100vh;
  }
  
  .packages-image img {
    object-fit: contain;
  }
}
</style>