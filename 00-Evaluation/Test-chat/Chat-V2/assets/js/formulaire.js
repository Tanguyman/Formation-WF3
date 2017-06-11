// -- Initialisation de jQuery
$(function()  {
    // Ecouter à quel moment le Chat est choisi
    $('#chatSelected').change(function(e){
        console.log(e);
        // Si le client choisit un chat
        if ($('#chatSelected')) {
            // alors la couleur des bordure du selecteur de chat revient à son état initial
            $(this).css({ 'border-color': '#ccc' });
        };
    });
    // Ecouter à quel moment le Client écrit une lette dans le textearea
    $('#comment').keyup(function(e){
        console.log(e);
        // Quand le client lève le doight du clavier
        if ($('#comment')) {
            // alors la couleur des bordure du textarea revient à son état initial
            $(this).css({ 'border-color': '#ccc' });
        };
    });

     // -- Ecouter a quel moment le formulaire est soumis
    $('#demandeAdoption').on('submit', function(event) {
        //  -- event : correspond ici à notre évènement "submit"
        console.log(event);
        //  -- Arreter la redirection HTML5
        event.preventDefault();

        //  -- Déclaration des Variables (Champs à vérifier)
        var nomChatAdopt   = $('#chatSelected').val();
        var commentClient  = $('#comment').val();
        // alert(nomChatAdopt + " " + commentClient.length);
       
        // -- vérification de chaque champ...

            //  -- 1. Vérifier si un chat a été selectionné
            if(nomChatAdopt == "-- Sélectionnez --") {
                // alert("bordure rouge nom du chat");       
                $("#chatSelected").css('border', '1px solid #f00');
            } else {
                monChatNEstPasSelectionne = false;
            }
            //  -- 2. Vérifier si le "client" à changer le commentaire et si il y a plus de 15 caractères
            if(commentClient == "Saisissez ici les raisons pour lesquelles vous souhaitez adopter ce chat..." || commentClient.length < 15) {
                    // alert("bordure rouge textarea");
                    $("#comment").css('border', '1px solid #f00');   
            } else {
                messageClientInvalide = false;
            }
            // -- 3. Vérifier si le formulaire est valide avant l'envoi
            if ( (monChatNEstPasSelectionne === false) && (messageClientInvalide === false) ){
                // alert("Votre demande d'adoption pour " + nomChatAdopt + " a bien été enregisté");
                $(".mon-formulaire").replaceWith("<div class='alert alert-success'>Votre demande d'adoption pour <strong class='text-primary text-uppercase'>" + nomChatAdopt + "</strong> a bien été enregisté<br>Nous vous contacterons dans les plus brefs délais.</div>");
            }
    });
});