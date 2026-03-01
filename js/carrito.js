let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {

  carrito.push({ nombre: nombre, precio: precio });
  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {

  let lista = document.getElementById("listaCarrito");
  let totalSpan = document.getElementById("total");

  lista.innerHTML = "";

  carrito.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}

function generarRecibo() {

  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let contenido = "LISTA DE COMPRA\n\n";

  carrito.forEach(function(item) {
    contenido += item.nombre + " - $" + item.precio + "\n";
  });

  contenido += "\nTOTAL: $" + total;

  let blob = new Blob([contenido], { type: "text/plain" });
  let enlace = document.createElement("a");

  enlace.href = URL.createObjectURL(blob);
  enlace.download = "lista_compra_" + Date.now() + ".txt";
  enlace.click();
}