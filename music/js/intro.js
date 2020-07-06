var song;
function preload() {
  song = loadSound("../music/stadt.mp3");
}

function setup() {
  createCanvas(200, 200);
  song.play();
}
function draw() {}
