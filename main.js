let cnvWidth, cnvHeight;
var video, song;
let isPlaying = false;

function preload() {
    cnvWidth = windowWidth - 440;
    cnvHeight = cnvWidth * 3 / 4;
    // console.log(cnvWidth, cnvHeight);
	
	song = loadSound("music.mp3")
}

function setup() {
    var canvas = createCanvas(cnvWidth, cnvHeight);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, cnvWidth, cnvHeight);
}

function play() {
    let btn = document.getElementById("play");
    if (!isPlaying) {
        song.play();
        isPlaying = true;
        btn.innerHTML = '<i class="fa-solid fa-stop"></i>';
        btn.className = btn.className.replaceAll("success", "danger");
    } else {
        song.stop();
        isplaying = false;
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        btn.className = btn.className.replaceAll("danger", "success");
    }
}
