import { fireEvent, render, screen } from "@testing-library/react";
import { Counterapp } from "../src/Counterapp"


describe('Pruebas en CounterApp.test.jsx ', () => { 

    const initialValue = 100;
    
    test('should hacer match con el snapshot', () => { 
        
        const {container} = render( <Counterapp value={initialValue} /> )
        expect( container ).toMatchSnapshot();

     });

    test('should mostrar el valor inicial de 100', () => { 
        
        render( <Counterapp value={initialValue} /> );
        expect( screen.getByText(initialValue ) ).toBeTruthy();

     });
     
     test('should incrementar con el botón +1', () => { 
         
         render( <Counterapp value={initialValue} /> );
        //  fireEvent.click( screen.getByText('+1') );
         fireEvent.click( screen.getByRole('button', {name: 'btn-more'}));
         expect( screen.getByText(101) ).toBeTruthy();
 
      });
      
      test('should decrementar con el botón -1', () => { 
          
          render( <Counterapp value={initialValue} /> );
        //   fireEvent.click( screen.getByText('-1') );
          fireEvent.click( screen.getByRole('button', {name: 'btn-less'}));
          expect( screen.getByText(99) ).toBeTruthy();
          
       });
      
      test('should funcionar el botón de reset', () => { 
          
          render( <Counterapp value={initialValue} /> );
          fireEvent.click( screen.getByText('+1') );
          fireEvent.click( screen.getByText('+1') );
          fireEvent.click( screen.getByText('+1') );

          fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}));


          expect( screen.getByText(initialValue) ).toBeTruthy();

       });

 });