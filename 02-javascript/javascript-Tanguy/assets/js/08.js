/*--------------------------------
        LES CONDITIONS
-------------------------------- */

// var MajoriteLegalFR = 18;

// if(16 > MajoriteLegalFR){
//     alert("Bienvenu !");
// } else {
//     alert("Google...");
// }

/* --------------------------------
        EXERCICE
Créez une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la maj légale; alors je luyis souhaite la bienvenue,
sinon, je fait une redirection sur Google apres lui avoir signalé le soucis.

-------------------------------- */
// // 1 -- Déclarer la majorité légale
// var MajLegHugo = 18;
// // 2 -- Créer une fonction pour demander son âge
// function verifierage(){
//     // -- Demande l'age de mon visiteur puis le retourne
//     return parseInt(prompt("Bonjour, quel âge avez-vous ?","<saisissez votre âge>"));
// }
// // 3 -- Une condition pour vérifier si l'âge de l'utilisateur est supérieur à la maj légal
// if(verifierage >= MajLegHugo){
//     // -- J'affiche un Message de Bienvenu
//     alert("Bienvenu sur mon site internet pour les majeurs...");
// } else {
//     // -- J'affiche une Alerte
//     alert("ATTENTION !!! Vous devez être majeur pour accéder à ce site !");
//     // -- Je redirige vers Google
//     document.location.href = "http://lmgtfy.com/?q=%C3%A2ge+l%C3%A9gal+en+france";
// }

// function MajLeg(){
//     var age = prompt("Quel est votre âge ?");
//     if(age > 18){
//         alert("Bienvenu !");
//     } else {
//         alert("Google...");
//         window.location.replace("http://www.google.fr");
//     }
// }
// MajLeg();

/* -------------------------------------
    LES OPERATEURS DE COMPARAISON
------------------------------------- */

// -- L'opérateur de comparaison "==" signifie : égale à...
// Il permet de vérifier que 2 variables sont identiques

// -- L'opérateur de comparaison "===" signifie : Strictement Egal à...
//  Il va comparer la valeur et aussi le type de donnée.

// -- L'Opérateur de comparaison "!=" signifie : Différent de

// -- L'Opérateur de Comparaison "!==" signifie : Strictement Différent de

/* -------------------------------------
            EXERCICE :
            J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mdp.
            Je dois saisir mon email et mon mdp afin d'^tre authentifié sur le site.
            En ca d'échec une alert m'informe du problème
            Si ts se passe bien, un message de bienvenu m'accueil.
------------------------------------- */
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// 1 -- Demander l'email
var mailVisiteur   = prompt("entrez votre email svp");
// 2 -- Demander le mdp
var mdpVisiteur    = prompt("entrez votre mdp");
// 3 -- Vérifier l'email
if(mailVisiteur !== email){
    // si c pas bon le dire et recommencez
    alert("email: Faux !");
    // si c bon : vérifier le mdp
} else { if(mdpVisiteur !== mdp){
    // si c pas bon refaire le mdp
    alert("mdp Faux !");
    }
    // si l'email est bon : Bienvenu
    alert("bienvenu")
}

