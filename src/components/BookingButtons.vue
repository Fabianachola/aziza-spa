<template>
  <div class="booking-buttons">
    <!-- Reserve Service Button -->
    <router-link to="/book-appointment" class="btn-primary">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
      Reserve Service
    </router-link>

    <!-- Book on WhatsApp Button -->
    <a 
      :href="`https://wa.me/254796471899?text=Hello%20Aziza%20Spa,%20I'd%20like%20to%20reserve%20the%20${encodeURIComponent(treatment)}.`" 
      target="_blank" 
      class="btn-whatsapp"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Book Now
    </a>

    <!-- Book Now with Call Icon -->
    <a href="tel:+254796471899" class="btn-call">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      Call to Book
    </a>
  </div>
</template>

<script>
export default {
  name: 'BookingButtons',
  props: {
    treatment: {
      type: String,
      default: 'a treatment'
    }
  }
}
</script>

<style scoped>
.booking-buttons {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-whatsapp,
.btn-call {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  flex: 1;
  justify-content: center;
  min-width: 140px;
}

.btn-primary {
  background: #C9A96E;
  color: #0F172A;
  box-shadow: 0 4px 20px rgba(201, 169, 110, 0.25);
}

.btn-primary:hover {
  background: #B8925A;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201, 169, 110, 0.35);
}

.btn-whatsapp {
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.25);
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.35);
}

.btn-call {
  background: rgba(250, 248, 244, 0.05);
  color: #FAF8F4;
  border: 1px solid rgba(250, 248, 244, 0.1);
}

.btn-call:hover {
  background: rgba(250, 248, 244, 0.1);
  transform: translateY(-2px);
}

.btn-primary svg,
.btn-call svg {
  stroke: currentColor;
}

.btn-whatsapp svg {
  fill: currentColor;
}

@media (max-width: 768px) {
  .booking-buttons {
    flex-direction: column;
    gap: 0.6rem;
  }
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    justify-content: center;
    padding: 0.8rem 1.2rem;
    font-size: 13px;
    min-width: 100%;
  }
}

@media (max-width: 480px) {
  .btn-primary,
  .btn-whatsapp,
  .btn-call {
    padding: 0.7rem 1rem;
    font-size: 12px;
  }
  .btn-primary svg,
  .btn-whatsapp svg,
  .btn-call svg {
    width: 16px;
    height: 16px;
  }
}
</style>
