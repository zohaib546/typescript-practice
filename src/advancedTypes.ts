// TYPE ALIASES:
// type Employee = {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// };
// // employee.id = 0;

// LITERAL TYPES (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

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

// NULLABLE TYPES
// function greet(name: string | null | undefined) {
// 	if (name) console.log(name.toUpperCase());
// 	else console.log("Hola");
// }

// greet(null);

// OPTIONAL CHAINING
// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// console.log(customer?.birthday?.getFullYear());

// NULLISH COAELSCING
// let speed: number | null = null;

// let ride = {
//   speed: speed ?? 30,
// };

// TYPE ASSERTIONS
// let phone = document.getElementById("phone") as HTMLInputElement;
// // let phone = <HTMLInputElement>document.getElementById("phone");

// phone.value;

// UNKNOWN TYPE
// function render(document: unknown) {
//   // Narrowing
//   //   if (typeof document === "string") {
//   //     document.toUpperCase();
//   //   }
//   document.fly();
//   document.crawl();
// }

// NEVER TYPE
// function processEvents(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }

// processEvents();
// console.log("will never executes");
