<template>
  <div class="booking-page">
    <div class="container">
      <!-- Quick Contact Cards -->
      <div class="contact-cards">
        <!-- Call Card -->
        <div class="contact-card">
          <div class="contact-icon call-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <h3>Call Us</h3>
          <p>Instant booking assistance</p>
          <a href="tel:+254796471899" class="contact-btn call-btn">Call Now</a>
        </div>

        <!-- WhatsApp Card -->
        <div class="contact-card">
          <div class="contact-icon whatsapp-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <p>Chat Now</p>
          <a href="https://wa.me/254796471899" target="_blank" class="contact-btn whatsapp-btn">Chat Now</a>
        </div>

        <!-- Email Card -->
        <div class="contact-card">
          <div class="contact-icon email-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </div>
          <h3>Email Us</h3>
          <p>We'll reply within 24 hours</p>
          <a href="mailto:info@azizispa.com" class="contact-btn email-btn">Email Now</a>
        </div>
      </div>

      <!-- Booking Form -->
      <div class="booking-content">
        <div class="booking-form">
          <h2>Book Your Experience</h2>
          
          <!-- Multiple Service Selection -->
          <div class="form-group">
            <label>Select Services (choose one or multiple)</label>
            <div class="service-checkboxes">
              <div v-for="service in allServices" :key="service.name" class="service-checkbox-item">
                <input 
                  type="checkbox" 
                  :id="service.name" 
                  :value="service" 
                  v-model="selectedServices"
                  @change="updateServiceDetails"
                />
                <label :for="service.name">
                  <span class="service-name">{{ service.name }}</span>
                  <span class="service-meta">{{ service.duration }} - {{ service.price }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Selected Services Summary -->
          <div v-if="selectedServices.length > 0" class="selected-services">
            <h4>Selected Services</h4>
            <div v-for="service in selectedServices" :key="service.name" class="selected-service-item">
              <span>{{ service.name }}</span>
              <span>{{ service.price }}</span>
            </div>
            <div class="selected-total">
              <span>Total</span>
              <span>{{ calculateTotal }}</span>
            </div>
          </div>

          <!-- Date Selection -->
          <div class="form-group">
            <label>Preferred Date</label>
            <input type="date" v-model="bookingDate" />
          </div>

          <!-- Time Selection -->
          <div class="form-group">
            <label>Preferred Time</label>
            <select v-model="bookingTime">
              <option value="">Select time...</option>
              <option value="08:00">08:00 AM</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </div>

          <!-- Client Details -->
          <div class="form-group">
            <label>Your Details</label>
            <input type="text" v-model="clientName" placeholder="Full Name" />
            <input type="tel" v-model="clientPhone" placeholder="Phone Number" />
            <input type="email" v-model="clientEmail" placeholder="Email Address (optional)" />
          </div>

          <!-- WhatsApp Booking Button -->
          <button @click="sendWhatsAppBooking" class="btn-primary">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="margin-right: 8px;">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book on WhatsApp
          </button>

          <p class="form-note">* Your booking request will be sent via WhatsApp. We will confirm your appointment within minutes.</p>
        </div>

        <!-- Booking Summary -->
        <div class="booking-summary">
          <h3>Booking Summary</h3>
          <div v-if="selectedServices.length === 0" class="summary-empty">
            <p>No services selected</p>
          </div>
          <div v-else>
            <div v-for="service in selectedServices" :key="service.name" class="summary-item">
              <span>{{ service.name }}</span>
              <span>{{ service.price }}</span>
            </div>
          </div>
          <div class="summary-details">
            <div class="summary-row">
              <span>Date</span>
              <span>{{ bookingDate || 'Not selected' }}</span>
            </div>
            <div class="summary-row">
              <span>Time</span>
              <span>{{ bookingTime || 'Not selected' }}</span>
            </div>
            <div class="summary-row" v-if="clientName">
              <span>Client</span>
              <span>{{ clientName }}</span>
            </div>
          </div>
          <div class="summary-total">
            <span>Total</span>
            <span>{{ calculateTotal }}</span>
          </div>
          <p class="summary-note">* Booking confirmed via WhatsApp</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingPage',
  data() {
    return {
      selectedServices: [],
      bookingDate: '',
      bookingTime: '',
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      allServices: [
        { name: 'Swedish Massage', duration: '60 min', price: 'Ksh 3,000', bestFor: 'Office workers' },
        { name: 'Deep Tissue Massage', duration: '60 min', price: 'Ksh 4,000', bestFor: 'Athletes' },
        { name: 'Thai Massage', duration: '90 min', price: 'Ksh 4,500', bestFor: 'Active individuals' },
        { name: 'Hot Stone Massage', duration: '60 min', price: 'Ksh 5,000', bestFor: 'Muscle tension' },
        { name: 'Aromatherapy Massage', duration: '60 min', price: 'Ksh 5,000', bestFor: 'Stress relief' },
        { name: 'Moroccan Scrub', duration: '90 min', price: 'Ksh 5,500', bestFor: 'Dull skin' },
        { name: 'Brazilian Bath', duration: '75 min', price: 'Ksh 4,000', bestFor: 'Dry skin' },
        { name: 'Body Scrub', duration: '60 min', price: 'Ksh 3,000', bestFor: 'Rough skin' },
        { name: 'Signature Facial', duration: '120 min', price: 'Ksh 4,500', bestFor: 'All skin types' },
        { name: 'Custom Facial', duration: '90 min', price: 'Ksh 4,000', bestFor: 'Specific skin concerns' },
        { name: 'Deep Cleansing Facial', duration: '90 min', price: 'Ksh 3,500', bestFor: 'Oily/combination skin' },
        { name: 'Full Body Waxing', duration: '180 min', price: 'Ksh 8,000', bestFor: 'Hair removal' },
        { name: 'Bikini Waxing', duration: '60 min', price: 'Ksh 3,000', bestFor: 'Summer' },
        { name: 'Chest Waxing', duration: '60 min', price: 'Ksh 2,500', bestFor: 'Men' },
        { name: 'Pedicure + Manicure', duration: '90 min', price: 'Ksh 3,000', bestFor: 'Complete hand and foot care' },
        { name: 'Moroccan Bath', duration: '90 min', price: 'Ksh 10,000', bestFor: 'Deep cleanse' }
      ]
    }
  },
  computed: {
    calculateTotal() {
      if (this.selectedServices.length === 0) return 'Ksh 0';
      const total = this.selectedServices.reduce((sum, service) => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        return sum + price;
      }, 0);
      return `Ksh ${total.toLocaleString()}`;
    }
  },
  methods: {
    updateServiceDetails() {
      // This is handled by the v-model binding
    },
    sendWhatsAppBooking() {
      if (this.selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
      }
      
      const servicesList = this.selectedServices.map(s => `- ${s.name} (${s.price})`).join('%0A');
      const date = this.bookingDate || 'Not specified';
      const time = this.bookingTime || 'Not specified';
      const name = this.clientName || 'Not specified';
      const phone = this.clientPhone || 'Not specified';
      
      const message = `Hello Aziza Spa,%0A%0A*I would like to book the following services:*%0A${servicesList}%0A%0A*Total:* ${this.calculateTotal}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${this.clientEmail || 'Not provided'}%0A%0AThank you!`;
      
      const url = `https://wa.me/254796471899?text=${message}`;
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

.booking-page {
  padding-top: 80px;
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Contact Cards */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: #fafafa;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(10, 22, 40, 0.04);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(10, 22, 40, 0.08);
}

.contact-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
}

.call-icon {
  background: rgba(33, 150, 243, 0.1);
  color: #2196F3;
}

.whatsapp-icon {
  background: rgba(37, 211, 102, 0.1);
  color: #25D366;
}

.email-icon {
  background: rgba(201, 169, 110, 0.1);
  color: #C9A96E;
}

.contact-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.3rem 0;
}

.contact-card p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  font-weight: 300;
  color: #0a1628;
  margin: 0 0 1rem 0;
  opacity: 0.7;
}

.contact-btn {
  display: inline-block;
  padding: 0.7rem 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 44px; /* Better touch target */
  min-width: 44px;
  cursor: pointer;
}

.call-btn {
  background: #2196F3;
  color: #ffffff;
}

.call-btn:hover {
  background: #1976D2;
  transform: translateY(-2px);
}

.whatsapp-btn {
  background: #25D366;
  color: #ffffff;
}

.whatsapp-btn:hover {
  background: #128C7E;
  transform: translateY(-2px);
}

.email-btn {
  background: #C9A96E;
  color: #ffffff;
}

.email-btn:hover {
  background: #B8925A;
  transform: translateY(-2px);
}

/* Booking Content */
.booking-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.booking-form {
  background: #fafafa;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
  border: 1px solid rgba(10, 22, 40, 0.04);
}

.booking-form h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 2rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #0a1628;
  margin-bottom: 0.5rem;
  font-size: clamp(0.85rem, 1.2vw, 0.95rem);
}

/* Service Checkboxes */
.service-checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.service-checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(10, 22, 40, 0.06);
  transition: all 0.3s ease;
  min-height: 44px; /* Better touch target */
}

.service-checkbox-item:hover {
  border-color: #C9A96E;
  background: #fafafa;
}

.service-checkbox-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #C9A96E;
  cursor: pointer;
  flex-shrink: 0;
  min-width: 20px; /* Better touch target */
  min-height: 20px;
}

.service-checkbox-item label {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-size: clamp(0.75rem, 1vw, 0.85rem);
  margin-bottom: 0;
  flex: 1;
}

.service-name {
  font-weight: 500;
  color: #0a1628;
}

.service-meta {
  font-size: clamp(0.65rem, 0.9vw, 0.75rem);
  color: #0a1628;
  opacity: 0.6;
}

/* Selected Services */
.selected-services {
  background: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(10, 22, 40, 0.06);
}

.selected-services h4 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 0.5rem 0;
  opacity: 0.6;
}

.selected-service-item {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: #0a1628;
  border-bottom: 1px solid rgba(10, 22, 40, 0.04);
}

.selected-total {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 600;
  color: #C9A96E;
  border-top: 2px solid #C9A96E;
  margin-top: 0.3rem;
}

.form-group select,
.form-group input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(10, 22, 40, 0.1);
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  background: #ffffff;
  transition: border-color 0.3s ease;
  color: #0a1628;
  min-height: 48px; /* Better touch target */
}

.form-group select:focus,
.form-group input:focus {
  border-color: #C9A96E;
  outline: none;
}

.form-group input {
  margin-bottom: 0.5rem;
}

.form-group input:last-child {
  margin-bottom: 0;
}

/* WhatsApp Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2.5rem;
  background: #25D366;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  min-height: 56px; /* Better touch target */
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
}

.btn-primary:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.btn-primary svg {
  flex-shrink: 0;
}

.form-note {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.7rem, 1vw, 0.85rem);
  font-weight: 300;
  color: #0a1628;
  text-align: center;
  margin: 1rem 0 0 0;
  opacity: 0.6;
}

/* Booking Summary */
.booking-summary {
  background: #fafafa;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(10, 22, 40, 0.04);
  border: 1px solid rgba(10, 22, 40, 0.04);
  align-self: start;
  position: sticky;
  top: 100px;
}

.booking-summary h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  font-weight: 600;
  color: #0a1628;
  margin: 0 0 1.5rem 0;
}

.summary-empty p {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: #0a1628;
  opacity: 0.5;
  text-align: center;
  padding: 1rem 0;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  font-weight: 300;
  color: #0a1628;
}

.summary-details {
  margin: 1rem 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.75rem, 1vw, 0.85rem);
  font-weight: 300;
  color: #0a1628;
  opacity: 0.7;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  color: #C9A96E;
  border-top: 2px solid #C9A96E;
  margin-top: 0.5rem;
}

.summary-note {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  font-weight: 300;
  color: #0a1628;
  margin: 1rem 0 0 0;
  text-align: center;
  opacity: 0.5;
}

/* Responsive - Mobile First Approach */
@media (max-width: 1024px) {
  .booking-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .booking-summary {
    position: static;
    top: auto;
  }
  
  .container {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .service-checkboxes {
    grid-template-columns: 1fr;
    max-height: 400px;
  }
  
  .booking-form {
    padding: 1.5rem;
  }
  
  .booking-form h2 {
    font-size: clamp(1.5rem, 5vw, 1.8rem);
  }
  
  .container {
    padding: 1rem;
  }
  
  .contact-card {
    padding: 1.5rem;
  }
  
  .booking-summary {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.75rem;
  }
  
  .booking-form {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .contact-card {
    padding: 1.2rem;
    border-radius: 16px;
  }
  
  .booking-summary {
    padding: 1.2rem;
    border-radius: 16px;
  }
  
  .contact-icon {
    width: 56px;
    height: 56px;
  }
  
  .contact-icon svg {
    width: 28px;
    height: 28px;
  }
  
  .btn-primary {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }
  
  .service-checkbox-item {
    padding: 0.5rem 0.6rem;
  }
  
  .selected-services {
    padding: 0.8rem 1rem;
  }
  
  /* Improve scroll on small screens */
  .service-checkboxes {
    max-height: 300px;
  }
}

/* Large Screens Optimization */
@media (min-width: 1400px) {
  .container {
    padding: 3rem;
  }
  
  .contact-cards {
    gap: 2rem;
  }
  
  .booking-content {
    gap: 4rem;
  }
  
  .booking-form {
    padding: 3rem;
  }
  
  .service-checkboxes {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
}

/* Touch Device Optimizations */
@media (hover: none) {
  .contact-btn:hover,
  .btn-primary:hover,
  .contact-card:hover {
    transform: none !important;
  }
  
  .service-checkbox-item:hover {
    background: #ffffff;
    border-color: rgba(10, 22, 40, 0.06);
  }
  
  /* Active state for touch feedback */
  .contact-btn:active,
  .btn-primary:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  .service-checkbox-item:active {
    background: #f0f0f0;
  }
}

/* Scrollbar Styling */
.service-checkboxes::-webkit-scrollbar {
  width: 6px;
}

.service-checkboxes::-webkit-scrollbar-track {
  background: rgba(10, 22, 40, 0.05);
  border-radius: 10px;
}

.service-checkboxes::-webkit-scrollbar-thumb {
  background: #C9A96E;
  border-radius: 10px;
}

.service-checkboxes::-webkit-scrollbar-thumb:hover {
  background: #B8925A;
}

/* Firefox scrollbar */
.service-checkboxes {
  scrollbar-width: thin;
  scrollbar-color: #C9A96E rgba(10, 22, 40, 0.05);
}
</style>