const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];

// console.log(livres[0].titre);
// console.table(livres);

// for (let i =0; i < livres.length; i++) {
//     console.log(livres[i].titre);
// }

// livres.push(
//     {
//     titre: "Neuromancien",
//     auteur: "William Gibson",
//     annee: 1984,
//     disponible: false
//     }
// );

// console.table(livres);
// livres[1].disponible = true;
// console.table(livres);

let recherche = (livres.findIndex(livre => livre.disponible === false && livre.annee < 1960));

if (recherche >= 0) {
    livres.splice(recherche,1)
}



// let trouver = (livres.findIndex(livre => livre.titre === "Fahrenheit 451"));

// if (trouver >= 0) {
//     livres.splice(trouver,1)
// }
console.table(livres);

// afficherCatalogue(livres);

/**
 * 
 * @param {array} livres Tableau objet livres
 */


function afficherCatalogue(livres) {
    livres.sort((a,b) => a.annee - b.annee)
    console.log("=== Catalogue des livres ===")
    let catalogue = livres.map((livre) =>{
        console.log("=> " + livre.titre + " (" + livre.auteur + " ," + livre.annee +")")
    })
}
rechercherLivre();
function rechercherLivre() {
    let auteurRecherche = prompt("Entrez le nom de l'auteur");
    let auteurTrouver = livres.findIndex(livre => livre.auteur === auteurRecherche);
    if (auteurTrouver >= 0) {
        livres.splice(auteurTrouver,1);
    }
    
}