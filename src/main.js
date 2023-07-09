// == TITLEBAR START ================================================================================ //
const { appWindow } = window.__TAURI__.window;
document.getElementById('titlebar-minimize').addEventListener('click', () => appWindow.minimize())
document.getElementById('titlebar-close').addEventListener('click', () => appWindow.close())
// ================================================================================== TITLEBAR END == //

// == DISABLE CONTEXT MENU START ==================================================================== //
document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});
// ====================================================================== DISABLE CONTEXT MENU END == //

