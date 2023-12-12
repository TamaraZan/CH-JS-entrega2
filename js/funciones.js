function estaEn(buscado, array) {
    return array.some((item) => item == buscado);
} 
function ingresaCategoriaValida() {
    let categoria;
    do {
        categoria = prompt("Elegí la categoría para la pregunta de esta ronda: geografia, historia, entretenimiento, ciencia. O elegí 'aleatorio'.");
    } while (!estaEn(categoria, categoriasValidas))
    return categoria;
}
function ingresaRespuestaValida(pregunta) {
    let respuesta;
    do {
        respuesta = Number(prompt(`Categoria: ${pregunta.categoria}. \nPregunta: ${pregunta.pregunta}\nIngresá el número de tu respuesta: \n0. ${pregunta.opciones[0]}\n1. ${pregunta.opciones[1]}\n2. ${pregunta.opciones[2]}\n3. ${pregunta.opciones[3]}`));
    } while (!estaEn(respuesta, respuestasValidas))
    return respuesta;
}
function elegirPregunta(categoria) {
    let pregPosibles;
    if(categoria == "aleatorio") {
        pregPosibles = preguntas;
    } else {
        pregPosibles = preguntas.filter((preguntas) => categoria == preguntas.categoria);
    }
    return pregPosibles[Math.floor(Math.random() * pregPosibles.length)];
}
