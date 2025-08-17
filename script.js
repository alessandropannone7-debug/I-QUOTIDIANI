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
  }
}
window.addEventListener('pointerdown', startOnce, { once: true });

updateButton();
