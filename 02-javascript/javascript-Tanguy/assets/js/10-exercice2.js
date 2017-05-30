// alert("WOW ! Tu es sur ma page !");
function l(e) {
    console.log(e);
}
function w(t) {
    document.write(t);
}

var PremierTrimestre = [
    {
        "nom"       :   "MANAS",
        "prenom"    :   "Tanguy",
        "moyenne"   :   {
                            "francais"  :   4,
                            "math"      :   8,
                            "anglais"   :   12
                        }
    }
];

l(PremierTrimestre);

w("<ol>");
for(i = 0 ; i < PremierTrimestre.length ; i++) {
    let Etudiant = PremierTrimestre[i];
    // let Matiere = moyenne[i];
    // -- Aperçu dans la console
    l(Etudiant);

    var NombreDeMatiere = 0, SommeDesNotes = 0;

    w("<li>");
        w(Etudiant.prenom + " " + PremierTrimestre[i].nom);
        w("<ul>");
            for(let matiere in Etudiant.moyenne) {
                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w("<li>");
                    w(matiere + " : " + Etudiant.moyenne[matiere]);

                w("</li>");
            }
                w("<li>");
                    w("<strong>Moyenne Générale :</strong> " + (Math.round(SommeDesNotes / NombreDeMatiere)));
                w("</li>");
        w("</ul>");
    l(Etudiant.moyenne);
    w("</li>");
}
w("</ol>");

