export function smoothScroll(targetId, duration = 800) {
    const target = document.getElementById(targetId);
    if (!target) return;
  
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
  
    function animateScroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const run = easeInOutCubic(Math.min(elapsedTime / duration, 1));
  
      window.scrollTo(0, startPosition + targetPosition * run);
  
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }
  
    requestAnimationFrame(animateScroll);
  }
  