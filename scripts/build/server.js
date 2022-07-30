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

app.listen(port, (err) => {
  if (err) console.log(err); // eslint-disable-line no-console
  else open(`http://localhost:${port}`);
});
