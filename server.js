const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// set up db
const uri = 'mongodb+srv://ghazalekram:ghazal666666@cluster0.3ajigo8.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
});

// route
const bookRouter = require('./routes/books');
app.use('/books', bookRouter);

app.listen(port, () => {
  console.log('server running');
});
