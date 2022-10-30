// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

/* 
const getHeroeById = (id) => {
    return heroes.find( (heroes) => {
        if (heroes.id === id) {
            return true;
        } else {
            return false;
        }
    })
}
*/
// console.log(owners)

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id)



// console.log(getHeroeById(2));


export const getHeroeByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner)

// console.log(getHeroeByOwner('DC'));