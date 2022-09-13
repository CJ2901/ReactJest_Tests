import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    
    const title = 'The Batman';
    const subTitle = 'The Dark Knight';

    test('should hacer match con el snapshot', () => { 
        
        const { container } = render( <FirstApp title={title} /> );      
        expect( container ).toMatchSnapshot();

    });
     
     test('debe de mostrar el mensaje del título', () => { 

        render( <FirstApp title={title} /> );
        expect( screen.getByText(`Hola, soy ${title}` ) ).toBeTruthy();
        // screen.debug();
        
    });
    
    test('should mostrar el título en un h1', () => { 
        
        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
        
    });

    test('should mostrar el subtítulo enviado por props', () => { 
        
        render( 
            <FirstApp 
                title={title}
                subTitle={subTitle}
            /> 
        );
        
        expect( screen.getAllByText(subTitle).length ).toBe(2);
        
    });

 })