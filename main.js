leftWristx = 0;
rightWristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("LODED boii");
}

function draw(){
    background('#969A76');
    textSize(difference);
    fill("orange");
    text('WhiteHat', 50, 400);
}

function gotPoses(results){
    console.log('ya lalallalal');

    if(results.length > 0){

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}