
  var game=(function(document, $){
    "user strict";
    var count=0,
    timeout,
    x,
    y,
    size,
    mark=0;
    
function start(){
  document.getElementById("main").addEventListener("click",clickEvent,false);
startGame();
}

function get_random_color() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
        return color;
     }

function clickEvent(evt){
var xx=evt.clientX;
var yy=evt.clientY;
 
var tmp =(x-xx)*(x-xx)+(y-yy)*(y-yy);

if(tmp<=size*size){
  var score= 100-size;
  mark += score;
  console.log("clicked"+score);

  }


}

function gameover(){
  console.log("Final:"+mark);
  var api= "http://127.0.0.1:3000/scores?s="+mark;
  $.ajax({url : api});

}


    function startGame()
      {




        var myCanvas =document.getElementById("myCanvas");
    var myContext=myCanvas.getContext("2d");
  myCanvas.height=800;
  myCanvas.width=800;
     size= Math.random()*100;
       x= Math.random()*800;
         y= Math.random()*800 ;
    var color1=get_random_color();
    myContext.strokeStyle=color1;
    myContext.fillStyle=color1;

    myContext.beginPath();
    myContext.arc(x,y,size,Math.PI*2,0,false);
    myContext.closePath();
    myContext.fill();
    

        if(count <10){
          count++;
        timeout=setTimeout(startGame,1000);
        
   console.log(timeout+"&"+count);
        }
        else{
          gameover();
        }



  }
    

    return{
        start:start
          };

  


}(document, $));
game.start();
