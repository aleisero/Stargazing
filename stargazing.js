function setup() {
	//set variables
	var numStars = 800;
	let i = 0;
	
	createCanvas(640,480);
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

function draw() {
	//make a star
	var starX = mouseX;
	var starY = mouseY;
	var trajX = random(-50, 50);
	var trajY = random(-50, 50);;
	
	if (mouseIsPressed) {
		//draw the star
		ellipse(starX, starY, 10,10);
		//move the star
		print('mouse pressed');
		print('starX is ' + starX + ' and starY is ' + starY);
		print('trajX is ' + trajX + ' and trajY is ' + trajY);
		let j = 1000;
		while (j > 0) {
			print('while loop number ' + j);
			starX+=trajX;
			starY+=trajY;
			ellipse(starX, starY, 10,10);
			print('end while loop: starX is ' + starX + ' and starY is ' + starY);
			j-=100;
		}
		print('shootingStar.move done');
	}
}

	
