const audio = document.getElementById('bgm');
const toggleBtn = document.getElementById('toggle');
const volumeSlider = document.getElementById('volume');

function updateButton() {
  toggleBtn.textContent = audio.paused ? '▶️ Play' : '⏸️ Pausa';
}

toggleBtn.addEventListener('click', async () => {
  if (audio.paused) {
    try { await audio.play(); } catch(e) { console.warn(e); }
  } else {
    audio.pause();
  }
  updateButton();
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

let started = false;
function startOnce() {
  if (!started) {
    audio.play().then(() => updateButton()).catch(()=>{});
    started = true;
    const rain = document.getElementById('rain');
const numberOfDrops = 100;

for(let i=0; i<numberOfDrops; i++){
  const drop = document.createElement('div');
  drop.className = 'drop';
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
  drop.style.animationDelay = Math.random() * 2 + 's';
  rain.appendChild(drop);
}
  }
}
window.addEventListener('pointerdown', startOnce, { once: true });

updateButton();
