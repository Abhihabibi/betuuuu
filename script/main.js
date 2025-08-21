// Floating hearts generator
for (let i = 0; i < 5; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 90}%`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    heart.innerText = '❤️';
    document.body.appendChild(heart);
}
