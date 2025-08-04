import { render, screen} from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe('GifItem', () => {
    test('should be match with snapshot', () => {
        const { container } = render(<GifItem title={"Test"} url="https://example.com/test.gif" />);
        expect(container).toMatchSnapshot( );
    });

    test('sholud render the image with the URL and ALT text', () => {
        const title = "Test";
        const url = "https://example.com/test.gif";
        render(<GifItem title={title} url={url} />);
        
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    }); 
});
