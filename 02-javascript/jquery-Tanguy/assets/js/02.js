// LES SELECTEURS JQUERRY

// -- Format : $('selcteur')
// -- tous les selecteurs CSS sont dispos

// -- DOM READY
$(function(){
    // les flémards
    function l(e){
        consol.log(e);
    }

    // selection span en JS
    l("SPAN en JS :");
    l(document.getElementsByTagName("span"));
    
    // selection span en JQuerry
    l("SPAN en JQuerry :");
    l($("span"));

    //selection mon menu en JS
    l("ID via JS :");
    l(document.getElementById("menu"));

    //selection mon menu en JS
    l("ID via JS :");
    l($("#menu"));

    //selection par Attribut
    l("Par Attribut :");
    l($("[href='http://www.google.fr]"))


});