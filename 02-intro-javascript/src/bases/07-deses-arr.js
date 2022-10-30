// Desestructuración de arrelos

const personajes = ['goku','vegeta','trunks'];

/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [ , ,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// TODO:
// 1. El primer valor del arr se llamara nombre
// 2. El segundo valor se llamara settNombre
/* FIXME: 
const userState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const arr = userState('Goku');
console.log(nombre);
settNombre();

*/
// FIXED:
const userState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, settNombre] = userState('Goku');
console.log(nombre);
settNombre();