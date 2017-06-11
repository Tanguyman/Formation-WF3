// alert("WOW ! Tu es sur ma page !");
/*
INSTALLATION
http://jquery.com/download/
- lire la Documentation
Using jQuery with a CDN
*/

/*==========================
    DIS
==========================*/

// à partir du mmt où mon DOM, cad l'arborescence de ma page 
// est completemt chargée je peux commencer à utiliser JQuerry

// Je vais mettre l'ensemble de mon code ds un function
// Cette fction sera appelé AUTOMATIQUEMENT
// par JQuerry lorsque le DOM sera entierement défini

//     3 façon de faire :

jQuery(document).ready(function(){

});

$(document).ready(function(){

});

$(function(){

});
/*=========================*/

$(function(){
    //alert("Hello World !");

    // -- En JS
    document.getElementById("TextEnJQuery") = "Mon texte en JS";
    document.getElementById("TextEnJQuery").innerHTML = "<strong>Mon texte en JS</strong>";

    // -- En JQuerry
    $("#TextEnJQuerry").html("Mon texte en JQ !");
});

