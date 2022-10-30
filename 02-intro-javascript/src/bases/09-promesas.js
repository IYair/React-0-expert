// Promesas
import { getHeroeById } from '../src/bases/08-imp-exp'
/* 
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // TODO: 
        // importen 
        const p1 = getHeroeById(2);
        resolve(p1);
        // reject('No se pude encontrar al heroe');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn(err));
 */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // TODO: 
            // importen 
            const p1 = getHeroeById(id);
            // console.log(p1)
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pude encontrar al heroe');
            }
        }, 2000);
    });
}



getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)