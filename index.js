const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');
context.canvas;

context.font = '50px Arial';
context.fillStyle='green';
context.fillText('0 - 0', 305, 75)


//objects
function leftPaddle(){ 
    context.beginPath();   
    context.fillStyle= "blue";
    context.fillRect(25,200,10,100);
    context.closePath();
}
function rightPaddle(){
    context.beginPath();
    context.fillStyle='red';
    context.fillRect(670,200,10,100);
    context.closePath();
}
function ball(){
    context.beginPath();
    context.fillStyle='white';
    context.arc(350,250,8,0,Math.PI*2);
    context.fill();
    context.closePath();
}
//key movements
//document.addEventListener('keydown',)

//restart button
document.getElementById('reset').addEventListener('mouseover',mouseOver);
function mouseOver(){
    document.getElementById('reset').style.cursor='pointer';
}



leftPaddle();
rightPaddle();
ball();

