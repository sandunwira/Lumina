function generateHTML() {
	var html = '<div class="titlebar-container">';
	html += '<div class="title">';
	html += '<img src="../assets/images/logo.svg">';
	html += '<p>Lumina</p>';
	html += '</div>';
	html += '<div class="controls">';

	html += '<div class="icon" id="titlebar-help" title="Help" onclick="helpDialog.showModal();">';
	html += '<i class="fa-solid fa-circle-info"></i>';
	html += '</div>';

	html += '<div class="icon" id="titlebar-reload" title="Problem? Try Reloading" onclick="window.location.reload();">';
	html += '<i class="fa-solid fa-rotate"></i>';
	html += '</div>';

	html += '<div class="audio-player flexContainer">';
	html += '<audio id="audioPlayer" preload="auto" src="https://stream.zeno.fm/0r0xa792kwzuv"></audio>';
	html += '<div class="lofiControls flexContainer">';
	html += '<span title="Play/Pause Music" id="playPauseBtn" class="play flexContainer">';
	html += '<i class="fa-solid fa-play"></i>';
	html += '</span>';
	html += '<input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.5">';
	html += '</div>';
	html += '</div>';

	html += '<a href="../index.html">'
	html += '<div class="icon" id="titlebar-lock" title="Lockscreen">';
	html += '<i class="fa-solid fa-lock"></i>';
	html += '</div>';
	html += '</a>';

	html += '<div class="icon" id="titlebar-minimize" title="Minimize">';
	html += '<i class="fa-solid fa-window-minimize"></i>';
	html += '</div>';

	html += '<div class="icon" id="titlebar-close" title="Close">';
	html += '<i class="fa-solid fa-xmark"></i>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	return html;
}

var container = document.getElementById('titlebar');
container.innerHTML = generateHTML();