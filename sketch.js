var canvas;
var gameState=0;
var contestantCount,database,quiz,question,contestant;
var gameS;
var title;
var allContestants;


function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  //question = new Question;

  quiz = new Quiz();
   
  quiz.getState();
  quiz.start();
 

}


function draw(){
  background("pink");


  quiz.display();
  
  if(contestantCount == 4){
    gameState = 1;
  }
  
  if(gameState == 1){ 
     quiz.play();
  }

  drawSprites();
}
