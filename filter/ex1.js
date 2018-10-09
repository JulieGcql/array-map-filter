/* Array.prototype.filter - Exercice 1

Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Exemple de tableau d'entrée:
  [7, -4, 2, 0, -10, 3, 11]
Sortie attendue:
  [7, 2, 0, 3, 11]

 */
const numbers = [7, -4, 2, 0, -10, 3, 11];
function getPositiveNumbers(array) {
  return array.filter(num => num >= 0)
}
console.log(getPositiveNumbers(numbers))
// Si besoin, tu peux toujours visualiser le résultat avec console.log,
// mais alors, il faut alors lancer l'exercice avec node filter/ex1
// console.log(getPositiveNumbers([-2, -1, 0, 1, 2]));

// Ne pas modifier l'export
module.exports = getPositiveNumbers;
