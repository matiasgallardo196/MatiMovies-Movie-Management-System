# 🎬 MatiMovies - Movie Management System

## 📋 Description

MatiMovies is a web development project created during my programming learning process. It's a web application for movie management and visualization that combines frontend and backend, developed as part of my full stack development training.

**Project Level**: Learning Project - Beginner to Intermediate

## 🚀 Features

- **Movie Management**: Form to add new movies with basic information
- **Visualization**: Simple catalog to display recently added movies
- **Validation**: Basic form validation in frontend and backend
- **Responsive Interface**: Adaptive design using Bootstrap
- **RESTful API**: Simple backend with GET and POST endpoints
- **Database**: Basic storage with MongoDB
- **Informational Pages**: Additional sections about cinema and the project

## 🛠️ Technologies Used

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - CORS middleware
- **Morgan** - HTTP logger
- **Nodemon** - Automatic restart in development

### Frontend

- **HTML5** - Application structure
- **CSS3** - Styles
- **JavaScript (ES6+)** - Client-side logic
- **Bootstrap 4** - CSS framework
- **Webpack** - Module bundler
- **Axios** - HTTP client
- **jQuery** - DOM manipulation

## 📁 Project Structure

```
PM2-matiasgallardo196/
├── back/                          # Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── dbCon.js          # Database configuration
│   │   ├── controllers/
│   │   │   └── moviesController.js # Movie controllers
│   │   ├── middlewares/
│   │   │   └── validateMovie.js   # Data validation
│   │   ├── models/
│   │   │   └── Movie.js          # Movie model
│   │   ├── routes/
│   │   │   ├── index.js          # Main routes
│   │   │   └── moviesRouter.js   # Movie routes
│   │   ├── services/
│   │   │   ├── MovieClass.js     # Movie class
│   │   │   ├── moviesServices.js # Movie services
│   │   │   └── validateMovieClass.js # Class validation
│   │   ├── utils/
│   │   │   └── catchAsync.js     # Error handling utility
│   │   └── server.js             # Main server
│   ├── package.json
│   └── index.js                  # Entry point
├── front/                        # Frontend
│   ├── assets/
│   │   └── img/                  # Project images
│   ├── scripts/
│   │   ├── index/               # Main page scripts
│   │   └── addMovies/           # Scripts for adding movies
│   ├── styles/
│   │   ├── index.css            # Main styles
│   │   └── reset.css            # CSS reset
│   ├── views/                   # HTML pages
│   ├── public/                  # Compiled files
│   ├── index.html               # Main page
│   ├── package.json
│   └── webpack.config.js        # Webpack configuration
└── challenge-testing/           # Project tests
```

## 🎯 Functionalities

### Movie Management

- **Add Movies**: Simple form to enter basic movie information
- **View Catalog**: Basic list of movies with essential information
- **Data Validation**: Basic validation of required fields

### Movie Information

- Title
- Release year
- Director
- Duration
- Genre (multiple genres)
- Rating
- Poster (image URL)

### Informational Pages

- **About My Project**: Personal and project information
- **Cinema History**: Educational content about cinema
- **Recommended Websites**: Useful links to learn more
- **Cinema Curiosities**: Interesting facts about the world of cinema

### Implemented Learnings

- **Client-Server Architecture**: Basic separation between frontend and backend
- **REST APIs**: Simple endpoints for communication
- **Database**: Basic connection and operations with MongoDB
- **Validation**: Data verification both on client and server
- **Error Handling**: Basic implementation of try-catch and error middleware

## 🚀 Installation and Configuration

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB installed and running
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone [REPOSITORY_URL]
   cd PM2-matiasgallardo196
   ```

2. **Configure the Backend**

   ```bash
   cd back
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `back/` folder with:

   ```
   MONGODB_URI=mongodb://localhost:27017/matmovies
   PORT=3001
   ```

4. **Configure the Frontend**
   ```bash
   cd ../front
   npm install
   ```

## 🏃‍♂️ Execution

### Backend

```bash
cd back
npm start
```

The server will run on `http://localhost:3001`

### Frontend

```bash
cd front
npm start
```

The application will open automatically in the browser

## 📡 API Endpoints

### Movies

- **GET** `/api/movies` - Get all movies
- **POST** `/api/movies` - Create a new movie

### API Usage Example

```javascript
// Get movies
fetch("http://localhost:3001/api/movies")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Create movie
fetch("http://localhost:3001/api/movies", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Movie Title",
    year: 2024,
    director: "Director",
    duration: "2h 30min",
    genre: ["Action", "Adventure"],
    rate: "8.5",
    poster: "https://example.com/poster.jpg",
  }),
});
```

## 🧪 Testing

The project includes tests in the `challenge-testing/` folder:

```bash
cd challenge-testing
npm test
```

## 👨‍💻 Author

**Matías Gallardo** - Full Stack Development Student

This project was developed during my web programming learning process. It represents my approach to full stack development technologies, from basic HTML and CSS to API and database implementation.

## 🤝 Contributions

As a learning project, suggestions and advice are very welcome. If you have development experience and want to help me improve, please open an issue or pull request with your suggestions.

## 📚 Learning Resources

This project was developed using the following learning resources:

- Web development courses
- Official documentation of the technologies used
- Tutorials and examples from the community

## 📞 Contact

For more information about the project and my learning process, visit the "About My Project" section in the web application.

---

**This project represents my progress in the world of web development! 🎬✨**

_Project developed as part of my full stack development training._
