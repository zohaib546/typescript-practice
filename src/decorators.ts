// Decorators are attributes that we apply to our classes
// and their members with this we can change how they behaves
// decorator runs once even with zero or multiple class instances
// decorator is just a function that is called by javascript runtime

// CLASS DECORATORS:
// function Component(constructor: Function) {
// 	console.log("Component decorator called");
// 	// every instance of 'ProfileComponent' will inherit these methods:
// 	// we can solve the same problem with class inheritance
// 	// this is the decorator way of the solution
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

// DECORATOR COMPOSITION:
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

// METHOD DECORATOR:
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

// ACCESSOR DECORATOR:
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
	const original = descriptor.get;
	descriptor.get = function () {
		original?.call(this);
	};
}
class Person {
	constructor(public firstname: string, public lastname: string) {}

	@Capitalize
	get fullName() {
		return `${this.firstname} ${this.lastname}`;
	}
}
