


const validateMovie= ({title, year, director, duration, genre, rate, poster})=>{
 if (!title|| !year || !director || !duration || !genre || !rate || !poster) {
    throw new Error("The loaded information does not contain all required fields.");
 }if (isNaN(year)) {
    throw new Error("The year must be numbers");
} else {
    return {title, year, director, duration, genre, rate, poster};
 }
}

module.exports=validateMovie;