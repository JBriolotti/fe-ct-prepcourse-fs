function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   function cambiarCadena(string, callback) {
   // Verificamos si se ha proporcionado un callback y si es una función
   if (typeof callback === "function") {
      return callback(string); // Aplica la función callback al string
   }
   return string; // Si no hay callback, retornamos el string original
}

module.exports = cambiarCadena;
