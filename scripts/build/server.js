/* eslint-disable import/no-extraneous-dependencies */
import compression from 'compression';
import express from 'express';
import open from 'open';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('dist'));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
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

app.listen(port, (err) => {
  if (err) console.log(err); // eslint-disable-line no-console
  else open(`http://localhost:${port}`);
});
