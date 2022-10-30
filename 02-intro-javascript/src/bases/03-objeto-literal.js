const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zipcode: '553213123',
        lat:14.3232,
        lng: 34.923331
    }
};

// console.table( persona );

const persona2 = {...persona };
persona2.nombre = 'peter';

console.log( persona );
console.log( persona2 );
