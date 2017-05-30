// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray     = new Array;

// -- Affecter des valeurs à un Tableau Numérique
myArray[0] = "Hugo";
myArray[1] = "Tanguy";
myArray[2] = "Géraldine";

// -- Afficher le contenu de mon Tableau Numlérique dans la console.
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray);

// -- Déclarer et Affecter des Valeurs à un Tableau Numérique
var NosPrenoms = ["Yimin", "Alex", "Cristian", "Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un Objet. (Pas de Tableau Associatif en JS)
var Coordonnee = {
    "prenom"    :   "Hugo",
    "nom"       :   "LIEGEARD",
    "age"       :   27
}

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Comment créer et affecter des valeurs à un Tableau à 2 Dimensions.


// -- Création de 2 Tableaux nulériques
var listeDePrenoms  =   ["Hugo", "Rodrigue", "Kristie"];
var listeDeNoms     =   ["LIEGARD", "NOUVEL", "SOUKAI"];

// -- créer un Tableau à 2 dimensions
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher un Nom et un Prénom sur ma page HTML !
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

/*////////////////////////////////
//      EXERCICE

créez un Tab à 2 dimensions appelé
"AnnuaireDesStagiaires" qui contiendra
ttes les coordonnées pour chaque stagiaire.

Ex: Nom, Prénom, Tel

///////////////////////////*/

var AnnuaireDesStagiaires   =   [Nom, Prenom, Tel];
var Nom     =   ["Manas"];
var Prenom  =   ["Tanguy"];
var Tel     =   ["06 80 71 26 65"];

var AnnuaireDesStagiaires = [
    {"prenom":"Hugo",   "nom":"LIEGEARD", "tel":"XX XX XX XX"},
    {"prenom":"Roger",   "nom":"DURAND", "tel":"XX XX XX XX"},
    {"prenom":"Albert",   "nom":"DUPOND", "tel":"XX XX XX XX"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom);
console.log(AnnuaireDesStagiaires[1].nom);

/* --------------------------------------
            AJOUTER UN ELEMENT
---------------------------------------*/

var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite akouter un élément dans mon tableau
// -- Je fais appel à la fct push() qui me renvoie le nb d'élément de mon tableau.

console.log(Couleurs);
var nombreElementDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementDeMonTableau);

// NB : La Fct unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.

/* --------------------------------------
    RECUPERE ET SORTIR LE DERNIER ELEMENT
    -------------------------------------- */

// -- la fct pop() me permet de supprimer le dernier élément de mon tableau
// -- et d'enrécupérer la valeur.
// -- Je peux accessoirement récupérer cette valeur dans une variable

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- La même chose est possible avec le premier élément en utilisant la fct shift();

// -- NB: la fct splice() vous permet de f. sortir un ou plusieurs éléments.
// -- de votre tableau

// Couleurs.splice(1,2);