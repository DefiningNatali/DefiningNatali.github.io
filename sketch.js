let clicks=0;
let yPos = 0;
let song;

function preload() {
  song\= loadSound('audio/2018-04-02_-_Beautiful_Village_-_David_Fesliyan');
}

//The setup function only happens once
function setup() {
   
}

//The draw function happens over and over again
function draw() {
  (map(mouseX, 0, width, 100,400));  
  
}
 
function mouseClicked(){ //start audio with user interaction (mouse click)
   clicks++;
    if (clicks%2==0){
       .stop();
    }
    else{
        osc1.start();
    }
}