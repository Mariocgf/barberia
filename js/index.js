window.addEventListener("load", inicio);
function inicio() {
    document.getElementById("btn_calificar").addEventListener("click", calificarBarbero);
    poblarSelect(INPUT_BARBERO_CALIFICACION, "Seleccione un barbero", "BARBEROS");
    poblarSelect(filter-barbero, "Seleccione un barbero", "BARBEROS");
}