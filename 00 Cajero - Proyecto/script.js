class Cliente {
  constructor(name, lastname, balance, nip) {
    this.name = name;
    this.lastname = lastname;
    this.balance = this.validateBalance(balance);
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

  cashWithdrawal(amount) {
    let balanceStatus = this.validateBalance(this.balance - amount);
    if (balanceStatus.isValid) {
      this.balance = balanceStatus.newBalance;
    } else {
    }
  }

  getNombre() {
    return this.name;
  }
}

let usuarios = [
  new Cliente("Juan", "Rulfo", 600, 1234),
  new Cliente("Pedro", "Paramo", 150, 5678),
];

transaction = new Transaction(usuarios);
