const {Calificacion} = require('../clases');
const {barberos} = require('../data');
const mostrarBarberos = require('./ListarBarberos');

const calificarBarbero = (rating, resena, barberoI, cliente) => {
  if (cliente == "") {
    return "Seleccione un cliente";
  }
  if (barberoI.value == 0) {
    return "Seleccione un barbero";
  }
  if (rating.value == "") {
    return "Ingrese una calificación";
  }
  if (resena.value == "") {
    return "Ingrese una reseña";
  }

    const calificacion = new Calificacion(cliente, resena, rating);
    const barbero = barberos.find(b => b.nombre == barberoI);
    if(!barbero){
      return "Barbero no encontrado";
    }
    barbero.calificaciones.push(calificacion);
    //mostrarBarberos();
    //FORM_CALIFICACION.reset();
    return "Calificado con exito";

}

function HandlerCalificarBarbero() {
  const INPUT_RATING_CALIFICACION = document.querySelector('input[name="rating"]:checked');
  if (!INPUT_CLIENTE_CALIFICACION ) {
    return "Seleccione un cliente";
  }
  if (!INPUT_BARBERO_CALIFICACION ) {
    return "Seleccione un barbero";
  }
  if (!INPUT_RATING_CALIFICACION ) {
    return "Ingrese una calificación";
  }
  if (!INPUT_RESENA_CALIFICAION ) {
    return "Ingrese una reseña";
  }
  const salida = calificarBarbero(INPUT_RATING_CALIFICACION.value, INPUT_RESENA_CALIFICAION.value, INPUT_BARBERO_CALIFICACION.value, INPUT_CLIENTE_CALIFICACION.value);
  alert(salida);
}

module.exports = calificarBarbero;