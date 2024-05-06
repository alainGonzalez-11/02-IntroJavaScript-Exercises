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

function newTransaction() {
   let mainScreen = document.getElementById('Screen');

  let user = selectUser();
  setInitialScreen(mainScreen);
}

function selectUser() {
  let nombresUsuario = '';
  usuarios.forEach(usuario => {
    console.log(usuario.getNombre());

    nombresUsuario += ' ' + usuario.getNombre();
  });
  let userName = prompt('Ingresa tu usuario, los registrados son' + nombresUsuario);
  usuarios.forEach(usuario => {
    
    if (usuario.getNombre().toLowerCase() == userName.toLowerCase()){
        console.log('success');
        return usuario;
    }
  });
}   

function setInitialScreen(screen){
    let message = document.createElement('p');
    message.innerHTML = 'Ingresa tu tarjeta para iniciar';
    screen.appendChild(message);
    let card = document.getElementById('CardSlot');
    card.setAttribute('src', "images/cardSlotOn.svg")
    card.setAttribute('class', 'CardSlotOn');
    card.addEventListener('click', insertCard);
}

function insertCard() {
    let card = document.getElementById('CardSlot');
    card.setAttribute('src', "images/cardSlotOff.svg")
    card.setAttribute('class', 'CardSlotOff');
    let mainScreen = document.getElementById('Screen');
    while (mainScreen.firstChild) {
        mainScreen.removeChild(mainScreen.firstChild);
    }
    
}


let usuarios = [
    new Cliente("Juan", "Rulfo", 600, 1234),
    new Cliente("Pedro", "Paramo", 150, 5678)
  ];
newTransaction();