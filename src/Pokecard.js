import './Pokecard.css';

function Pokecard(props) {
    const pokemon = props.pokemonArray;

    const prepareId = (input) => {
        const inputString = input.toString();
        return String(inputString).padStart(3, '0');
      }
    
    const testId = prepareId(pokemon[0].id);
    const testName = prepareId(pokemon[0].name);
    const testType = prepareId(pokemon[0].type);
    const testExp = prepareId(pokemon[0].base_experience);

    return (
        <div className="card-container">

            <div className="image-container">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${testId}.png`} />
            </div>

            <div className="card-body">
                <h2>{testName}</h2>
                <p>Type: {testType}</p>
                <p>Exp: {testExp}</p>
            </div>

        </div>
    );
}

export default Pokecard;