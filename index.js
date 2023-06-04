
const lP = document.getElementById('leftpaddle')

//objects
function leftPaddle(y){ 
    console.log(lP.style)
    let top = parseInt(lP.style.top, 10);
    lP.style.top = top + y +'px';
    
}
function rightPaddle(){
  
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
        y+=2;
    }
    if(key[38]){
        y-=2;
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






