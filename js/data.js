const servicios = [
    new Servicio('Corte de pelo', 600),
    new Servicio('Perfilado y afeitado de barba', 450),
    new Servicio('Coloración capilar', 1000),
    new Servicio('Manicura masculina', 500),
    new Servicio('Pack Renovate (Corte + Barba)', 950),
    new Servicio('Pack Imagen Completa (Corte + Barba + Manicura)', 1350),
    new Servicio('Color + Corte', 1400)
];

const barberos = [
    new Barbero('Juan Pérez', 'Especialista en cortes modernos'),
    new Barbero('Ana Gómez', 'Experta en perfilado de barba'),
    new Barbero('Carlos López', 'Maestro en degradados y estilos clásicos'),
    new Barbero('María Rodríguez', 'Profesional en coloración y diseño')
];
 const agendas = [
    new Agenda('2025-07-20', servicios[0], 'Carlos', '099123456', 'carlos@mail.com', barberos[0]),
    new Agenda('2025-07-21', servicios[1], 'María', '098654321', 'maria@mail.com', barberos[1])
  ];

 const usuAdmin = {email: "admin@admin.com", password: "admin"};

 