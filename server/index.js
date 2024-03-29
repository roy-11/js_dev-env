const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 5000);

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com' },
    {
      id: 2,
      firstName: 'Tammy',
      lastName: 'Norton',
      email: 'tnorton@yahoo.com',
    },
    {
      id: 3,
      firstName: 'Tina',
      lastName: 'Lee',
      email: 'lee.tina@hotmail.com',
    },
  ]);
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost:${app.get('port')}`);
});
