import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import FirstApp from "./FirstApp";
import { PropsTestSuite } from "./PropsTest";
import "./styles.css";
import { CounterApp } from "./CounterApp";

console.log('🚀 Aplicación iniciando en modo:', import.meta.env.MODE);
console.log('🔧 Variables de entorno:', import.meta.env);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HelloWorldApp />
        
        <CounterApp  value={50}/>

        {/* Componente FirstApp original */}
            <h2>📝 FirstApp Component</h2>
            
            {/* Caso 1: Con todos los props */}
            <FirstApp title="Hola Soy Goku" subTitle={32} name="Goku" />
            
            {/* Caso 2: Solo con props requeridos */}
            <FirstApp title="Hola Soy Vegeta" subTitle={28} />
            
            {/* Caso 3: Para probar PropTypes - descomenta para ver warnings */}
            {/* <FirstApp title={123} subTitle="texto incorrecto" /> */}

        {/* Suite completa de pruebas de PropTypes */}

    </React.StrictMode>
);