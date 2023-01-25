difference = 0;
rightWristX= 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = creatCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = m15.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is intialized! ');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftwrist.x;
        rightWristX = results[0].pose.rightwrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
}

function draw() {
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE7787');
    text('peter', 50, 400);
}