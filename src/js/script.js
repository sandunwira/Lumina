// == LOCKSCREEN QUIT START ========================================================================= //
const { appWindow } = window.__TAURI__.window;
document.getElementById('dialogCloseBtn').addEventListener('click', () => appWindow.close())
// =========================================================================== LOCKSCREEN QUIT END == //


// == DISABLE CONTEXT MENU START ==================================================================== //
document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});
// ====================================================================== DISABLE CONTEXT MENU END == //