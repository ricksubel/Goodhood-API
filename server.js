// external imports
const express = require('express');
const cors = require('cors');

// TODO this bodyParser or express???
const bodyParser = require('body-parser');

//internal imports
// const routes = require('./routes');

// TODO which port?
// const port = process.env.PORT || 3001;
const PORT = 3001

const app = express();

// TODO which JSON parsing?
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// middleware - API routes
// app.use("/api/v1/games", routes.games);

// Auth Routes
// app.use("/api/v1/auth", routes.auth);

// Users Routes
// app.use("/api/v1/users", routes.user);

// connection
app.listen (PORT, () => {
    console.log(`Listening at port ${PORT}`)
    }
)