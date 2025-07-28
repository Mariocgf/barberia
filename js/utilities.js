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

const cardBarbero = (nombre, descripcion, img, calificaciones) => {
    let resenas = "";
    const star = ['★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★'];
    calificaciones.forEach(c => {
        resenas += `<div class="review-box border border-dark-subtle rounded p-2 mb-2">
                        <strong>${c.nombre}</strong>
                        <div class="stars text-warning mb-1">
                            ${star[c.puntaje-1]}
                        </div>
                        <p class="mb-0">${c.descripcion}</p>
                    </div>`
    })
    return `<div class="card card-barbero mb-3 g-col-6 blur">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${img} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body d-flex">
                            <!-- Columna del texto -->
                            <div class="me-3" style="flex: 1;">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${descripcion}</p>
                            </div>

                            <!-- Columna de reseñas -->
                            <div style="flex: 1;">
                                <h6>Reseña:</h6>
                                ${resenas}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

const poblarResena = () => {
    barberos.forEach(b => {
        b.calificaciones.push(new Calificacion("Ana Lopez", "El corte estuvo bien, pero esperaba más puntualidad.",1))
    })
}

const mostrarBarberos = () => {
    let string = "";
    barberos.forEach(b => {
        string += cardBarbero(b.nombre, b.descripcion, b.imgURL, b.calificaciones);
    })
    DIV_BARBEROS.innerHTML = string;
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

