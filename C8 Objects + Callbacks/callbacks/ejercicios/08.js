const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  // Usamos find para encontrar el primer elemento que cumpla con la condición del callback
  const elemento = array.find(callback);

  // Si se encontró un elemento, lo retornamos. Si no, devolvemos el mensaje de error.
  return elemento ? elemento : "No se encontró el elemento";
};

module.exports = buscarElemento;
