class Cliente {
  constructor(name, lastname, balance, nip) {
    this.name = name;
    this.lastname = lastname;
    this.balance = balance;
    this.nip = nip;
  }

  validateBalance(balance) {
    if (balance >= 10 && balance <= 900) {
      return { isValid: true, newBalance: balance };
    } else if (balance < 10) {
      console.log("Error: Balance cannot be less than 10");
      return { isValid: false, newBalance: 10 };
    } else if (balance > 900) {
      console.log("Error: Balance cannot be more than 900");
      return { isValid: false, newBalance: 900 };
    }
  }

  withdrawCash(amount) {
    let newBalance = this.balance - amount;
    if (newBalance >= 10 && newBalance <= 900) {
      this.balance = newBalance;
      return { isValid: true, newBalance: this.balance };
    } else if (newBalance < 10) {
      console.log("Error: Balance cannot be less than 10");
      return { isValid: false, newBalance: this.balance };
    } else if (newBalance > 900) {
      console.log("Error: Balance cannot be more than 900");
      return { isValid: false, newBalance: this.balance };
    }
  }

  depositCash(amount) {
    let newBalance = this.balance + amount;
    console.log(newBalance);
    if (newBalance >= 10 && newBalance <= 900) {
      this.balance = newBalance;
      return { isValid: true, newBalance: this.balance };
    } else if (newBalance < 10) {
      console.log("Error: Balance cannot be less than 10");
      return { isValid: false, newBalance: this.balance };
    } else if (newBalance > 900) {
      console.log("Error: Balance cannot be more than 900");
      return { isValid: false, newBalance: this.balance };
    }
  }

  getNombre() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }
}

let usuarios = [
  new Cliente("Juan", "Rulfo", 600, 1234),
  new Cliente("Pedro", "Paramo", 150, 5678),
];

transaction = new Transaction(usuarios);
