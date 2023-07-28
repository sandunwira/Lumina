const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', togglePlayPause);
volumeSlider.addEventListener('input', updateVolume);
audio.addEventListener('play', updateButtonText);
audio.addEventListener('pause', updateButtonText);

function togglePlayPause() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}

function updateVolume() {
	audio.volume = volumeSlider.value;
}

function updateButtonText() {
	if (audio.paused) {
		playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
	} else {
		playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
	}
}