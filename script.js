const audio = document.getElementById('bgm');
const toggleBtn = document.getElementById('toggle');
const volumeSlider = document.getElementById('volume');

function updateButton() {
  toggleBtn.textContent = audio.paused ? '▶️ Play' : '⏸️ Pausa';
}

toggleBtn.addEventListener('click', async () => {
  if (audio.paused) {
    try { await audio.play(); } catch(e) {}
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
  }
}
window.addEventListener('pointerdown', startOnce, { once: true });
updateButton();

const rain = document.getElementById('rain');
const numberOfDrops = 150;

for(let i = 0; i < numberOfDrops; i++){
  const drop = document.createElement('div');
  drop.className = 'drop';
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = (2 + Math.random() * 3) + 's';
  drop.style.animationDelay = Math.random() * 5 + 's';
  rain.appendChild(drop);
}

