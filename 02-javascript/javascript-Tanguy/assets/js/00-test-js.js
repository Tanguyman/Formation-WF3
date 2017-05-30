// alert("Hello !");

let toPrint = 'Hello World.';
{
    let toPrint = 'Goodbye World.';
}
console.log(toPrint); // Prints 'Hello World'

var toTest = "Yes";
{
    var toTest = "No";
}
console.log(toTest);

let Test2 = 1;
// let Test2 = 2;
console.log(Test2); //syntax error "Test2" has already been declared

const MA_FAV = 7;
// MA_FAV = 20;// Cette réaffectation lèvera une exception 
console.log("mon nombre favori est : " + MA_FAV);// affichera 7

// -- Conversion d'un Nombre en String avec toString()
var unNombreEnString = 10;
var maChaineDeCaractere = toString(unNombreEnString);
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);