// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
let fName = "Kolimullah"; //let can not redeclare but can reassign
fName = "Kamal Uddin"; // let can change the value
const lName = "Milon"; // const can not redeclare and reassign

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const person = {
  firstName: "Solim Uddin",
  lastName: "Selim",
  designation: "Member of Perloumant",
  address: "Chhatak",
};

const mp = `${fName} ${lName} is a ${person.designation} of ${person.address} area`;
console.log(mp);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
{
  const divideIt = (number) => number / 5;
  console.log(divideIt(25));
}

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো

{
  const addMultiply = (num1, num2) => {
    const add1 = num1 + 2;
    const add2 = num2 + 2;
    const multiply = add1 * add2;
    return multiply;
  };
  const result = addMultiply(3, 4);
  console.log(result);
}

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

{
  const multiplied = (num1, num2, num3) => num1 * num2 * num3;
  const output = multiplied(3, 4, 5);
  console.log(output);
}

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

{
  const addMultiply = (num1, num2) => {
    const add1 = num1 + 2;
    const add2 = num2 + 2;
    const multiply = add1 * add2;
    return multiply;
  };
  const result = addMultiply(3, 4);
  console.log(result);
}

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।

// 5 Differences Between Arrow and Regular Functions
// ====================================================
// 1. this value
// this value inside a regular function is dynamic and depends on the invocation. But this inside the arrow function is bound lexically and equals to this of the outer function.
// 2. Constructors
// As seen in the previous section, the regular function can easily construct objects. For example, the new Car() function creates instances of a car:
// A consequence of this resolved lexically is that an arrow function cannot be used as a constructor. If you try to invoke an arrow function prefixed with new keyword, JavaScrip throws an error:

// 3. arguments object
// arguments object inside the regular functions contains the list of arguments. The arrow function, on the opposite, doesn't define arguments (but you can easily access the arrow function arguments using a rest parameter ...args).

// 4. Implicit return
// If the arrow function has one expression, then the expression is returned implicitly, even without using the return keyword.

// 5. Methods
// Last but not least, you can define methods using the arrow function syntax inside classes. Fat arrow methods bind this value to the class instance.

// Anyhow the fat arrow method is invoked, this always equals the class instance, which is useful when the methods are used as callbacks.

// =======================================================
// https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/

// 1. Syntax

// 2. Use of this keyword
// Unlike regular functions, arrow functions do not have their own this.

// 3. Availability of arguments objects
// Arguments objects are not available in arrow functions, but are available in regular functions.

// 4. Using new keyword
// Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.

// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?
// ============================================
// 1. scope
// var: The scope of a var variable is functional scope.
// let: The scope of a let variable is block scope.
// const: The scope of a const variable is block scope.

// 2. updated
// var: It can be updated and re-declared into the scope.
// let: It can be updated but cannot be re-declared into the scope.
// const: It cannot be updated or re-declared into the scope.

// 3. initialization
// var: It can be declared without initialization.
// let: It can be declared without initialization.
// const: It cannot be declared without initialization.

// 4. accessed
// var: It can be accessed without initialization as its default value is “undefined”.
// let: It cannot be accessed without initialization, as it returns an error.
// const: It cannot be accessed without initialization, as it cannot be declared without initialization.

// Difference between var, let, and const keyword in JavaScript

// 1. Scope
// var: Variables declared with var are in the function scope.
// let: Variables declared as let are in the block scope.
// const: Variables declared as const are in the block scope.

// 2. Hoisting
// Hoisting means that you can define a variable before its declaration.
// var: Allowed
// let:  Not allowed
// const: Not allowed

// 3. Reassign the value
// var: Allowed
// let: Allowed
// const: Not allowed

// 4. Redeclaration of the variable
// var: Allowed
// let: Not allowed
// const: Not allowed
