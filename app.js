import { getUser } from './module1.js';
import { power } from './module2.js';

const user = getUser();
console.log("User:", user);
console.log("2^5 =", power(2, 5));
