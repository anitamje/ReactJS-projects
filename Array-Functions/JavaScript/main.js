// console.log("JavaScript");


// let str = "Filan";

// console.log("Str", str);

// str = prompt("Shtyp emrin:");

// document.getElementById("text").innerHTML = `Emri i juaj eshte ${str}`;
// // document.getElementById("text").innerHTML = "Emri i juaj eshte " + str;

// console.log("Str", str);

// const nr1 = prompt("Jep nje numer:");

// if (nr1 > 6) {
//     console.log("Numri eshte me i madh se sa 6")
// } else {
//     console.log("Numri eshte me i vogel se sa 6 ose baraz me 6");
// }
// console.log(typeof nr1)

// if (Number(nr1) === 6) {
//     console.log("Numri eshte me i barabart me 6");
// }


// const nr = prompt("Jep nje numer:");

// if (nr < 6) {

//     console.log("Me i vogel se sa 6!");

// } else if (Number(nr) === 6) {

//     console.log("Barabart me 6!");

// } else {

//     console.log("Me i madh se sa 6!");

// }

// const piket = prompt("Jep piket:");
// let rezultati;
// if (piket < 49) {
//     rezultati = "Nota 5!"
// } else if (piket < 56) {
//     rezultati = "Nota 6!"
// } else if (piket < 66) {
//     rezultati = "Nota 7!"
// } else if (piket < 81) {
//     rezultati = "Nota 8!"
// } else if (piket < 90) {
//     rezultati = "Nota 9!"
// } else {
//     rezultati = "Nota 10!"
// };

// console.log(rezultati);

const dita = prompt("Shtyp diten e javes");

switch(dita.toLocaleLowerCase()) {
    case "hene":
        console.log("keni zgjedhur diten e hene!");
        break;
    case "marte":
        console.log("keni zgjedhur diten e marte!");
        break;
    case "merkure":
        console.log("keni zgjedhur diten e merkure!");
        break;
    case "enjte":
        console.log("keni zgjedhur diten e enjte!");
        break;
    case "premte":
        console.log("keni zgjedhur diten e premte!");
        break;
    default: 
        console.log("Keni shtypur gabim te dhenat!");
}




























