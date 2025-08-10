// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos.

function agregarAmigo() {
    // Obtiene el nombre del input y elimina espacios en blanco al inicio y final.
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    // Validación: si el campo está vacío.
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; 
    }

    // Validación para evitar nombres repetidos
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombreAmigo); // Agrega el nombre al array.
    
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Crea un nuevo elemento de lista <li> para cada amigo
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    
    // Agrega el nuevo elemento a la lista <ul>
    listaAmigos.appendChild(nuevoAmigo);

    // Limpia el campo de texto para el siguiente nombre.
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    // Validación: se necesitan al menos dos amigos para el sorteo.
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Algoritmo de sorteo para asegurarse de que nadie se elija a sí mismo.
    let nombresSorteados = [...amigos]; // Copia el array para no modificar el original.
    let resultadoHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let indiceAleatorio;
        let amigoSecreto;
        
        do {
            indiceAleatorio = Math.floor(Math.random() * nombresSorteados.length);
            amigoSecreto = nombresSorteados[indiceAleatorio];
        } while (amigoSecreto === amigos[i]);

        resultadoHTML += `<li>${amigos[i]} ➡️ ${amigoSecreto}</li>`;
        nombresSorteados.splice(indiceAleatorio, 1);
    }
    
    // Muestra los resultados en el elemento <ul> con id="resultado"
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function reiniciar() {
    // Restablece el array de amigos.
    amigos = [];
    
    // Limpia el contenido de la lista de amigos y el resultado del sorteo en la interfaz.
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}