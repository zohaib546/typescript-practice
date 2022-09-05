// TYPE ALIASES:
// type Employee = {
// 	// use pascal case for type aliases
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// };

// let employee: Employee = {
// 	id: 1,
// 	name: "Mosh",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };
// employee.id = 0;

// UNION TYPES
// function kgToLbs(weight: number | string): number {
// 	// Narrowing
// 	if (typeof weight === "number") return weight * 2.2;
// 	else return parseInt(weight) * 2.2;
// }
// kgToLbs(100);
// kgToLbs("10Kg");

// INTERSECTION TYPES:
// type Draggable = {
// 	drag: () => void;
// };

// type Resizable = {
// 	resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
// 	drag: () => {},
// 	resize: () => {},
// };

// LITERAL TYPES (exact, specific)
// type Quantity = 50 | 100;
// type Metric = 'cm' | 'inch';

// let quantity: Quantity = 50;
// let unit: Metric = 'cm';

// NULLABLE TYPES
// function greet(name: string | null | undefined) {
// 	if (name) console.log(name.toUpperCase());
// 	else console.log("Hola");
// }

// greet(null);

// OPTIONAL CHAINING
// type Customer = {
// 	birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
// 	return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// console.log(customer?.birthday?.getFullYear());

// NULLISH COAELSCING
// let speed: number | null = null;
// let ride = {
// 	speed: speed ?? 30,
// };

// TYPE ASSERTIONS
// let phone = document.getElementById("phone") as HTMLInputElement;
// // let phone = <HTMLInputElement>document.getElementById("phone");

// phone.value;

// UNKNOWN TYPE
// // preferred over 'any' type which lets us to do some type checking
// // where 'any' doesnt complain about type so far
// function render(document: unknown) {
// 	// Narrowing
// 	//   if (typeof document === "string") {
// 	//     document.toUpperCase();
// 	//   }
// 	document.fly();
// 	document.crawl();
// }

// NEVER TYPE
// function processEvents(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }

// processEvents();
// console.log("will never executes");
