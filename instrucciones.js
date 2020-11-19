const btnStart = document.querySelector('.instrucciones__button');

function preload() {
    sonido = loadSound('./resources/Almost.mp3');
}

function setup() {
    sonido.setVolume(30);
    sonido.loop();
}

btnStart.addEventListener("click", function () {
    window.location.href = './pregunta.html';
});