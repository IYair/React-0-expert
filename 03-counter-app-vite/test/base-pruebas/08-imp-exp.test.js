import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas de 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        // console.log(hero);

        expect(hero).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        );

    })
    test('getHeroeById debe de retornar undefined si no existe el ID', () => {

        const id = 100;
        const hero = getHeroeById(id);

        // console.log(hero);

        expect(hero).toBeFalsy();

    });

    // TODO:
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    test('Debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)

        // console.log(heroes)

/*         Esta es una forma en bruto de evaluar el retorno de una funcion 
        Debemos hacer mas flexibles nuestras evaluciones para que si llega
        el contenido de nuestra base de datos la evaluacion se adapte */

        // expect(hero).toEqual(

        //     [
        //         { id: 1, name: 'Batman', owner: 'DC' },
        //         { id: 3, name: 'Superman', owner: 'DC' },
        //         { id: 4, name: 'Flash', owner: 'DC' }
        //     ]

        // );
        
        expect(heroes.length).toBe(3);
        // Este seria el metodo para hacerlo adaptativo.
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner == owner));
        expect(heroes).toHaveLength(3);
    })
    
    // TODO:
    // debe de retornar un arreglo con  los heroes de Marvel
    // length === 2
    test('Debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)

        // console.log(hero);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner == owner));
        expect(heroes).toHaveLength(2);
    })

})