document.getElementById('rsvp-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Basic validation
  if (name && email) {
    // Show confirmation message
    document.getElementById('confirmation-message').classList.remove('hidden');

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  } else {
    alert('Please fill in all fields.');
  }
});
