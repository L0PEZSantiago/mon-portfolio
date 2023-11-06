console.log('toto');

// string (chaine de caractères), cela ne prend pas en compte la valeur mais uniquement ce qui est écrit, on utilise les guillemets pour les chaînes de caractères.

// let pour initialiser une variable

// puis on met un " = " pour définir la valeur de la variable

// const est une variable qui ne va pas changer contrairement au let que l'on peut réassigner, const pour les variables un peu plus génériques

let myVar = "ma variable";
const myVar2 = "ma variable 2";

myVar = "ma variable changée"

console.log(myVar);

// booleans

let isTrue = true;
let isFalse = false;

console.log(isTrue);

// les chiffres et opérateurs

let chiffre1 = 1;
let chiffre2 = 2;

console.log(chiffre1, chiffre2);
console.log(chiffre1 + chiffre2);

// Pour avoir le type

let chiffre4 = 4;
let chiffre5 = "5"; // Il n'est pas considéré comme un chiffre avec une valeur, mais uniquement en tant que caractère.

console.log(typeof chiffre4 + typeof chiffre5);

// template string, litéraux de gabarits et concat
// litéraux de gabarits qui sert à alléger la syntax permettant de réduire le code et éviter les erreurs sur la console

let test = "test " + myVar; // On peut mettre un espace dans le "test" pour que ce soit plus lisible. Le + va concat le test et le myVar, il ne va pas les additionner.
let test2 = `test ${myVar}`; // Ceci est un litéraux de gabarit, cela donne le même résultat que la commande juste au dessus.

console.log(test2)  