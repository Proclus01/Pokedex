import Pokedex from './Pokedex';

function Pokegame(props) {
    // Get our list of Pokemon
    const pokemonList = props.pokemon;

    // Remove an item from an array and return the array without the given item
    function remove(items, item) {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === item) {
                return [...items.slice(0, i), ...items.slice(i + 1)];
            }
        }
    }

    // An RNG function to pass independent RNG values as props into each component
    const rng = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    // Initialize our hands
    const cardHand1 = [];
    const cardHand2 = [];

    

    return (
        <Pokedex />
    );
}

export default Pokegame;