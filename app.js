//declarando variable
let amigo = [];

 function agregarAmigo() {

   let inputAmigo = document.getElementById("amigo");
   let nombreAmigo = inputAmigo.value;
   
    if(!nombreAmigo){
      alert("Debes ingresar un nombre");
      return;
    }

    if (amigo.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value= "";
    inputAmigo.focus();
    actualizarListaAmigos() 

  }
  //función para agregar texto con teclado enter.
  document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
    });

  function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

   for(let i = 0; i < amigo.length; i++) {
      let item= document.createElement("li")
      item.textContent = amigo[i];
      listaAmigos.appendChild(item)
   }
 }

 function sortearAmigo() {
    // Asegurarse de que la lista de amigos no esté vacía
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Sorteo de un amigo al azar
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];

    // Mostrar el nombre del amigo sorteado en el elemento con id "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

 }

 function reiniciarJuego() {
    // Limpiar la lista de amigos
    amigo = [];
    // Limpiar el campo de texto
    document.getElementById("amigo").value = "";
    // Limpiar la lista de amigos visualmente
    actualizarListaAmigos();
    // Ocultar la sección de resultados
   
 }