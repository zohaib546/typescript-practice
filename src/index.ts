// let sales: number = 123_456_789;
// let course: string = "Typescript";
// let is_published = true;

// ANY type:
// let level;
// level = 1;
// level = "a";

// function render(document) {
//   console.log(document);
// }

// ARRAYS:
// let numbers1: number[] = [1, 2, 3];
// let numbers2 = [1, 2, 3];

// TUPLES:
// let user: [number, string] = [1, "Mosh"];

// ENUMS:
// enum Size {
//   small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTIONS:
// function calculateTax(income: number, tax = 2022): number {
//   // let x;
//   if (tax < 2022) return income * 1.2;
//   return income * 1.3;
// }
// calculateTax(10_000);

// OBJECTS:
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// // employee.id = 0;

// LITERAL TYPES (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

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
