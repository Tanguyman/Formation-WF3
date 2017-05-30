/* --------------------------------
            LES FONCTIONS
---------------------------------*/

// -- Déclarer une Fonction
function DitBonjour(){
    alert("Bonjour");
}

// appeler une fonction et la déclencher 
DitBonjour();

// Déclarer une Fction qui prend une variable en parametre
function Bonjour(Prenom, Nom){
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> !</p>");
}

// -- Appeler / Utiliser une fction avec parametre
Bonjour("Hugo", "LIEGARD");

// -- OU

var Nom     = "MANAS";
var Prenom  = "Tanguy";

Bonjour(Prenom, Nom);

/* --------------------------------
EXERCICE:
Créez une fction permettant d'effectuer l'addition de 2 nb passés en parametres
-------------------------------- */
function add(a, b){
    console.log(Number = a+b);
    // console.log(document.write("<p>la somme de a + b est égale à " + (Number = a+b) + "</p>");
}
add(6, 6);

function addition(nb1, nb2) {
    // let resultat = nb1 + nb2;
    return nb1 + nb2;
}
document.write("<p>" + addition(10, 5) + "</p");

