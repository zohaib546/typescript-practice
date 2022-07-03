// class Account {
// 	//   readonly id: number;
// 	//   owner: string;
// 	//   private _balance: number;
// 	nickname?: string;

// 	constructor(public readonly id: number, public owner: string, private _balance: number) {
// 		// this.id = id;
// 		// this.owner = owner;
// 		// this._balance = balance;
// 	}

// 	deposit(amount: number): void {
// 		if (amount <= 0) throw new Error("Invalid Amount");
// 		this._balance += amount;
// 	}

// 	get balance(): number {
// 		return this._balance;
// 	}

// 	set balance(value: number) {
// 		if (value < 0) throw new Error("Invalid value");
// 		this._balance = value;
// 	}

// 	// private calculateTax() {
// 	//   return this._balance;
// 	// }
// }

// let account = new Account(1, "Mosh", 0);
// account.deposit(100);

// account.balance = 150;
// console.log(account.balance);

// // INDEX SIGNATURES:
// class SeatAssignment {
// 	// A1, A2
// 	[seatNumber: string]: string;
// }

// let seats = new SeatAssignment();

// seats.A1 = "Mosh";
// seats.A2 = "John";

// console.log(seats);

// STATIC MEMBERS: (static props belongs to class and not an object)
// class Ride {
// 	private static _activeRides: number = 0;

// 	start() {
// 		Ride._activeRides++;
// 	}

// 	stop() {
// 		Ride._activeRides--;
// 	}

// 	static get activeRides() {
// 		return Ride._activeRides;
// 	}
// }

// let ride1 = new Ride();
// ride1.start();
// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// INHERITANCE, METHOD OVER-RIDING, POLYMORPHISM
// class Person {
// 	constructor(public firstName: string, public lastName: string) {}

// 	get fullName(): string {
// 		return this.firstName + " " + this.lastName;
// 	}

// 	private walk(): void {
// 		console.log("Walking");
// 	}

// 	protected run(): void {
// 		console.log("Running");
// 	}
// }

// class Student extends Person {
// 	constructor(public studentId: number, firstName: string, lastName: string) {
// 		super(firstName, lastName);
// 	}

// 	takeTest(): void {
// 		// this.run() // protected method can inherit
// 		// this.walk() // private method cannot inherit
// 		console.log("Taking a test");
// 	}
// }

// class Teacher extends Person {
// 	override get fullName(): string {
// 		return "Professor " + super.fullName;
// 	}
// }

// class Principal extends Person {
// 	override get fullName(): string {
// 		return "Principal " + super.fullName;
// 	}
// }

// printNames([
// 	new Student(1, "John", "Smith"),
// 	new Teacher("Mosh", "Hamedani"),
// 	new Principal("Jane", "Doe"),
// ]);

// function printNames(people: Person[]) {
// 	for (const person of people) {
// 		console.log(person.fullName);
// 	}
// }

// ABSTRACT CLASS
// (abstract class dont get instantiated another class should have to extends it)
// abstract class Shape {
// 	constructor(public color: string) {}

// 	// abstract methods should only exist in abstract class
// 	// these methods have no implementation
// 	abstract render(): void;
// }

// class Circle extends Shape {
// 	constructor(public radius: number, color: string) {
// 		super(color);
// 	}

// 	override render(): void {
// 		console.log("Rendering a circle");
// 	}
// }

// let shape = new Shape("red");

// INTERFACES ( used to define the shape of objects )
// abstract class Calendar {
// 	constructor(public name: string) {}

// 	abstract addEvent(): void;
// 	abstract removeEvent(): void;
// }

// interface Calendar {
// 	name: string;
// 	addEvent(): void;
// 	removeEvent(): void;
// }

// interface CloudCalendar extends Calendar {
// 	sync(): void;
// }

// class GoogleCalendar implements Calendar {
// 	constructor(public name: string) {}

// 	addEvent(): void {
// 		throw new Error("Method not implemented.");
// 	}
// 	removeEvent(): void {
// 		throw new Error("Method not implemented.");
// 	}
// }
