// alert("WOW ! Tu es sur ma page !");
// alert("Tu es le Bienvenu");

// var coordonnee = {
//     "prenom"    :   "Hugo",
//     "nom"       :   "LIEGEARD",
//     "age"       :   27
// }
// var louee = {
//     "voiture"    :   "Ford",
//     "modele"       :   "Mustang",
//     "annee"       :   2015
// }
// console.log(coordonnee);
// console.log(typeof coordonnee);
// var tableaulocation = {coordonnee, louee};
// console.log(tableaulocation);

var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite ajouter un élément dans mon tablaeu
// -- Je fait appel à la fonction push() qui me renvoi le nombres d'éléménets de mon tableau.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

function add(nb1,nb2){
    nb1 = Number(prompt("nb1"));
    nb2 = Number(prompt("nb2"));
    resultat = nb1 + nb2;
    alert(resultat);
}

add();