function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // Inicializamos el resultado en 1
  let producto = 1;

  // Aseguramos que a sea menor o igual a b
  if (a > b) {
    // Si a es mayor que b, intercambiamos los valores
    [a, b] = [b, a];
  }

  // Multiplicamos todos los números en el rango de a a b
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;
