const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
const print = document.getElementById('printMe');

import { groupBy } from '../lib/js';
const users = [
  {id: 1, state: 'moscow', name: 'grevisse' },
  {id: 2, state: 'varonej', name: 'bakes' },
  {id: 3, state: 'moscow', name: 'emma' },
  {id: 4, state: 'peter', name: 'cuma' },
  {id: 5, state: 'moscow', name: 'deko' },
  {id: 6, state: 'varonej', name: 'tiste' },
  {id: 7, state: 'moscow', name: 'emeka' },
]
const newUsers = groupBy(users, 'state');

btn1.addEventListener('click', function () {
  console.log('users: ', newUsers);
});
