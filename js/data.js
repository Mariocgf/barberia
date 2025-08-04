const servicios = [
    new Servicio('Corte de pelo', 600, 30, 'img/servicio_1.webp'),
    new Servicio('Perfilado y afeitado de barba', 450, 15, 'img/servicio_2.jpg'),
    new Servicio('Coloración capilar', 1000, 75, 'img/servicio_3.jpg'),
    new Servicio('Manicura masculina', 500, 45, 'img/servicio_4.webp'),
    new Servicio('Pack Renovate (Corte + Barba)', 950, 45, 'img/servicio_5.jpg'),
    new Servicio('Pack Imagen Completa (Corte + Barba + Manicura)', 1350, 90, 'img/servicio_6.jpeg'),
    new Servicio('Color + Corte', 1400, 105, 'img/servicio_7.jpg')
];

const barberos = [
    new Barbero('Juan Pérez', 'es un barbero profesional con estilo moderno y atención personalizada. Especialista en cortes y barbas, siempre busca resaltar lo mejor de cada cliente.', 'img/barbero_1.webp'),
    new Barbero('Ana Gómez', 'Con más de 10 años de experiencia, Ana domina el arte del corte tradicional con un toque moderno. Su atención al detalle y precisión en cada servicio, desde una barba perfectamente perfilada hasta una manicura impecable.', 'img/barbero_2.jpg'),
    new Barbero('Carlos López', ' es la definición de versatilidad. Maneja con soltura todos los servicios y destaca por su calidez y atención personalizada. Ideal para quienes buscan un servicio integral en un solo lugar: corte, barba, tinta o uñas, siempre con buena vibra y resultados impecables.', 'img/barbero_3.webp'),
    new Barbero('María Rodríguez', 'es conocida por su estilo innovador y su habilidad para transformar cualquier look. Experta en color y tendencias actuales, es ideal si buscas algo diferente, atrevido o personalizado. Ya sea una tinta vibrante o un diseño de barba original', 'img/barbero_4.jpg')
];
 const agendas = [
    new Agenda('2025-07-20', servicios[0], 'Carlos', '099123456', 'carlos@mail.com', barberos[0]),
    new Agenda('2025-07-21', servicios[1], 'María', '098654321', 'maria@mail.com', barberos[1])
  ];

 const usuAdmin = {email: "admin@admin.com", password: "admin"};
