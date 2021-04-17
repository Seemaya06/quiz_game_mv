class Question{
    constructor(){
    this.input = createInput("Answer");
        this.inputN = createInput("Name");
        this.button = createButton('Input');
        this.button.position(330, 230); 
        this.input.position(150,230);
        this.inputN.position(150,210);
    }
    display(){
    var title = createElement("h2");
    title.html("Quiz Game");
    title.position(350,0);

    var question = createElement("h2");
    question.html("As per Bagavadam how many avatars has Lord Vishu taken?");
    question.position(150,60);

    var option1 = createElement("h3");
    var option2 = createElement("h3");
    var option3 = createElement("h3");
    var option4 = createElement("h3");
    option1.html("option 1: 9");
    option1.position(150,100);
    option2.html("option 2 : 10");
    option2.position(150,120);
    option3.html("option 3 : 11");
    option3.position(150,140);
    option4.html("option 4 : 12");
    option4.position(150,160);
   
    var input = createInput("Answer");
    var inputN = createInput("Name");
    var button = createButton('Submit');
    
    button.position(330, 230); 
    input.position(150,230);
    inputN.position(150,210);
    
    button.mousePressed(function(){
        input.hide();
        inputN.hide();
        button.hide();
        contestant.name = inputN.value();
        contestant.answer = input.value();
        contestant.index = contestantCount;
        contestantCount+=1;
        contestant.update();
        contestant.updateCount(contestantCount);
        });

    }
    static hidden(){
        input.hide();
        inputN.hide();
        button.hide();
        title.hide();
    }
}
