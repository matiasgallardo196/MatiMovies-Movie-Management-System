const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    next({
      message: "The loaded information does not contain all required fields.",
      statusCode: 400,
    });
  }
  if (isNaN(year)) {
    next({ message: "The year must be numbers", statusCode: 400 });
  } else {
    next();
  }
};

module.exports = validateMovie;
