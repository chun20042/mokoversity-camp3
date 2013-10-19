
  var game=(function(){


    function start(){var myCanvas =document.getElementById("myCanvas");
  var myContext=myCanvas.getContext("2d");

  var size= Math.random();
var color1="#"+Math.random()*255+","+Math.random()*255+","+Math.random()*255; 
  
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

}
return{
  start:start
}
})();
game.start();
