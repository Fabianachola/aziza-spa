<template>
  <div class="floating-call-btn">
    <a href="tel:+254700000000" class="call-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.floating-call-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
}

.call-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
}

.call-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
}
</style>
