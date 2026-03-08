// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Auto-hide success message after 5 seconds
  const successMsg = document.querySelector('.success-message');
  if (successMsg) {
    setTimeout(() => {
      successMsg.style.opacity = '0';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 500);
    }, 5000);
  }
});
