import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {
    test('debe mostrar el título correctamente', () => {
        const title = "Hola, soy Goku";
        const { container } = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();   
    });

    test('debe mostrar el titulo en un h1', () => {
        const title = "Hola, soy Goku";
        const { getByText } = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();
        expect(getByText(title).tagName).toBe('H1');
    });
      test('debe mostrar el subtítulo correctamente', () => {
        const title = "Hola, soy Goku";
        const subTitle = "Soy un guerrero Saiyajin";
        const { getByText } = render(<FirstApp title={title} subTitle={subTitle}/>);
        expect(getByText(subTitle)).toBeTruthy();
    });
});