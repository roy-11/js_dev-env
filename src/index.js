/* eslint-disable no-debugger ,import/no-extraneous-dependencies
 */
import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course`);

export default function sum(first, second) {
  return first + second;
}
