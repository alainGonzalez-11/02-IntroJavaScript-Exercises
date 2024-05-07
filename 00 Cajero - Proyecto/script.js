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

class Transaction {
  constructor(users) {
    this.mainScreen = document.getElementById("Screen");
    this.user = this.selectUser(users);
    this.status = "Start";
    this.inputText = "";

    this.activateKeyboard();
    this.setInitialScreen();
  }

  selectUser(usuarios) {
    let nombresUsuario = "";
    usuarios.forEach((usuario) => {
      console.log(usuario.getNombre());

      nombresUsuario += " " + usuario.getNombre();
    });
    // TODO: Remove comment before final publish
    //let userName = prompt('Ingresa tu usuario, los registrados son' + nombresUsuario);
    let userName = "juan";
    usuarios.forEach((usuario) => {
      if (usuario.getNombre().toLowerCase() == userName.toLowerCase()) {
        console.log("success");
        return usuario;
      }
    });
  }

  activateKeyboard() {
    let buttons = document.getElementsByClassName("keyButton");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener(
        "click",
        this.keyClick.bind(this, i, buttons[i])
      );
    }
    if (this.status == "Pin") {
    }
  }

  keyClick(pressedKey, key) {
    let image = key.children[0];

    if (pressedKey < 9 && this.inputText.length < 4) {
      image.setAttribute("src", "images/whiteButtonPressed.svg");
      this.inputText += pressedKey + 1;
      document.getElementById("password").value = this.inputText;
      setTimeout(() => {
        console.log("red");
        image.setAttribute("src", "images/whiteButton.svg");
      }, 300);
    } else if (pressedKey == 9 && this.inputText.length < 4) {
      image.setAttribute("src", "images/whiteButtonPressed.svg");
      this.inputText += 0;
      document.getElementById("password").value = this.inputText;
      setTimeout(() => {
        console.log("red");
        image.setAttribute("src", "images/whiteButton.svg");
      }, 300);
    } else if (pressedKey == 10) {
      image.setAttribute("src", "images/redButtonPressed.svg");
      this.inputText = "";
      document.getElementById("password").value = this.inputText;
      setTimeout(() => {
        console.log("red");
        image.setAttribute("src", "images/redButton.svg");
      }, 300);
    } else if (pressedKey == 11) {
        image.setAttribute("src", "images/yellowButtonPressed.svg");
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("password").value = this.inputText;
        setTimeout(() => {
          console.log("red");
          image.setAttribute("src", "images/yellowButton.svg");
        }, 300);
      }else if (pressedKey == 12) {
        image.setAttribute("src", "images/greenButtonPressed.svg");
        this.inputText = "magicDevelop";
        document.getElementById("password").value = this.inputText;
        setTimeout(() => {
          console.log("red");
          image.setAttribute("src", "images/greenButton.svg");
        }, 300);
      }
  }

  setInitialScreen() {
    let message = document.createElement("p");
    message.innerHTML = "Ingresa tu tarjeta para iniciar";
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
      while (this.mainScreen.firstChild) {
        this.mainScreen.removeChild(this.mainScreen.firstChild);
      }
      this.mainScreen.setAttribute("class", "ScreenMenu");
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
    } else {
    }
  }
}

let usuarios = [
  new Cliente("Juan", "Rulfo", 600, 1234),
  new Cliente("Pedro", "Paramo", 150, 5678),
];

transaction = new Transaction(usuarios);