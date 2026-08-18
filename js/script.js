// Contact form handling
// NOTE: This only shows a confirmation message in the browser — it does not
// actually send the message anywhere. To receive real inquiries, connect
// this form to a service like Formspree, Getform, or a Vercel Serverless
// Function that sends email (see README.md for suggestions).
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var successNote = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (successNote) {
        successNote.style.display = 'block';
      }
      form.reset();
    });
  }
});
