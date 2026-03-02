const diasContainer = document.getElementById("dias");
const mesActualTexto = document.getElementById("mesActual");
const hoy = new Date();
const año = hoy.getFullYear();
const mes = hoy.getMonth();

const nombresMeses = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

mesActualTexto.innerText = nombresMeses[mes] + " " + año;

const diasEnMes = new Date(año, mes + 1, 0).getDate();
let diaSeleccionado = null;

// Ajuste para no modificar el objeto original "hoy"
const hoyComparacion = new Date();
hoyComparacion.setHours(0,0,0,0);

for (let i = 1; i <= diasEnMes; i++) {

  const fecha = new Date(año, mes, i);
  const div = document.createElement("div");

  div.classList.add("day");
  div.innerText = i;

  if (fecha < hoyComparacion) {
    div.classList.add("disabled");
  } else {
    div.addEventListener("click", function() {

      document.querySelectorAll(".day")
        .forEach(d => d.classList.remove("selected"));

      div.classList.add("selected");
      diaSeleccionado = i;

    });
  }

  diasContainer.appendChild(div);
}

document.getElementById("confirmar").addEventListener("click", function() {

  const hora = document.getElementById("hora").value;

  if (diaSeleccionado === null || hora === "") {
    alert("Seleccione un día disponible y un horario.");
    return;
  }

  alert(
    "Turno confirmado para el " +
    diaSeleccionado +
    " de " +
    nombresMeses[mes] +
    " a las " +
    hora
  );

});