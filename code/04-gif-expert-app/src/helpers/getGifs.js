export const getGif = async (category) => {
    const API_KEY = 'MOleqq2uYLWDBpvBsqB2cgblk5OB9fEY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);

    const { data } = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
    }));
    return gifs;
}