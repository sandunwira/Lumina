function load() {
	document.getElementById("saltar").addEventListener("click", (function () {
		0 == nivel.muerte ? 250 == gato.y && saltar() : (null != localStorage.getItem("puntuacion") ? localStorage.getItem("puntuacion") < nivel.puntacion && (localStorage.setItem("puntuacion", nivel.puntacion), nivel.maximo = nivel.puntacion) : (localStorage.setItem("puntuacion", nivel.puntacion), nivel.maximo = nivel.puntacion), nivel.velocidad = 6, nivel.muerte = !1, papel1.x = ancho + 100, pared.x = ancho + 100, nivel.puntacion = 0)
	})), document.addEventListener("keydown", (function (a) {
		32 == a.keyCode && (0 == nivel.muerte ? 250 == gato.y && saltar() : (null != localStorage.getItem("puntuacion") ? localStorage.getItem("puntuacion") < nivel.puntacion && (localStorage.setItem("puntuacion", nivel.puntacion), nivel.maximo = nivel.puntacion) : (localStorage.setItem("puntuacion", nivel.puntacion), nivel.maximo = nivel.puntacion), nivel.velocidad = 6, nivel.muerte = !1, papel1.x = ancho + 100, pared.x = ancho + 100, nivel.puntacion = 0))
	}))
}
var imgGatito, imgsuelo, imgpapel1, imgpapel2, imgpapel3, imgenchufe, canvas, ctx, ancho = 318,
	alto = 400;

function Imagenes() {
	imgGatito = new Image
	imgsuelo = new Image
	imgpapel1 = new Image
	imgpapel2 = new Image 
	imgpapel3 = new Image
	imgenchufe = new Image
	imgGatito.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAjCAYAAADv0ujUAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4UlEQVRYhe2Yv0/bQBTHP1AYkbx0qqrczBKExJLlEvkPYGEm/AfwD2BZYW1p+Q8C/0Elr1ZyC6WqhGIJMSCGeEizIUsMrYQld0jsOs7FTprSkKpf6Ul353vv3n397t0PeF60gAio/oaOrfu4OrdL/whaQOS6bhSGYSSljChm2k7rWJal1VlLlcVQYnSHMjfK5TIAvV5v6/7+Xttne3u7tLGxgWEYU9u1GcwoFnsOH0cYjiXF9JhYljXSN49hAYh4hjEeHx9L19fXVaADBFM6KgBRqVSM9fX1MbZiprWKQozVpZTpv5L4Yc8ywwLYaJidR7Lxv3RZYukcXss2+L5Pt9vl4eGhyyBLpONXAAeTjO3t7cnNzc2xePQ8jyAIkFKOtCulEEJQKpXGxi+XyxiGQb1eR0qJ4zj14ZoajeFU7Noan6pMWOVo1kE2DrPtOp14/EkZZozhHLQqlYpxcnIysUOW2d7VFd+uvnB6ekoQ/PpRjUYDIQSu6yZ1KSVSyoTR199/8PXjGTtHh2Pj2EzHcCSlnGmFf373Pjp781bLbGzLdV0t01ndaRiuA0nQua470y4EsHN0qGUoDMOkLKUcqRfp5jksSG3V2QWzKKwCTaDmOE7TNE12d3cJwxDLsoABGzoGFoU1hoecOGWkF8dLxNJtHEvtcBOoHR8fd9Kx/NKQzhJdoHt5eRnAy43lpQ6JpcB/h58bS+ew7izRAbi7u9sCjEWfIeLD/9PTUwcIVnL6toDqonOxaZoopQBqQPtVTt8VwAOqSqm/flpTSnFxccHNzU2z3+9/AtpM+dygvd48t0zzVDUJNYBGo9ESQrC/v8+wnnSIrze+73N+fp5rrMiGUgqlFLe3t21AMcdz2cgVCc3lM77u5EmRjYJL8FQMJ/A8D9M042otLjiOU1dKHaTOH00gS/UW8KHIhu/7s7iUiyxbadiZb7ZGv/oHbJCX1nQDptFOlQXFT7UGA5bnscFP73AuXk1d7xsAAAAASUVORK5CYII="
	imgsuelo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyEAAAAGCAYAAADUr5HgAAAACXBIWXMAAAsSAAALEgHS3X78AAAATklEQVR4nO3bMRHAMAwDQLuzQRRaoYaZg6LOkH8EWnU6ZVV9EfEGAADA/1Z29+kQAADARZ7TAQAAgLsoIQAAwKj0CQEAAAYtSwgAADBqA02VBc9/2+BeAAAAAElFTkSuQmCC"
	imgpapel1.src = "data:image/png;base64,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"
	imgpapel2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAjCAYAAABhCKGoAAAACXBIWXMAAAsSAAALEgHS3X78AAADUUlEQVRIie2XXUybVRjHfy99273t27efUMBmaze2xM0ZPxINC/sohpgQm6De+HFhdgF3+EVQ427UxK9ERS9YNBkhFRPnLjTDwJYYjLjEsIyEldVVhvtotyCyUige5prRUi+g5m0RQpReyf/uPM9znt95nvec8+ZIuVyOUqus5IRNyCZkE/I/g8irOTRN8wP+/5g/JYQIF0CWEx8GqK70PCRJ3KP3Z7JZ+WYimQFQlC1lLod9cS2CwWBIaJr2iqxPbrdpu1SLuQ6gZsdO+YOj3V79pJGzQ7z91mtxAKfTafB6ty0ePNRQ3hBsUosBA329t0589fn8jYlJvwxgt2nvqBZzndFoVE58+31lPrCrsyN5PX5tPj8+3NLq++b0GV/ed6r/5MJcakYAFINisSvp2dmZ20BM1jRtsK62du9Hn4bc+qCuzo5kT0937s5Cxpe3jY6OzPR+95MLoLm1zd3c2ubu6uxIHv+ye85V7lEfrN1XUI0kScDS7jp0+erlFbvM769RjCZTpsDm2y4Vx1365ef02PivttHzwyvmOxxOM7DUrgp3ufRk48G4vl0NwSY1FruSvh6/Fte3S1/pqf6T89VV1TmT0ZS2WCzW4nalUrNL7QJ4/ImnHarV6ohGI9Q+cDcAvq3eqWXg32384XQfzz7VBMBdVZ7s8y+86vPV7KL9xZa4x1NVroc88uhj7ouR83duTEwGZADVaqW+Mch9D+9jz557Aejv+3pLHqjXe+9+CIDd6fYUfwO9jvccm4uOjS0AAwXnxOV2U98YBKC+MehYNcM69MxzLfbpxNSfQ+eGG0p2rXzR/dlU+EJkGgiVDFK3P2DdWbOjDAiUDKI/jCW9hfWHsSRacRg3Qq8faYcj7XqTalaURWBwwyDAy0BYb7idTqeEELGNhISFEIP/5CgDiEYj/zrzyNkhMtnsmouVhRCSp6LiwtTvv9kMBll54/2PK9eakNdAX++tMz8OTEejkcTNRPLoalUASLlcDk3T7gc+MSuK68D+AzaAbb7t1ubWtoJ/zNXxS4SOdcYBJicn5iMXo9NASAgRWmtBkv4RlIcBbPVWq7t3763QB4s/Uqahc8Pjy8OwEOKl9VQtrfbS0jQtAASK7UKIN9eTWK+/AFq+LoA2svZjAAAAAElFTkSuQmCC"
	imgpapel3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAkCAYAAAB8DZEQAAAACXBIWXMAAAsSAAALEgHS3X78AAAEXElEQVRIib2Xa0xbZRjH/+dCKdLDrQVDiOsRMl0gGPCysCjSMhbsJNGoiSYbgnOauYuRbfUWMsAPGwmL1ciWGC8ZwhfjPhgHInIpsUQWdTIEUUAqLZTSlULbA6PQmx/W1sOh7S5S/9/Oc/u9zznPe857CL/fj3BiGIYFUB3WeRviOK6eDlO8HgCSk5jtiXclPCr0L9odpMu15qMpis5Il3qiATxeL80wDEIQhmGqAbAZ6dKDNEV54uLixF9+03u3MFF95IBpSv+XjyAIUV7eAx6KosV1jZpNcQBw4vBLtmvWQQUdAHyQn5dblpmZJal+5WhW9n33AwA+bX7f9m3H18vBpL1PPi1pOvd5FgDoJ8Zx4ZNmg9Npp9VHDpiC9nAiJBJJdX5e7snnX6hiyyqeSgw6fr08iBM1ry2sulyyoC1BLF7Yt+9F4uDR49KgTT8xjg+b3psXieK9QtCze0sWTGbLORIAO2syJUxPT7n4ASlpaZBJU9f4Npk0dY1lc8R8m31xEb+N/h535eoQI+yAZbMJAApCIpHU79r5yKsGo5Gam7dknDl9FkpVRWiVhqnJUJI8ZzuCt1Lb2Y533j0JAHi4sMBimDH6LnX/mMmHFBXuAADljWeSlLJeW3dY7liy3UgMJJ85fXbDygxTk3jr+KGlGZM5le/X9nW55sxzwkawZ3cZunt7tKHperBoFwDgcqAL/kr5UpWr1r9q126wafu6NsUBQHdvz7+dhJNSVRECChR2XMOpcn8VWttatBEhW6G+3u+sAM6TsYSw8ntJAIqYQkAQAICYQqan9X4A/VsCcblW5V6vTy60l+5+QgagbksefHJyKtweT3DzbRINAH6fT/RfIARBQCZNg1pdu8Ee2Gc1NIAUt9stC5d8q+I4p8/n9ZFKwb6qHBtBa1uLhgTALi3ZiN6OS3cE0E+Mw2a75ps1m1eEvta2FgBQUiKRaIfd4Xhofs5I/jw44JezOWSq9OaN6SfGoWls8Oj6uzE8MuKmadpT9fKheH7MH8O/2GZmZ3NpACgpLrGPjY1Qf05M0pzTTjJJKT6Kosm6Rs2m6fusWeM3GPRezukgrwwNeQiSIEsVpZbR0WEASOLHThv+9gHoD03XxY5+CQBUPqdasVqtHrfHLX5G9TglhMSL4t0URa0TJEH/8NNIIgCcUh+L1DABAJtGuPViZyIA6Hq68PF5jUPo31n0WPzrb9YmR6rKF8tmEyazRRFxnxSXlaO4rPyWikWS0WjwAqiP6WtFodyTAUAbU0hghGtiCqncXwUAmv/lo7VlkOWV6+Qp9TED37btnm2iqNN1u3Jyy9e/7+meF9o5jts6CIB5juMU4Ryx/fzyIBd0Azpnw9s1ljspoO1sh25A5wTwRqQYwu/3g2GYggSx+ItVlyuff0y9WXHe4a+Q47irUSEAwDBMAYAUAKHjofCYCgDNHzVZTWZLeuBSCQAcx/VHWxAR5XdOwQfy1MBxXH20okL9A62wqQuBQKqFAAAAAElFTkSuQmCC"
	imgenchufe.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAACXBIWXMAAAsSAAALEgHS3X78AAABH0lEQVQokWP8//8/Ay8vrwE3B9uirz9+6TJgAdwcbJe//vgV9/nz5wuMPDw8DgpSIt1BLkaKBamWwtg0TJh9/O3a3WfvP3z+dioTAwODg76GrCguxQwMDAwFqZbCBppyogwMDAlMuBThAhgaHCKnvTx95inD6TNPGRwip71El2dBF7j35LX4u4/f4WyCNhACGDbMbohm2HTg6isoW4ygDe7OKgxMTIzfmZgYv7s7q2DYQLmTGBgYGPLjbORxaWBiYGB48ODp23dbd936ChNUURZiUFEWgivauuvW1ycv3n9hYGC4wAhNSwkKUiLZf//9E8VmKjMT0+sHz95M/fz58wLG////MzAwMDDw8vIaMDAwCOBwyYfPnz9fYGBgYAAA8fFi8yfgy+IAAAAASUVORK5CYII="
}

function iniciar() {
	canvas = document.getElementById("mesadejuego"), ctx = canvas.getContext("2d"), Imagenes(), aleatorio(), puntos()
}

function puntos() {
	null != localStorage.getItem("puntuacion") && (nivel.maximo = localStorage.getItem("puntuacion"))
}

function borrar() {
	canvas.width = ancho, canvas.heigth = alto
}
var alturapiso = 250;

function piso() {
	ctx.drawImage(imgsuelo, 0, 0, 500, 6, -10, alturapiso + 25, 500, 6)
}
var imagenes, random, imprimir, gato = {
		y: alturapiso,
		vy: 0,
		gravedad: 2,
		salto: 25,
		vymax: 9,
		saltando: !1
	},
	nivel = {
		velocidad: 6,
		puntacion: 0,
		muerte: !1,
		maximo: 0
	},
	papel1 = {
		x: ancho + 100,
		y: alturapiso + 5
	},
	pared = {
		x: ancho + 100,
		y: alturapiso - 20
	};

function gatito() {
	ctx.drawImage(imgGatito, 0, 0, 44, 35, 60, gato.y, 45, 45)
}

function aleatorio() {
	imagenes = [imgpapel1, imgpapel2, imgpapel3], random = Math.floor(Math.random() * imagenes.length), imprimir = imagenes[random]
}

function papel() {
	ctx.drawImage(imprimir, 0, 0, 43, 38, papel1.x, papel1.y, 45, 45)
}

function logicapapel1() {
	papel1.x < -1 ? (aleatorio(), papel1.x = ancho + 100, nivel.puntacion++, nivel.puntacion % 10 == 0 && nivel.velocidad++) : papel1.x -= nivel.velocidad
}

function enchufe() {
	ctx.drawImage(imgenchufe, 0, 0, 12, 14, pared.x, pared.y, 12, 14)
}

function logicapared() {
	pared.x < -100 ? pared.x = ancho + 100 : 0 != nivel.velocidad && (pared.x -= nivel.velocidad - 3)
}

function saltar() {
	gato.saltando = !0, gato.vy = gato.salto
}

function gravedad() {
	1 == gato.saltando && (gato.y - gato.vy - gato.gravedad > alturapiso ? (gato.saltando = !1, gato.vy = 0, gato.y = alturapiso) : (gato.vy -= gato.gravedad, gato.y -= gato.vy))
}

function choche() {
	papel1.x >= 60 && papel1.x <= 110 && gato.y >= alturapiso && (nivel.muerte = !0, nivel.velocidad = 0)
}

function puntuacion() {
	ctx.font = "bolder 14pt Verdana", ctx.fillStyle = "#282828", ctx.fillText(`${nivel.puntacion}`, 250, 50), ctx.fillText(`${nivel.maximo}`, 30, 50), 1 == nivel.muerte && (ctx.font = "bolder 20pt Verdana", ctx.fillText("GAME OVER", 75, 190))
}
var FPS = 30;

function play() {
	borrar(), piso(), gravedad(), choche(), puntuacion(), logicapared(), enchufe(), logicapapel1(), papel(), gatito()
}
setInterval((function () {
	play()
}), 1e3 / FPS);