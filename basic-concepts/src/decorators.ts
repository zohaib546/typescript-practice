// Decorators are attributes that we apply to our classes
// and their members with this we can enhance or change how they behaves
// decorator runs once even with zero or multiple class instances
// its just a function that gets called by javascript runtime

// CLASS DECORATORS:
// function Component(constructor: Function) {
// 	console.log("Component decorator called");
// 	constructor.prototype.uniqueId = Date.now;
// 	constructor.prototype.insertInDOM = () => {
// 		console.log("Inserting the component in the DOM");
// 	};
// }

// @Component
// class ProfileComponent {}

// PARAMETERIZED DECORATORS
// type ComponentOptions = {
// 	selector: string;
// };

// // decorator factory
// function Component(options: ComponentOptions) {
// 	return (constructor: Function) => {
// 		console.log("Component decorator called");
// 		constructor.prototype.uniqueId = Date.now;
// 		constructor.prototype.options = options;
// 		constructor.prototype.insertInDOM = () => {
// 			console.log("Inserting the component in the DOM");
// 		};
// 	};
// }

// @Component({ selector: "#my-profile" })
// class ProfileComponent {}

// DECORATOR COMPOSITION
// multiple decorator calls in reverse order
// type ComponentOptions = {
// 	selector: string;
// };
// function Component(options: ComponentOptions) {
// 	return (constructor: Function) => {
// 		console.log("Component decorator called");
// 		constructor.prototype.uniqueId = Date.now;
// 		constructor.prototype.options = options;
// 		constructor.prototype.insertInDOM = () => {
// 			console.log("Inserting the component in the DOM");
// 		};
// 	};
// }

// function Pipe(constructor: Function) {
// 	console.log("Pipe decorator called");
// 	constructor.prototype.pipe = true;
// }

// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

// METHOD DECORATOR
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
// 	const original = descriptor.value as Function;
// 	descriptor.value = function (...args: any) {
// 		console.log("Before");
// 		original.call(this, ...args);
// 		console.log("After");
// 	};
// }

// class Person {
// 	@Log
// 	say(message: string) {
// 		console.log("Person says " + message);
// 	}
// }

// let person = new Person();
// person.say("Hello Message");

// ACCESSOR DECORATOR
// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toUpperCase() : result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//     // return 0;
//     // return null;
//   }
// }

// let person = new Person("Mosh", "Hamedani");
// console.log(person.fullName);

// PROPERTY DECORATORS
// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;

//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should be at least ${length} chracters long.`
//           );
//         value = newValue;
//       },
//     };

//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User("1234");
// user.password = "12345";
// console.log(user.password);

// PARAMETER DECORATOR
// type WatchedParameter = {
//   methodName: string;
//   parameterIndex: number;
// };

// const watchedParameters: WatchedParameter[] = [];

// function Watch(target: any, methodName: string, parameterIndex: number) {
//   watchedParameters.push({
//     methodName,
//     parameterIndex,
//   });
// }

// class Vehicle {
//   move(@Watch speed: number) {}
// }

// console.log(watchedParameters);
