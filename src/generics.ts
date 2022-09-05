// GENERIC CLASSES:
// class KeyValuePair<K, V> {
// 	constructor(public key: K, public value: V) {}
// }

// let myPair = new KeyValuePair<number, string>(1, "Mosh");
// let myNewPair = new KeyValuePair("1", "Mosh"); // automatically infer the generic args

// GENERIC FUNCTIONS:
// function wrapInArray<T>(value: T) {
// 	return [value];
// }

// let numbers = wrapInArray<number>(1);
// let strings = wrapInArray("1");

// class ArrayUtils {
// 	static wrapInArray<T>(value: T) {
// 		return [value];
// 	}
// }

// let numbers = ArrayUtils.wrapInArray(1);
// let strings = ArrayUtils.wrapInArray("A");

// GENERIC INTERFACES
// apiEndpoints:
// https://mywebsite.com/users
// https://mywebsite.com/products

// interface Result<T> {
// 	data: T | null;
// 	error: string | null;
// }
// interface User {
// 	username: string;
// }

// interface Product {
// 	title: string;
// }

// function fetch<T>(url: string): Result<T> {
// 	return { data: null, error: null };
// }

// let userResult = fetch<User>("url");
// userResult.data?.username;
// let productResult = fetch<Product>("url");
// productResult.data?.title;

// GENERIC CONSTRAINTS
// function echo<T>(value: T): T {
// 	return value;
// }

// function echo1<T extends number | string>(value: T): T {
// 	return value;
// }

// function echo2<T extends { name: string }>(value: T): T {
// 	return value;
// }

// interface Person {
// 	fullname: string;
// }

// function echo3<T extends Person>(value: T): T {
// 	return value;
// }

// echo("5");
// echo1(100);
// echo1("100");

// echo2({ name: "abc" });
// echo3({ fullname: "abcdef" });

// EXTENDING GENERIC CLASSES
// interface Product {
// 	name: string;
// 	price: number;
// }

// class Store<T> {
// 	protected _objects: T[] = [];

// 	add(obj: T): void {
// 		this._objects.push(obj);
// 	}
// }

// // Pass on the generic type parameter
// class CompressibleStore<T> extends Store<T> {
// 	compress() {}
// }

// // Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
// 	find(name: string): T | undefined {
// 		return this._objects.find((obj) => obj.name === name);
// 	}
// }

// // Fix the generic type parameter
// class ProductStore extends Store<Product> {
// 	filterByCategory(category: string): Product[] {
// 		return [];
// 	}
// }

// KEYOF OPERATOR
// interface Product {
// 	name: string;
// 	price: number;
// }

// class Store<T> {
// 	protected _objects: T[] = [];

// 	add(obj: T): void {
// 		this._objects.push(obj);
// 	}

// 	// find(property: string, value: unknown): T | undefined {
// 	// 	return this._objects.find((obj) => obj[property] === value);
// 	// }

// 	// T is product
// 	// keyof T => 'name' | 'price'
// 	find(property: keyof T, value: unknown): T | undefined {
// 		return this._objects.find((obj) => obj[property] === value);
// 	}
// }

// const store = new Store<Product>();
// store.add({ name: "abc", price: 10 });
// store.find("name", "abc");
// store.find("nonExistingProperty", 1);

// TYPE MAPPING
// we can create new types based off of existing types
// interface Product {
// 	name: string;
// 	price: number;
// }

// // type ReadOnlyProduct = {
// // 	readonly [Property in keyof Product]: Product[Property];
// // };

// type ReadOnlyProduct<T> = {
// 	readonly [Property in keyof T]: T[Property];
// };

// type Optional<T> = {
// 	[Property in keyof T]?: T[Property];
// };

// type Nullable<T> = {
// 	[Property in keyof T]: T[Property] | null;
// };

// let product: ReadOnlyProduct<Product> = {
// 	name: "xyz",
// 	price: 0,
// };

// product.name = 1;
