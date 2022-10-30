import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un error si no tenemos pi key', async() => {

        const resp = await getImagen();
        // console.log(resp);

        expect(resp).toBe('No se encontro la imagen');
    })
})