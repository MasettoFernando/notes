const express = require("express")
const cors = require('cors');
const noteRoutes = require('./routes/note.routes.js')
const userRoutes = require('./routes/user.routes.js');
const CategoryRoutes = require('./routes/category.routes.js')

const app = express();

app.use(cors())

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api', noteRoutes)
app.use('/categories', CategoryRoutes)

module.exports = app