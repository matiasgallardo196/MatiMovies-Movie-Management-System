const axios = require("axios");
const Movie = require("./MovieAgregarPeliculas");
const limpiar = require("./limpiarAgregarPeliculas");

const crearPelicula = () => {
  // const genero =document.getElementById("genero").value.split(",")
  const pelicula = {
    title: document.getElementById("titulo").value,
    year: document.getElementById("anio").value,
    director: document.getElementById("director").value,
    duration: document.getElementById("duracion").value,
    genre: document.getElementById("genero").value.split(","),
    rate: document.getElementById("rate").value,
    poster: document.getElementById("poster").value,
  };
  const movie = new Movie(pelicula);

  return movie;
};
const apiUrl = process.env.API_URL;

const enviar = async () => {
  try {
    const auxiliar = crearPelicula();
    if (!auxiliar) return;
    const response = await axios.post(`${apiUrl}/movies`, auxiliar);
    console.log(response.data);
    limpiar();
    alert("Movie added successfully");
  } catch (error) {
    console.log(error.message);
    alert(`Could not add the movie. Try again later: ${error.message}`);
  }
};

module.exports = enviar;
