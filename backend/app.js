const express = require("express")
const cors = require('cors');
const noteRoutes = require('./Routes/note.routes.js')
const userRoutes = require('./Routes/user.routes.js');
const CategoryRoutes = require('./Routes/category.routes.js')

const app = express();

app.use(cors())

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api', noteRoutes)
app.use('/categories', CategoryRoutes)

module.exports = app