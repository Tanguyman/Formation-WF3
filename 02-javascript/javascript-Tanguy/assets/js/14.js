/*------------------------------*/
// LES EVENEMENTS
/*------------------------------*/

// Les evenement vont me permettre de déclencher une fct,
// cad : une série d'instruction suit à une action de l'utilisateure

// OBJECTIF: Etre en mesure de capturer ces evenements,
// afin d'éxecuter une fonction.'

/* --- Les Evenements

 MOUSSE
    click       : au clic sur un élément
    mousseenter : la souris pass au dessu de la zone
    mousseleave : la souris sort de la zone

KEYBOARD (clavier)

    keydown     : une touche du clavier est enfoncée
    keydup      : une touche a été relachée

WINDOW (fenetre)
    scroll   : defilement de la fenetre
    resize   : redimensionnement de la fenetre

FORM <= !EVALUATION + form (aller chercher)
    change : pour les éléments <input>, <select> et <textearea>
    submit : à l'envoi (soumission) d'un formulaire

DOCUMENT
    DOMContentLoaded : executé lorsque le doc HTML est complétement chargé,
    sans attendre le CSS et les images

==========================
LES ECOUTEURS D'EVENEMENT
==========================
Pour attacher un évènement à un élément, ou autrement dit,
pour déclarer un écouteur d'évèment qui se chatrgera de lancer
une action, cad une fction pr un evenement donné,
je vais utilisé la syntase suivante
*/
var p = document.getElementById("MonParagraphe");
console.log(p);
// -- Je souhaite que mon paragraphe soit rouge au clic

// -- 1 : Je definis une fction chargée d'éxecuter cette action
function changeColorToRed() {
    p.style.color = "red";
}

// -- 2 : Je déclare un écouteur qui se chargera d'appeler la fction
// au déclenchemt de l'évènemt.
p.addEventListener("click", changeColorToRed);

/*==========================
==========================
    EXERCICES   
==========================
A l'aide de js, créer un champ "input" type text avec un ID unique.
Afficher ensuite dans une alert, la saisie de l'utilisateur
==========================*/
// document.body.appendChild(input);
var input = document.createElement("input");

input.setAttribute("type","text");
input.id = "MonInput";

document.body.appendChild(input);

input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput() {
    alert(input.value);
}

