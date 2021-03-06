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

// ==================================================================
// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
{
  const numbers = [3, 4, 7, 8, 9, 6];
  const fiveTimes = numbers.map((number) => number * 5);
  console.log(fiveTimes);
}

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

{
  const numbers = [3, 2, 4, 5, 8, 6, 7, 9, 11, 13, 43, 32, 33, 23];
  const oddNumbers = numbers.filter((number) => number % 2 === 1);
  console.log(oddNumbers);
}

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

{
  const products = [
    { name: "Honey", weight: "500gm", price: 400 },
    { name: "Headphone", weight: "250gm", price: 5000 },
    { name: "Table Lamp", weight: "300gm", price: 1000 },
  ];
  const expensive = products.find((product) => product.price === 5000);
  console.log(expensive);
}

// =====================================================================
// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

// 1. forEach()
// .forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.

// 2. .map():
// .map() executes the same code on every element in an array and returns a new array with the updated elements.

// 3. .filter():
// .filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

// ===========================================================
// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
{
  const products = {
    honey: { name: "Honey", weight: "500gm", price: 400 },
    headphone: { name: "Headphone", weight: "250gm", price: 5000 },
    lamp: { name: "Table Lamp", weight: "300gm", price: 1000 },
  };
  const { honey, lamp } = products;
  console.log(honey, lamp);
  const { name, price } = products.headphone;
  console.log(name, price);
  console.log(products.headphone.price);
}

// ================================================================
// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
{
  const friends = ["abul", "babul", "sabul", "maruf", "sufian"];
  const [one, two, three] = [...friends]; //get only elements not array with spread
  //   const [one, two, three] = ["abul", "babul", "sabul", "maruf", "sufian"];
  console.log(three);
}

// =======================================================
// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
{
  function sum(num1, num2, num3 = 7) {
    return num1 + num2 + num3;
  }
  const adding = sum(2, 3);
  console.log(adding);
}

// ==============================================================
// [অপশনাল]

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

{
  const madrasa = {
    departments: {
      computer: {
        deptName: "Computer Department",
        employee: 10,
        computerQuantity: 20,
      },
      fatwa: { deptName: "Fatwa Department", employee: 5, desk: 20 },
      tafsir: { deptName: "Tafsir Department", employee: 15, desk: 10 },
    },
    buildings: {
      firstFloar: {
        buildingName: "Abu Bakar Hall",
        positon: "1st Floar",
        roomQuantity: 45,
      },
      secondFloar: {
        buildingName: "Umar Hall",
        positon: "2nd Floar",
        roomQuantity: 35,
      },
      thirdFloar: {
        buildingName: "Usman Hall",
        positon: "3rd Floar",
        roomQuantity: 30,
      },
      fourthFloar: {
        buildingName: "Ali Hall",
        positon: "4th Floar",
        roomQuantity: 25,
      },
    },
    offices: {
      principal: { officeName: "Ihtemam Bivag", director: "Mw. Muhiul Islam" },
      academic: { officeName: "Talimat Bivag", director: "Mw. Golam Mostofa" },
      hostel: { officeName: "Darul Aqama Bivag", director: "Mw. Azaz Ahmed" },
    },
    classes: {
      takmil: {
        className: "Takmil Fil Hadith",
        studentAmount: 200,
        session: 2022,
      },
      fazilat: { className: "Fazilat", studentAmount: 150, session: 2022 },
      sanabiya: {
        className: "Sanabiya",
        studentAmount: 100,
        session: 2022,
      },
      mutawassita: {
        className: "Mutawassita",
        studentAmount: 100,
        session: 2022,
      },
    },
    staff: {
      teachers: {
        teacher: [
          {
            id: 01,
            teacherName: "Monjur Ahmed",
            age: 35,
            education: "Takmil Fil Hadith",
            address: "Renga, Sylhet",
          },
          {
            id: 02,
            teacherName: "Numan Ahmed",
            age: 35,
            education: "Takmil Fil Hadith",
            address: "Renga, Sylhet",
          },
          {
            id: 03,
            teacherName: "Sadik Ahmed",
            age: 35,
            education: "Takmil Fil Hadith",
            address: "Renga, Sylhet",
          },
        ],
        staffAmount: 50,
      },
      officers: { staffName: "Officer", staffAmount: 10 },
      workers: { staffName: "Worker", staffAmount: 5 },
    },
  };

  const { teacherName, age, education } = madrasa.staff.teachers.teacher[0];
  console.log(
    `${teacherName} is a ${education} passed teacher. He is a ${age} years old.`
  );
  // ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোxxধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
  const { deptName, employee, computerQuantity } =
    madrasa?.departments?.computer;
  console.log(
    `${deptName} has ${employee} employee and ${computerQuantity} computer in the lab`
  );
}
