import PropTypes from 'prop-types';

// Componente de ejemplo para demostrar PropTypes
export function TestPropsComponent({ 
    name = "Usuario Anónimo", 
    age = 0, 
    isActive = false,
    hobbies = []
}) {
    console.group('🔍 TestPropsComponent - Props recibidos:');
    console.log('name:', name, typeof name);
    console.log('age:', age, typeof age);
    console.log('isActive:', isActive, typeof isActive);
    console.log('hobbies:', hobbies, Array.isArray(hobbies));
    console.groupEnd();

    return (
        <div style={{ 
            border: '2px solid #646cff', 
            padding: '1rem', 
            margin: '1rem 0',
            borderRadius: '8px',
            backgroundColor: isActive ? '#e6f7ff' : '#f5f5f5'
        }}>
            <h3>🧪 Test Props Component</h3>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Edad:</strong> {age} años</p>
            <p><strong>Estado:</strong> {isActive ? '✅ Activo' : '❌ Inactivo'}</p>
            <p><strong>Hobbies:</strong> {hobbies.length > 0 ? hobbies.join(', ') : 'Ninguno'}</p>
        </div>
    );
}

// PropTypes para validación estricta
TestPropsComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    hobbies: PropTypes.arrayOf(PropTypes.string)
};

// Función para probar PropTypes con datos incorrectos
export function PropsTestSuite() {
    console.warn('🧪 Iniciando suite de pruebas de PropTypes...');
    
    return (
        <div>
            <h2>🧪 Suite de Pruebas PropTypes</h2>
            
            <h4>✅ Caso 1: Props correctos</h4>
            <TestPropsComponent 
                name="Juan Pérez"
                age={25}
                isActive={true}
                hobbies={['programar', 'leer', 'correr']}
            />
            
            <h4>⚠️ Caso 2: Props con valores por defecto</h4>
            <TestPropsComponent age={30} />
            
            <h4>❌ Caso 3: Props incorrectos (revisa la consola para warnings)</h4>
            <TestPropsComponent 
                name={123} // ❌ debería ser string
                age="treinta" // ❌ debería ser number
                isActive="true" // ❌ debería ser boolean
                hobbies="programar,leer" // ❌ debería ser array
            />
            
            <h4>🚨 Caso 4: Prop requerido faltante (revisa la consola)</h4>
            <TestPropsComponent name="Ana García" /> {/* ❌ falta age */}
        </div>
    );
}
