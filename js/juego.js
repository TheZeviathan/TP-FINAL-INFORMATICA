// =============================
// TRIVIA GARBO - Dermocosmética
// =============================

let preguntas = [
    {
        texto: "¿Qué tipo de productos trabaja Garbo?",
        opciones: ["Maquillaje artístico", "Productos dermocosméticos", "Perfumes importados"],
        correcta: 1
    },
    {
        texto: "¿Qué producto ayuda a proteger la piel del sol?",
        opciones: ["Serum", "Protector Solar FPS 50+", "Tónico facial"],
        correcta: 1
    },
    {
        texto: "¿Quién es la fundadora de Garbo?",
        opciones: ["Fabiana Carrión", "Laura Martínez", "Ana Beltrán"],
        correcta: 0
    },
    {
        texto: "¿Qué producto es ideal para iluminar la piel?",
        opciones: ["Serum Vitamina C", "Crema corporal", "Jabón neutro"],
        correcta: 0
    },
    {
        texto: "¿Qué se prioriza en Garbo?",
        opciones: ["Venta masiva", "Atención personalizada", "Promociones constantes"],
        correcta: 1
    },
    {
        texto: "¿Qué tratamiento se enfoca en el cuidado facial?",
        opciones: ["Tratamiento capilar", "Tratamiento facial hidratante", "Tratamiento deportivo"],
        correcta: 1
    },
    {
        texto: "¿Qué disciplina respalda los productos utilizados?",
        opciones: ["Astrología", "Estudios dermatológicos", "Marketing digital"],
        correcta: 1
    },
    {
        texto: "¿Cuál de estos productos aparece en la lista?",
        opciones: ["Crema Hidratante", "Base líquida profesional", "Sombras de ojos"],
        correcta: 0
    }
];

let jugador3 = { nombre: "", puntos: 0, correctas: 0, incorrectas: 0 };
let indicePregunta = 0;

// ELEMENTOS
const inputNombre3 = document.getElementById("nombre3");
const btnComenzar3 = document.getElementById("comenzar3");
const preguntaContainer = document.getElementById("pregunta-container");
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesDiv = document.getElementById("opciones");
const btnSiguiente = document.getElementById("siguiente");
const resultadoDiv3 = document.getElementById("resultado3");
const toggleConsigna = document.getElementById("toggle-consigna");

// Mezclar preguntas
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
        btn.classList.add("btn", "btn-outline-dark");
        btn.addEventListener("click", () => seleccionarRespuesta(index, btn));
        opcionesDiv.appendChild(btn);
    });

    btnSiguiente.disabled = true;
    actualizarContador();
}

function seleccionarRespuesta(indiceElegido, botonClickeado) {
    let pregunta = preguntas[indicePregunta];
    let botones = opcionesDiv.querySelectorAll("button");

    botones.forEach((btn, i) => {
        btn.disabled = true;
        if (i === pregunta.correcta) {
            btn.classList.remove("btn-outline-dark");
            btn.classList.add("btn-success");
        } else if (i === indiceElegido) {
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
    preguntas = mezclarArray(preguntas);
    resultadoDiv3.innerHTML = "";
    preguntaContainer.style.display = "block";
    mostrarPregunta();
}

// EVENTOS
btnComenzar3.addEventListener("click", () => {
    jugador3.nombre = inputNombre3.value.trim() || "Jugador";
    preguntas = mezclarArray(preguntas);
    preguntaContainer.style.display = "block";
    mostrarPregunta();
});

btnSiguiente.addEventListener("click", siguientePregunta);

toggleConsigna.addEventListener("click", () => {
    const c = document.getElementById("consigna");
    c.style.display = c.style.display === "none" ? "block" : "none";
});