export const getImagen = async() => {

    try {

        const apiKey = 'MOleqq2uYLWDBpvBsqB2cgblk5OB9fEY';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url; 

    } catch (e) {
        return 'No se encontró la imagen';
    }
    
    
    
}