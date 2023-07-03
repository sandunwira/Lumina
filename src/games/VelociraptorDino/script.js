let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
let pauseConfig = false;
var velocity = 4;
var time = 1500;
let mandaca1 = document.getElementById("mandaca1");
let mandaca2 = document.getElementById("mandaca2");
let score = 0;
let maxScore = +localStorage.getItem("msc");
if (maxScore == "" || maxScore == null || maxScore == NaN) {
	maxScore = 0;
}
document.getElementById("maxscc").innerHTML = maxScore;
let player = {
	width: 64,
	height: 64,
	x: 20,
	y: 200,
	spr: document.getElementById("dino")
};
let colisionbox1 = {
	width: 30,
	height: 32,
	x: 42,
	y: 0
};
let colisionbox2 = {
	width: 20,
	height: 32,
	x: 45,
	y: player.y + 12
};
let ground = {
	width: cnv.width,
	height: 32,
	x: 0,
	y: 255,
	spr: [document.getElementById("gr1"), document.getElementById("gr2")]
};

let cac = {
	v1: {
		width: 32,
		height: 32,
		y: 232,
		spr: mandaca1
	},
	v2: {
		width: 32,
		height: 64,
		y: 200,
		spr: mandaca2
	}
};
let grs = [];
class gr {
	constructor(me, xy, spi) {
		this.y = me.y;
		this.x = xy;
		this.w = me.width;
		this.h = me.height;
		this.spr = me.spr[spi];
		this.check = true;
	}
	draw() {
		ctx.drawImage(this.spr, this.x, this.y, this.w, this.h);
		ctx.drawImage(this.spr, this.x + this.w, this.y, this.w, this.h);
	}
	move() {
		this.x -= velocity;
		if ((this.x + this.w) / 2 <= 0 && this.check == true) {
			grGenrate(this.x + this.w + this.w);
			this.check = false;
		}
	}
}

let cacs = [];
class cacy {
	constructor(ele) {
		this.w = ele.width;
		this.h = ele.height;
		this.x = 520;
		this.y = ele.y;
		this.spr = ele.spr;
		this.check = true;
	}
	draw() {
		ctx.fillStyle = "black";
		ctx.drawImage(this.spr, this.x, this.y, this.w, this.h);
		ctx.beginPath();
	}
	move() {
		this.x -= velocity;
		if (this.x + this.w <= 0 && this.check == true) {
			score += 1;
			document.getElementById("scc").innerHTML = score;
			if (score > maxScore) {
				maxScore = score;
				localStorage.setItem("msc", score);
				document.getElementById("maxscc").innerHTML = score;
			}
			velocity += 0.1;
			time -= 5;
			console.log(time);
			this.check = false;
		}
	}
}
let status = "stop";
let mg = 56;
function dino(x, y, width, height) {
	//draw ground
	ctx.clearRect(0, 0, cnv.width, cnv.height);
	ctx.fillStyle = "#d37339";
	// ctx.rect(ground.x, ground.y, ground.width, ground.height);
	ctx.fill();
	ctx.beginPath();
	// draw ground spr

	//draw player
	changSpr();
	ctx.fill();
	status = "walk";
	//     ctx.fillStyle = "red";
	//     ctx.rect(
	//         colisionbox1.x,
	//         colisionbox1.y,
	//         colisionbox1.width,
	//         colisionbox1.height
	//     );

	//     ctx.fill();
	//     ctx.beginPath();
	//     ctx.fillStyle = "#d37339";
	//     ctx.rect(
	//         colisionbox2.x,
	//         colisionbox2.y,
	//         colisionbox2.width,
	//         colisionbox2.height
	//     );
	//     ctx.fill();
	ctx.drawImage(player.spr, 0, mg, 64, 64 /*divisao*/, x, y, 64, height);
	ctx.beginPath();
}
let i = 0;
function changSpr() {
	let posys = [56, 112, 167];
	let uposy = 220;
	switch (status) {
		case "stop":
			{
				mg = 64;
			}
			break;
		case "up":
			{
				mg = 256;
			}
			break;
		case "down":
			{
				mg = 192;
			}
			break;
		case "walk":
			{
				i++;
				if (i >= 12) {
					i = 0;
				}
				mg = Math.floor(i / 3) * player.width;
			}
			break;
	}
}
function drawDino() {
	dino(player.x, player.y, player.width, player.height);
}
let playerUp = false;
let playerDown = false;

document.addEventListener("keydown", (e) => {
	if (e.keyCode == "32") {
		playerUp = true;
		if (player.y >= 150) {
			playFx("jump");
		}
	}
});
document.addEventListener("keyup", (e) => {
	if (e.keyCode == "32") {
		playerDown = true;
		playerUp = false;
		if (pauseConfig == true) {
			restart();
			document.getElementById("pause").style.display = "none";
		}
	}
});
cnv.addEventListener("mousedown", (e) => {
	playerUp = true;
	if (player.y >= 200) {
		playFx("jump");
	}
});
document.addEventListener("mouseup", (e) => {
	playerDown = true;
	playerUp = false;
});
cnv.addEventListener("touchstart", (e) => {
	if (player.y >= 200) {
		playFx("jump");
	}
	playerUp = true;
});
document.addEventListener("touchcend", (e) => {
	playerDown = true;
	playerUp = false;
});
function playerMove() {
	if (playerUp == true && playerDown == false) {
		if (player.y >= 70) {
			status = "up";
			player.y -= 6;
		} else {
			playerUp = false;
			setTimeout(() => {
				playerDown = true;
			}, 100);
		}
	} else if (playerDown == true) {
		if (player.y <= 199) {
			player.y += 4;
			status = "down";
		} else {
			playerDown = false;
		}
	}
	colisionbox1.y = player.y + 15;
	colisionbox2.y = player.y + 32;
}
function colision() {
	cacs.forEach((ball) => {
		if (
			colisionbox1.y + colisionbox1.height > ball.y &&
			colisionbox1.y < ball.y + ball.h &&
			colisionbox1.x + colisionbox1.width > ball.x &&
			colisionbox1.x < ball.x + ball.w //||
			// (colisionbox2.y + colisionbox2.height > ball.y &&
			//     colisionbox2.y < ball.y + ball.h &&
			//     colisionbox2.x + colisionbox2.width > ball.x &&
			//     colisionbox2.x < ball.x + ball.w)
		) {
			setTimeout(() => {
				pause(ctx.getImageData(0, 0, 500, 300));
				playFx("dead");
			}, 10);
		}
	});
}

function update() {
	if (pauseConfig == false) {
		colision();
		playerMove();
		drawDino();

		cacs.forEach((func) => {
			func.move();
			func.draw();
		});
		grs.forEach((func) => {
			func.move();
			func.draw();
		});
	} else {
		document.getElementById("pause").style.display = "flex";
	}
	requestAnimationFrame(update, cnv);
}
cacs.push(new cacy(cac.v1));

function generate() {
	setTimeout(() => {
		let v = Math.floor(Math.random() * 2) + 1;
		cacs.push(new cacy(cac["v" + v]));
		generate();
	}, time);
}

function pause(ele) {
	pauseConfig = true;
}

function restart() {
	velocity = 4;
	time = 1500;
	cacs = [];
	pauseConfig = false;
	score = 0;
	document.getElementById("scc").innerHTML = score;
}
let il = 0;
function grGenrate(x) {
	il += cnv.w;
	let y = Math.floor(Math.random() * 2);
	grs.push(new gr(ground, x, y));
}

document.getElementById("btt").onclick = function () {
	if (pauseConfig == true) {
		document.getElementById("pause").style.display = "none";
		restart();
	}
};

let jumpFx = document.getElementById("jump");
let deadFx = document.getElementById("dead");
function playFx(add) {
	switch (add) {
		case "jump":
			jumpFx.currentTime = 0;
			jumpFx.play();

			break;
		case "dead":
			deadFx.currentTime = 0;
			deadFx.play();

			break;
	}
}

grGenrate(0);
generate();
update();