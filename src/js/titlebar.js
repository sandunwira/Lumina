function generateHTML() {
	var html = '<div class="titlebar-container">';
	html += '<div class="title">';
	html += '<p>Lumina</p>';
	html += '</div>';
	html += '<div class="controls">';
	html += '<div class="icon" id="titlebar-minimize">';
	html += '<i class="fa-solid fa-window-minimize"></i>';
	html += '</div>';
	html += '<div class="icon" id="titlebar-close">';
	html += '<i class="fa-solid fa-xmark"></i>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	return html;
}

var container = document.getElementById('titlebar');
container.innerHTML = generateHTML();