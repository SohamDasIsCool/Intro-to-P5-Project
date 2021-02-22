function preload() {
}

function setup() {
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

setInterval(function(){
    x=Math.floor(Math.random()*5);
    if(x==1){
tint("red");
    }
if(x==2){
tint("blue");
    }
if(x==3){
tint("yellow");
    }
if(x==4){
    tint("green");
}
},50);

function draw() {
    image(video,0,0,640,480);
    
}

function take_snapshot(){
    save('tinted_background.png');
}