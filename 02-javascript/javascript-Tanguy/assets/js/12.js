// Le DOM

// document est un objet et c'est le pt d'entrée du HTML

// Comment recupérer les infos de ma page html ?

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

var contenu = document.getElementsByClassName("contenu");
console.log(contenu); // renvoie un tableau meme si il y a qu'un élément
// => récupérer avec un indice

//test
document.write(contenu);

var span = document.getElementsByTagName("span");
console.log(span);


