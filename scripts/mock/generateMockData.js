/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console, import/no-extraneous-dependencies */

import { generate, extend } from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import schema from './mockSchema';

// eslint-disable-next-line global-require
extend('faker', () => require('faker'));
const json = JSON.stringify(generate(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  }
  return console.log(chalk.green('Mock data generated.'));
});
