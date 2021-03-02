var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star;





function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
   
	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	

	
	
	
   // var starBody_options={
	//	isStatic:true
	  //}
	
	
	

}


function draw() {
  background(bgImg);
  fairy.setCollider("rectangle",480,-40,80, 80);
  

if(star.isTouching(fairy)){
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=0;
	}
	
	//if(keyUp("LEFT_ARROW")){
	//	fairy.velocityX=0;
	//}
	
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=0;
	}
	
	//if(keyUp("RIGHT_ARROW")){
	//	fairy.velocityX=0;
	//}
	
	if(keyDown("DOWN_ARROW")){
		star.velocityY=0;
	}
	
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=0;
	}
	
	//if(keyUp("LEFT_ARROW")){
	//	fairy.velocityX=0;
	//}
	
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=0;
	}
	
	//if(keyUp("RIGHT_ARROW")){
	//	fairy.velocityX=0;
	//}

	star.velocityY=0;
	fairy.velocityX=0;
}

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	//write code here
	if(keyDown("LEFT_ARROW")){
	fairy.velocityX=-6;
}

//if(keyUp("LEFT_ARROW")){
//	fairy.velocityX=0;
//}

if(keyDown("RIGHT_ARROW")){
	fairy.velocityX=6;
}

//if(keyUp("RIGHT_ARROW")){
//	fairy.velocityX=0;
//}

if(keyDown("DOWN_ARROW")){
	star.velocityY=6;
}

if(keyDown("LEFT_ARROW")){
	fairy.velocityX=-6;
}

//if(keyUp("LEFT_ARROW")){
//	fairy.velocityX=0;
//}

if(keyDown("RIGHT_ARROW")){
	fairy.velocityX=6;
}

//if(keyUp("RIGHT_ARROW")){
//	fairy.velocityX=0;
//}

	

}
