class Transaction {
  constructor(users) {
    this.mainScreen = document.getElementById("Screen");
    this.user = this.selectUser(users);
    this.status = "Start";
    this.inputText = "";
    console.log(this.user);
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
    // TODO: Remove comment before final publish
    //let userName = prompt('Ingresa tu usuario, los registrados son' + nombresUsuario);
    let userName = "juan";
    usuarios.forEach((usuario) => {
      if (usuario.getNombre().toLowerCase() == userName.toLowerCase()) {
        console.log(usuario);
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

    if (pressedKey < 9 && this.inputText.length < 4) {
      // For digits 1 - 9
      this.pushWhiteButton(image);
      if (this.status == "Pin") {
        this.inputText += pressedKey + 1;
        document.getElementById("password").value = this.inputText;
      }
    } else if (pressedKey == 9 && this.inputText.length < 4) {
      // For digit 0
      this.pushWhiteButton(image);
      if (this.status == "Pin") {
        this.inputText += 0;
        document.getElementById("password").value = this.inputText;
      }
    } else if (pressedKey == 10) {
      // For cancel button
      this.pushRedButton(image);
      if (this.status == "Pin") {
        this.inputText = "";
        document.getElementById("password").value = this.inputText;
      }
    } else if (pressedKey == 11) {
      // For correct button
      this.pushYellowButton(image);
      if (this.status == "Pin") {
        this.inputText = this.inputText.slice(0, -1);
        document.getElementById("password").value = this.inputText;
      }
    } else if (pressedKey == 12) {
      // For accept button
      this.pushGreenButton(image);
      if (this.status == "Pin") {
        this.validatePin();
      }
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
  }

  menuClickRight(pressedButton, button) {
    this.pushRightButton(button);
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
    } else {
    }
  }
  clearScreen() {
    while (this.mainScreen.firstChild) {
      this.mainScreen.removeChild(this.mainScreen.firstChild);
    }
  }
  setMainMenu() {
    let instruction = document.createElement("p");
    instruction.innerHTML = "Selecciona una opción";
    instruction.style.fontSize = "2em";
    instruction.style.fontWeight = "bold";
    instruction.style.gridColumn = "1/4";
    instruction.style.gridRow = "1";
    this.mainScreen.appendChild(instruction);

    let optionsLeft = [
        'Consultar Saldo',
        'Retirar Efectivo',
        'Depositar Efectivo'
    ];

    let optionsRight = [
        'Transferir Fondos',
        'Cambiar PIN',
        'Salir'
    ];
    
    for (let i = 0; i < optionsLeft.length; i++) {
        let message = document.createElement("p")
        message.innerHTML = optionsLeft[i];
        message.style.gridColumn = '1';
        message.style.gridRow = i+2;
        message.style.textAlign = 'left';
        message.style.fontWeight = 'bold';
        this.mainScreen.appendChild(message);
    }

    for (let i = 0; i < optionsRight.length; i++) {
        let message = document.createElement("p")
        message.innerHTML = optionsRight[i];
        message.style.gridColumn = '3';
        message.style.gridRow = i+2;
        message.style.textAlign = 'right';
        message.style.fontWeight = 'bold';
        this.mainScreen.appendChild(message);
    }
    


  }

  validatePin() {
    if (this.inputText == this.user.nip) {
      this.clearScreen();
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
