// variables stockées par VALEUR ---> primitifs (simples) : STRING, NUMBER, BOOLEAN, UNDEFINED, NULL
// variables stockées par REFERENCE ---> non-primitifs (pas simples) : OBJETS, TABLEAUX, FONCTIONS


/**
 * Variables stockées par VALEUR : exemple
 */
let age1 = 42;
let age2 = age1;
age1 = 52; 
console.log("age1", age1, "age2", age2); // 52 42
// on s'y attend, c'est logique car on copie la variable 1 (qui est statique) dans une autre variable statique. 
// Cela signfie que chaque variable possède sa PROPRE VALEUR


/**
 * Variables stockées par REFERENCE : exemple
 */

// OMG description avec Objets
let mug1 = {
    color: "red",
    height: 15,
    isFilled: false,
    dimensions: {
        width: 10,
        height: 12,
        diameter: 20
    }
};
let mug2 = {
    color: "blue",
    height: 25,
    isFilled: true,
};

mug2 = mug1; // same ref baby

mug2.height = 12;
console.log(mug1.height, mug2.height) // 12 12
// Comme les deux variables "mug1" et "mug2" pointent vers le MÊME EMPLACEMENT DE MÉMOIRE, si l'une des variables modifient une propriété de l'objet,
// alors l'autre variable sera également affectée.
// On peut le voir comme 2 collocs qui partagent la même maisons : si l'un des collocs changent de canapé, l'autre le verra forcément hahaha lel

// idem pour les TABLO
const fruits = ["apple", "pineapple"]; // kiwi
let fruits2 = [];
fruits2 = fruits;
// en deep copy :
// fruits2 = [...fruits];
fruits2.push("kiwi");
console.log(fruits, fruits2);


// LA SOLUTION si je veux "deep copy" une valeur stockée par référence, alors je peux utiliser le Spread operator ...
let mug3 = {...mug1}; // spread operator ou destructuring
mug3.height = 45;
console.log(mug3.height, mug1.height); // 45 12

let mug4 = {...mug1}
mug4.dimensions.diameter = 50;
console.log(mug1.dimensions.diameter, mug4.dimensions.diameter); // 50 50
// OH NON PROBLEME : car le spread operator ne fonctionne qu'à un seul niveau de profondeur d'objet.
// Si je veux créer une "deep copy" de l'objet "dimension" appartenant à l'objet "mug1", je dois alors également utiliser le {...}
// Autrement dit, ça donnerait : 
mug4.dimensions = {...mug1.dimensions};


