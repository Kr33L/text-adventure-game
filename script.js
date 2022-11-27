const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let hearts = 3;
let room = 0;
let inventory = [];

function createRoom(text, question, answers) {
	text = context.fillText(text, 10, 200);
	question = context.fillText(question, 10, 250);
	answers = context.fillText(answers, 10, 300);
}

function draw() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";
	context.font = "40px Helvetica";
	context.fillText("Hearts: " + hearts, 10, 50);
	context.fillText("Room: " + room, 10, 100);
	context.fillText("Inventory: " + inventory, 10, 150);
}

function update() {
  //game over reset
	if (hearts <= 0) {
		room = 0;
		hearts = 3;
		inventory = [];
	}
	if (room === 0) room = 1;
	if (room === 1) createRoom("You are in a room with a table and a chair", "What do you do?", ["sit", "stand", "lie down"]);
	if (room === 2) createRoom("You are in a room with a chair and a table", "What do you do?", ["sit", "stand", "lie down"]);
	if (room === 3) createRoom("You are in a room with a bed and a chair", "What do you do?", ["sit", "stand", "lie down"]);
	if (room === 4) createRoom("You are in a room with a table and a bed", "What do you do?", ["sit", "stand", "lie down"]);
	if (room === 5) createRoom("You are in a room with a pot of gold", "What do you do?", ["take it", "leave it"]);
	if (room === 6) createRoom("You win!", "You have reached the end of the game", ["play again"]);
	if (room === 7) room = 1;
}

function playerInput(e) {
	if (e.key === "ArrowLeft") room--;
	if (e.key === "ArrowRight") room++;
}

window.addEventListener("keydown", playerInput);

function loop() {
	draw();
	update();
	requestAnimationFrame(loop);
}

loop();
