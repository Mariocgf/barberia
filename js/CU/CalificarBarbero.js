function calificarBarbero() {
  if (FORM_CALIFICACION.reportValidity()) { 
    const INPUT_RATING_CALIFICACION = document.querySelector('input[name="rating"]:checked');
    if(!INPUT_RATING_CALIFICACION){
      alert("Debe seleccionar una calificacion");
      return;
    }
    const calificacion = new Calificacion(INPUT_CLIENTE_CALIFICACION.value,INPUT_RESENA_CALIFICAION.value,INPUT_RATING_CALIFICACION.value);
    const barbero = barberos.find(b => b.nombre == INPUT_BARBERO_CALIFICACION.value);
    barbero.calificaciones.push(calificacion);
    mostrarBarberos();
    FORM_CALIFICACION.reset();
    alert("Calificado con exito")
  }

}
