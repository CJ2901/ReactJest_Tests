import { getHeroesByOwner } from '../src/base-pruebas/08-imp-exp';


describe('Prueba en 08-imp-exp', () => { 
    
    // test('should getHeroeById debe retornar heroe por ID', () => { 

    //     const owner = 'Marvel';
    //     const heroes = getHeroesByOwner(owner)
    //     const match = { owner: owner }
 
    //     heroes.map(heroe => {
    //         expect(heroe).toMatchObject(match)
    //     })

    //  })

    test('should getHeroesByOwner regresar heroes de DC', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes ).toEqual( heroes.filter((heroe) => heroe.owner === owner ) )

     })

 })