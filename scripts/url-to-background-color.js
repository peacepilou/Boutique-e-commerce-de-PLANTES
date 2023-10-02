// 1 - Analyser l'url
// 2 - récupérer la partie "paramètres" avec les codes hexadécimaux
// 3 - on injecte dans le HTML des bandes CSS avec le background-color des codes héxa extraits à l'étape 2



/**
 * 1 - Analyser l'url 
 **/
const baseUrl = window.location.href;




/**
 * 2 - récupérer la partie "paramètres" avec les codes hexadécimaux
 **/

 // En 2 étapes
const extractedHexaCodeArr = baseUrl.split("?");
const extractedHexaCodeStr = extractedHexaCodeArr[1];

// En 1 étape
// const extractedHexaCodeStr = baseUrl.split("?")[1];


/**
 * 3 - on injecte dans le HTML des bandes CSS avec le background-color des codes héxa extraits à l'étape 2
 **/

// On sépare la string qui contient les codes héxadécimaux en plusieurs strings, chacune étant un seul code héxadécimal
const extractedCodesArr = extractedHexaCodeStr.split("-");
console.log(extractedCodesArr);
// pour chaque code héxa, je veux créer une div et l'envoyer dans le HTML
// le backgroundColor de la div sera de la valeur de l'occurence de la boucle (le code)

const coloredStripe = document.getElementById("colored-stripe-container");

extractedCodesArr.forEach((code) => {
    coloredStripe.innerHTML += 
    `
        <div style="background-color:#${code}">${code}</div>
    `;
});



