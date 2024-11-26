function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
    let count = 0;
  
  do {
    num += 5;  // Aumentamos num en 5
    count++;    // Aumentamos el contador de iteraciones
  } while (count < 8); // El bucle continúa hasta que se haya ejecutado 8 veces
  
  return num; // Retornamos el valor final de num
}

module.exports = doWhile;
