import Pokecard from "./Pokecard";

function Pokedex(props) {

    return (
        <div>
            {props.pokemonArray.map(
                item => 
                    <Pokecard key={item.name}
                        id={item.id} 
                        name={item.name} 
                        type={item.type} 
                        exp={item.base_experience}
                    />
            )}
        </div>
    )
}

export default Pokedex;