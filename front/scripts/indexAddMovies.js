const enviar = require("./addMovies/enviarAgregarPeliculas");
const limpiar = require("./addMovies/limpiarAgregarPeliculas")


const botonEnviar= document.getElementById("botonEnviar");
const botonLimpiar= document.getElementById("botonLimpiar");





botonEnviar.addEventListener("click",enviar);



botonLimpiar.addEventListener("click",limpiar);

