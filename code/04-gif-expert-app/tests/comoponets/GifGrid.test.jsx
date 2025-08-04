import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid Component', () => {
    const category = 'One Punch';
    test('should render correctly', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });
    test('should display items when images are loaded from useFetchGifs', () => {
        const gifs = [
            {
                id: '1',
                title: 'Gif 1',
                url: 'https://example.com/gif1.gif'
            },
            {
                id: '2',
                title: 'Gif 2',
                url: 'https://example.com/gif2.gif'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText(category));
        expect(screen.getByText('Gif 1'));
        expect(screen.getByText('Gif 2'));
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(2);
        expect(images[0].src).toBe(gifs[0].url);
        expect(images[1].src).toBe(gifs[1].url);
    });
});