function crearContador() {
  let cuenta = 0; 
  
  return {
    incrementar() {
      cuenta++;
    },

    disminuir() {
      cuenta--;
    },

    reset() {
      cuenta = 0;
    },

    obtenerCuenta() {
      return cuenta;
    }
  };
}
