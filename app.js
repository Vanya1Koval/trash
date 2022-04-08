const express = require('express');
const app = express();
const userRouter = require('./routes/userRout.js');

app.use('/user', userRouter);

/* app.use(function (req, res, next) {
    res.status(404).send("Not Found")
}); */

app.listen(3000);