// alert("Wow ! tu es sur ma page !");
// alert("Tu es le bienvenu");

//      Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
//       Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.

//      Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc

//      **** Vous allez créez au minimum 5 étudiants ****

//      II.  Afficher sur la page (à l'aide de document.write) pour chaque étudiant, 
//      la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 

// 1 initialiser les TABLEAUX (noms, prénom, matières, notes) : 5 étudiants
//  ou
// initialiser le tableau élèves 


var PremierTrimestre = [
    {
        "Noms"      : "LIEGEARD", 
        "Prenoms"   : "Hugo",
        "Matieres"  : {
            "francais"  : "4.4",
            "math"      : "8",
            "physique"  : "18"
        }
// 2 calculer la moyenne
        
//      "Moyennes"  : function () {
//           console.log(parseInt(PremierTrimestre[0].Matieres.francais) + parseInt(PremierTrimestre[0].Matieres.math) + parseInt(PremierTrimestre[0].Matieres.physique));
    } //PremierTrimestre[0].Moyennes()
    // {
    //     "Nom" : "Prenoms",     "" : "...",             "Matieres" :"n",            "Notes" :"n",   "Moyennes" :"n"}
];

// 2 calculer la moyenne
var  MoyennePremierTrimestre = function(){
    // 2.1 récupérer toutes les notes
    for (var i=0; i<1; i++){
        return parseFloat((parseFloat(PremierTrimestre[i].Matieres.francais) + parseFloat(PremierTrimestre[i].Matieres.math) + parseFloat(PremierTrimestre[i].Matieres.physique))/3);
    }
    // 2.2 diviser par le nombre de matières
    
}

console.log(MoyennePremierTrimestre());

// 3 afficher la page (ul/li, document.write
var afficherTableau = function(){
    document.write("<ul><li>" + PremierTrimestre[0].Matieres.francais + "</li></ul>");
}
afficherTableau();