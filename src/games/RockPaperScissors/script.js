let rock = false;
let paper = false;
let scissors = false;
let color = false;
let hs = 5;
let cs = 5;
let play = document.querySelector(".play");
let rockSymbol = '<i class="fa-solid fa-hand-fist"></i></div>';
let paperSymbol = '<i class="fa-solid fa-hand"></i>';
let scissorsSymbol = '<i class="fa-solid fa-hand-peace"></i>';

function changeWidth() {
	let humbar = document.querySelector(".humbar");
	let compbar = document.querySelector(".compbar");
	humbar.style.width = `${(cs / 5) * 100}%`;
	compbar.style.width = `${(hs / 5) * 100}%`;
}

function chosen() {
	let weapons = [rock, paper, scissors];
	let text = ["rock", "paper", "scissors"];
	let idx = weapons.indexOf(true);
	return text[idx];
}

function borderBottom() {
	if (rock) {
		document.querySelector(".rock").style.borderBottomColor = "#E9DCC9";
		document.querySelector(".paper").style.borderBottomColor = "transparent";
		document.querySelector(".scissors").style.borderBottomColor = "transparent";
	}
	if (paper) {
		document.querySelector(".rock").style.borderBottomColor = "transparent";
		document.querySelector(".paper").style.borderBottomColor = "#E9DCC9";
		document.querySelector(".scissors").style.borderBottomColor = "transparent";
	}
	if (scissors) {
		document.querySelector(".rock").style.borderBottomColor = "transparent";
		document.querySelector(".paper").style.borderBottomColor = "transparent";
		document.querySelector(".scissors").style.borderBottomColor = "#E9DCC9";
	}
}

function removeBorderBottom() {
	document.querySelector(".rock").style.borderBottomColor = "transparent";
	document.querySelector(".paper").style.borderBottomColor = "transparent";
	document.querySelector(".scissors").style.borderBottomColor = "transparent";
}

document.querySelector(".rock").addEventListener("click", () => {
	rock = true;
	paper = false;
	scissors = false;
	play.style.animation = "none";
	borderBottom();
	document.querySelector(".user").innerHTML = rockSymbol;
	document.querySelector(".comp").innerHTML = "";
	document.querySelector(".user").style.opacity = "1";
	document.querySelector("#text").style.opacity = 0;
});

document.querySelector(".paper").addEventListener("click", () => {
	rock = false;
	paper = true;
	scissors = false;
	play.style.animation = "none";
	borderBottom();
	document.querySelector(".user").innerHTML = paperSymbol;
	document.querySelector(".comp").innerHTML = "";
	document.querySelector(".user").style.opacity = "1";
	document.querySelector("#text").style.opacity = 0;
});

document.querySelector(".scissors").addEventListener("click", () => {
	rock = false;
	paper = false;
	scissors = true;
	play.style.animation = "none";
	borderBottom();
	document.querySelector(".user").innerHTML = scissorsSymbol;
	document.querySelector(".comp").innerHTML = "";
	document.querySelector(".user").style.opacity = "1";
	document.querySelector("#text").style.opacity = 0;
});

const compChoice = () => {
	let options = ["Rock", "Paper", "Scissors"];
	let weapons = [rockSymbol, paperSymbol, scissorsSymbol];
	let choice = Math.floor(Math.random() * 3);
	let result = options[choice];
	let weapon = weapons[choice];
	return [result, weapon];
};

const victoryPhrases = () => {
	let options = [
		`Get some of ${scissors ? "these" : "this"} ${chosen()}!`,
		"Keep it up!",
		"You got him!",
		"You're a killer!",
		'<i class="icon fa-solid fa-face-smile-wink"></i>',
		'<i class="icon fa-solid fa-face-laugh-beam"></i>',
		'<i class="icon fa-solid fa-face-laugh-wink"></i>',
		'<i class="icon fa-solid fa-face-grin-wide"></i>'
	];
	let choice = Math.floor(Math.random() * options.length);
	let result = options[choice];
	return result;
};

const lossPhrases = () => {
	let options = [
		"Oops...",
		'<i class="icon fa-solid fa-face-frown"></i>',
		"We'll get'em next time...",
		`${chosen()[0].toUpperCase() + chosen().slice(1, chosen().length)
		}, really?...`,
		'<i class="icon fa-solid fa-face-frown-open"></i>',
		'<i class="icon fa-solid fa-face-meh"></i>',
		'<i class="icon fa-solid fa-face-frown-open"></i>'
	];
	let choice = Math.floor(Math.random() * options.length);
	let result = options[choice];
	return result;
};

function decision() {
	if (!rock && !paper && !scissors) {
		return "Choose Your Weapon!";
	}
	let comp = compChoice();
	let victory = victoryPhrases();
	let loss = lossPhrases();
	if (
		(hs === 1 && rock && comp[0] === "Scissors") ||
		(hs === 1 && paper && comp[0] === "Rock") ||
		(hs === 1 && scissors && comp[0] === "Paper")
	) {
		play.style.display = "none";
		document.querySelector(".reset").style.display = "block";
		hs--;
		changeWidth();
		document.querySelector(".weapons").style.visibility = "hidden";
		document.querySelector(".weapons").style.opacity = 0;
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "0.5";
		document.querySelector(".user").style.opacity = "1";
		return "You Are Victorious!";
	}
	if (
		(cs === 1 && rock && comp[0] === "Paper") ||
		(cs === 1 && paper && comp[0] === "Scissors") ||
		(cs === 1 && scissors && comp[0] === "Rock")
	) {
		play.style.display = "none";
		document.querySelector(".reset").style.display = "block";
		cs--;
		changeWidth();
		document.querySelector(".weapons").style.visibility = "hidden";
		document.querySelector(".weapons").style.opacity = 0;
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "1";
		document.querySelector(".user").style.opacity = "0.5";
		return "Computer Won...";
	}
	if (rock && comp[0] === "Paper") {
		document.querySelector(".play").style.animation = "loss 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "1";
		document.querySelector(".user").style.opacity = "0.5";
		cs--;
		changeWidth();
		return loss;
	} else if (rock && comp[0] === "Scissors") {
		document.querySelector(".play").style.animation = "win 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "0.5";
		document.querySelector(".user").style.opacity = "1";
		hs--;
		changeWidth();
		return victory;
	} else if (paper && comp[0] === "Scissors") {
		document.querySelector(".play").style.animation = "loss 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "1";
		document.querySelector(".user").style.opacity = "0.5";
		cs--;
		changeWidth();
		return loss;
	} else if (paper && comp[0] === "Rock") {
		document.querySelector(".play").style.animation = "win 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "0.5";
		document.querySelector(".user").style.opacity = "1";
		hs--;
		changeWidth();
		return victory;
	} else if (scissors && comp[0] === "Paper") {
		document.querySelector(".play").style.animation = "win 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "0.5";
		document.querySelector(".user").style.opacity = "1";
		hs--;
		changeWidth();
		return victory;
	} else if (scissors && comp[0] === "Rock") {
		document.querySelector(".play").style.animation = "loss 1s";
		document.querySelector(".comp").innerHTML = comp[1];
		document.querySelector(".comp").style.opacity = "1";
		document.querySelector(".user").style.opacity = "0.5";
		cs--;
		changeWidth();
		return loss;
	} else {
		document.querySelector(".play").style.animation = "tie 1s";
		let selected = document.querySelector(".user").innerHTML;
		document.querySelector(".comp").innerHTML = selected;
		document.querySelector(".comp").style.opacity = "1";
		document.querySelector(".user").style.opacity = "1";
		return "Tie";
	}
}

document.querySelector(".play").addEventListener("click", () => {
	color = true;
	document.getElementById("text").style.opacity = 1;
	document.getElementById(
		"text"
	).innerHTML = `<span class="result">${decision()}</span>`;
	rock = false;
	paper = false;
	scissors = false;
	color = false;
	removeBorderBottom();
});

document.querySelector(".reset").addEventListener("click", () => {
	color = false;
	rock = false;
	paper = false;
	scissors = false;
	color = false;
	hs = 5;
	cs = 5;
	changeWidth();
	removeBorderBottom();
	document.getElementById(
		"text"
	).innerHTML = `<span class="result">${""}</span>`;
	document.querySelector(".play").style.display = "block";
	document.querySelector(".reset").style.display = "none";
	document.querySelector(".weapons").style.visibility = "visible";
	document.querySelector(".weapons").style.opacity = 1;
	document.querySelector(".user").innerHTML = "";
	document.querySelector(".comp").innerHTML = "";
});