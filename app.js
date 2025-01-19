// Lista que almacena los nombres de amigos
let listaAmigos = [];

/**
 * Obtiene el valor del campo de entrada del nombre del amigo.
 * @returns {string} El valor del input.
 */
function obtenerNombre() {
  return document.getElementById("amigo").value.trim();
}

/**
 * Valida si el nombre ingresado es válido.
 * @param {string} nombre - El nombre a validar.
 * @returns {boolean} Verdadero si el nombre es válido, falso de lo contrario.
 */
function validarNombre(nombre) {
  const regex = /^[a-zA-ZñáéíóúüÁÉÍÓÚÜ]+(?:[\s-][a-zA-ZñáéíóúüÁÉÍÓÚÜ]+)*$/;
  return regex.test(nombre);
}

/**
 * Limpia el campo de entrada del nombre del amigo.
 */
function limpiarCampoAmigo() {
  document.getElementById("amigo").value = "";
}

/**
 * Agrega un amigo a la lista y actualiza la visualización.
 */
function agregarAmigo() {
  const nombre = obtenerNombre();

  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (validarNombre(nombre)) {
    agregarAmigoLista(nombre);
    limpiarCampoAmigo();
    mostrarAmigos();
  } else {
    alert("Debes ingresar un nombre válido.");
    limpiarCampoAmigo();
  }
}

/**
 * Agrega un nombre al arreglo `listaAmigos`.
 * @param {string} amigo - Nombre del amigo a agregar.
 */
function agregarAmigoLista(amigo) {
  listaAmigos.push(amigo);
}

/**
 * Muestra la lista de amigos en el DOM.
 */
function mostrarAmigos() {
  const listaHtml = listaAmigos.map((amigo) => `<li>${amigo}</li>`).join("");
  document.getElementById("listaAmigos").innerHTML = listaHtml;
}

/**
 * Realiza el sorteo de un amigo aleatorio de la lista.
 */
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos registrados para el sorteo.");
    return;
  }

  const indiceSorteo = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceSorteo];

  // Mostrar el resultado del sorteo
  document.getElementById("resultado").innerHTML = `<p>Amigo sorteado: <strong>${amigoSorteado}</strong></p>`;
}
