// 📁 say.js
const data = [1,2,3];

function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
export {sayHi, sayBye, data}; // a list of exported variables