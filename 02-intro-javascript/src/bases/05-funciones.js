// Funciones en JS
/*
!Mala practica
function saludar(nombre){
    reutrn return `Hola, ${nombre}`;
}
*/

/*
*Buena practica 
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
 */
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

// saludar = 30

// console.log(saludar(`Goku`))

// console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502',
});

const user = getUser();
console.log(user);


// Tarea

/* TODO:
    1. Tranformen a una funcion de Flecha
    2. Tiene que retornar un objeto implicito
    3. Pruebas
 */

/* FIXME:
function getUsurioActivo(nombre) {
    return {
        uid: 'ABC567',
        username:nombre,
    }
};
*/
// FIXED:
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

