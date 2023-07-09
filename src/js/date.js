const dateDiv = document.getElementById("date-container");

function updateDate() {
	const now = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const dateString = now.toLocaleDateString([], options);
	dateDiv.innerHTML = `<h1>${dateString}</h1>`;
}

// Update the date immediately when the page loads
updateDate();

// Update the date every second
setInterval(updateDate, 1000);