// ANIMACIÓN SCROLL
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// BLOQUEAR FECHAS PASADAS + RESERVA

window.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");

  const hoy = new Date().toISOString().split("T")[0];
  dateInput.min = hoy;
});

// BLOQUEAR FECHAS PASADAS
window.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  const hoy = new Date().toISOString().split("T")[0];
  dateInput.min = hoy;
});


// CONFIRMAR RESERVA + ENVIAR A WHATSAPP
function submitBooking() {

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = document.getElementById("people").value;
  const location = document.getElementById("location").value;
  const details = document.getElementById("details").value;

  const phone = "6308194415"; // Número de WhatsApp del negocio (con código de país, sin signos ni espacios)

  const hoy = new Date().toISOString().split("T")[0];

  if (!date || !time || !people || !location) {
    alert("Completa todos los campos obligatorios");
    return;
  }

  if (date < hoy) {
    alert("No puedes seleccionar una fecha pasada");
    return;
  }

  const message = `
📅 Nueva Reserva
📆 Fecha: ${date}
⏰ Hora: ${time}
👥 Personas: ${people}
📍 Lugar: ${location}
📝 Detalles: ${details || "Ninguno"}
  `;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("location");

  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"] // direcciones
  });
});
}