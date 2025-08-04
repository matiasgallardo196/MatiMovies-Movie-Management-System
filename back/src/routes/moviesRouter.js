const {Router}=require("express");
const moviesController = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");


moviesRouter=Router();

moviesRouter.get("/",moviesController.getAllMovies)

moviesRouter.post("/",validateMovie,moviesController.createMovie)

module.exports=moviesRouter;