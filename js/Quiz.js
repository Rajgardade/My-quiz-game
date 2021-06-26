class Quiz
{
  constructor(){}

  getState()
  {
    var gameStateRef  = database.ref('game_state');
    gameStateRef.on("value",function(data)
                            {
                              gameState = data.val();
                            }
                    );

  }

  update(state)
  {
    database.ref('/').update({  game_state : state  });
  }

  async start()
  {
    if(gameState === 0)
    {
      contestant = new Contestant();
      var playerCountRef = await  database.ref('contestantCount').once("value");
      

      if(playerCountRef.exists())
      {
       contestantCount = playerCountRef.val();
       
        contestant.getCount();
      }

     question = new Question();
      question.display();
    }
  }

  play()
  {
 
    console.log("hi")
    question.hide();
    var y = 200

   
    
        Contestant.getPlayerInfo();

    if(allContestants !== undefined)
    {
   

      for(var plr in allContestants)
      {
       var correctanswer = "1"
       if(correctanswer === allContestants[plr].answer){

        fill("green")
       }
        else {
        fill("red")
       }
       
       y = y + 30

       text(allContestants[plr].name + " : " + allContestants[plr].answer, 200, y )
      }
    }

  }
}