import PropTypes from 'prop-types';

// Usando destructuring con valores por defecto (ES6) - recomendado para React 19
export default function FirstApp({
    title = 'No hay titulo', 
    subTitle = 0, 
    name = "Pako Díaz"
}) {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>Autor: { name }</p>
        </>
    );
}

// PropTypes para validación en desarrollo
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    name: PropTypes.string
};

// Nota: defaultProps está deprecado en React 19+
// Se recomienda usar valores por defecto en la destructuring de parámetros