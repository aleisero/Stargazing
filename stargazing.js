var r = Math.random(0,100);

function setup() {
	createCanvas(640,480);
}

function draw() {
	//choosing a random seed each time the program runs will ensure that the 
	//stars are redrawn in the same positions each time the program is run
	//even though the stars are redrawn every frame
	randomSeed(r);
	//print('randomSeed is ' + r);
	
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
	
	if (mouseIsPressed) {
		
		//variables for star info
		var starX = mouseX;
		var starY = mouseY;
	
		//reset randomSeed for trajectory of each shooting star so each is different
		randomSeed(random(0,1000));
	
		var trajX = random(-10, 10);
		var trajY = random(-10, 10);
		
		//draw the star
		ellipse(starX, starY, 2,2);
		//move the star
		print('mouse pressed');
		print('starX is ' + starX + ' and starY is ' + starY);
		print('trajX is ' + trajX + ' and trajY is ' + trajY);
		let j = 100;
		while (j > 0) {
			print('while loop number ' + j);
			starX+=trajX;
			starY+=trajY;
			ellipse(starX, starY, 2,2);
			print('end while loop: starX is ' + starX + ' and starY is ' + starY);
			j-=1;
		}
		print('shootingStar.move done');
	}
}

	
