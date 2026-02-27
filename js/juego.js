// =============================
// TRIVIA GARBO - Dermocosmética
// =============================

let preguntas = [
{
texto: "¿Cuál es el eje central del trabajo profesional en Garbo?",
opciones: [
"La estética decorativa",
"La dermocosmética",
"El maquillaje artístico"
],
correcta: 1
},
{
texto: "¿Qué aspecto se analiza antes de definir un tratamiento?",
opciones: [
"Solo el tipo de producto disponible",
"El estado actual de la piel y antecedentes",
"La edad del paciente únicamente"
],
correcta: 1
},
{
texto: "¿Qué estimula el Dermapen en la piel?",
opciones: [
"La producción de colágeno y elastina",
"La pigmentación superficial",
"La resequedad controlada"
],
correcta: 0
},
{
texto: "¿Qué genera la radiofrecuencia en la dermis?",
opciones: [
"Enfriamiento superficial",
"Ondas electromagnéticas que producen calor controlado",
"Vibración mecánica externa"
],
correcta: 1
},
{
texto: "¿Qué se prioriza por encima de cualquier resultado estético inmediato?",
opciones: [
"La rapidez del tratamiento",
"La salud cutánea",
"La tendencia del momento"
],
correcta: 1
},
{
texto: "¿Qué diferencia a Garbo de un espacio estético convencional?",
opciones: [
"Uso exclusivo de promociones",
"Enfoque integral con diagnóstico previo y seguimiento",
"Aplicación de tratamientos estandarizados"
],
correcta: 1
},
{
texto: "¿Cuál es el objetivo del peeling estacional?",
opciones: [
"Deshidratar la piel",
"Estimular la renovación celular de forma controlada",
"Cambiar el tono natural de la piel"
],
correcta: 1
},
{
texto: "¿Qué caracteriza la experiencia Garbo durante la sesión?",
opciones: [
"Procedimientos rápidos sin explicación",
"Espacio de diálogo, información clara y acompañamiento",
"Aplicación automática de protocolos fijos"
],
correcta: 1
},
{
texto: "¿Qué permite la dermoabrasión con punta de diamante?",
opciones: [
"Eliminar células muertas y mejorar textura",
"Cambiar la estructura genética de la piel",
"Eliminar arrugas profundas en una sesión"
],
correcta: 0
},
{
texto: "¿Qué idea resume la filosofía de Garbo?",
opciones: [
"La estética como lujo superficial",
"La belleza basada en cuidado consciente y conocimiento técnico",
"La prioridad en resultados inmediatos"
],
correcta: 1
}
];

// =============================
// VARIABLES DE ESTADO
// =============================

let jugador3 = { nombre: "", puntos: 0, correctas: 0, incorrectas: 0 };
let indicePregunta = 0;
let juegoActivo = false;

// =============================
// ELEMENTOS DOM
// =============================

const inputNombre3 = document.getElementById("nombre3");
const btnComenzar3 = document.getElementById("comenzar3");
const preguntaContainer = document.getElementById("pregunta-container");
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesDiv = document.getElementById("opciones");
const btnSiguiente = document.getElementById("siguiente");
const resultadoDiv3 = document.getElementById("resultado3");
const toggleInstrucciones = document.getElementById("toggle-instrucciones");

// =============================
// FUNCIONES
// =============================

function mezclarArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function actualizarContador() {
    document.getElementById("contador").innerHTML =
        `Pregunta ${indicePregunta + 1} de ${preguntas.length}
         | ✔️ ${jugador3.correctas}
         | ❌ ${jugador3.incorrectas}`;
}

function mostrarPregunta() {
    let pregunta = preguntas[indicePregunta];
    preguntaTexto.textContent = pregunta.texto;

    opcionesDiv.innerHTML = "";

    pregunta.opciones.forEach((opcion, index) => {
        let btn = document.createElement("button");
        btn.textContent = opcion;
        btn.classList.add("btn", "btn-outline-dark", "w-100", "mb-2");
        btn.addEventListener("click", () => seleccionarRespuesta(index));
        opcionesDiv.appendChild(btn);
    });

    btnSiguiente.disabled = true;
    actualizarContador();
}

function seleccionarRespuesta(indiceElegido) {

    let pregunta = preguntas[indicePregunta];
    let botones = opcionesDiv.querySelectorAll("button");

    botones.forEach((btn, i) => {
        btn.disabled = true;

        if (i === pregunta.correcta) {
            btn.classList.remove("btn-outline-dark");
            btn.classList.add("btn-success");
        } 
        else if (i === indiceElegido) {
            btn.classList.remove("btn-outline-dark");
            btn.classList.add("btn-danger");
        }
    });

    if (indiceElegido === pregunta.correcta) {
        jugador3.puntos++;
        jugador3.correctas++;
    } else {
        jugador3.incorrectas++;
    }

    btnSiguiente.disabled = false;
    actualizarContador();
}

function siguientePregunta() {
    indicePregunta++;
    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        finDelJuego();
    }
}

function finDelJuego() {
    preguntaContainer.style.display = "none";

    juegoActivo = false;
    btnComenzar3.disabled = false;
    inputNombre3.disabled = false;

    resultadoDiv3.innerHTML = `
        <h3>¡Juego terminado!</h3>
        <p>${jugador3.nombre}, tu puntaje final es:</p>
        <h4>${jugador3.puntos} / ${preguntas.length}</h4>
        <button class="btn btn-dark mt-3" onclick="reiniciar()">Jugar de nuevo</button>
    `;
}

function reiniciar() {
    jugador3 = { nombre: "", puntos: 0, correctas: 0, incorrectas: 0 };
    indicePregunta = 0;
    juegoActivo = false;

    preguntas = mezclarArray(preguntas);

    btnComenzar3.disabled = false;
    inputNombre3.disabled = false;

    resultadoDiv3.innerHTML = "";
    preguntaContainer.style.display = "block";

    mostrarPregunta();
}

// =============================
// EVENTOS
// =============================

btnComenzar3.addEventListener("click", () => {

    if (juegoActivo) return;

    jugador3.nombre = inputNombre3.value.trim() || "Jugador";

    juegoActivo = true;
    btnComenzar3.disabled = true;
    inputNombre3.disabled = true;

    preguntas = mezclarArray(preguntas);

    preguntaContainer.style.display = "block";
    resultadoDiv3.innerHTML = "";

    mostrarPregunta();
});

btnSiguiente.addEventListener("click", siguientePregunta);

// =============================
// INSTRUCCIONES
// =============================

toggleInstrucciones.addEventListener("click", () => {

    const instrucciones = document.getElementById("instrucciones");

    if (instrucciones.style.display === "none") {
        instrucciones.style.display = "block";
        toggleInstrucciones.textContent = "Ocultar instrucciones";
    } else {
        instrucciones.style.display = "none";
        toggleInstrucciones.textContent = "Ver instrucciones";
    }
});