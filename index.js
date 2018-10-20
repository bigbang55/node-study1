const express = require('express');
require('./services/passport'); //because its not returning anything

const app = express();

require('./routes/authRouters')(app); //no need for const var, imediatelly calls the function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
