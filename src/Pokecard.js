function Pokecard(props) {
    const pokemon = props.pokemonArray;

    const prepareId = (input) => {
        const inputString = input.toString();
        return String(inputString).padStart(3, '0');
      }
    
    const testId = prepareId(pokemon[0].id);

    return (
        <p>{testId}</p>
    );
}

export default Pokecard;