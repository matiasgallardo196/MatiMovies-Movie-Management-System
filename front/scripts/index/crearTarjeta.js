

function crearTarjeta({title,year,director,duration,genre,rate,poster}){

    const tarjeta= document.createElement("div");
    tarjeta.classList.add("nuevaTarjeta");
    tarjeta.classList.add("card");

    const titulo=document.createElement("h2");
    titulo.textContent=title;

    const divFormato=document.createElement("div");
    divFormato.classList.add("divFormato");
    
    const anio=document.createElement("p");
    anio.textContent=year;

    const directorhtml=document.createElement("p");
    directorhtml.textContent=director;

    const duracion=document.createElement("p");
    duracion.textContent=duration;

    const genero=document.createElement("p");
    genero.textContent=genre;

    const calificacion=document.createElement("p");
    calificacion.textContent=rate;

    const imagen=document.createElement("img")
    imagen.src=`${poster}`;


    tarjeta.appendChild(titulo);
    [anio,directorhtml,duracion,genero,calificacion,imagen].forEach( element => divFormato.appendChild(element))

    tarjeta.appendChild(divFormato);


    return tarjeta;


 
}

module.exports = crearTarjeta;