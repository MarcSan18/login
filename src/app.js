const express = require('express');
const path = require('path');
const session = require('express-session');
const authRouter = require('./routes/auth.routes');
const mainRouter = require('./routes/main.routes');
const usersRouter = require('./routes/users.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'algumSegredo'
}))

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/', mainRouter);

app.listen(3333, () => console.log('Funcionando ✈️'));