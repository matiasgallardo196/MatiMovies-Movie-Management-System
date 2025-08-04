
class Repository{
    constructor(){
        this.movies=[];
        
    }

    getMovies(){
        return this.movies;
    }

    addMovie(movie){
        
        this.movies.push(movie);
        
    }
   
}

module.exports = Repository;