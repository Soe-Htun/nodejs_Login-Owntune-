const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const ejs = require('ejs')
//Ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

