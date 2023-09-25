/**
 * Q6 : Strings : interpolation VS concaténation
 * */

const myDrink = "Ice tea";
const myDrink2 = "Oasis";
const myDrink3 = "Coca";
console.log("Moi Clairette j'adooooooore " + myDrink + " " + myDrink2 + " " + myDrink3); // concaténation
console.log(`Moi clairette j'adooooore ${myDrink} ${myDrink2} ${myDrink3}`); // interpolation

/**
 * Q8 Portée des variables
 * */

// 
const tata = "tete"; // disponible partout

function toto() {
    const tutu = "titi"; // disponible uniquement dans le contexte de la fonction, c'est-à-dire dans toto()
    console.log(`salut je suis ${tutu} et mon meilleur pote c'est ${tata}`);
}
toto();