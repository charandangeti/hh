
function setup() {
    canvas= createCanvas(640, 480);
    canvas.center;
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    
}

function draw( ) {
  
        image(video,70,40,400,250);
      
    let c = color(255, 204, 0);
    fill(c);
    noStroke();
    rect(30, 20, 470, 20);
    rect(30, 20, 20, 280);
    rect(490, 20, 20, 280);
    rect(50, 280, 440, 20);
    let d = color(65);
fill(d);
noStroke();
    circle(30, 30, 60);
    circle(500, 300, 60);
    circle(500, 30, 60);
    circle(30, 300, 60);
}

function take_snapshot() {
    save('ch.png');
}


