function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
   // Si todos los números son cero
  if (num1 === 0 && num2 === 0 && num3 === 0) {
    return "Error";
  }
  
  // Si alguno de los números es negativo
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }

  // Si num1 es mayor a num2 y num3, y es positivo
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Numero 1 es mayor y positivo";
  }
  
  // Si num3 es el más grande, incrementamos su valor en 1
  if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  }
  
  // Si no se cumple ninguna de las condiciones anteriores, retornamos false
  return false;
}

module.exports = operadoresLogicos;
}

module.exports = operadoresLogicos;
