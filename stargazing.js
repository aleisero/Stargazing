//Stargazing by Amanda Leiserowitz
//an interactive constellation-drawing program
//the user is given a random sky to connect stars upon
//every 10 seconds, the sky and drawings are reset

function makeSky() {
	//set variables
	var numStars = 800;
	let i = 0;
	
	//background color of night sky - navy blue
	background(0, 51,102);
	
	//while loop to create numStars number of stars
	while (i < numStars) {
		//get random X and Y cooridinates for every star
		//place every star
		let x = random(0, 640);
		let y = random(0, 480);
		noStroke();
		fill(255,255,255);
		ellipse(x, y, 2,2);
		i++;
	}
}

function setup() {
	createCanvas(640,480);
	makeSky();
}

function draw() {
	//constellation object literal
 	var constellation = {
		x : mouseX,
		y : mouseY,
		trajX : random(-1, 1),
		trajY : random(-1, 1)
	};
	
	if (mouseIsPressed) {
		//draw transparent constellation connections
		fill(255,255,255,50);
		ellipse(constellation.x, constellation.y, 2, 2);
	}
	
	//check every frame, adapted from the following link
	//https://forum.processing.org/one/topic/how-to-perform-an-action-every-x-seconds-time-delays.html
	if (frameCount % 600 == 0) {
		//redraw sky
		makeSky();
		}	
}