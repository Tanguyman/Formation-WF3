// alert("WOW ! Tu es sur ma page !");
// alert("Tu es le Bienvenu");
function l(e) {
console.log(e);
}

var BaseDeDonnees = [
{'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
{'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
{'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
l(BaseDeDonnees[0].email);
// un système d'authentification.
// demandé à votre utilisateur son EMAIL et MOT DE PASSE
var emailLogin = prompt("Quel est votre email ?", "notez le ici..");
var mdpLogin = prompt("Quel est votre mot de passe ?", "notez le ici..");
l(emailLogin);

// vérifié ses informations = comparer l'email & le mdp à la BDD
// récupérer la liste des emails... de la BDD
for(i = 0 ; i < BaseDeDonnees.length ; i++) {
// for(i = 0 ; i != ((emailLogin === listemail) && (mdpLogin === listemdp)) ; i++) {
    var listemail = BaseDeDonnees.email;
    var listemdp = BaseDeDonnees[i].mdp;
    var listeprenom = BaseDeDonnees[i].prenom;
    var listenom = BaseDeDonnees[i].nom;
    l(listemail + " " + listemdp);

// je compare l'email avec chaque email de la liste  
if (emailLogin === listemail && mdpLogin === listemdp) {
    // lui souhaiterez la bienvenue avec son nom et prénom (document.write);
    document.write("bienvenu " + listeprenom + " " + listenom);
    break;
}else{
    // En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
    alert("non");
}
}
