// Floating hearts animation for all pages
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';

  // Random horizontal position
  heart.style.left = Math.random() * 100 + 'vw';

  // Random size 30px → 70px
  heart.style.fontSize = (30 + Math.random() * 40) + 'px';

  // Random animation duration 4s → 8s
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';

  // Random opacity
  heart.style.opacity = Math.random() * 0.5 + 0.5;

  document.body.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// Create hearts faster for more quantity
setInterval(createHeart, 150); // Every 0.15s a heart appears
