const greetingDiv = document.getElementById("greeting");

function updateGreeting() {
	const now = new Date();
	const hours = now.getHours();

	if (hours < 12) {
		greetingDiv.innerHTML = "<h1>Good Morning <i class='fa-solid fa-mug-saucer'></i></h1>";
	} else if (hours < 16) {
		greetingDiv.innerHTML = "<h1>Good Afternoon <i class='fa-solid fa-sun'></i></h1>";
	} else if (hours < 19) {
		greetingDiv.innerHTML = "<h1>Good Evening <i class='fa-solid fa-umbrella-beach'></i></h1>";
	} else {
		greetingDiv.innerHTML = "<h1>Good Night <i class='fa-solid fa-moon'></i></h1>";
	}
}

// Update the greeting immediately when the page loads
updateGreeting();

// Update the greeting every second
setInterval(updateGreeting, 1000);