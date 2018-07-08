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
	var starX;
	var starY;
	var trajX;
	var trajY;
	//shootingStar object literal
	var shootingStar = {
		//properties: xy starting position and xy trajectory values
		starX: mouseX,
		starY: mouseY,
		trajX: random(-10, 10),
		trajY: random(-10, 10),
		//move function
		//changes the star's xy by traj xy
		/*move : function() {
			print('starX is ' + starX + ' and starY is ' + starY);
			print('trajX is ' + trajX + ' and trajY is ' + trajY);
			starX+=trajX;
			starY+=trajY;
			print('starX is ' + starX + ' and starY is ' + starY);*/
			//stop moving/delete obj if it has moved far enough
		//}
	};
	
	if (mouseIsPressed) {
		//create a shootingStar object
		//var shootingStar;
		print('mouse pressed');
		shootingStar.starX+=trajX;
		shootingStar.starY+=trajY;
		//print('shootingStar.move done');
	}
}

	
