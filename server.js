const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static('public'));

const burgerRouter = require('./controllers/burgers_controller');

app.use(burgerRouter);

app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));