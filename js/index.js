import {INPUT_BARBERO_CALIFICACION, INPUT_SERVICIO_AGENDA, filterB, slcBarberosAgenda} from '/js/variables.js'
import {listarServiciosUseCase} from './CU/ListarServicios.js'
import { servicios } from './data.js';
import {HandlerCalificarBarbero} from './CU/CalificarBarbero.js'
import {poblarSelect, poblarResena} from './utilities.js'
import {mostrarBarberos} from './CU/ListarBarberos.js'

window.addEventListener("load", inicio);
function inicio() {
    listarServiciosUseCase("#servicios .row", servicios);
    document.getElementById("btn_calificar").addEventListener("click", HandlerCalificarBarbero);
    poblarSelect(INPUT_BARBERO_CALIFICACION, "Seleccione un barbero", "BARBEROS");
    poblarSelect(INPUT_SERVICIO_AGENDA, "Seleccione un servicio", "SERVICIOS");
    poblarSelect(filterB, "Seleccione un barbero", "BARBEROS");
    poblarSelect(slcBarberosAgenda,"Seleccione un barbero","BARBEROS");
    poblarResena();
    mostrarBarberos();
}