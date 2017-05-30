function l(e) {
    console.log(e);
}

var google = document.getElementById("google");
l(google);

l(google.href);

// l(google.id);

// l(google.className);

// l(google.textContent)

// google.textContent = "Mon lien vers Google !"; // remplacer le txt dans la balise

// def de l'élément
var span = document.createElement("span");
// lui créer un id
span.id = "MonSpan";
// insérer contenu
span.textContent = "Mon beau Texte";

// ajouter un élément
google.appendChild(span);

// Exercice
//créer balise <h1>Titre de mon article
var h1 = document.createElement("h1");
var a = document.createElement("a");

a.textContent = "Titre de mon article";
a.href ="#";
h1.appendChild(a);
//dans h1 créer un lien vers url
document.body.appendChild(h1);
//lien = rouge et non souligné 
a.style.color = "red";
a.style.textDecoration = "none";