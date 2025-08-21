// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';

  // Randomize position and size
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (20 + Math.random() * 30) + 'px'; // size 20px → 50px
  heart.style.animationDuration = (4 + Math.random() * 4) + 's'; // speed 4s → 8s
  heart.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 → 1

  document.body.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// Create more hearts, faster
setInterval(createHeart, 200); // Every 0.2s a heart appears
