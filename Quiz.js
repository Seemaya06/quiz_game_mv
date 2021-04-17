class Quiz{
    constructor(){
     //this.gameState = 0;

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
          gameState = data.val();})
    }
    update(state){
       database.ref('/').update({
         gameState: state
       });
    }

    async start(){
        if(gameState === 0){
          contestant = new Contestant();  
          var contestantCountRef = await database.ref("contestantCount").once("value"); 
          if(contestantCountRef.exists()){
             contestantCount = contestantCountRef.val();
             contestant.getCount();
             }  
          question = new Question();
          question.display();
        }
    }

    display(){

    
    }
     
    play()
    {
      // Question.hidden();
      var title = createElement("h4");
      title.html("Results of Quiz");
      title.position(130,235);
      background("yellow");
      Contestant.getcontestantInfo();
      if(allContestants != undefined)
      {
          text("*NOTE YOUR NAME WILL BE IN GREEN IF YOUR ANSWER IS RIGHT",270, 260);
          var y= 260;
          for(var cnt in allContestants)
          {
            y=y+20;
            
              var correctAns = "2";
              if(correctAns === allContestants[cnt].answer)
              {
                  fill("green");
              }
              else 
              {
                fill("red");
              }
              text(allContestants[cnt].name + " : " +allContestants[cnt].answer,130, y);
          }
      }
    }
}