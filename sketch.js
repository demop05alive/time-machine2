let startButton
let gameRunning = false
let startTime,stopTime = 0
let timeBetween = 0
let backgroundColor = [246,212,227]
let leniancyRange = 2 //2 seconds
let guessTime = 15 //15 seconds
let lowerBound = guessTime - leniancyRange
let upperBound = guessTime + leniancyRange
let points = 0



function setup(){
  createCanvas(windowWidth,windowHeight)
    startButton = createButton('Click to Start')
}

function draw(){
  background(backgroundColor[0],backgroundColor[1],backgroundColor[2]) //sets the background to the 3 color values in the "backgroundColor" array
  text("millis() = " + int(millis()), 15,30)
  text("leniancyRange = " + leniancyRange, 15, 45)
  text("guessTime = " + guessTime, 15, 60)
  text("startTime = " + startTime, 15, 75)
  text("stopTime = " + stopTime, 15, 90)
  text("timeBetween = " + timeBetween, 15, 105)
  text("lowerBound = " + lowerBound, 15, 120)
  text("UpperBound = " + upperBound, 15, 135)
  text("points = " + points, 15, 150)
  text("hello! obviously, my website is not done as far as aesthetics go, BUT the core gameplay loop", 15, windowHeight -80)
  text("is here at the very least :) The game is to guess the stated time passed and the point of this", 15, windowHeight -65)
  text("is to challenge people's pre-concieved notions of how they process time with the hopes", 15, windowHeight -50)
  text("that they reconsider their relationship with technology and also how they spend their time.", 15, windowHeight -35)
  text("P.S. I left the statistics on here to show a little sneak peak into how the code works :)", 15, windowHeight -20)

  startButton.position(windowWidth/2, windowHeight/2)






  startButton.mousePressed(buttonInteraction);
  if (gameRunning == true){
    text("TIMEPASSING IS PASSING NOW" ,windowWidth/2,windowHeight/2-20)

    
  }
  else{
    text(("your time to aim for is now: " + guessTime + "s"), windowWidth/2, windowHeight/2+25, 100000)
    text("your time was " + round(timeBetween/1000,2) + "s",windowWidth/2-100,windowHeight/2-150)


    
    if (points > 0){
      


    }



  }
}


function buttonInteraction(){
  
  //if the button hasn't been pressed yet, run this
  if (gameRunning == false){ 
    gameRunning = true 
    startTime = int(millis())
    backgroundColor = [250,100,180]
    lowerBound = guessTime-leniancyRange
    upperBound = guessTime+leniancyRange



  }
  //if the button has already been pressed before, ie you push the button to stop the game
  else{
    gameRunning = false
    stopTime = int(millis())
    timeBetween = stopTime-startTime
    backgroundColor = [100,255,255]
    
    if (timeBetween/1000 < upperBound || timeBetween/1000 > upperBound){ 
      points = 0
      backgroundColor = [100,190,100]
    }
    else {points = points+1}
      

    guessTime = int(random(2,16)) //range goes from 2 to 15

  }
}