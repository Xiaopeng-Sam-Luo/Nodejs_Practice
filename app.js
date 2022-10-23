const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extends: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT);