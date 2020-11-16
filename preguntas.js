let contador = 0;

let texto1Actual;
let texto2Actual;

let preguntas = [
    {
        respuesta1: 'A un profesor con buena actitud que no sepa explicar.',
        respuesta2: 'Un profesor con mala actitud que explique bien.',
    },
    {
        respuesta1: 'Una clase donde el profesor sólo ponga vídeos.',
        respuesta2: 'Una en donde sólo se coloquen diapositivas.',
    },
    {
        respuesta1: 'Se te vaya el internet en medio de un parcial con un porcentaje muy alto.',
        respuesta2: 'Se te vaya el internet en medio de una exposición final.',
    },
    {
        respuesta1: 'Estar 4 horas sentados viendo clase virtual.',
        respuesta2: 'Estar 4 horas sentado en MIO para llegar a la escuela.',
    },
    {
        respuesta1: 'Leer 140 páginas de un pdf.',
        respuesta2: 'Tener una clase de 6 horas.',
    },
    {
        respuesta1: 'Perder 5 materias.',
        respuesta2: 'Perder el año.',
    },
    {
        respuesta1: 'Preferiría ir a la escuela cuatro días a la semana durante 10 horas.',
        respuesta2: 'Preferiría ir a la escuela cinco días a la semana durante ocho horas.',
    },
    {
        respuesta1: 'Estudiar virtualmente en medio de una tormenta eléctrica.',
        respuesta2: 'Estudiar virtualmente en medio de una ola de calor.',
    },
    {
        respuesta1: 'Prefieres contar calaveras.',
        respuesta2: 'Prefieres contar cuchillos.',
    },
    {
        respuesta1: 'Prefieres que interrumpan tus clases 8 colibríes.',
        respuesta2: 'Prefieres que interrumpan tus clases una colmena de abejas.',
    },
    {
        respuesta1: 'Quedarte atrapado en la escuela mientras hay un apocalipsis zombie.',
        respuesta2: 'Quedarte atrapado en la escuela mientras hay un terremoto.',
    },
    {
        respuesta1: 'Que tu profesor sea frankenstein.',
        respuesta2: 'Que tu profesor sea un robot.',
    },
    {
        respuesta1: 'Ver clase solo.',
        respuesta2: 'Ver clase acompañado por otros niños muertos.',
    },
    {
        respuesta1: 'Ver una clase sobre el fin del mundo.',
        respuesta2: 'Ver una clase sobre pandemias.',
    },
];

const velocidad = 10000;

const text1 = document.querySelector('.contenido__opcion1');
const text2 = document.querySelector('.contenido__opcion2');

function cambiarTexto() {
    if (contador < 14) {
        texto1Actual = preguntas[contador];
        texto2Actual = preguntas[contador];

        text1.innerHTML = texto1Actual.respuesta1;
        text2.innerHTML = texto2Actual.respuesta2;
    }


}

cambiarTexto();

const btn1 = document.querySelector('.contenido__respuesta1');
const btn2 = document.querySelector('.contenido__respuesta2');

btn1.addEventListener('click', function(){
    if(contador < 14){
        cambiarTexto();
        contador++;
    } else {
        window.location.href = './index.html';
    }
});

btn2.addEventListener('click', function(){
    if(contador < 14){
        cambiarTexto();
        contador++;
    } else {
        window.location.href = './index.html';
    }

    if(contador == 10){
    
    }
});
