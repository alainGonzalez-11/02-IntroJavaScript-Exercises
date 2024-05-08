/**
 * Class representing an ATM transaction
 */
class Transaction {
  /**
   * Create a new transaction
   * @param {Array} users - Array of Clientes objects
   */
  constructor(users) {
    this.mainScreen = document.getElementById("Screen");
    this.user = this.selectUser(users);
    this.status = "Start";
    this.inputText = "";
    this.activateKeyboard();
    this.activateMenuButtons();
    this.setInitialScreen();
  }

  selectUser(usuarios) {
    let nombresUsuario = "";
    usuarios.forEach((usuario) => {
      nombresUsuario += " " + usuario.getNombre();
    });
    let user = null;
    let userName = prompt('Ingresa tu usuario, los registrados son' + nombresUsuario);
    usuarios.forEach((usuario) => {
      if (usuario.getNombre().toLowerCase() == userName.toLowerCase()) {
        user = usuario;
      }
    });
    return user;
  }

  activateKeyboard() {
    let buttons = document.getElementsByClassName("keyButton");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener(
        "click",
        this.keyClick.bind(this, i, buttons[i])
      );
    }
  }
  keyClick(pressedKey, key) {
    let image = key.children[0];

    if (this.status == "Pin") {
      if (pressedKey < 9 && this.inputText.length < 4) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 9 && this.inputText.length < 4) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.validatePin();
      }
    } else if (this.status == "WithdrawalMenu") {
      if (pressedKey < 9) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("withdrawalAmmount").value = this.inputText;
      } else if (pressedKey == 9) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("withdrawalAmmount").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("withdrawalAmmount").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("withdrawalAmmount").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.withdrawCash();
      }
    } else if (this.status == "DepositMenu") {
      if (pressedKey < 9) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("depositAmmount").value = this.inputText;
      } else if (pressedKey == 9) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("depositAmmount").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("depositAmmount").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("depositAmmount").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.depositCash();
      }
    } else if (this.status == "transferAccount") {
      if (pressedKey < 9) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("transferAccount").value = this.inputText;
      } else if (pressedKey == 9) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("transferAccount").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("transferAccount").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("transferAccount").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.transferMoney();
      }
    } else if (this.status == "setTransferAmmount") {
      if (pressedKey < 9) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("transferAmmount").value = this.inputText;
      } else if (pressedKey == 9) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("transferAmmount").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("transferAmmount").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("transferAmmount").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.makeTransfer();
      }
    } else if (this.status == "NewPin") {
      if (pressedKey < 9 && this.inputText.length < 4) {
        // For digits 1 - 9
        this.pushWhiteButton(image);
        this.inputText += pressedKey + 1;
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 9 && this.inputText.length < 4) {
        // For digit 0
        this.pushWhiteButton(image);
        this.inputText += 0;
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 10) {
        // For cancel button
        this.pushRedButton(image);
        this.inputText = "";
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 11) {
        // For correct button
        this.pushYellowButton(image);
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("password").value = this.inputText;
      } else if (pressedKey == 12) {
        // For accept button
        this.pushGreenButton(image);
        this.savePin();
      }
    }
  }

  savePin() {
    this.status = 'changingPin';
    this.user.nip = this.inputText;
    
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = `Cambio de NIP exitoso`;
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2/4";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let goBack = document.createElement("p");
    goBack.innerHTML = `Realizar otra transacción`;
    goBack.style.fontSize = "1em";
    goBack.style.fontWeight = "bold";
    goBack.style.gridColumn = "3";
    goBack.style.gridRow = "4/5";
    goBack.style.textAlign = "right";
    this.mainScreen.appendChild(goBack);

    let finish = document.createElement("p");
    finish.innerHTML = `Finalizar`;
    finish.style.fontSize = "1em";
    finish.style.fontWeight = "bold";
    finish.style.gridColumn = "3";
    finish.style.gridRow = "5/6";
    finish.style.textAlign = "right";
    this.mainScreen.appendChild(finish);


  }

  makeTransfer() {
    this.status = "Transfering";

    let canTransfer = this.user.withdrawCash(parseInt(this.inputText));
    if (canTransfer.isValid) {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Transferiste \n$ ${this.inputText} MXN`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Quedan $ ${this.user.balance} MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);
    } else {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Saldo insuficiente`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Recuerda que debes dejar al menos $10 MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);
    }
  }

  transferMoney() {
    this.status = "setTransferAmmount";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Ingresa el monto a transferir";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let transferAmmount = document.createElement("input");
    transferAmmount.type = "number";
    transferAmmount.id = "transferAmmount";
    transferAmmount.style.fontWeight = "bold";
    transferAmmount.style.gridColumn = "2";
    transferAmmount.style.gridRow = "3";
    this.mainScreen.appendChild(transferAmmount);

    this.inputText = "";
  }

  depositCash() {
    this.status = "Depositing";
    let canDeposit = this.user.depositCash(parseInt(this.inputText));
    if (canDeposit.isValid) {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = "Infresa el efectivo";
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);

      let cash = document.getElementById("cashWithdrawal");
      cash.setAttribute("src", "images/MoneyOn.svg");
      cash.style.cursor = "pointer";
      cash.addEventListener("click", this.cashSlot.bind(this));
    } else {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Depósito inválido`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Recuerda que no puedes sobrepasar de $990 MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);
    }
  }

  withdrawCash() {
    this.status = "Withdrawing";

    let canWithdraw = this.user.withdrawCash(parseInt(this.inputText));
    if (canWithdraw.isValid) {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = "Transacción exitosa.\nToma tu efectivo";
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);

      let cash = document.getElementById("cashWithdrawal");
      cash.setAttribute("src", "images/MoneyOn.svg");
      cash.style.cursor = "pointer";
      cash.addEventListener("click", this.cashSlot.bind(this));
    } else {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Saldo insuficiente`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Recuerda que debes dejar al menos $10 MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);
    }
  }

  cashSlot() {
    if (this.status == "Withdrawing") {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Retiraste \n$ ${this.inputText} MXN`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Quedan $ ${this.user.balance} MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);

      let cash = document.getElementById("cashWithdrawal");
      cash.setAttribute("src", "images/MoneyOff.svg");
      cash.style.cursor = "initial";
    } else if (this.status == "Depositing") {
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = `Depositaste \n$ ${this.inputText} MXN`;
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2/4";
      instruction.style.textAlign = "center";
      this.mainScreen.appendChild(instruction);
      let remaining = document.createElement("p");
      remaining.innerHTML = `Tienes $ ${this.user.balance} MXN en tu cuenta`;
      remaining.style.fontSize = "1.5em";
      remaining.style.fontWeight = "bold";
      remaining.style.gridColumn = "2";
      remaining.style.gridRow = "4/5";
      remaining.style.textAlign = "center";
      this.mainScreen.appendChild(remaining);

      let goBack = document.createElement("p");
      goBack.innerHTML = `Realizar otra transacción`;
      goBack.style.fontSize = "1em";
      goBack.style.fontWeight = "bold";
      goBack.style.gridColumn = "3";
      goBack.style.gridRow = "4/5";
      goBack.style.textAlign = "right";
      this.mainScreen.appendChild(goBack);

      let finish = document.createElement("p");
      finish.innerHTML = `Finalizar`;
      finish.style.fontSize = "1em";
      finish.style.fontWeight = "bold";
      finish.style.gridColumn = "3";
      finish.style.gridRow = "5/6";
      finish.style.textAlign = "right";
      this.mainScreen.appendChild(finish);

      let cash = document.getElementById("cashWithdrawal");
      cash.setAttribute("src", "images/MoneyOff.svg");
      cash.style.cursor = "initial";
    }
  }

  activateMenuButtons() {
    let buttons = document.getElementsByClassName("botonCajeroLeft");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener(
        "click",
        this.menuClickLeft.bind(this, i, buttons[i])
      );
    }
    buttons = document.getElementsByClassName("botonCajeroRight");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener(
        "click",
        this.menuClickRight.bind(this, i, buttons[i])
      );
    }
  }

  menuClickLeft(pressedButton, button) {
    this.pushLeftButton(button);
    if (this.status == "LoggedIn") {
      if (pressedButton == 0) {
        this.checkBalance();
      } else if (pressedButton == 1) {
        this.withdrawal();
      } else if (pressedButton == 2) {
        this.deposit();
      }
    } else if (this.status == "CheckBalance") {
      if (pressedButton == 3) {
        this.setMainMenu();
      }
    }
  }

  menuClickRight(pressedButton, button) {
    this.pushRightButton(button);
    if (this.status == "LoggedIn") {
      if (pressedButton == 0) {
        this.transfer();
      } else if (pressedButton == 1) {
        this.changePIN();
      } else if (pressedButton == 2) {
        this.finish();
      }
    } else if (this.status == "CheckBalance") {
      if (pressedButton == 3) {
        this.finish();
      }
    } else if (
      this.status == "Withdrawing" ||
      this.status == "Depositing" ||
      this.status == "Transfering" ||
      this.status == "changingPin"
    ) {
      if (pressedButton == 2) {
        this.setMainMenu();
      } else if (pressedButton == 3) {
        this.finish();
      }
    }
  }

  transfer() {
    this.status = "transferAccount";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Ingresa cuenta a la que transferir";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let transferAccount = document.createElement("input");
    transferAccount.type = "number";
    transferAccount.id = "transferAccount";
    transferAccount.style.fontWeight = "bold";
    transferAccount.style.gridColumn = "2";
    transferAccount.style.gridRow = "3";
    this.mainScreen.appendChild(transferAccount);

    this.inputText = "";
  }

  changePIN() {
    this.inputText = '';
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Ingresa tu nuevo NIP";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2";
    this.mainScreen.appendChild(instruction);

    let pinField = document.createElement("input");
    pinField.type = "password";
    pinField.id = "password";
    pinField.style.fontWeight = "bold";
    pinField.style.gridColumn = "2";
    pinField.style.gridRow = "3";
    this.mainScreen.appendChild(pinField);

    this.status = "NewPin";
  }

  finish() {
    this.status = "Finishing";
    let card = document.getElementById("CardSlot");
    card.setAttribute("src", "images/cardSlotOn.svg");
    card.setAttribute("class", "CardSlotOn");

    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = `Gracias por usar GNB ${this.user.getNombre()}`;
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "1/4";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let message = document.createElement("p");
    message.innerHTML = `No olvides tu tarjeta`;
    message.style.fontSize = "1.5em";
    message.style.fontWeight = "bold";
    message.style.gridColumn = "1/4";
    message.style.gridRow = "3";
    message.style.textAlign = "center";
    this.mainScreen.appendChild(message);
  }

  checkBalance() {
    this.status = "CheckBalance";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = `Tu saldo es de $ ${this.user.getBalance()} MXN`;
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "1/4";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let goBack = document.createElement("p");
    goBack.innerHTML = `Regresar`;
    goBack.style.gridColumn = "1";
    goBack.style.gridRow = 5;
    goBack.style.textAlign = "left";
    goBack.style.fontWeight = "bold";
    this.mainScreen.appendChild(goBack);

    let cancel = document.createElement("p");
    cancel.innerHTML = `Cancelar`;
    cancel.style.gridColumn = "3";
    cancel.style.gridRow = 5;
    cancel.style.textAlign = "right";
    cancel.style.fontWeight = "bold";
    this.mainScreen.appendChild(cancel);
  }

  withdrawal() {
    this.status = "WithdrawalMenu";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Ingresa el monto a retirar";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let withdrawalAmmount = document.createElement("input");
    withdrawalAmmount.type = "number";
    withdrawalAmmount.id = "withdrawalAmmount";
    withdrawalAmmount.style.fontWeight = "bold";
    withdrawalAmmount.style.gridColumn = "2";
    withdrawalAmmount.style.gridRow = "3";
    this.mainScreen.appendChild(withdrawalAmmount);

    this.inputText = "";
  }

  deposit() {
    this.status = "DepositMenu";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Ingresa el monto a depositar";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "2";
    instruction.style.gridRow = "2";
    instruction.style.textAlign = "center";
    this.mainScreen.appendChild(instruction);

    let depositAmmount = document.createElement("input");
    depositAmmount.type = "number";
    depositAmmount.id = "depositAmmount";
    depositAmmount.style.fontWeight = "bold";
    depositAmmount.style.gridColumn = "2";
    depositAmmount.style.gridRow = "3";
    this.mainScreen.appendChild(depositAmmount);

    this.inputText = "";
  }

  pushLeftButton(image) {
    image.setAttribute("src", "images/LeftButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/LeftButton.svg");
    }, 300);
  }

  pushRightButton(image) {
    image.setAttribute("src", "images/RightButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/RightButton.svg");
    }, 300);
  }

  pushWhiteButton(image) {
    image.setAttribute("src", "images/whiteButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/whiteButton.svg");
    }, 300);
  }
  pushRedButton(image) {
    image.setAttribute("src", "images/redButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/redButton.svg");
    }, 300);
  }
  pushYellowButton(image) {
    image.setAttribute("src", "images/yellowButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/yellowButton.svg");
    }, 300);
  }
  pushGreenButton(image) {
    image.setAttribute("src", "images/greenButtonPressed.svg");
    setTimeout(() => {
      image.setAttribute("src", "images/greenButton.svg");
    }, 300);
  }

  setInitialScreen() {
    this.status = "Start";
    this.clearScreen();
    let logo = document.createElement("img");
    logo.setAttribute("src", "images/GNB.png");
    logo.setAttribute("id", "mainLogo");
    this.mainScreen.appendChild(logo);

    let map = document.createElement("img");
    map.setAttribute("src", "images/Map.png");
    map.setAttribute("id", "mainMap");
    this.mainScreen.appendChild(map);

    let message = document.createElement("p");
    message.innerHTML = "Ingresa tu tarjeta para iniciar";
    message.style.gridColumn = "1/4";
    message.style.gridRow = "5";
    message.style.textAlign = "center";
    this.mainScreen.appendChild(message);
    let card = document.getElementById("CardSlot");
    card.setAttribute("src", "images/cardSlotOn.svg");
    card.setAttribute("class", "CardSlotOn");
    card.addEventListener("click", this.insertCard.bind(this));
  }

  insertCard() {
    if (this.status == "Start") {
      let card = document.getElementById("CardSlot");
      card.setAttribute("src", "images/cardSlotOff.svg");
      card.setAttribute("class", "CardSlotOff");
      this.clearScreen();
      let instruction = document.createElement("p");
      instruction.innerHTML = "Ingresa tu NIP";
      instruction.style.fontSize = "2em";
      instruction.style.fontWeight = "bold";
      instruction.style.gridColumn = "2";
      instruction.style.gridRow = "2";
      this.mainScreen.appendChild(instruction);

      let pinField = document.createElement("input");
      pinField.type = "password";
      pinField.id = "password";
      pinField.style.fontWeight = "bold";
      pinField.style.gridColumn = "2";
      pinField.style.gridRow = "3";
      this.mainScreen.appendChild(pinField);

      this.status = "Pin";
    } else if (this.status == "Finishing") {
      let card = document.getElementById("CardSlot");
      card.setAttribute("src", "images/cardSlotOff.svg");
      card.setAttribute("class", "CardSlotOff");
      this.clearScreen();
      this.setInitialScreen();
      this.inputText = "";
    }
  }
  clearScreen() {
    while (this.mainScreen.firstChild) {
      this.mainScreen.removeChild(this.mainScreen.firstChild);
    }
  }
  setMainMenu() {
    this.status = "LoggedIn";
    this.clearScreen();
    let instruction = document.createElement("p");
    instruction.innerHTML = "Selecciona una opción";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "1/4";
    instruction.style.gridRow = "1";
    this.mainScreen.appendChild(instruction);

    let optionsLeft = [
      "Consultar Saldo",
      "Retirar Efectivo",
      "Depositar Efectivo",
    ];

    let optionsRight = ["Transferir Fondos", "Cambiar PIN", "Salir"];

    for (let i = 0; i < optionsLeft.length; i++) {
      let message = document.createElement("p");
      message.innerHTML = optionsLeft[i];
      message.style.gridColumn = "1";
      message.style.gridRow = i + 2;
      message.style.textAlign = "left";
      message.style.fontWeight = "bold";
      this.mainScreen.appendChild(message);
    }

    for (let i = 0; i < optionsRight.length; i++) {
      let message = document.createElement("p");
      message.innerHTML = optionsRight[i];
      message.style.gridColumn = "3";
      message.style.gridRow = i + 2;
      message.style.textAlign = "right";
      message.style.fontWeight = "bold";
      this.mainScreen.appendChild(message);
    }
  }

  validatePin() {
    if (this.inputText == this.user.nip) {
      this.setMainMenu();
    } else {
      let alert = document.createElement("p");
      alert.innerHTML = "NIP incorrecto, vuelve a intentar";
      document.getElementById("password").value = "";
      this.inputText = "";
      this.mainScreen.appendChild(alert);
      setTimeout(() => {
        this.mainScreen.removeChild(alert);
      }, 2000);
    }
  }
}
