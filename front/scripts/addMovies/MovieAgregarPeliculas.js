const validateMovie = require("./validateMovieAgregarPeliculas")

class Movie {
  
    constructor( moviedata) {
      const validData= validateMovie(moviedata);
      this.title = validData.title;
      this.year = validData.year;
      this.director = validData.director;
      this.duration = validData.duration;
      this.genre = validData.genre;
      this.rate = validData.rate;
      this.poster = validData.poster;
    }
  }

module.exports = Movie;