window.addEventListener('load', () => {
  gsap.to('.image', {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power2.out'
  });

  gsap.to('.alterego-name', {
    opacity: 1,
    delay: 0.5,
    duration: 1
  });

  gsap.to('.alterego-desc', {
    opacity: 1,
    delay: 1,
    duration: 1
  });

  gsap.to('.explore-btn', {
    opacity: 1,
    delay: 1.5,
    duration: 1
  });
});
