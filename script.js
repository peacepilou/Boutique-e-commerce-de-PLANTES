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






// Cours du soir n°2

/**
 * Q1 : Simple ou double quotes ? 
 * */ 
"ceci est une string" // chaîne de caractères = double quotes
'c' // caractère = simple quote


/**
 * Q2 : Le modulo ?
 * */ 
// Le modulo permet de connaître le RESTE d'une division
// Mais il est souvent utilisé en JS pour connaître la PARITÉ d'un nombre (à savoir s'il un nombre est PAIR ou IMPAIR)

// Le nombre que je veux tester MODULO 2 est-il égal à 0 ? si oui, alors le nombre que je veux tester est PAIR, sinon il est IMPAIR
console.log("Est-ce que 6 est pair ?", 6 % 2 == 0); // TRUE car 6 est pair
console.log("Est-ce que 17 est pair ?", 17 % 2 == 0); // FALSE car 17 est impair


/**
 * Q3 : Boolean, valeur et type
 * */
// Le boolean est un TYPE de données en JS, qui peut avoir comme valeurs : TRUE ou FALSE 

/**
 * Q4 : prompt
 * */
// Prompt déclenche une boîte de dialogue pour saisir une réponse (sous la forme d'une chaîne de caractères)
// Le résultat remplacera l'appel de la fonction prompt().
// Autrement dit, si je réponds "Yo" dans la boîte de dialogue, alors prompt("Wesh ton surnom bb") sera remplacé par la valeur "Yo"
// Et donc, nickname vaudra "Yo"


let myAgeInString = prompt("Wesh ton age bb");
let myAgeInNumber = parseInt(myAgeInString);
let numberOfIphones = parseInt(prompt("Cb t'as d'iphones ?"));
                              // "3"
                    // 3
         
/**
 * Q5 : conditions
 * */
// La condition écrit entre paranthèses () est systématique évaluée puis traduite en BOOLEAN
// C'est-à-dire que dans notre exemple, "myAgeInNumber === 25" sera traduit en TRUE ou FALSE
// Si le résultat est TRUE, alors on exécute les instructions comprises dans le IF
// Si le résultat est FALSE, alors on exécute les instructions comprises dans le ELSE
if (myAgeInNumber === 25) { // TRUE or FALSE
    console.log("LEZ GO");
} 
else {
    console.log("Déso bb");
}

/**
 * Q6 : truthy VS falsy
 * */

// Ces valeurs sont FALSY, donc elle seront toujours ramenées en FALSE
if (0) {} // FALSE
if (-0) {} // FALSE
if (null) {} // FALSE
if (undefined) {} // FALSE
if ("") {} // FALSE
if (Nan) {} // FALSE
if (false) {} // FALSE
// TOUTES les autres valeurs sont TRUTHY, c'est-à-dire seront ramenées en TRUE


