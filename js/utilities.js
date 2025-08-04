import {DIV_GLOBAL, LOGIN} from '/js/variables.js'
import { barberos } from './data.js'
import { servicios } from './data.js'
import { Calificacion } from './clases.js'

const poblarSelect = (select, opcionInit, data) => {
    select.innerHTML = `<option selected value="0" >${opcionInit}</option>`
    if (data == "BARBEROS") {
        barberos.forEach(b => {
            const option = document.createElement('option');
            option.value = b.nombre;
            option.text = b.nombre;
            select.append(option);
        })
    }else if (data == "SERVICIOS"){
        servicios.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.nombre;
            opt.textContent = `${s.nombre} — $${s.precio}`;
            select.appendChild(opt);
        })
    }
}



const poblarResena = () => {
    barberos.forEach(b => {
        b.calificaciones.push(new Calificacion("Ana Lopez", "El corte estuvo bien, pero esperaba más puntualidad.",1))
    })
}




btnHome.addEventListener("click", () => {
    DIV_GLOBAL.style.display = "block";
    LOGIN.style.display = "none";
})

btnServicios.addEventListener("click", () => {
    DIV_GLOBAL.style.display = "block";

    LOGIN.style.display = "none";
    document
    .getElementById("servicios")
    .scrollIntoView({ behavior: "smooth", block: "start" });
})

export {poblarSelect, poblarResena}