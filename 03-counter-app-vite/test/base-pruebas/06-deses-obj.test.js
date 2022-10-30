import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba 06-deses-obj', () => {

    test('Debe devolver un objeto', () => {

        const clave = 'Yair';
        const edad = 28;

        const context = usContext({clave,edad});
        // console.log(context);

        expect(context).toStrictEqual({

            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }

        });
    })
})