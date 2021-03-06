let numPokemon = 1;
let fetchPokemon = async ()=>{
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`);
        let data = await response.json();
        let pokemon = {
            imagen: data.sprites.other.dream_world.front_default,
            nombre: data.species.name
        }

        insertarPokemon(pokemon);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
}
fetchPokemon();

let insertarPokemon = (poke)=>{
    let imagen = document.querySelector(".poke_imagen");
    let nombre = document.querySelector(".poke_nombre");
    console.log(nombre);
    nombre.innerText = poke.nombre;
    imagen.setAttribute('src',poke.imagen)
}

let avanzarPokemon = ()=>{
    if (numPokemon <= 150) {
        numPokemon++
        fetchPokemon();
        
    }
}
let atrazarPokemon = ()=>{
    if (numPokemon >= 2) {
        numPokemon--
        fetchPokemon();
    }
}