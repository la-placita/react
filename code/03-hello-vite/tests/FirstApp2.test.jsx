import { render, screen} from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un guerrero Saiyajin";

    test('debe de hacer match con el snapshot', () => {
        //screen.debug();
        const { container } = render(<FirstApp title={title}/>);
        //screen.debug();
        expect(container).toMatchSnapshot();  
        //creen.debug(); // Para ver el DOM renderizado 
    });

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostrar el título en un h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtítulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle}/>);
        expect(screen.getByText(subTitle)).toBeTruthy();
    });
});