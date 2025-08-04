const limpiar = () => {

  const titulo = document.getElementById("titulo");
    titulo.value = "";
  
    const anio = document.getElementById("anio");
    anio.value = "";
  
    const director = document.getElementById("director");
    director.value = "";
  
    const duracion = document.getElementById("duracion");
    duracion.value = "";
  
    const genero = document.getElementById("genero");
    genero.value = "";
  
    const rate = document.getElementById("rate");
    rate.value = "";
  
    const poster = document.getElementById("poster");
    poster.value = "";
  };

  module.exports= limpiar;