require('dotenv').config({path: "./config.env"});
var cors = require('cors')
const express = require('express');
const app = express();
const meciuri = require('./routes/meciuri');
const ponturi = require('./routes/ponturi');
const tipsteri = require('./routes/tipsteri');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const fotbal = require('./routes/Sports/fotbal');
const basket = require('./routes/Sports/basket');
const hockey = require('./routes/Sports/hockey');
const nfl = require('./routes/Sports/nfl');
const test = require('./routes/Sports/test');

//Connect DB
connectDB();
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ---- Auth ---- //
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// ---- Meciuri ---- //
app.use('/api/meciuri' , meciuri); 

// ---- Ponturi ---- //
app.use('/api/ponturi' , ponturi);

// ---- Tipsteri ---- //
app.use('/api/tipsteri', tipsteri);

// ---- Fotbal ---- //
app.use('/api/sport/fotbal', fotbal);

// ---- Basket ---- //
app.use('/api/sport/basket', basket);

// ---- Hockey ---- //
app.use('/api/sport/hockey', hockey);

// ---- NFL ---- //
app.use('/api/sport/nfl', nfl);


// ---- test ---- //
app.use('/api/sport/test', test);






// Error Handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Listen on port ${PORT}...`))

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error:, ${err}`)
  server.close(() => process.exit(1));
})