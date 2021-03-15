require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const app = express()
// middleware section
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded( {extended: true} ))
app.use(cors())
app.use(express.json())

// app.use(require('cookie-session')({
//   secret: 'secret'
// })) 
// app.use(require('flash'))


// MongoDB Atlas connection setting
const mongoose = require('mongoose')
const connStr = process.env.DATABASE_URL
                      .replace('<password>',process.env.DATABASE_PWD)
                      .replace('<database>',process.env.DATABASE_NAME)

mongoose.connect(connStr, { useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// import transactions router
const userRoutes = require('./routes/userRoutes')

app.use('/users',userRoutes)

const PORT = process.env.PORT || 5000
// const HOSTNAME = process.env.HOSTNAME
app.listen(PORT, () => {
  console.log('Server is listening at:'+PORT)
})