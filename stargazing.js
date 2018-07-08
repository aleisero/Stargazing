//ShootingStar class
class ShootingStar() {
	//each instance of the shootingStar class has an ellipse
	var starX;
	var starY;
	var trajX;
	var trajY;

	//ShootingStar constructor
	ShootingStar(){
	starX = mouseX;
	starY = mouseY;
	trajX = random(-10, 10);
	trajY = random(-10, 10);
	}
}

function setup() {
	//set variables
	var numStars = 800;
	let i = 0;
	
	createCanvas(640,480);
	//background color of night sky - navy blue
	background(0, 51,102);
	print('made bg');
  
	//while loop to create numStars number of stars
	while (i < numStars) {
		//get random X and Y cooridinates for every star
		//place every star
		let x = random(0, 640);
		let y = random(0, 480);
		noStroke();
		fill(255,255,255);
		ellipse(x, y, 2,2);
		print('made star ' + i);
		i++;
	}
}

function draw() {
	//when mouse is pressed, create an instance of the shootingStar class
	if (mouseIsPressed) {
		//create an instance of the shootingStar class
		ShootingStar star = new ShootingStar();
	}
}