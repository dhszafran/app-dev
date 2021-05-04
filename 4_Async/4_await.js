/////////////
// App Dev //
/////////////

// Module: Async programming.
/////////////////////////////

// The await/async pattern is so called "sugar coating" over the Promise syntax
// It means that it makes writing code involving promises easier and faster.
// You don't even realize you are writing a Promise!

// EXERCISE 1. Async/await.
///////////////////////////

// This is a plain, normal, boring function.
let hello = () => { return "Hello" };
hello();

// This is a really cool, brand new, async function.
let hello = async () => { return "Hello" };
hello();

// It might look similars, but it has superpowers.

// You can chain a promise to it.
hello().then((value) => console.log(value));
hello().then(console.log);

// An async function can pause the execution
async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then();


wrapper();

// promise
//   .then(res => console.log(`2. Yes, he/she is one of them!`))
//   .catch(res => console.log(`2. Nope, let's keep searching.`));



  