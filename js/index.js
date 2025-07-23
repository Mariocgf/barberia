window.addEventListener("load", inicio);
function inicio() {
    listarServiciosUseCase("#servicios .row", servicios);
    document.getElementById("btn_calificar").addEventListener("click", calificarBarbero);
    poblarSelect(INPUT_BARBERO_CALIFICACION, "Seleccione un barbero", "BARBEROS");
    poblarSelect(filter-barbero, "Seleccione un barbero", "BARBEROS");
}