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

// Update the greeting every second
setInterval(updateGreeting, 1000);



const iconDiv = document.getElementById("timeIcon");

function updateTimeIcon() {
	const now = new Date();
	const hours = now.getHours();

	if (hours < 7) {
		iconDiv.innerHTML = "<i class='fa-solid fa-dove'></i>";
	} else if (hours < 9) {
		iconDiv.innerHTML = "<i class='fa-solid fa-mug-hot'></i>";
	} else if (hours < 12) {
		iconDiv.innerHTML = "<i class='fa-solid fa-suitcase'></i>";
	} else if (hours < 16) {
		iconDiv.innerHTML = "<i class='fa-solid fa-sun'></i>";
	} else if (hours < 18) {
		iconDiv.innerHTML = "<i class='fa-solid fa-umbrella-beach'></i>";
	} else if (hours < 21) {
		iconDiv.innerHTML = "<i class='fa-solid fa-city'></i>";
	} else {
		iconDiv.innerHTML = "<i class='fa-solid fa-moon'></i>";
	}
}

// Update the greeting immediately when the page loads
updateTimeIcon();

// Update the greeting every second
setInterval(updateTimeIcon, 1000);