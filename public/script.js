// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Image lazy loading
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
  // Handle image errors
  document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/300x400/2c3e50/ffffff?text=Image+Not+Found';
      this.onerror = null;
    };
  });
  
  // Auto-hide success messages
  const successMsg = document.querySelector('.success-message');
  if (successMsg) {
    setTimeout(() => {
      successMsg.style.opacity = '0';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 300);
    }, 5000);
  }
  
  // Add active class to current page in navbar
  const currentLocation = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation) {
      item.classList.add('active');
    } else if (currentLocation === '/' && item.getAttribute('href') === '/') {
      item.classList.add('active');
    }
  });
  
  // Counter animation for stats
  const stats = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const targetNumber = stat.innerText.replace(/[^0-9]/g, '');
        const suffix = stat.innerText.replace(/[0-9]/g, '');
        let current = 0;
        const increment = targetNumber / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetNumber) {
            stat.innerText = targetNumber + suffix;
            clearInterval(timer);
          } else {
            stat.innerText = Math.floor(current) + suffix;
          }
        }, 30);
        
        statsObserver.unobserve(stat);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => statsObserver.observe(stat));
});