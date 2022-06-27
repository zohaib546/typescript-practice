// TYPE ALIASES:
// type Employee = {
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

// LITERAL TYPES
// type Quantity = 50 | 100;

// const quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// NULLABLE TYPES
function greet(name: string | null | undefined) {
	if (name) console.log(name.toUpperCase());
	else console.log("Hola");
}

greet(null);
