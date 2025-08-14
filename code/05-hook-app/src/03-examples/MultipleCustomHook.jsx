import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const sprites = [ 
        data?.sprites?.back_default,
        data?.sprites?.front_shiny,
        data?.sprites?.front_default,
        data?.sprites?.back_shiny
    ];
    return (
        <>
            <h1>Multiple Custom Hooks {counter}</h1>
            <hr />
            {isLoading && <LoadingMessage />}
            {data && <PokemonCard id={data.id} name={data.name} sprites={sprites} className="mb-4" />}
            <button 
                className="btn btn-primary mr-2" 
                onClick={()=>decrement(1)}
                disabled={isLoading}
            >Anterior</button>
            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={()=>increment(1)}
            >Siguiente</button>
        </>
    )
}