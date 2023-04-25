const { invoke } = window.__TAURI__.tauri;

const countButton = document.getElementById("count");
let clickCount = 0;

countButton.addEventListener("click", () => {
	clickCount++;
	countButton.innerHTML = `Click Count: <b>${clickCount}</b>`;
});