// Contact form handling
// Submits the form to Web3Forms (https://web3forms.com) via fetch, so the
// page stays on a single view and shows a real success/error message based
// on whether the email actually sent.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var successNote = document.getElementById('form-success');
  var errorNote = document.getElementById('form-error');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var submitBtn = form.querySelector('.submit-btn');
      var formData = new FormData(form);
      var payload = Object.fromEntries(formData.entries());

      if (successNote) successNote.style.display = 'none';
      if (errorNote) errorNote.style.display = 'none';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          if (data.success) {
            if (successNote) successNote.style.display = 'block';
            form.reset();
          } else {
            if (errorNote) errorNote.style.display = 'block';
          }
        })
        .catch(function () {
          if (errorNote) errorNote.style.display = 'block';
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Request Free Consultation';
          }
        });
    });
  }
});
