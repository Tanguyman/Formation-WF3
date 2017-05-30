/*-----------------------------
    LES OPERATEURS ARITHMETIQUES
------------------------------*/

// -- Déclaration de plusieurs variable à la suite
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

// ######### L'Addition #########
// -- Addition de nb1 + nb2 avec l'opérateur "+"
resultat = nb1 + nb2;
// -- Affichage du résultat dans la console
console.log("l'addition de nb + nb2 est égale à: " + resultat);

// ######### La Soustraction #########
// -- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;
// -- Affichage du résultat dans la console
console.log("la soustraction de nb - nb2 est égale à: " + resultat);

// ######### La Multiplication #########
// -- Multiplication de nb1 * nb2 avec l'opérateur "-"
resultat = nb1 * nb2;
// -- Affichage du résultat dans la console
console.log("la multiplication de nb * nb2 est égale à: " + resultat);

// ######### La Division #########
// -- Division de nb1 / nb2 avec l'opérateur "-"
resultat = nb1 / nb2;
// -- Affichage du résultat dans la console
console.log("la division de nb / nb2 est égale à: " + resultat);

// ######### Le Modulo #########
// -- NB : le résultat du Modulo retourne le reste de la division
// -- Le modulo de nb1 et nb2 avec l'opérateur "%"
nb1 = 11;
resultat = nb1 % nb2;
// -- Affichage du résultat dans la console
console.log("la reste de la division de " + nb1 + " et " + nb2 + "est égale à: " + resultat);

/*--------------------------------
    LES ECRITURES SIMPLIFIES
--------------------------------*/

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 5; // -- Ce qui équivaut à écrire nb& = nb1 + 5;
// ici, j'ai incrémenté et réaffecté.
console.log(nb1);
// -- je peux procéder de la même manière pour ts les autres opérateurs arithmétiques :
// + , - , / , * , %