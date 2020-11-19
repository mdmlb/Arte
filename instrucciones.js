const btnStart = document.querySelector('.instrucciones__button');

function preload() {
    sonido = loadSound('./../../data/FINAL_01-01.mp3');
}

function setup() {
    sonido.setVolume(30);
    sonido.loop();
}


btnStart.addEventListener("click", function () {
    window.location.href = './pregunta.html';
});