require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
const { sequelize } = require('./models');
const routes = require('./routes/Routes');

app.use(morgan('common'));
app.use(cors()); 
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
