const heartsEl = document.getElementById('hearts');
function rand(min, max) { return Math.random() * (max - min) + min }
function addHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  const size = rand(12, 26);
  h.style.width = size + 'px';
  h.style.height = size + 'px';
  h.style.left = rand(0, 100) + '%';
  h.style.top = '100%';
  h.style.background = `hsl(${rand(340, 360)}, 90%, ${rand(55, 70)}%)`;
  h.style.animationDuration = rand(6, 12) + 's';
  h.style.animationDelay = rand(0, 6) + 's';
  heartsEl.appendChild(h);
  setTimeout(() => heartsEl.removeChild(h), 16000);
}
for (let i = 0; i < 18; i++) addHeart();
setInterval(addHeart, 900);
