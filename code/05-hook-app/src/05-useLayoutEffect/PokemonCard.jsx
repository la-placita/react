import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = (props) => {
    const { id, name, sprites } = props;
    const h2Ref = useRef();
    const [layout, setLayout] = useState({});
    useLayoutEffect(() => {
        const { width, height } = h2Ref.current.getBoundingClientRect();
        setLayout({ width, height });
    }, [name]);
    return (
        <div className="card" {...props} >
            
            <div className="card-body" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {
                    sprites.map((sprite) => (
                        <img key={sprite} src={sprite} alt={name} style={{ width: '100px' }} />
                    ))
                }
                <h5 className="card-title text-capitalize" ref={h2Ref}>{name}</h5>
                <p className="card-text">ID: {id}</p>
            </div>
            <pre>{JSON.stringify(layout, null, 2)}</pre>
        </div>
    );
}