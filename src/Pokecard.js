function Pokecard(props) {
    const prepareId = (input) => {
        const inputString = input.toString();
        return String(inputString).padStart(3, '0');
      }
    
    const testId = prepareId(props.id);

    return (
        <p>{testId}</p>
    );
}

export default Pokecard;