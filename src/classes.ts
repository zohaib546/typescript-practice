class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }

  // private calculateTax() {
  //   return this._balance;
  // }
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);

account.balance = 1;
