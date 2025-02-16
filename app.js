// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//alert("Digite nombre")

function agregarAmigo(){  // funcion que agrega nombres al array listaAmigos
   let amigos = (document.getElementById('amigo').value);//declara variable amigos donde se guarda el valor que llega a la caja de ID Amigo

   if (amigos.trim()==="" || !isNaN(amigos)){// En este If se pregunta si la caja esta vacia 
    alert("Coloque un nombre valido, no se debe dejar en blanco")// ventana de advertencia
    limpiarCaja()
    return;

   }

    listaAmigos.push(document.getElementById('amigo').value);
    console.log(amigos);
      function agregarNombresALista() {
        let ul = document.getElementById('listaAmigos');
              let li = document.createElement('li'); // Crea un elemento <li>
            li.textContent = amigos; // Asigna el nombre al contenido del <li>
            ul.appendChild(li); // Agrega el <li> a la lista <ul>
        //});
    }
    
    agregarNombresALista();
    limpiarCaja()
}

function sortearAmigo(){
console.log(listaAmigos)
console.log(listaAmigos.length)
//for (let i = 0; i < listaAmigos.length; i++) {//declara una variable i que se usara como contador, para cada valor de i menor a el largo del array sume1 al contador 
  //  console.log(listaAmigos[i]); // Muestra cada elemento del array
  listaAmigos.forEach(function(amigo) {
    console.log(amigo); // Muestra cada elemento del array
});
    if (listaAmigos.length === 0) {//si esta en blanco la lista da alerta y no hace el sorteo
        alert("No hay nombres en la lista para realizar el sorteo.");
        return;
}

// Selecciona un nombre al azar
let indiceGanador = Math.floor(Math.random() * listaAmigos.length);
let nombreGanador = listaAmigos[indiceGanador];

// Muestra el nombre ganador
document.getElementById('resultado').textContent = `¡El ganador es: ${nombreGanador}!`;
// Elimiena el ganador
listaAmigos.splice(indiceGanador, 1);
console.log(listaAmigos)
}



//agregarAmigo();


function limpiarCaja() {
  document.querySelector('#amigo').value = '';
    
}
