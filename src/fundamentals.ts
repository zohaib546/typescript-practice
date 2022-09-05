// PRIMITIVE TYPES:
// let sales: number = 123_456_789;
// let course: string = "Typescript";
// let is_published = true;

// ANY TYPE:
// avoid using 'any' type as much as possible
// because by using this you loose type checking
// let level;
// level = 1;
// level = "a";

// function render(document) {
//   console.log(document);
// }

// ARRAY TYPE:
// let numbers1: number[] = [1, 2, 3];
// let numbers2 = [1, 2, 3];

// TUPLES:
// its a fixed size array where each element represents its own type
// let user: [number, string] = [1, "Mosh"];

// ENUMS:
// represents a list of related constants
// enum Size { // enum name should be PascalCase
// 	small = 1,
// 	Medium,
// 	Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTIONS:
// function calculateTax(income: number, tax = 2022): number {
// 	// let x;
// 	if (tax < 2022) return income * 1.2;
// 	return income * 1.3;
// }
// calculateTax(10_000);

// OBJECTS:
// let employee: {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// } = {
// 	id: 1,
// 	name: "Mosh",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// // employee.id = 0;
