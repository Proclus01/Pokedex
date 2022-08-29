import Pokedex from './Pokedex';

function Pokegame(props) {
    // Get our list of Pokemon
    const inputList = props.pokemon;
    // // Copy the list into a mutable array
    // let pokemonList = inputList;

    // // Remove an item from an array and return the array without the given item
    // function remove(items, item) {
    //     for (let i = 0; i < items.length; i++) {
    //         if (items[i] === item) {
    //             return [...items.slice(0, i), ...items.slice(i + 1)];
    //         }
    //     }
    // }

    // // An RNG function to pass independent RNG values as props into each component
    // const rng = () => {
    //     return Math.floor(Math.random() * 3) + 1;
    // }

    // // Initialize our hands
    // const cardHand1 = [];
    // const cardHand2 = [];

    // function fillHand(input, amount, output) {
    //     for (let i = 0; i < amount; i++) {
    //         // Get a random pokemon
    //         const randomPokemon = pokemonList[rng()].id;

    //         input.push(randomPokemon);

    //         output.remove(randomPokemon);
    //     }
    // }

    return (
        <Pokedex />
    );
}

export default Pokegame;