function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
  function soloNumeros(array) {
  // Filtra solo los números del arreglo
  return array.filter(elemento => typeof elemento === 'number');
}

module.exports = soloNumeros;
