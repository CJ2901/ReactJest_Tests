
describe('Pruebas en <DemoComponent />', () => { 
    
    test('should no fail', () => { 
        
        //! 1. Inicialización
        const mssg1 = 'Hola Mundo';
        
        //! 2. Estímulo
        const mssg2 = mssg1;
        
        //! 3. Observar el comportamiento
        expect( mssg1 ).toBe( mssg2.trim() );
        
        
    })

})