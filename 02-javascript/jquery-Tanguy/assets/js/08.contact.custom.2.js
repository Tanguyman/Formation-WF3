// Initialiser JQuery
$(function(){

    //--Déclaration de Variables
    var contact = []; 
    var Contact = 0;
    /* -------------------------------
     DECLARATION DES FONCTIONS
    ---------------------------------*/
    // -- Fonction ajouterContact(Contact) :
    // Ajouter un Contact dans le tableau de Contacts,
    // mettre à jour le tableau HTML, 
    // réinitialiser le formulaire et afficher une notification.
    function ajouterContact(Contact) {
        // cacher premiere ligne tableau (.aucuncontact)
        //afficherUneNotification();
        $( ".aucuncontact" ).hide();
        
            Contact = contact.push({
                "nom"     :   nom.value,
                "prenom"  :   prenom.value,
                "email"   :   email.value,
                "tel"     :   tel.value
            });
        console.log(Contact)
        reinitialisationDuFormulaire(); 
        //-- Collecter Nom
        // effacer tableau val=""
        for(var i = 0 ; Contact.length ; i++) {
            $('tbody').append("<tr><td>" + contact[i].nom + "</td><td>" + contact[i].prenom + "</td><td>" + contact[i].email + "</td><td>" + contact[i].tel + "</td></tr>" );
        }
        
    };

    //-- Fction réinitialisation formulaire : après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {
        document.getElementById("contact").reset();
    };
    
    //--Affichage d'une notification de prise en compte du Contact
    function afficherUneNotification() {
        // $('.alert-contact').prepend('<div class="alert alert-success">Vous etes bien enregisté(e) dans notre base de données.</div>');
        $(".alert-success").show(500).delay(2000).hide(500);
    };

    //--Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(Contact) {
        //if(){};
    };
        
    //--Vérification de la validité d'un email  (paulund.co)
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    };
    /* -------------------------------
        TRAITEMENT DE MON FORMULAIRE
    ---------------------------------*/

    //--- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(event){
        console.log(event);
        //Arrêter la redirection
        event.preventDefault();

        // SUPRESSION DES ERREURS
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert').remove();

        // Décla des variables (champs à vérifier)
        var nom     =   $('#nom');
        var prenom  =   $('#prenom');
        var email   =   $('#email');
        var tel     =   $('#tel');

        // Verifier chaque champ

            // 1 - Verifier le nom
            if(nom.val() == "") {
                nom.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
            }
            // 2 - Verif du prennom
            if(prenom.val() == "") {// si  le champs nom est vide, alors j'ajoute, la class has-error (bootstrap)
                prenom.parent().addClass('has-error');
                // je rajoute une indic text
                $("<p class='text-danger'>N'oubliez pas de saisir votre prenom</p>").appendTo(prenom.parent());
            }
            // 3 - Verif du mail cf function ligne 1
            // https://paulund.co.uk/regular-expression-to-validate-email-address
            if(!validateEmail(email.val())){
                email.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre email</p>").appendTo(email.parent());
            }
            
            // 4 - Verif du tel
            if(tel.val().length = 0 || $.isNumeric(tel.val()) == false) {
                tel.parent().addClass('has-error');
                $("<p class='text-danger'>Vérifier votre numéro de téléphone</p>").appendTo(tel.parent());

            }

        if($(this).find('.has-error').length == 0) {
            afficherUneNotification();
            ajouterContact(Contact);
            
        }else{
            $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas en mesure de valider votre demande. Vérifiez vos informations.</div>')

        }
            
    });
            console.log(ajouterContact);
            console.log(contact);
            console.log(Contact);
});//fin de JQuerry contact
