const calificarBarbero = (rating, resena, barberoI, cliente) => {
  if (!cliente || !cliente.value) {
    return "Seleccione un cliente";
  }
  if (!barberoI || barberoI.value == 0) {
    return "Seleccione un barbero";
  }
  if (!rating || !rating.value) {
    return "Ingrese una calificación";
  }
  if (!resena || !resena.value) {
    return "Ingrese una reseña";
  }

  if (FORM_CALIFICACION.reportValidity()) {
    const calificacion = new Calificacion(cliente.value, resena.value, rating.value);
    const barbero = barberos.find(b => b.nombre == barberoI.value);
    if(!barbero){
      return "Barbero no encontrado";
    }
    barbero.calificaciones.push(calificacion);
    mostrarBarberos();
    FORM_CALIFICACION.reset();
    return "Calificado con exito";
  }

}

function HandlerCalificarBarbero() {
  const INPUT_RATING_CALIFICACION = document.querySelector('input[name="rating"]:checked');
  const salida = calificarBarbero(INPUT_RATING_CALIFICACION, INPUT_RESENA_CALIFICAION, INPUT_BARBERO_CALIFICACION, INPUT_CLIENTE_CALIFICACION);
  alert(salida);
}

export default calificarBarbero;