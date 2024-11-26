function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // function filter(arrayOfStrings) {
   // Filtra los elementos que comienzan con la letra "a"
   return arrayOfStrings.filter(str => str[0].toLowerCase() === 'a');
}

module.exports = filter;
