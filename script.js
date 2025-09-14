// 🎵 Music Play/Pause
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔇 Pause";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play";
  }
});

// 💖 Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 1000);