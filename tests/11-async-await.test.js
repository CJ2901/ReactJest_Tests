import { getImagen } from "../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    
    test('should getImagen retornar URL ', async() => { 
        
        const url = await getImagen();
        expect( typeof url).toBe('string');


     })

 })