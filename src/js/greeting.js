const greetingDiv = document.getElementById("greeting");

function updateGreeting() {
	const now = new Date();
	const hours = now.getHours();

	if (hours < 12) {
		greetingDiv.innerHTML = "<h1>Good Morning</h1>";
	} else if (hours < 16) {
		greetingDiv.innerHTML = "<h1>Good Afternoon</h1>";
	} else if (hours < 19) {
		greetingDiv.innerHTML = "<h1>Good Evening</h1>";
	} else {
		greetingDiv.innerHTML = "<h1>Good Night</h1>";
	}
}

// Update the greeting immediately when the page loads
updateGreeting();

// Update the greeting every hour
setInterval(updateGreeting, 3600000);