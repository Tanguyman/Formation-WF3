// alert("Wow ! tu es sur ma page !");
// alert("Tu es le bienvenu");
// commentaire une ligne
/*
    commentaire plusieurs lignes
*/

// -- 1 : Déclarer une variable en JS
var Prenom;

// -- 2 : Affecter une valeur
Prenom = "Tanguy";

// -- 3 : Afficher la valeur de ma VAriable dans la console
console.log(Prenom);

/*-----------------------------------------------
|   LES TYPES DE VARIABLES |
------------------------------------------------*/

// -- Ici, typeof me permet de connaitre le type de mavariable
console.log(typeof Prenom);

// --Déclaration d'un nombre
var Age = 40;

// -- Afficher dans la console
console.log(Age);

// -- Connaitre son type
console.log(typeof Age);

        /* --------------------------------------------
        |    LA PORTEE DES VARIABLES                  |
        |
        |   les Variables déclarées directement à la racine
            du fichiers JS sont appelées variables GLOBALES.

            Elles sont disponibles dans l'ensemble de votre doc,
            y compris dans les fonctions

            ###

            Les Variables déclarées à l'interieur 
            d'une fonction sont appelées variables LOCALES

            Depuis ECMA6, vous pouvez déclarer une variable 
            avec le mot clé:
            "let"

            Votre varaible sera alors accessible uniquement
            dans le bloc dans lequel elle est contenu cad déclarée.

            Si elle est déclarée dans une condition, 
            elle sera disponible uniquement dans le bloc de la condition
            ou de la boucle...
        |
        |
        -------------------------------------------------- */

//-- Les Variables FLOAT
var uneDecimale = -2.987;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (Vrai / Faux)
var unBooleen = false;
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les Constantes

/*

    La déclaration CONST permet de créer une constante accessible 
    uniquement en lecture.
    Sa valeur, ne pourra pas être modifiées par des réaffectations ultérieures.
    Une constante ne peut pas être déclarée à nouveau.
*/

// -- Généralement les constantes sont en majuscules.
const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// -- Je ne peux pas faire cela
//USER ="Hugo";
//  Uncaught TypeError: Assignment to constant variable.


        /* --------------------------------------------
        |    LA PORTEE DES VARIABLES                  |
        |
            Au fur et à mesure qu'on affecte et réaffecte
            des valeurs à une variable, celle-ci prend la 
            nouvelle valeur et le nouveau type.
            En ECMA Scripts, les Variables sont auto-typées.

            Pour convertir une variable de type NUMBER en STRING
            et STRING en NUMBER je peux utiliser 
            les fonctions natives de js.

        |
        |
        --------------------------------------------- */

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

// -- La fct parseInt() pour retourner une entier à partir de ma chaîne caractère.
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// -- La fct parseFloat() permet de retourner un Float sur la base d'un STRING.
unNombre = parseFloat("unNombre");
console.log(unNombre);
console.log(typeof unNombre);

// -- Converstion d'un nombre en STRING avec toString()
var unNombreEnString = 10;
var maChaineDeCaractere = unNombreEnString.toString();
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);