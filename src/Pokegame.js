import Pokedex from './Pokedex';

const pokemonArray = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

function Pokegame(props) {

    // initialize hands
    const firstHand = [];
    const secondHand = [];

    // Draw a single pokemon
    const drawPokemon = (hand, array) => {
        const card = array.pop();

        hand.push(card);
    }

    // Draw multiple pokemon
    const drawMultiple = (hand, array, limit) => {
        for (let i = 0; i < limit; i++) {
            drawPokemon(hand, array);
        }
    }

    // Shuffle the pokemon array
    const shuffle = (array) => {
        for (let i = 0; i < array.length - 1; i++) {

            let j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // shuffle array
    shuffle(pokemonArray);

    
    
    // pop a pokemon from the array
    // push 4 pokemon into first hand, second hand
    // render each hand into a pokedex
    // use a reduce method to sum up base experience
    // if a certain hand has more or less base experience, 
    // then render a winner or loser div


    return (
        <Pokedex pokemonArray={pokemonArray} />
    );
}

export default Pokegame;