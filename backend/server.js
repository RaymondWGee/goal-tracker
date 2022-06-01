// back end framework
const express = require('express')
// for environment variables
const dotenv = require('dotenv').config()
// port being started on
const port = process.env.PORT || 5000
// initializing express
const app = express()

// directs to goalRoutes
app.use('/api/goals', require('./routes/goalRoutes'))

// takes in port, and a function
app.listen(port, () => console.log(`server started on port ${port}`))