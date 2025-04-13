function animateFlip(id, newValue) {
  const el = document.getElementById(id);
  const currentValue = el.innerText;

  if (currentValue === String(newValue).padStart(2, '0')) return; // No change

  el.classList.add("flip");

  // Wait for animation to reach halfway point before updating number
  setTimeout(() => {
    el.innerText = String(newValue).padStart(2, '0');
  }, 150); // half of 0.3s flip duration

  // Remove flip class after animation completes
  setTimeout(() => {
    el.classList.remove("flip");
  }, 300);
}


  const targetDate = new Date("May 1, 2025 00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.querySelector(".countdown-cards").innerHTML = "🎉 It's Here!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    animateFlip("days", days);
animateFlip("minutes", minutes);
animateFlip("seconds", seconds);

  }, 1000);
  
  const image = document.querySelector('.banner-image');
  const video = document.querySelector('.banner-video');

  function startLoop() {
    image.style.display = 'block';
    video.style.display = 'none';

    setTimeout(() => {
      image.style.display = 'none';
      video.style.display = 'block';
      video.currentTime = 0;
      video.play();

      setTimeout(() => {
        startLoop(); // Restart the loop after video
      }, 5000); // Video duration: 5 seconds
    }, 3000); // Image duration: 3 seconds
  }

 


  const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

window.onload = startLoop;