document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var submitMessage = document.getElementById('submitMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Show submission message
        submitMessage.classList.remove('hidden');
        
        // Optional: You can reset the form after submission
        form.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(function() {
            submitMessage.classList.add('hidden');
        }, 3000); // Hide message after 3 seconds
    });
});
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    const formData = new FormData(this);
    
    // Convert FormData to object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    // Log form data to console
    console.log('Form Data:', formObject);
  
    // You can also send this data to a server using fetch or XMLHttpRequest if needed
  });
  