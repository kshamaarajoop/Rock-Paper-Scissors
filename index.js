let Score = 
     JSON.parse(localStorage.getItem('score'));
    
     if(Score === null){
      Score={win : 0,
      Loses : 0,
      Tie : 0}};
      
  
      updatescore();

      //document.querySelector('.js-score').innerHTML=`Wins:${Score.win},Loses:${Score.Loses},Ties:${Score.Tie}`
     
    document.querySelector('.js-rock').addEventListener('click',() => {
      fnplayermove('Rock');
    });
    document.querySelector('.js-paper').addEventListener('click',() => {
      fnplayermove('Paper');
    });
    document.querySelector('.js-sci').addEventListener('click',() => {
      fnplayermove('Scissors');
    });

    document.body.addEventListener('keydown', (event) =>{
      if(event.key === 'r'){
        fnplayermove('Rock');
      }else if(event.key === 'p'){
        fnplayermove('Paper');
      }else if(event.key === 's'){
        fnplayermove('Scissors');
      }
    })
    function fncompmove(){
      let compmove = '';
      const rm = Math.random();
      if (rm >= 0 && rm < 1/3) {compmove = 'Rock';
      } else if (rm >= 1/3 && rm < 2/3) {compmove='Paper';
      } else if (rm >= 2/3 && rm < 1){ compmove='Scissors';}
      return compmove;
      }
    

    function fnplayermove(playermove){
      let compmove = fncompmove();
      let res = '';

      if(playermove === 'Scissors'){
        if (compmove === 'Paper') {res = 'You win';
        }else if(compmove === 'Rock'){res = 'You lose';}else if(compmove === 'Scissors'){res = 'Its a tie';}

      } else if(playermove === 'Paper'){
          if (compmove === 'Paper') {res = 'Its a tie';
          }else if(compmove === 'Rock'){res = 'You win';}else if(compmove === 'Scissor'){res = 'You lose';}

      } else if(playermove === 'Rock'){
          if (compmove === 'Paper') {res = 'You lose';
          }else if(compmove === 'Rock'){res = 'Its a tie';}else if(compmove === 'Scissors'){res = 'You win';}
      

        }
      


      
      if(res==='You win'){
        Score.win = Score.win + 1;
      }else if(res==='You lose'){ Score.Loses = Score.Loses + 1;}else if(res==='Its a tie'){Score.Tie = Score.Tie + 1;}
      //return playermove;

      localStorage.setItem('score', JSON.stringify(Score));

      console.log(`You picked ${playermove} computer picked ${compmove} ${res}`);

      updatescore();


      document.querySelector('.your-result').innerHTML= res;
      document.querySelector('.js-moves').innerHTML=`You-<img src="images/${playermove}.png" class='pmove-icon'> Computer-<img src="images/${compmove}.png" class='pmove-icon'>`;
    }



      function updatescore(){
        document.querySelector('.js-score').innerHTML=`Wins:${Score.win},Loses:${Score.Loses},Ties:${Score.Tie}`;
      }
      
      let autoplay = false;
      let intervalId; 
      function auto(){
        if(!autoplay){
          intervalId = setInterval(()=>{
          const playermove = fncompmove();
          fnplayermove(playermove);
          },1000);
          autoplay = true;
        }else{
          clearInterval(intervalId);
          autoplay = flase;
        }
       
      }

    
