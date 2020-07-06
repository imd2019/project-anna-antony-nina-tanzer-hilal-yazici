var song;
function preload() {
  song = loadSound("../music/background.mp3");
}

function setup() {
  createCanvas(200, 200);
  song.play();
}
function draw() {}
