const userList = [
    {
        pseudo: "John",
        age: 42,
        isActive: true,
        category: "home"
    },
    {
        pseudo: "Viktoria",
        age: 25,
        isActive: true,
        category: "work"
    },
    {
        pseudo: "Peacepilou",
        age: 28,
        isActive: false,
        category: "chill"
    }
    // it goes on and on and on...
];

const userListFilteredByAge = userList.filter((user) => {
    return user.age > 25; // true ou false
});

const userListFilteredByActiveStatus = userList.filter((toto) => {
    return toto.isActive === true;
});

const userListFilteredByCategory = userList.filter((user) => {
    return user.category.toLowerCase() === "chilL".toLowerCase();
});

// Objectif : 
    // si je clique sur le btn "maison", alors je filtre mon tableau avec tous les utilisateurs dont la catégorie est "home"
    // si je clique sur le btn "travail", alors je filtre mon tableau avec tous les utilisateurs dont la catégorie est "work"
    // si je clique sur le btn "loizzzzzir", alors je filtre mon tableau avec tous les utilisateurs dont la catégorie est "chill"

// Étapes : 
    // Écouter le click 
        // getElementById
        // addEventListener
        // On filtre le tableau userList en fonction de la "value" du bouton cliqué

// getElementById
const ctaFilterByCategoryHome = document.getElementById("cta-filter-by-category-home");
const ctaFilterByCategoryWork = document.getElementById("cta-filter-by-category-work");
const ctaFilterByCategoryChill = document.getElementById("cta-filter-by-category-chill");

const BtnToListen = [ctaFilterByCategoryHome, ctaFilterByCategoryWork, ctaFilterByCategoryChill];

for(let i = 0; i < BtnToListen.length; i++) {
    BtnToListen[i].addEventListener("click", (event) => {
        filterUserListByCategoryValue(event);
    });
}




function filterUserListByCategoryValue(event) {
    const value = event.target.value;
    
    // On filtre
    const result = userList.filter((user) => {
        return user.category === value;
    });

    console.log(result);
}
