const express = require('express');
const { port } = require('./config/environment');
const { toysRouter } = require('./routes/toys.router');
const { usersRouter } = require('./routes/user.router');

const app = express();

/** MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/toys', toysRouter)
app.use('/api/users', usersRouter)


app.listen( port, ()=>console.log(`up and running on port ${port}`))