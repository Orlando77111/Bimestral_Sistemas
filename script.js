const veredas = [
    {name: 'Alto de Encinal', description: 'Alto de Encinal es una vereda de San Gil conocida por sus hermosos paisajes y su facilidad de acceso gracias a la carretera con placa-huella.'},
    {name: 'Bejaranas', description: 'Bejaranas es una vereda que destaca por su producción agrícola y sus tradiciones culturales.'},
    {name: 'Boquerón', description: 'Boquerón es una vereda que ofrece vistas panorámicas y una rica biodiversidad.'},
    {name: 'Buenos Aires', description: 'Buenos Aires es una vereda famosa por sus vistas abiertas y su clima agradable.'},
    {name: 'Campo Hermoso', description: 'Campo Hermoso destaca por sus campos verdes y su producción de café.'},
    {name: 'Cañaveral Alto', description: 'Cañaveral Alto es conocido por sus cultivos de caña de azúcar y su comunidad acogedora.'},
    {name: 'Cañaveral Bajo', description: 'Cañaveral Bajo tiene una rica historia agrícola y es un lugar tranquilo para vivir.'},
    {name: 'Chapala', description: 'Chapala es una vereda rodeada de montañas y naturaleza exuberante.'},
    {name: 'El Cucharo', description: 'El Cucharo es famoso por sus senderos y su biodiversidad.'},
    {name: 'El Tabor', description: 'El Tabor es una vereda que ofrece paz y tranquilidad con vistas espectaculares.'},
    {name: 'El Jovito', description: 'El Jovito es conocido por su producción de frutas y su comunidad trabajadora.'},
    {name: 'El Volador', description: 'El Volador tiene vistas impresionantes y es un lugar perfecto para el senderismo.'},
    {name: 'Egidos y Pericos', description: 'Egidos y Pericos son veredas hermanas que comparten una rica cultura y tradiciones.'},
    {name: 'Guarigua Alto', description: 'Guarigua Alto es famoso por sus elevaciones y vistas panorámicas.'},
    {name: 'Guarigua Bajo', description: 'Guarigua Bajo ofrece un entorno tranquilo y una comunidad unida.'},
    {name: 'Hoya de Monas', description: 'Hoya de Monas es conocida por sus rutas naturales y biodiversidad.'},
    {name: 'Jaral San Pedro', description: 'Jaral San Pedro destaca por su producción agrícola y su paisaje rural.'},
    {name: 'La Laja', description: 'La Laja es famosa por sus formaciones rocosas y su naturaleza.'},
    {name: 'Las Joyas', description: 'Las Joyas es una vereda conocida por sus recursos naturales y su comunidad activa.'},
    {name: 'La Flora', description: 'La Flora ofrece una biodiversidad rica y es ideal para la observación de aves.'},
    {name: 'Los Pozos', description: 'Los Pozos tiene una comunidad acogedora y es conocido por sus aguas termales.'},
    {name: 'Montecitos Alto', description: 'Montecitos Alto ofrece vistas elevadas y una naturaleza impresionante.'},
    {name: 'Montecitos Bajo', description: 'Montecitos Bajo es conocido por sus campos fértiles y su producción agrícola.'},
    {name: 'Ojo de Agua', description: 'Ojo de Agua es famoso por sus manantiales y su paisaje sereno.'},
    {name: 'Palo Blanco', description: 'Palo Blanco ofrece una rica historia y una comunidad vibrante.'},
    {name: 'Puente Tierra', description: 'Puente Tierra es conocido por sus puentes históricos y su belleza natural.'},
    {name: 'Resumidero', description: 'Resumidero tiene una rica biodiversidad y es un lugar perfecto para el ecoturismo.'},
    {name: 'Santa Bárbara', description: 'Santa Bárbara es famosa por su iglesia histórica y sus festividades locales.'},
    {name: 'San José', description: 'San José destaca por su producción agrícola y su comunidad acogedora.'},
    {name: 'Santa Rita', description: 'Santa Rita es conocida por sus tradiciones culturales y su entorno natural.'},
    {name: 'Versalles', description: 'Versalles ofrece paisajes pintorescos y una comunidad amigable.'}
];

const tableBody = document.querySelector('#places-table tbody');

veredas.forEach(vereda => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${vereda.name}</td>
        <td>${vereda.description}</td>
    `;
    tableBody.appendChild(row);
});
