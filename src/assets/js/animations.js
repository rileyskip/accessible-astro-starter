// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })

  // Add stagger delay to skill cards
  document.querySelectorAll('.animate-skill-card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })

  // Add hover sound effect (optional)
  const buttons = document.querySelectorAll('.button')
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      // Add a subtle scale effect
      button.style.transform = 'scale(1.02)'
    })

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)'
    })
  })

  // Parallax effect for hero image
  const heroImage = document.querySelector('.animate-float')
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      heroImage.style.transform = `translateY(${rate}px)`
    })
  }
})

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    if (!img.complete) {
      img.classList.add('loading')
      img.addEventListener('load', () => {
        img.classList.remove('loading')
      })
    }
  })
})
