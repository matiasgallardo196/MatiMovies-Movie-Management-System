const Movie = require("../models/Movie")
const MovieClass = require("./MovieClass")






module.exports={
    getMovies : async ()=>{
        
            const allMovies= await Movie.find()
            
            const allInstancesOfMovies=  allMovies.map(element=> new MovieClass(element))
            
            return allInstancesOfMovies;

        
    },
    createMovie :async (movie)=>{
       
            const movieInstance= new MovieClass(movie)
            const newMovie= await Movie.create(movieInstance)
            return newMovie;
        

    }
}