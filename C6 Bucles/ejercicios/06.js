function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
   // Verificamos si el número está en el rango de tres dígitos, ya sea positivo o negativo
  if (num >= 100 && num <= 999 || num <= -100 && num >= -999) {
    return true;
  }
  return false;
}

module.exports = tieneTresDigitos;
}

module.exports = tieneTresDigitos;
