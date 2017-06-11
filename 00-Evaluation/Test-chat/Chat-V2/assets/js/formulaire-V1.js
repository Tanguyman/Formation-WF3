// -- Initialisation de jQuery
$(function()  {
    // Ecouter à quel moment le Chat est choisi
    $('#sel1').change(function(e){
        // alert( $('#sel1').val() );
        console.log(e);
        // Si le client choisit un chat
        if ($('#sel1')) {
            // alert("ok");
            // alors la couleur des bordure du selecteur de chat revient à son état initial
            $(this).css({'border-color' : '#ccc'});
        };
    });
    // Ecouter à quel moment le Client écrit une lette dans le textearea
    $('#comment').keyup(function(e){
        // alert( $('#sel1').val() );
        console.log(e);
        // Quand le client lève le doight du clavier
        if ($('#comment')) {
            // alert("ok");
            // alors la couleur des bordure du textarea revient à son état initial
            $(this).css({'border-color' : '#ccc'});
        };
    });

     // -- Ecouter a quel moment le formulaire est soumis
    $('#demandeAdoption').on('submit', function(event) {
        //  -- event : correspond ici à notre évènement "submit"
        console.log(event);
        //  -- Arreter la redirection HTML5
        event.preventDefault();

        //  -- Déclaration des Variables (Champs à vérifier)
        var nomChatAdopt   = $('#sel1').val();
        var commentClient  = $('#comment').val();
        // alert(nomChatAdopt + " " + commentClient.length);
       
        // -- vérification de chaque champ...

            //  -- 1. Vérifier si le chat est bien selectionné
            if(nomChatAdopt == "-- Sélectionnez --") {
                // alert("bordure rouge nom du chat");       
                $("#sel1").css('border', '1px solid #f00');
            } else {
                monChatEstSelectionne = false;
            }
            //  -- 2. Vérifier si le "client" à laissé un commentaire
            if(commentClient == "Saisissez ici les raisons pour lesquelles vous souhaitez adopter ce chat..." || commentClient.length < 15) {
                    // alert("bordure rouge textarea");
                    $("#comment").css('border', '1px solid #f00');   
            } else {
                leClientALaisseUnMessage = false;
            }
            // -- 3. Vérifier si le formulaire est valide avant l'envoi
            if ( (monChatEstSelectionne === false) && (leClientALaisseUnMessage === false) ){
                // alert("Votre demande d'adoption pour " + nomChatAdopt + " a bien été enregisté");
                $(".mon-formulaire").replaceWith("<div class='alert alert-success'>Votre demande d'adoption pour <strong class='text-primary text-uppercase'>" + nomChatAdopt + "</strong> a bien été enregisté<br>Nous vous contacterons dans les plus brefs délais.</div>");
            }
    });
});




// ============================================
// ============================================
// ============================================
// ============================================


// -- Initialisation de jQuery
$(function()  {
    
    // -- Ecouter a quel moment le formulaire est soumis
    $('#demandeAdoption').on('submit', function(event) {
        //  -- event : correspond ici à notre évènement "submit"
        console.log(event);
        //  -- Arreter la redirection HTML5
        event.preventDefault();

        //  -- Déclaration des Variables (Champs à vérifier)
        var nomChatAdopt    = $('#sel1').val();
        var commentClient  = $('#comment').val();
        // alert(nomChatAdopt + " " + commentClient.length);
       
        // -- vérification de chaque champ...

            //  -- 1. Vérifier si le chat est bien selectionné
            if(nomChatAdopt == "-- Sélectionnez --") {
                // alert("bordure rouge nom du chat");       
                $("#sel1").css('border', '1px solid #f00');
            } else {
                monChatEstSelectionne = false;
            }
            //  -- 2. Vérifier si le "client" à laissé un commentaire
            if(commentClient == "Saisissez ici les raisons pour lesquelles vous souhaitez adopter ce chat..." || commentClient.length < 15) {
                    // alert("bordure rouge textarea");
                    $("#comment").css('border', '1px solid #f00');   
            } else {
                leClientALaisseUnMessage = false;
            }
            // -- 3. Vérifier si le formulaire est valide avant l'envoi
            if ( (monChatEstSelectionne === false) && (leClientALaisseUnMessage === false) ){
                alert("Votre demande d'adoption pour " + nomChatAdopt + " a bien été enregisté");
            }
    });
});
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================


// -- Initialisation de jQuery
$(function()  {
    // var nomChatAdopt    = $('#sel1');
    // $("#sushi").click(function(e){
    //     consol.log(e);
    //     alert("ok");
    // });
// if (nomChatAdopt.val() == "--Sélectionner--") {
//     alert("Mistigri");
// };
        
input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput() {
    alert(input.value);
}


    // -- Ecouter a quel moment est soumis notre formulaire
    //  -- A la soumission de mon Formulaire, je vais executer une fonction anonyme.
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);

    $('#demandeAdoption').on('submit', function(event) {
        //  -- event : correspond ici à notre évènement "submit"
        console.log(event);
        //  -- Arreter la redirection HTML5
        event.preventDefault();

        // -- Annoncer des différentes erreurs grâce à une bordure rouge


        // -- Je supprime la classe has-error en ciblant les éléments qui ont la classe "has-error", je supprime la classe sur les éléments que je cible.
        // $('#demandeAdoption .has-error').removeClass('has-error');

        // // -- Pareil ici.
        // $('#demandeAdoption .text-danger').remove();
        // $('#demandeAdoption .alert').remove();

        //  -- Déclaration des Variables (Champs à vérifier)
        var nomChatAdopt    = $('#sel1').val();
        var commentClient  = $('#comment').val();
        // alert(nomChatAdopt + " " + commentClient.length);
       
        // -- Je passe à la vérification de chaque champ...

            //  -- 1. Vérifier si le chat est bien selectionné
            if(nomChatAdopt == "-- Sélectionnez --") {
                    // alert("bordure rouge nom du chat");       
                $("#sel1").css('border', '1px solid #f00');
            } else {
                monChatEstSelectionne = false;
            }
            //  -- 1. Vérifier si le "client" à laissé un commentaire
            if(commentClient == "Saisissez ici les raisons pour lesquelles vous souhaitez adopter ce chat..." || commentClient.length < 15) {
                    // alert("bordure rouge textarea");
                    $("#comment").css('border', '1px solid #f00');   
            } else {
                leClientALaisseUnMessage = false;
            }

            if ( (monChatEstSelectionne === false) && (leClientALaisseUnMessage === false) ){
                alert("Votre demande d'adoption de " + nomChatAdopt + " a bien été enregisté");
            }
    });
});