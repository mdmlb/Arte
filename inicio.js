const btnStart = document.querySelector('.inicio__button');

function preload() {
    sonido = loadSound('../resources/inicio.mp3');
}

function setup() {
    sonido.setVolume(30);
    sonido.loop();
}

btnStart.addEventListener("click", function () {
    window.location.href = './instrucciones.html';
});
