const lP = document.getElementById('leftpaddle');
const rP = document.getElementById('rightpaddle');
let rightTop = 100;
let leftTop =200;

//objects
function leftPaddle(y){ 
    console.log(leftTop);
    lP.style.top = leftTop + y +'px';
    console.log(leftTop+y+'px');
    leftTop += y;
}
function rightPaddle(){
  console.log(rightTop);
}
function ball(){
  
}
//key movements

document.addEventListener('keydown', move, false);
document.addEventListener('keyup', keyUp, false);
var key=[];

function move(e){
    let y = 0;
    key[e.keyCode]=true;
    if(key[40]){
        y+=20;
    }
    if(key[38]){
        y-=20;
    }
    e.preventDefault();
    leftPaddle(y);
    console.log(y)
}
function keyUp(e){
    key[e.keyCode]=false;
}
//restart button
document.getElementById('reset').addEventListener('mouseover',mouseOver);
function mouseOver(){
    document.getElementById('reset').style.cursor='pointer';  
}






