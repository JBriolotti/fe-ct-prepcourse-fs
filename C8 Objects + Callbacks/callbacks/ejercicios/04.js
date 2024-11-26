function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   function sumarArray(arrayOfNumbers, cb) {
   // Sumar todos los números del arreglo
   const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
   
   // Pasamos el resultado al callback
   cb(suma);
}
module.exports = sumarArray;
