function generateCloseDialogHTML() {
	var html = '<div class="dialog flexContainer flexCol">';

	html += '<div class="dialogContainer flexContainer flexCol">';

	html += '<form method="dialog">';

	html += '<h1>Are you sure you want to quit Lumina?</h1>';

	html += '<div class="closeButtons flexContainer">';

	html += '<button id="dialogCloseBtn">Quit</button>';
	html += '<button type="submit" id="dialogCancelBtn">Cancel</button>';

	html += '</div>';

	html += '</form>';

	html += '</div>';

	html += '</div>';

	return html;
}

var closeDialog = document.getElementById('closeDialog');
closeDialog.innerHTML = generateCloseDialogHTML();