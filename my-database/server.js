const {createAppointmentsTable} = require('./database/createTables')
const {createUserTable} = require('./database/userTable')
const express = require('express')
const colors = require('colors')
const db = require('./database/db')
const { errorHandler } = require('./middleware/middleware')
const cors = require('cors');
const bodyparser = require('body-parser')

const app = express()

app.use(cors());

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./controller/routes/userRouter'))
app.use('/api/appointments', require('./controller/routes/appointmentRouter'))

 app.use(errorHandler)


const port = 5000
db.query("SELECT 1")
    .then(() => {
        console.log('DB connection  succeeded.'.cyan.underline)

        createAppointmentsTable(),
        createUserTable()

        app.listen(port,
            () => console.log(`server started at ${port}`))
    })
    .catch(err => console.log('db connection failed. \n' + err))

