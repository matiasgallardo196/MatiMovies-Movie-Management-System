


const validateMovieClass= ({title, year, director, duration, genre, rate, poster})=>{
 if (!title|| !year || !director || !duration || !genre || !rate || !poster) {
    const error = new Error("La informacion cargada de la Base de Datos no contiene todos los campos.");
    error.statusCode = 422;
    throw error;
 } else {
    return {title, year, director, duration, genre, rate, poster};
 }
}

module.exports=validateMovieClass;