NoseX=0;
NoseY=0;

function preload() {
    moustache=loadImage("https://postimg.cc/t1FsDWkp");
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,300,300);
   image(moustache,NoseX,NoseY,40,40);
}

function take_snapshot() {
    save('Xmoutache_imageD.png');
}

function modelLoaded() {
    console.log('PoseNet initialized');
}

function gotPoses(results) {
    if(results.length>0) {
    console.log(results);
    NoseX=results[0].pose.nose.x-15;
    NoseY=results[0].pose.nose.y-15;
    console.log('nose x='+NoseX);
    console.log('nose y='+NoseY);
    }
}