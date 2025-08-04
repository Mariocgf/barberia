function listarServiciosUseCase(containerSelector, serviciosArray) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
  
    serviciosArray.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = 'card blur p-0';
      card.style.width = '18rem';
  
      const img = document.createElement('img');
      img.src = s.imgURL;
      img.className = 'card-img-top img-fluid';
      img.alt = s.nombre;
      card.appendChild(img);
  
      const body = document.createElement('div');
      body.className = 'card-body';
      body.innerHTML = `
        <h5 class="card-title">${s.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Precio: $${s.precio}</h6>
      `;
      card.appendChild(body);
  
      container.appendChild(card);
    });
  }

  export {listarServiciosUseCase}