const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');
context.canvas;

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

leftPaddle();
rightPaddle();
ball();

//keydown function
/*document.addEventListener('keydown', function(e){
    if (e.repeat) return;
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})*/