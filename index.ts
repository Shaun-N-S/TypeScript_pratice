//Infer types (implict typing)

// let userName = "Shaun N S";
// userName = 19; // Error: Type 'number' is not assignable to type 'string'.
// userName = "Shaun N S"; // Correct: Type 'string' is assignable to type 'string'.


//Defined types (explicit typing)
// let userName: string = "shaun N S";
// let userAge: number = 19;
// let userSalary: number = 1000000;
// let isUser: boolean = true;
// let userId : string | number = 12132005;
// let skills : string[] = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
// let count : number[] = [1, 2, 3, 4, 5];
// let emptyArray : [] = []; // Empty array
// let userDetails : {name:string;age:number} = {name:"Shaun N S", age:19}; // Object with properties



//Interfaces 

//Interfaces are used to define the structure of an object. They can be used to define the types of properties and methods that an object should have.

// interface Details {
//     name: String;
//     age: number ;
//     salary: number;
//     isUser: boolean;
//     getName ?: ()=> void; // ? Optional property
// }


// let userDetails: Details = {
//     name: "Shaun N S",
//     age: 19,
//     salary: 1000000,
//     isUser: true
// };

// let adminDetails: Details = {
//     name : "CAPTAIN",
//     age: 19,
//     salary: 10000000,
//     isUser: true
// }



///Types

// Types are used to define the types of variables, function parameters, and return values. They can be used to define the types of primitive values, objects, arrays, and functions.

// type details = {
//     name: String;
//     age: number ;
//     salary: number;
//     isUser: boolean;
//     getName ?: ()=> void; // ? Optional property
// }

// let userDetails: details ={
//     name: "Shaun N S",
//     age: 19,
//     salary: 1000000,
//     isUser: true,
//     getName : function(){
//         console.log(this.name);
//     }
// }



//Union/Optional Types

// type details = {
//     name: String;
//     age: number | string ;
//     salary: number | string;
//     isUser: boolean;
//     getName ?: ()=> void; // ? Optional property
// }

// let userDetails: details ={
//     name: "Shaun N S",
//     age: "19",
//     salary: 1000000,
//     isUser: true,
//     getName : function(){
//         console.log(this.name);
//     }
// }



// let arrays: (string|number)[] = ["HTML", "CSS", "JavaScript", 1, 2, 3, 4, 5]; // Array of strings and numbers



//Functions


// type details = {
//     name: stringtring;
//     age: number | string ;
//     salary: number | string;
//     isUser: boolean;
//     getName ?: ()=> void; // ? Optional property
// }

// let userDetails: details ={
//     name: "Shaun N S",
//     age: "19",
//     salary: 1000000,
//     isUser: true,
//     getName : function(){
//         console.log(this.name);
//     }
// }

// function getUserName(userDetails:details):string{
//     return userDetails.name;

// }

// const newUser = getUserName(userDetails); 



//named types / custome types

//type status = "active" | "inactive" | "pending"; // Named type




//Function overloading
// function overloading is a feature in TypeScript that allows you to define multiple function signatures for a single function. This allows you to call the same function with different argument types and return types.
// It is useful when you want to create a function that can handle different types of input and return different types of output based on the input type.



// function add(num1:number,num2:number):number;
// function add(num1:string,num2:string):string;
// function add(num1:any,num2:any):any{
//     return num1+num2;
// }

// add(2,2);
// add("2","2");


//Generics 

//Generics are a way to create reusable components that can work with different types. They allow you to create functions, classes, and interfaces that can work with any type of data.
// This allows you to create more flexible and reusable code.
// Generics are defined using angle brackets <> and can be used with any type of data. They are useful when you want to create a function or class that can work with different types of data without having to define a separate function or class for each type.

// function getAge<T>(age:T):T{
//     return age;
// }

// getAge<number>(19);
// getAge<string>("19");




// type userDetails={
//     name:string;
//     age:number;
// }

// type adminDetails={
//     name:string;
//     age:number;
//     role:string;
// }


// const userDetails:userDetails={
//     name:"Shaun N S",
//     age:19,
// }

// const adminDetails:adminDetails={
//     name:"Shaun N S",
//     age:19,
//     role:"Admin"
// }

// function getDetails<T>(details:T):T{
//     return details;
// }

// const userValue = getDetails<userDetails>(userDetails);
// const adminValue = getDetails<adminDetails>(adminDetails);

// userValue.name
// adminValue.role
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this is only possible in while using type not in interface

// type userDetails={
//     name:string;
//     age:number;
// }

// type adminDetails=userDetails &{
//     role:string;
// }


// const userDetails:userDetails={
//     name:"Shaun N S",
//     age:19,
// }

// const adminDetails:adminDetails={
//     name:"Shaun N S",
//     age:19,
//     role:"Admin"
// }



// function getDetails<T>(details:T):T{
//     return details;
// }

// const userValue = getDetails<userDetails>(userDetails);
// const adminValue = getDetails<adminDetails>(adminDetails);

// userValue.name
// adminValue.age


/////////////////////////////////////////////////////////////////////////////////////////////////////

//in Interface we can use extends and implements
//in type we can use intersection (&) and union (|)


// interface userDetails {
//     name:string;
//     age:number;
// }

// interface adminDetails extends userDetails {
//     role:string;
// }



// Enum 
// Enum is a special "class" that represents a group of constants (unchangeable variables). Enums are a feature added in TypeScript that allows you to define a set of named constants. Enums can be numeric or string-based. They are useful when you want to define a set of related values that can be used in your code.


// enum StatusType {
//     PENDING,
//     COMPLETED,
//     FAILED
// }

// function getStatus(message:string,status:StatusType){
//     console.log(message , "==" , status);
// }

// getStatus("status is ",StatusType.PENDING);



// as const 
// as const is a TypeScript feature that allows you to create a read-only array or object. It is useful when you want to create an array or object that cannot be changed after it is created. This can help prevent bugs and make your code more predictable.

//let name = "Shaun N S" as const; // name is a read-only string
//we cannot change the value of name after it is created




//KeyOf typeOf


// const StatusType = {
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed",
// } as const;


// function getStatus(message:string,status:keyof typeof StatusType){
//     console.log(message , "==" , StatusType[status]);
// }

// getStatus("status is ","PENDING");



// Utility types
// Utility types are a set of built-in types that allow you to manipulate and transform types in TypeScript. They are useful when you want to create new types based on existing types. Some common utility types include Partial, Required, Readonly, Record, Pick, and Omit.
// These utility types can help you create more flexible and reusable code by allowing you to easily transform and manipulate types.

// . Readonly: Makes all properties of a type read-only, meaning they cannot be changed after they are created. This is useful when you want to create an object that should not be modified after it is created.
// . Partial: Makes all properties of a type optional, meaning they can be omitted when creating an object. This is useful when you want to create an object that may not have all properties defined.
// . Required: Makes all properties of a type required, meaning they must be defined when creating an object. This is useful when you want to create an object that must have all properties defined.
// . Record: Creates a new type with a set of properties and their corresponding types. This is useful when you want to create an object with a specific set of properties and their types.
// . Pick: Creates a new type by picking a set of properties from an existing type. This is useful when you want to create a new type that only includes certain properties from an existing type.
// . Omit: Creates a new type by omitting a set of properties from an existing type. This is useful when you want to create a new type that excludes certain properties from an existing type.
// . Exclude: Creates a new type by excluding certain types from an existing type. This is useful when you want to create a new type that excludes certain types from an existing type.
// . Extract: Creates a new type by extracting certain types from an existing type. This is useful when you want to create a new type that includes only certain types from an existing type.








