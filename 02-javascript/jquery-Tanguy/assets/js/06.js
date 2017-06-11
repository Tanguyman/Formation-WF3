// =======================================
//         LES SELECTEURS D'ENFANTS
// =======================================

$(function(){
    function l(e) {
        console.log(e);
    }

    l($('div'));

l($('header'));

// selectionner tous les élément descendants direct qui sont dans header
l($('header').children());

//
l($('header').children('ul'));

// // 
l($('header').children('ul').find('li'));

// //
l($('header').find('li').eq(1));

//voisin immediat du header
l($('header').next());

// voisin du voisin
l($('header').next().next());

//avant = prev
l($('header').prev());

// parent
l($('header').parent());

});

