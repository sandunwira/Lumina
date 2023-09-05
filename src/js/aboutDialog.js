function generateDialogHTML() {
	var html = '<div class="dialog flexContainer flexCol">';

	html += '<div class="dialogContainer flexContainer flexCol">';

	html += '<span class="dialogTitle flexContainer flexRow">';

	html += '<h1>About <span>Lumina</span></h1>';

	html += '<form method="dialog">';

	html += '<button type="submit">';
	html += '<i class="fa-solid fa-xmark"></i>';
	html += '</button>';

	html += '</form>';

	html += '</span>';

	html += '<div class="dialogImg flexContainer">';
	html += '<img src="../assets/images/logo-text.svg">';
	html += '</div>';

	html += '<div class="dialogDesc flexContainer flexCol">';

	html += '<p><abbr title="Brilliant Light">Lumina</abbr> is a special, magical app that creates a peaceful oasis for you, helping you relax, feel calm, and forget about any worries. Enjoy the soothing wonders of Lumina!</p>';

	html += '<div class="dialogLinks flexContainer flexRow">';

	html += '<a href="https://github.com/teamkoolapps/Lumina" title="GitHub Repository" target="_blank">';
	html += '<i class="fa-brands fa-github-alt"></i>';
	html += '</a>';

	html += '<a href="mailto:lumina.koolapps@outlook.com" title="Contact Us" target="_blank">';
	html += '<i class="fa-solid fa-envelope"></i>';
	html += '</a>';

	html += '<a href="https://github.com/teamkoolapps/Lumina/issues/new" title="Submit an Issue" target="_blank">';
	html += '<i class="fa-solid fa-flag"></i>';
	html += '</a>';

	html += '</div>';

	html += '<span class="dialogFooter">';
	html += '<p>Version: 1.1.0</p>';
	html += '</span>';

	html += '</div>';
	html += '</div>';
	html += '</div>';

	return html;
}

var dialog = document.getElementById('helpDialog');
dialog.innerHTML = generateDialogHTML();