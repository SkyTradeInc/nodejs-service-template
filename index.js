const dotenv = require('dotenv').config()

process.title = process.env.WINDOW_TITLE
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

const socket = require('socket.io');
const server = app.listen(port, () => {
  const io = module.exports = socket(server);
  console.log(chalk.green(`[+] Listening on port: ${(port)}`))
  const router = require('./routes/');
  app.use(express.json());
  app.use(cors());
  app.use('/', router)
})

// mongoose.connect(`mongodb://127.0.0.1/${process.env.MONGO_DB || "test"}`, { useNewUrlParser: true });
//   mongoose.connection.on('connected', () => {
//   console.log(chalk.green(`[!] Connected to MongoD`));
// });
//
// mongoose.connection.on('error', (err) => {
//   console.log(chalk.red(`[X] ${err}`))
// });
