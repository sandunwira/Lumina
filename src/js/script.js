// == LOCKSCREEN QUIT START ========================================================================= //
const { appWindow } = window.__TAURI__.window;
document.getElementById('quitBtn').addEventListener('click', () => appWindow.close())
// =========================================================================== LOCKSCREEN QUIT END == //


// == CHANGING LOCKSCREEN BACKGROUND START ========================================================== //
var bgChangeButton = document.getElementById('bgChangeBtn');
var lockScreen = document.getElementById('lockScreen');

bgChangeButton.addEventListener('click', function () {
	var gradientColor = generateRandomColor();
	lockScreen.style.background = 'linear-gradient(45deg, #19232e, ' + gradientColor + ')';
});

function generateRandomColor() {
	var letters = '012345';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 6)];
	}
	return color;
}
// ============================================================ CHANGING LOCKSCREEN BACKGROUND END == //


// == DISABLE CONTEXT MENU START ==================================================================== //
document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});
// ====================================================================== DISABLE CONTEXT MENU END == //

