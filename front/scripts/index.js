const Repository = require("./index/Repository");
const crearTarjeta = require("./index/crearTarjeta");
const axios = require("axios");

const contenedorDeTarjetas = document.getElementById("segundaSeccion");
const apiUrl = process.env.API_URL;

async function cargarRepositorio() {
  try {
    const data = await axios.get(`${apiUrl}/movies`);
    const repositorio = new Repository();
    data.data.forEach((data) => repositorio.addMovie(data));
    repositorio
      .getMovies()
      .forEach((movie) =>
        contenedorDeTarjetas.appendChild(crearTarjeta(movie))
      );
  } catch (error) {
    console.log(error);
    contenedorDeTarjetas.appendChild(
      tarjetaError("Could not load movies. Try again later")
    );
  }
}

cargarRepositorio();

function tarjetaError(error) {
  const casoError = document.createElement("span");
  casoError.textContent = error;
  contenedorDeTarjetas.classList.add("d-flex");
  contenedorDeTarjetas.classList.add("justify-content-center");
  casoError.classList.add("fw-bold");
  casoError.classList.add("display-3");
  casoError.classList.add("text-danger");
  contenedorDeTarjetas.appendChild(casoError);
}
