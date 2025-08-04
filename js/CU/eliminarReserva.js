let agendas;
if (typeof module !== 'undefined' && module.exports) {
  agendas = require("../data.js").agendas;
} else {
  agendas = window.agendas;
}
function eliminarReserva(fecha, servicioNombre, barberoNombre, clienteNombre) {
  const idx = agendas.findIndex(r =>
    r.fecha.getTime() === fecha.getTime() &&
    r.servicio.nombre === servicioNombre &&
    r.barbero.nombre === barberoNombre &&
    r.cliente.nombre === clienteNombre
  );
  if (idx >= 0) {
    agendas.splice(idx, 1);
    return "Eliminado con exito";
  }
  return "Reserva no encontrada";
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = eliminarReserva;
}