alert("Quiz!!")
const cantRondas = Number(prompt("¿Cuántas rondas querés jugar?"));
console.log(`Jugando ${cantRondas} rondas:`)
let cantVictorias = 0;

for(let i = 1; i<=cantRondas; i++) {
    console.log(`------------Ronda ${i}------------`)
    let categoria = ingresaCategoriaValida();
    const pregActual = elegirPregunta(categoria);
    let respuesta = ingresaRespuestaValida(pregActual);
    console.log(`Categoria: ${pregActual.categoria}`)
    console.log(`Pregunta: ${pregActual.pregunta}`);
    console.log(`Elegiste: ${pregActual.opciones[respuesta]}`);
    if(respuesta == pregActual.correcta) {
        alert("Correcto!");
        console.log("Correcto!");
        cantVictorias++;
    } else {
        alert("Incorrecto, la respuesta correcta era " + pregActual.opciones[pregActual.correcta]);
        console.log("Incorrecto, la respuesta correcta era " + pregActual.opciones[pregActual.correcta]);
    }
    console.log("-------------------------------")
}
console.log(`Ganaste ${cantVictorias} ${cantVictorias==1? "vez":"veces"} en ${cantRondas} ronda${cantRondas==1?"":"s"}.`)






// TEMP!!! borrar

//Chequea cantidad de preguntas por categoria
// console.log("nro de ciencia: " + preguntas.filter((preguntas) => "ciencia" == preguntas.categoria).length)
// console.log("nro de geografia: " + preguntas.filter((preguntas) => "geografia" == preguntas.categoria).length)
// console.log("nro de historia: " + preguntas.filter((preguntas) => "historia" == preguntas.categoria).length)
// console.log("nro de entretenimiento: " + preguntas.filter((preguntas) => "entretenimiento" == preguntas.categoria).length)

//Chequea cantidad de respuestas correctas por posicion
// console.log("correcta en 0: " + preguntas.filter((preguntas) => 0 == preguntas.correcta).length)
// console.log("correcta en 1: " + preguntas.filter((preguntas) => 1 == preguntas.correcta).length)
// console.log("correcta en 2: " + preguntas.filter((preguntas) => 2 == preguntas.correcta).length)
// console.log("correcta en 3: " + preguntas.filter((preguntas) => 3 == preguntas.correcta).length)
