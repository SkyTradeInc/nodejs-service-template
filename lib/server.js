const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
const router = require('./routes/');
app.use(express.json());
app.use(cors());
app.use('/', router)

// const mongoURL = process.env.MONGO_URL || `mongodb://127.0.0.1/${process.env.WINDOW_TITLE}` || 'mongodb://127.0.0.1/default'
// mongoose.connect(mongoURL, { useNewUrlParser: true });
// mongoose.connection.on('connected', () => {
//   console.log(chalk.green(`[!] Connected to MongoD`));
// });
//
// mongoose.connection.on('error', (err) => {
//   console.log(chalk.red(`[X] ${err}`))
// });


module.exports = app
