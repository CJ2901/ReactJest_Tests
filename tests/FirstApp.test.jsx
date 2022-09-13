import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    
    // test('should hacer match con el snapshot', () => { 
        
    //     const title = 'Hola, Soy Goku';
    //     const { container } = render( <FirstApp title={title} /> );
        
    //     expect( container ).toMatchSnapshot();

    // });
     
    //  test('should mostrar el título en un h1', () => { 
         
    //      const title = 'The Batman';
    //      const { container, getByText, getByTestId} = render( <FirstApp title={title} /> );
         
    //      //con getByText debe de contener exactamente lo que indica
    //     //  expect( getByText( `Hola, soy ${title}` ) ).toBeTruthy();

    //     //  const h1 = container.querySelector('h1');
    //     //  //toContain contiene parte de las palabras
    //     //  expect(h1.innerHTML).toContain(title);

    //     expect( getByTestId('test-title').innerHTML ).toContain(title);
 
    // });

     test('should mostrar el subtítulo enviado por props', () => { 
         
         const title = 'The Batman';
         const subTitle = 'The Dark Knight';
         const { getAllByText } = render( 
                <FirstApp 
                    title={title} 
                    subTitle={subTitle} 
                    
                /> );
         
         //con getByText debe de contener exactamente lo que indica
         expect( getAllByText( subTitle ) ).toBeTruthy();
         expect( getAllByText( subTitle ).length ).toBe(2);
 
    });

 })