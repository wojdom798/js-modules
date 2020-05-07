/* CORS, Same Origin Policy

Mozilla Firefox
URL: about:config
-> privacy.file_unique_origin = false


*/
import { add } from './add.js';
import { multiply } from './multiply.js';
import { pow } from './pow.js';

console.log(add(3, 5));
console.log(multiply(3, 5));
console.log(pow(3, 5));