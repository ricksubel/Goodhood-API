// external imports
const express = require('express');
const cors = require('cors');

//internal imports
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors());


// TODO Do I need these for image uploading???
// app.use(bodyParser.urlencoded({ extended: false })) 
// app.use(bodyParser.json())


// middleware - API routes
app.use("/api/v1/posts", routes.posts);
app.use("/api/v1/cities", routes.cities);

// Auth Routes
app.use("/api/v1/auth", routes.auth);

// Users Routes
app.use("/api/v1/users", routes.user);

// connection
app.listen (PORT, () => {
    console.log(`Listening at port ${PORT}`)
    }
)