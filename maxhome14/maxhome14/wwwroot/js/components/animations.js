/* ========================================
   ANIMATIONS COMPONENT - MAXHOME14
   ======================================== */

class Animations {
  constructor() {
    this.init();
  }

  init() {
    this.initScrollAnimations();
    this.initHoverAnimations();
    this.initLoadingAnimations();
  }

  initScrollAnimations() {
    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe elements with animation classes
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }
  }

  initHoverAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .team-member');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = 'var(--shadow-medium)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow-light)';
      });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
      });
    });
  }

  initLoadingAnimations() {
    // Loading animation for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });

      // Add loading class if image is already loaded
      if (img.complete) {
        img.classList.add('loaded');
      }
    });

    // Loading animation for content
    const contentSections = document.querySelectorAll('.hero-section, .services-section, .portfolio-section');
    
    contentSections.forEach(section => {
      section.classList.add('loading');
      
      // Simulate loading delay
      setTimeout(() => {
        section.classList.remove('loading');
        section.classList.add('loaded');
      }, 100);
    });
  }

  // Fade in animation
  fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = performance.now();
    
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Fade out animation
  fadeOut(element, duration = 300) {
    let start = performance.now();
    
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = 1 - progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Slide in animation
  slideIn(element, direction = 'up', duration = 300) {
    const directions = {
      up: 'translateY(30px)',
      down: 'translateY(-30px)',
      left: 'translateX(30px)',
      right: 'translateX(-30px)'
    };

    element.style.transform = directions[direction];
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = performance.now();
    
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = progress;
      element.style.transform = `translate(0, 0)`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Pulse animation
  pulse(element, duration = 1000) {
    element.style.animation = `pulse ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Bounce animation
  bounce(element, duration = 1000) {
    element.style.animation = `bounce ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Shake animation
  shake(element, duration = 500) {
    element.style.animation = `shake ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }
}

// CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-10px); }
    70% { transform: translateY(-5px); }
    90% { transform: translateY(-2px); }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .loading {
    opacity: 0;
    transform: translateY(20px);
  }

  .loaded {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease;
  }

  img {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);

// Export for use in other scripts
window.Animations = Animations;
