const lP = document.getElementById('leftpaddle');
const rP = document.getElementById('rightpaddle');
const puck =document.getElementById('ball');
const board = document.getElementById('board');
let rightTop = 100;
let leftTop =200;

//objects
function leftPaddle(y){ 
    //console.log(leftTop);
    lP.style.top = leftTop + y +'px';
    console.log(leftTop+y+'px');
    leftTop += y;
}
function rightPaddle(y){
    //console.log(rightTop);
    rP.style.top =rightTop + y + 'px';
    console.log(rightTop+y+'px');
    rightTop += y;
}
function ball(){
}

//key movements

document.addEventListener('keydown', move, false);
document.addEventListener('keydown', moveR, false);
document.addEventListener('keyup', keyUp, false);
var key=[];

function move(e){
    const maxY = 400;
    const minY = 0;
    let y = 0;

    key[e.keyCode]=true;

    if(key[83]){
        y+=20;
    }
    if(key[87]){
        y-=20;
    }
    const newTop =leftTop+y; //adding stopping points for paddles

    if(newTop>maxY){
        y=maxY-leftTop;
    }
    if(newTop<minY){
        y=minY-leftTop;
    }

    e.preventDefault();
    leftPaddle(y);
    //console.log(y)
    
}
function moveR(e){
    const maxY = 297;
    const minY = -102;
    let y = 0;

    key[e.keyCode]=true;

    if(key[40]){
        y+=20;
    }
    if(key[38]){
        y-=20;
    }
    const newTop =rightTop+y; //adding stopping points for paddles

    if(newTop>maxY){
        y=maxY-rightTop;
    }
    if(newTop<minY){
        y=minY-rightTop;
    }

    e.preventDefault();
    rightPaddle(y);
    //console.log(y)
}
function keyUp(e){
    key[e.keyCode]=false;
}


//restart button
document.getElementById('reset').addEventListener('mouseover',mouseOver);
function mouseOver(){
    document.getElementById('reset').style.cursor='pointer';  
}
