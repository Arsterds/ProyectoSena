console.log("Página de formulario cargada correctamente 🚀");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('miFormulario');
  const mensaje = document.getElementById('mensajeExito');

  if (!form) {
    console.error("❌ No se encontró el formulario en el DOM.");
    return;
  }

  form.addEventListener('submit', event => {
    event.preventDefault(); // Evita recargar la página

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      console.log("⚠️ Formulario inválido, faltan campos.");
      return;
    }

    // Si pasa la validación
    form.classList.remove('was-validated');
    form.reset();
    mensaje.classList.remove('d-none');
    console.log("✅ Formulario enviado correctamente.");

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
      mensaje.classList.add('d-none');
    }, 3000);
  });
});


