const express = require('express');
const cors = require('cors');

require('dotenv').config();



const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.set('x-powered-by', false); // for security
app.set('trust proxy', 1); // trust first proxy


app.use(cors());




const server = app.listen(port, () => {
  if (!inTestEnv) console.log(`Server is running on port: ${port}`);
});

// process setup : improves error reporting
process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
});
process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
});

module.exports = server;
