class Question {

    constructor()
     {
      this.q = createElement("h3")
      this.op1 = createElement("h4")

      this.op2= createElement("h4")

      this.op3 = createElement("h4")

      this.op4 = createElement("h4")

      this.input1 = createInput("Enter your Name");
      this.input2 = createInput("Enter your option");

      this.button = createButton('Submit');
    }
    hide()
    {
       this.button.hide()
       this.input1. hide()
       this.input2.hide()
       
  
  
  
    }
  
    display()
    {
      var title = createElement('h2')
      title.html(" My  Quiz Game");
      title.position(130, 0);

      this.q.html("question: what is the powerhouse of the cell?")
      this.q.position(100,20)

      this.op1.html("1.Mitochodria ")
      this.op1.position(100,40)

      
      this.op2.html("2. RER ")
      this.op2.position(100,60)

      
      this.op3.html("3.cell cytoplasm")
      this.op3.position(100,80)

      
      this.op4.html("4.golgi appartus  ")
      this.op4.position(100,100)

     

      this.input1.position(50, 160);
      this.input2.position(300, 160);

      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
  
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
  
        contestant.answer = this.input2.value()


        contestant.update();
        contestant.updateCount(contestantCount);
       
        
      });
  
    }
  }