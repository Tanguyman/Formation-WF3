// DECLARATION DE VERIF EMAIL
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
// initialiser JQuerry
$(function(){

    // Ecouter à quel mmt notre form est soumis
    // Et executer une fct anonyme
    // RAPPEL en JS :
    // document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);

    $('#contact').on('submit',function(event){
        // Arreter la redirection HTML5
        event.preventDefault();

        // Supression des différentes erreurs (doublement)
        //
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert').remove();


        // Décla des variables (champs à verifier)
        var nom     =   $('#nom');
        var prenom  =   $('#prenom');
        var email   =   $('#email');
        var tel     =   $('#tel');

        // Verif de chaque champ

            // 1 - Verif du nom
            if(nom.val().length == 0) {                // si  le champs nom est vide, alors j'ajoute, la class has-error (bootstrap)
                nom.parent().addClass('has-error');
                // je rajoute une indication text
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

            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>')
        }else{
            $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas en mesure de valider votre demande. Vérifiez vos informations.</div>')

        }

    });

});