const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('./api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, function() {
    console.log('Server is listening on https://localhost/' + PORT);
});



