// == TITLEBAR START ================================================================================ //
const { appWindow } = window.__TAURI__.window;
document.getElementById('titlebar-minimize').addEventListener('click', () => appWindow.minimize())
document.getElementById('titlebar-close').addEventListener('click', () => appWindow.close())
// ================================================================================== TITLEBAR END == //

// == CLICK-COUNT START ============================================================================= //
const countButton = document.getElementById("count");
let clickCount = 0;

countButton.addEventListener("click", () => {
	clickCount++;
	countButton.innerHTML = `Click Count: <b>${clickCount}</b>`;
});
// =============================================================================== CLICK-COUNT END == //