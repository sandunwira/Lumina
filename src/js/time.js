const timeDiv = document.getElementById("time-container");

function updateTime() {
	const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
	timeDiv.innerHTML = `<h1>${timeString}</h1>`;
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);