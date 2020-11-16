const db = firebase.firestore();
const preguntasRef = db.collection('preguntas');

const btn1 = document.querySelector('.contenido__respuesta1');
const btn2 = document.querySelector('.contenido__respuesta2');

let text1 = document.querySelector('.contenido__opcion1');
let text2 = document.querySelector('.contenido__opcion2');

let contador = 0;


btn1.addEventListener('click', function () {
    contador++;
    console.log("hola1", contador);
});

btn2.addEventListener('click', function () {
    contador++;
    console.log("hola2", contador);
});

function renderMessage() {
    //const pregunta = snapshot.data();

    //text1.innerText = pregunta.respuesta1;
    //text2.innerText = pregunta.respuesta2;
}

preguntasRef.doc(""+contador).get().then(function (snapshot) {
    const pregunta = snapshot.data();

    //text1.innerText = pregunta.respuesta1;
    //text2.innerText = pregunta.respuesta2;

    text1.innerText = pregunta.respuesta1;
});


function getMessages() {
    switch (contador) {
        case 0:
            nose();
            break;

        case 1:

            break;

        case 2:

            break;
    }

}

getMessages();

function nose() {
    preguntasRef
        .onSnapshot(function (querySnapshot) {
            const objects = [];
            querySnapshot.forEach((doc) => {
                const obj = doc.data();
                obj.id = doc.id;
                objects.push(obj);
                console.log(`${doc.id} => ${doc.data()}`);
            });
            renderMessage(objects);
        });
}

function getNumberItems (){
    bagRef.doc(userInfo.uid).get().then((doc) => {
        if(doc.exists){
            numberBag.innerHTML = `<strong>Products on the bag: </strong>${doc.data().products.length}`;
        }

      });
}