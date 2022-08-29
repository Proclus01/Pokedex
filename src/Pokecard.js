import './Pokecard.css';

function Pokecard(props) {
    const prepareId = (input) => {
        const inputString = input.toString();
        return String(inputString).padStart(3, '0');
      }
    
    const id = prepareId(props.id);

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="" />
            </div>
            <div className="card-body">
                <h2>{props.name}</h2>
                <p>Type: {props.type}</p>
                <p>Exp: {props.exp}</p>
            </div>
        </div>
    );
}

export default Pokecard;