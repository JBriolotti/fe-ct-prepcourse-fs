function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  // Verificamos si es divisible entre 3 y 5
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  // Verificamos si es divisible solo entre 3
  if (num % 3 === 0) {
    return "fizz";
  }
  // Verificamos si es divisible solo entre 5
  if (num % 5 === 0) {
    return "buzz";
  }
  // Si no es divisible ni entre 3 ni entre 5, retornamos false
  return false;
}

module.exports = fizzBuzz;
}

module.exports = fizzBuzz;
