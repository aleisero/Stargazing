//set a random seed to ensure that the BG stars do not move every frame
var r = Math.random();

function setup() {
	createCanvas(640,480);
	
	//turn off the draw() loop so that the background can be redrawn on command rather than every frame
	noLoop();
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
	
	print('draw');
}


function mousePressed() {
		//variables for shooting star
		var starX = mouseX;
		var starY = mouseY;
	
		//reset randomSeed for trajectory of each shooting star so each is different
		//it is set to a random range
		//randomSeed(random(34,32453));
	
		var trajX = random(-1, 1);
		var trajY = random(-1, 1);
		
		let j = 200;
		while (j > 0) {
			//draw the star
			ellipse(starX, starY, 2, 2);
			print('draw shooting star');
			
			//move the star
			starX+=trajX;
			starY+=trajY;
			
			print('frameCount = ' + frameCount);
			
			//update the position and redraw star and BG based on frameCount
			if (frameCount % 50 == 0) {
				print('frameCount % 50 == 0');
				//redraw BG
				redraw();
				//redraw star
				ellipse(starX, starY, 2,2);
			}
			
			//redraw the star
			ellipse(starX, starY, 2,2);
			
			//increment while loop
			j-=1;
			
			//redraw the BG from the draw() function
			//redraw();
			//print('redraw BG');
		}
		
		print('mousePressed function done');
}

	
