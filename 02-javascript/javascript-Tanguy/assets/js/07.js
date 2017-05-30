/* --
    Votre mission que vs devez acceptez !
    Réalisez une fct permettant à un internaute de :
    - Saisir son Prénom dans un prompt
    - Retourner à l'utilisateur : Bonjour [PRENOM], Quel age as-tu ?
    - saisir son age
    - Retourner à l'utilisateur : tu es donc né en [ANNEE DE NAISSANCE]
    - Afficher ensuite un récap de la page.
    Bonjour [PRENOM], tu as [AGE] !
*/

function Bonjour(prenom, age){
var prenom = prompt("Quel est ton prénom ?");
// console.log(prenom);

alert("Bonjour " + prenom);

var age = prompt("Quel est ton age ?");
// console.log(age);

var annee = new Date();
var anneenaissance = annee.getFullYear() - age;
// console.log(anneenaissance);

alert("tu es donc né en " + anneenaissance);

alert("Bonjour " + prenom + " tu as " + age);
}

// Bonjour(prenom, nom);
Bonjour();

// 1 -- Initialisation des variables
var AnneeActuelle = new Date();

//2 -- Création de ma fonction
functionHello() {

    // 2a. -- Je demande à l'utilisateur 
}