import { getSaludo } from "../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    
    test('should get Saludo terornar Hola Christian', () => { 
        
        const name = 'Christian';
        const mssg = getSaludo(name);

        expect( mssg ).toBe(`Hola ${ name }`)

    })

})