const express = require('express');
require('./services/passport');

const app = express();

//authRoutes file returns a function and we imediately call app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
