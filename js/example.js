// 📁 say.js
export const data = [1,2,3];

function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables