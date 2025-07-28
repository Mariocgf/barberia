window.addEventListener("load", inicio);
function inicio() {
    listarServiciosUseCase("#servicios .row", servicios);
    document.getElementById("btn_calificar").addEventListener("click", calificarBarbero);
    poblarSelect(INPUT_BARBERO_CALIFICACION, "Seleccione un barbero", "BARBEROS");
    poblarSelect(INPUT_SERVICIO_AGENDA, "Seleccione un servicio", "SERVICIOS");
    poblarSelect(filterB, "Seleccione un barbero", "BARBEROS");
    poblarSelect(slcBarberosAgenda,"Seleccione un barbero","BARBEROS");
    poblarResena();
    mostrarBarberos();
}