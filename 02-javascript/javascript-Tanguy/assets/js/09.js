/* ------------------------------
        LES BOUCLES
------------------------------ */

for(var i = 1 ; i <= 10; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
}

document.write("<hr>");

var j = 1;
while(j <= 10) {
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
    j++;
}

/* -------------------------------
            EXERCICES
------------------------------- */

// -- Supposons, le tableau suivant : 
var Prenoms = ['Hugo', "Jean", "Mathieu", "Luc", "Pierre", "Marc"];

/* CONSIGNE : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant
dans la console ou sur votre page. */

// 1 -- Afficher le prénom
// document.write(Prenoms);

for(var i = 0 ; i <= 5; i++){
    document.write(Prenoms[i] + "<br>");
}
document.write("<hr>");
var k = 0;
while(k < 6) {
    document.write(Prenoms[k] + "<br>");
    k++;
}