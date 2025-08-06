export const PokemonCard = (props) => {
    const { id, name, sprites } = props;
    return (
        <div className="card" {...props}>
            
            <div className="card-body">
                {
                    sprites.map((sprite) => (
                        <img key={sprite} src={sprite} alt={name} style={{ width: '100px' }} />
                    ))
                }
                <h5 className="card-title text-capitalize">{name}</h5>
                <p className="card-text">ID: {id}</p>
            </div>
        </div>
    );
}