const pokemonList = document.getElementById("pokemon-list");

function getPokemon() {
    for (let i = 1; i < 11; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((resp) => resp.json())
            .then((data) => {

                pokemonList.innerHTML +=
                    `
                <div class="card">
                    <img src=${data.sprites.front_default}>
                    <img src=${data.sprites.back_default}>
                    <p>${data.name}</p>
                </div>
            `;

            });
    }

}

// fetch("https://thronesapi.com/api/v2/Characters")
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data);
//     });
