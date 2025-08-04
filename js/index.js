import {INPUT_BARBERO_CALIFICACION, INPUT_SERVICIO_AGENDA, filterB, slcBarberosAgenda} from '/js/variables.js'
import {listarServiciosUseCase} from './CU/ListarServicios.js'
import { servicios } from './data.js';
import {HandlerCalificarBarbero} from './CU/CalificarBarbero.js'
import {poblarSelect, poblarResena} from './utilities.js'
import {mostrarBarberos} from './CU/ListarBarberos.js'
import { agendarCita } from './CU/agendar.js';

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

const btnFormulario = document.getElementById("btnFormulario"); 
btnFormulario.addEventListener("click", () => {
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("emails").value;
    const servicio = document.getElementById("servicio-select").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("inputHora").value;
    const slcBarberosAgenda = document.querySelector(".barberSelect").value;

    let result = agendarCita(nombre, email, servicio, slcBarberosAgenda, fecha, hora);
    if (result && result === 'OK') {
        alert('Agendado');
    } else if (result && result === 'No OK') {
        alert('Ya existe una cita para ese horario y fecha');
    } else {
        alert('Ha ocurrido un error')
    }
})