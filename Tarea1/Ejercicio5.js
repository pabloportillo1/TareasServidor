const usuarios = [
  { id: 1, nombre: "Ana",  email: "ana@mail.com" },
  { id: 2, nombre: "Luis", email: "luis@mail.com" },
  { id: 3, nombre: "Sofia", email: "sofia@mail.com" }
];

function buscarConFor(arr, email) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email === email) {
      return arr[i];
    }
  }
  return null;
}

function buscarConFind(arr, email) {
  return arr.find(u => u.email === email) || null;
}

function crearIndice(arr) {
  const indice = {};

  for (const usuario of arr) {
    indice[usuario.email] = usuario;
  }

  return indice;
}

function buscarConIndice(indice, email) {
  return indice[email] || null;
}

