/**
 * HASAN & CO. REAL ESTATE - CONSULTATION BOOKING LOGIC
 * Handles Datepicker boundaries, form validation, animated confirmation & WhatsApp link
 */

document.addEventListener('DOMContentLoaded', () => {
  const consultationForm = document.getElementById('consultation-booking-form');
  const dateInput = document.getElementById('consult-date');
  const successCard = document.getElementById('consultation-success-card');
  const bookingSummaryEl = document.getElementById('booking-summary-details');
  const whatsappConfirmBtn = document.getElementById('consultation-whatsapp-confirm');

  // 1. Set Minimum Date to Today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // 2. Form Submission & Validation
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = consultationForm.querySelector('[name="fullName"]');
      const email = consultationForm.querySelector('[name="email"]');
      const phone = consultationForm.querySelector('[name="phone"]');
      const service = consultationForm.querySelector('[name="interest"]');
      const date = consultationForm.querySelector('[name="date"]');
      const time = consultationForm.querySelector('[name="time"]');
      const message = consultationForm.querySelector('[name="message"]');

      // Validate Name
      if (!name.value.trim()) {
        setFieldError(name, 'Please enter your full name');
        isValid = false;
      } else {
        clearFieldError(name);
      }

      // Validate Email
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setFieldError(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(email);
      }

      // Validate Phone
      if (!phone.value.trim() || phone.value.trim().length < 8) {
        setFieldError(phone, 'Please enter a valid contact number');
        isValid = false;
      } else {
        clearFieldError(phone);
      }

      // Validate Service
      if (!service.value) {
        setFieldError(service, 'Please choose an area of interest');
        isValid = false;
      } else {
        clearFieldError(service);
      }

      // Validate Date
      if (!date.value) {
        setFieldError(date, 'Please select your preferred date');
        isValid = false;
      } else {
        clearFieldError(date);
      }

      // Validate Time
      if (!time.value) {
        setFieldError(time, 'Please select a preferred time slot');
        isValid = false;
      } else {
        clearFieldError(time);
      }

      if (isValid) {
        const submitBtn = consultationForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Confirming Appointment...';
        }

        setTimeout(() => {
          consultationForm.style.display = 'none';

          if (bookingSummaryEl) {
            bookingSummaryEl.innerHTML = `
              <ul class="list-unstyled mb-0 text-start">
                <li class="py-1"><strong>Client:</strong> ${escapeHtml(name.value)}</li>
                <li class="py-1"><strong>Phone:</strong> ${escapeHtml(phone.value)}</li>
                <li class="py-1"><strong>Email:</strong> ${escapeHtml(email.value)}</li>
                <li class="py-1"><strong>Interest:</strong> ${escapeHtml(service.value)}</li>
                <li class="py-1"><strong>Scheduled Date:</strong> ${escapeHtml(date.value)}</li>
                <li class="py-1"><strong>Preferred Slot:</strong> ${escapeHtml(time.value)}</li>
              </ul>
            `;
          }

          if (whatsappConfirmBtn) {
            const waMsg = encodeURIComponent(
              `Hi Hasaan Real Estate, I just booked a consultation on your website.\nName: ${name.value}\nInterest: ${service.value}\nDate: ${date.value} (${time.value})`
            );
            whatsappConfirmBtn.href = `https://wa.me/923003084176?text=${waMsg}`;
          }

          if (successCard) {
            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 800);
      }
    });
  }

  function setFieldError(field, msg) {
    field.classList.add('is-invalid');
    let errEl = field.parentNode.querySelector('.invalid-feedback');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'invalid-feedback text-danger small mt-1';
      field.parentNode.appendChild(errEl);
    }
    errEl.textContent = msg;
  }

  function clearFieldError(field) {
    field.classList.remove('is-invalid');
    const errEl = field.parentNode.querySelector('.invalid-feedback');
    if (errEl) errEl.remove();
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
