let contador = 0;

let texto1Actual;
let texto2Actual;

let solo = false;
let muertos = false;
let robot = false;
let frankenstein = false;
let pandemia = false;
let fin = false;

let izquierda;
let derecha;

let respt1;
let respt2;
let respt3;
let respt4;
let respt5;
let respt6;
let respt7;
let respt8;

let preguntas = [
    {
        respuesta1: 'Un profesor con buena actitud que no sepa explicar.',
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

btn1.addEventListener('click', function (event) {
    if (contador < 15) {
        cambiarTexto();
        contador++;
    } else {
        //window.location.href = './final.html';
    }

    izquierda = event.target.getAttribute('class');

    validacion();

});

btn2.addEventListener('click', function (event) {
    if (contador < 15) {
        cambiarTexto();
        contador++;
    } else {
        window.location.href = './final.html';
    }

    derecha = event.target.getAttribute('class');

    if (contador == 13 && derecha == 'contenido__respuesta2') {
        robot = true;
        myFunction(robot);
    } else if (contador == 14 && derecha == 'contenido__respuesta2') {
        muertos = true;
        myFunction(muertos);
    } else if (contador == 15 && derecha == 'contenido__respuesta2') {
        pandemia = true;
        myFunction(pandemia);
    }
});

function myFunction(bye) {
    //console.log(bye);
    bye = true;
}

console.log(frankenstein);
console.log(solo);
console.log(fin);

function elfran() {
    if (frankenstein) {
        console.log("no funcionará");
    }
}

elfran();


function validacion() {
    if (contador == 13 && izquierda == 'contenido__respuesta1') {
        frankenstein = true;
        myFunction(frankenstein);
        console.log("hola",frankenstein);
    } else if (contador == 14 && izquierda == 'contenido__respuesta1') {
        solo = true;
        myFunction(solo);
        console.log("hola",solo);
    } else if (contador == 15 && izquierda == 'contenido__respuesta1') {
        fin = true;
        myFunction(fin);
        console.log("hola",fin);
    }

    if (frankenstein == true && solo == true && fin == true) {
        console.log("no funcionará");
    }    
}