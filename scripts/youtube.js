const cardsContainer = document.querySelector("#cards-container");
const inputFilter = document.getElementById("input-filter");

// Créer les cards
const cardList = [
    {
        thumbnail : "../assets/images/yt-thumbnail-1.png",
        title: "JDG : Papy grenier Hogwards Legacy"
    },
    {
        thumbnail : "../assets/images/yt-thumbnail-2.png",
        title: "Palmashow : Le premier jour"
    },
];

// Injecter les cards dans le HTML
for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i];
    cardsContainer.innerHTML += 
    `
        <div class="card">
            <img src="${card.thumbnail}" alt="Miniature de ${card.title}">
            <div>
                <h3>${card.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi officia sed, ea iusto, sint minus sunt modi harum temporibus explicabo. Totam repudiandae eius harum perspiciatis natus fugit sint blanditiis.</p>
            </div>
        </div>
    `
}

// Écouter la barre de recherche
inputFilter.addEventListener("keyup", (e) => {
    cardsContainer.innerHTML = "";

    const inputSearch = e.target.value.toLowerCase(); // PalMashoW => palmashow

    const cardListFiltered = cardList.filter((card) => card.title.toLowerCase().includes(inputSearch));


    for (let i = 0; i < cardListFiltered.length; i++) {
        const card = cardListFiltered[i];
        cardsContainer.innerHTML += 
        `
            <div class="card">
                <img src="${card.thumbnail}" alt="Miniature de ${card.title}">
                <div>
                    <h3>${card.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi officia sed, ea iusto, sint minus sunt modi harum temporibus explicabo. Totam repudiandae eius harum perspiciatis natus fugit sint blanditiis.</p>
                </div>
            </div>
        `
    }

    if (cardListFiltered.length === 0) {
        cardsContainer.innerHTML += 
        `
            <p class="no-results">Aucun résultat...</p>
        `
    }

});
