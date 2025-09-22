let amigosSecretos = []; 

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para agregar un nuevo amigo
function agregarAmigo() {
    // Obtener el valor del input
    const nombreInput = document.getElementById('amigo').value;   
    
    // Validar que el input no esté vacío
    if (nombreInput.trim() === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    // Agregar el nombre al array
    amigosSecretos.push(nombreInput);
    
    // Actualizar la lista y mostrarla en la pantalla
    actualizarListaAmigos();
    
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
    
    console.log(amigosSecretos);
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarListaAmigos() {
    // Convertir el array 'amigosSecretos' a elementos <li>
    let listaAmigos = amigosSecretos.map(amigo => `<li>${amigo}</li>`).join("");
    
    // Llamar a la función para asignar el texto (la lista de amigos secretos) al <ul>
    asignarTextoElemento('ul', listaAmigos);
}
function sortearAmigo() {
    // Validar que haya amigos disponibles en el array
    if (amigosSecretos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y el largo del array menos uno
    const indiceAleatorio = Math.floor(Math.random() * amigosSecretos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigosSecretos[indiceAleatorio];

    amigosSecretos = []; // Vacía la lista de amigos
    actualizarListaAmigos(); // Actualiza la lista en la pantalla

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;

}
