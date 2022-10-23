const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello</h1>');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);