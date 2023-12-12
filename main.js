noseX=0;
nosey=0;

function preload() {
imgNaris=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses); 
}





function gotPoses(results){
  if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-15;
nosey=results[0].pose.nose.y-15;
  }
}




function modelLoaded(){
console.log("posenet foi inicializado");  
}

function draw() {
  image(video,0,0,300,300);
  image(imgNaris,noseX,nosey,40,40);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}