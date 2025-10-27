/* ========================================
   HEADER COMPONENT - MAXHOME14
   ======================================== */

class Header {
  constructor() {
    this.header = document.querySelector('.header');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.hamburger = document.querySelector('.hamburger');
    this.lastScrollY = window.scrollY;
    this.isHeaderVisible = true;
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.initScrollEffect();
    this.initMobileMenu();
  }

  bindEvents() {
    // Scroll event for header visibility
    window.addEventListener('scroll', Utils.throttle(() => {
      this.handleScroll();
    }, 100));

    // Mobile menu toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.mobileNav && this.mobileNav.classList.contains('show')) {
        if (!this.mobileToggle.contains(e.target) && !this.mobileNav.contains(e.target)) {
          this.closeMobileMenu();
        }
      }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', Utils.debounce(() => {
      if (window.innerWidth > 991) {
        this.closeMobileMenu();
      }
    }, 250));
  }

  initScrollEffect() {
    // Add scroll effect to header
    window.addEventListener('scroll', Utils.throttle(() => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      
      this.lastScrollY = currentScrollY;
    }, 100));
  }

  initMobileMenu() {
    // Initialize mobile menu state
    if (this.mobileNav) {
      this.mobileNav.classList.remove('show');
    }
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Hide/show header based on scroll direction
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      // Scrolling down
      if (this.isHeaderVisible) {
        this.header.style.transform = 'translateY(-100%)';
        this.isHeaderVisible = false;
      }
    } else {
      // Scrolling up
      if (!this.isHeaderVisible) {
        this.header.style.transform = 'translateY(0)';
        this.isHeaderVisible = true;
      }
    }
  }

  toggleMobileMenu() {
    if (this.mobileNav) {
      this.mobileNav.classList.toggle('show');
      this.mobileToggle.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (this.mobileNav.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMobileMenu() {
    if (this.mobileNav) {
      this.mobileNav.classList.remove('show');
      this.mobileToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Public methods
  show() {
    this.header.style.transform = 'translateY(0)';
    this.isHeaderVisible = true;
  }

  hide() {
    this.header.style.transform = 'translateY(-100%)';
    this.isHeaderVisible = false;
  }
}

// Export for use in other scripts
window.Header = Header;
