
  var game=(function(){
    var count=0,
    timeout=0;

    function start()
    {var myCanvas =document.getElementById("myCanvas");
  var myContext=myCanvas.getContext("2d");
myCanvas.height=600;
myCanvas.width=600;
  var size= Math.random();
  myContext.strokeStyle="black";
  myContext.fillStyle="black";

  myContext.beginPath();
  myContext.arc(75*size,75*size,40*size,Math.PI*1/2,Math.PI*-1/2,false);
  myContext.closePath();
  myContext.fill();
  myContext.beginPath();
  myContext.arc(75*size,55*size,20*size,Math.PI*1/2,Math.PI*-1/2,true);
  myContext.fill();
  myContext.fillStyle="white";
  myContext.beginPath();
  myContext.arc(75*size,95*size,20*size,Math.PI*1/2,Math.PI*-1/2,false);
  myContext.fill();

  myContext.beginPath();
  myContext.arc(75*size,75*size,40*size,0,Math.PI*2,true);
  myContext.closePath();
  myContext.stroke();
  myContext.fillStyle="white";
  myContext.beginPath();

  myContext.arc(75*size,55*size,5*size,0,Math.PI*2,true);
  myContext.closePath();
  myContext.fill();
  myContext.fillStyle="black";
  myContext.beginPath();
  myContext.arc(75*size,95*size,5*size,0,Math.PI*2,true);
  myContext.closePath();
  myContext.fill();

      if(count <10){
      timeout=setTimeout(start,1000);
      count++;
 console.log(timeout+"&"+count);
      }



}
return{
  start:start
}

function gameover(){

 


}



})();
game.start();
