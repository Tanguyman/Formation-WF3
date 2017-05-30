// alert("ok");
/*------------------------------
LE CHAINAGE DE DEOCIMENT
------------------------------*/

$(function() {
    //cacher ttes les div de ma page
    console.log($("div"));

    $("div").hide("slow", function(){
        // une fois que la methode hide() est terminée, mon alerte peux s'executer.
        alert('Fin du Hide');

        //NOTA BENE : la fction s'executera pour l'ensemble des éléments du selecteur.

        //--CCSS
        $('div').css("background", "yellow");
        $('div').css("color", "red");

        //--Je fais réapparaitre mes DIVs
        $('div').show();
    }); // -- Fin de la fct anonyme
});

        // -- En utilisant le chainage de méthode, vous pouvez faire
        // s'enchainer plusieurs fction les unes après les autres
        $("p").hide(1000).css("color","blue").css("font-size","20px").delay(2000).show(500);

        // MAIS C'EST ENCORE TROP LONG !!!!!!!!!!
        $('p').hide().css({'color':'blue','font-size':'20px'}).delay(2000).show();