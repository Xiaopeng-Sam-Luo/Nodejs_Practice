const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
})


const PORT = process.env.PORT || 5000;
app.listen(PORT);