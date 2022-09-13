import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 

    test('should getUser retornar un object', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        
        expect( testUser).toEqual( user );
        
        
    });
    
    test('should getUsuarioActivo retornar un objeto', () => { 
        
        const name = 'Christian';
        const user = getUsuarioActivo(name);
        
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

      })

 })