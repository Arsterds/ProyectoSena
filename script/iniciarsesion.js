console.log("✅ Script de inicio de sesión cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formContacto");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const identificacion = document.getElementById("identificacion").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    // Validar campos obligatorios
    if (!identificacion || !contrasena) {
      alert("❌ Por favor, complete los campos obligatorios.");
      return;
    }

    // Obtener usuario del registro
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (!usuarioGuardado) {
      alert("⚠️ No hay ningún usuario registrado. Por favor, regístrate primero.");
      return;
    }

    // Validar identificación y contraseña
    if (identificacion === usuarioGuardado.identificacion && contrasena === usuarioGuardado.contrasena) {
      alert(`✅ Bienvenido/a ${usuarioGuardado.nombre}. Inicio de sesión exitoso.`);

      // Redirigir después de 1 segundo
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      alert("❌ Identificación o contraseña incorrecta. Intenta de nuevo.");
    }

    // Limpiar formulario
    form.reset();
  });
});

