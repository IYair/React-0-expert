// Desestructuración o Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    
};

// const  {nombre, edad, clave} = persona;

/* 
console.log(nombre);
console.log(edad);
console.log(clave);
 */

const userContext = ({clave, nombre, edad, rango='capitan'}) => {

    // const { nombre, edad, clave } = persona;

    return {
        nombreClave: clave,
        anios: edad,
        latng:{
            lat:14.1231,
            lng: -12.1234
        }

    }
}

const {nombreClave, anios, latng:{lat,lng}} = userContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);