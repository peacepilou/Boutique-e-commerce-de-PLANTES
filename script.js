// 1. ALGORITHMIE (syntaxe, conditions, boucles, tableau, fonctions, objet...)
// 2. MANIPULATION DU DOM 🐙 (Document Object Model)
// 3. HTTP (l'asynchronicité)


// Référence de mon bouton
let ctaBuy = document.getElementById("cta-buy");
// Référence de mon stock
let stock = document.getElementById("stock");


function updateStock() {
    // console.log("clairon"); // permet d'afficher dans la console l'élément passé entre les petites oreilles
    stock.innerText = "Stock : 8";
}

ctaBuy.addEventListener("click", updateStock);