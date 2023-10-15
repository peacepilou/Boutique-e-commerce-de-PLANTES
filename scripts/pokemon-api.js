const pokemonList = document.getElementById("pokemon-list");

function getPokemon() {
    for (let i = 1; i < 11; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((resp) => resp.json())
            .then((pkmn) => {

                pokemonList.innerHTML +=
                    `
                <div class="card">
                    <img src=${pkmn.sprites.front_default}>
                    <img src=${pkmn.sprites.back_default}>
                    <p>${pkmn.name}</p>
                    <p>${getType(pkmn)}</p>
                </div>
            `;

            });
    }

}

function getType(pokemon) {

    return pokemon.types.forEach(type => {
        switch (type.name) {
            case "grass":
                return "Plante"
            case "poison":
                return "poison"

            default:
                return ""
        }

    })
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("yo");
    const items = document.getElementsByClassName("AccordionItem");
    
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
        items[i].style.display = "none";
    }

});