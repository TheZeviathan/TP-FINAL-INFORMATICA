document.addEventListener("DOMContentLoaded", function() {

  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    // 1️⃣ Validar campos vacíos
    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
      alert("Todos los campos deben completarse.");
      return;
    }

    // 2️⃣ Validar que teléfono tenga solo números
    if (!/^[0-9]+$/.test(telefono)) {
      alert("El teléfono debe contener solo números.");
      return;
    }

    // 3️⃣ Validar email básico
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Ingrese un email válido.");
      return;
    }

    // Si todo está correcto
    alert("Mensaje enviado correctamente.");

    // Crear archivo txt
    var contenido =
      "Mensaje desde Garbo\n\n" +
      "Nombre: " + nombre + "\n" +
      "Email: " + email + "\n" +
      "Teléfono: " + telefono + "\n\n" +
      "Mensaje:\n" + mensaje;

    var blob = new Blob([contenido], { type: "text/plain" });
    var enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);
    enlace.download = "mensaje_" + Date.now() + ".txt";
    enlace.click();

    form.reset();

  });

});