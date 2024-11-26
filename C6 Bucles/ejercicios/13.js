function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
   // Usamos Number.isInteger() para verificar si el número es un entero
  return Number.isInteger(num);
}

module.exports = esEntero;
}

module.exports = esEntero;
