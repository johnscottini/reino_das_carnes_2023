// Funções da seção de "CORTES EXÓTICOS"
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
//seção para abrir o container da carne clicada
document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});
//função para fechar o container da carne
previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

previewBox.forEach(close => {
  close.querySelector('.buy').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


const header = document.getElementById('header');
const logo = document.querySelector("img.logo");
// Adicione um ouvinte de evento para o evento de rolagem
window.addEventListener('scroll', function() {
  // Verifique a posição da rolagem da página
  if (window.pageYOffset > 10) {
    // Se a posição da rolagem for maior que 0, adicione a classe 'small' ao header
    header.classList.add('small');
    logo.classList.add("logoSmall");
  } else {
    // Caso contrário, remova a classe 'small' do header
    header.classList.remove('small');
    logo.classList.remove("logoSmall");
  }
});

//Function para voltar ao início ao clicar na logo do site
function voltarAoInicio() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

//Function para o radio button de Preferência
const radioButtons = document.querySelectorAll("div.radio-button");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].onclick = function() {
    this.classList.toggle("checked");
    if (i === 0) {
      radioButtons[1].classList.remove("checked");
      radioButtons[2].classList.remove("checked");
    } else if (i === 1) {
      radioButtons[0].classList.remove("checked");
      radioButtons[2].classList.remove("checked");
    } else {
      radioButtons[0].classList.remove("checked");
      radioButtons[1].classList.remove("checked");
    }
  }
}

//Function para o dropdown de Carne Favorita
const dropDownSelect = document.querySelector("div#dropdownMenu");
const listDropDown = document.querySelector("div.dropDown");

//Ao clicar na div "selecione" abre/fecha o dropdown
let shouldOpen = false;
dropDownSelect.addEventListener("click", function() {
  shouldOpen = true;
});

//Ao clicar em qualquer outro elemento fecha o dropdown
document.documentElement.addEventListener("click", function() {
  if (dropDownSelect.classList.contains("upArrow")) {
    listDropDown.style.display = "none";
    dropDownSelect.classList.remove("upArrow");
    dropDownSelect.classList.add("downArrow");
    shouldOpen = false;
  } else if (shouldOpen) {
    listDropDown.style.display = "block";
    dropDownSelect.classList.add("upArrow");
    dropDownSelect.classList.remove("downArrow");
  }
});

//seleciona o conteúdo que irá aparecer no dropDown
const optionsSelect = document.querySelectorAll("div.listDropDown div");
const buttonSelect = document.querySelector("div.dropdown-toggle");
for (let i = 0; i < optionsSelect.length; i++) {
  optionsSelect[i].onclick = function() {

    buttonSelect.innerHTML = optionsSelect[i].textContent;
    buttonSelect.style.color = "#8B0000";
    buttonSelect.style.fontWeight = "bold";
  }
}

//Function para o checkbox "receber comunicado por"
const checkboxes = document.querySelectorAll("div.checkboxContainer div.checkbox");


for (let i = 0; i < checkboxes.length; i++) {
  let areAllChecked = false;
  if (checkboxes[i].classList.contains("marcado")) {
    areAllChecked = true;
  } else {
    areAllChecked = false;
  }
  checkboxes[i].onclick = function() {
    if (i === 0) {

      if (checkboxes[1].classList.contains("marcado") && !checkboxes[2].classList.contains("marcado")) {
        checkboxes[0].classList.toggle("desmarcarTodas");
        checkboxes[1].classList.toggle("marcado");
      } else if (checkboxes[2].classList.contains("marcado") && !checkboxes[1].classList.contains("marcado")) {
        checkboxes[0].classList.toggle("desmarcarTodas");
        checkboxes[2].classList.toggle("marcado");
      } else if (checkboxes[0].classList.contains("desmarcarTodas") || !checkboxes[1].classList.contains("marcado") && !checkboxes[2].classList.contains("marcado")) {
        checkboxes[0].classList.toggle("marcado");
        checkboxes[1].classList.toggle("marcado");
        checkboxes[2].classList.toggle("marcado");
        checkboxes[0].classList.toggle("desmarcarTodas");
      } else if (areAllChecked) {
        checkboxes[0].classList.toggle("marcado");
        checkboxes[1].classList.toggle("marcado");
        checkboxes[2].classList.toggle("marcado");
      }
    }
    else if (i === 1) {
      if (!checkboxes[2].classList.contains("marcado")) {
        checkboxes[1].classList.toggle("marcado");
        checkboxes[0].classList.toggle("desmarcarTodas");
      } else {
        checkboxes[1].classList.toggle("marcado");
        checkboxes[0].classList.toggle("marcado");
      }
    } else if (i === 2) {
      if (!checkboxes[1].classList.contains("marcado")) { //se o 1 está desmarcado       

        checkboxes[2].classList.toggle("marcado");
        checkboxes[0].classList.toggle("desmarcarTodas");

      } else { //se não ele marca todos
        checkboxes[2].classList.toggle("marcado");
        checkboxes[0].classList.toggle("marcado");
      }
    }
  }
}

//Validações do formulário de contato
const nameField = document.querySelector("input[name=name]");
const emailField = document.querySelector("input[name=email]");
const phoneField = document.querySelector("input[name=phone]");
const msgField = document.querySelector("textarea[name=message");

const submitBttn = document.querySelector("input.submitForm");
submitBttn.onclick = function() {
  const name = validateName();
  const email = validateEmail();
  const phone = validatePhone();
  const preference = validatePreference();
  if (preference === true) {
    radioButtons.forEach(element => element.style.border = "2px solid black");
  }
  const favoriteMeat = validateFavoriteMeat();
  const message = validateMessage();
  const allFields = [name, email, phone, preference, favoriteMeat, message];

  if (allFields.every(element => element != false)) {
    alert("Mensagem enviada com sucesso!");
    const form = document.querySelector("form.contactUs");
    form.reset();
    radioButtons.forEach(element => {
      if (element.classList.contains("checked")) {
        element.classList.remove("checked");
      }
    });
    buttonSelect.innerHTML = "Selecione";
    buttonSelect.style.color = "#2e2c28";
    buttonSelect.style.fontWeight = "normal";
  }
};
function showError(field, isValid) {
  if (isValid) {
    if (field.classList.contains("error")) {
      field.classList.remove("error");
      field.classList.add("input");
    }
  } else {
    field.classList.add("error");
    field.classList.remove("input");
  }
}
function validateName() {
  const regName = /^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)+$/;
  let isValid = false;
  if (regName.test(nameField.value)) {
    isValid = true;
    showError(nameField, isValid);
  } else {
    isValid = false;
    showError(nameField, isValid);
    alert("Informe seu nome completo.");
  } //se tiver alguns desses caracteres, números ou só um nome retorna falso
  return isValid;
}

function validateEmail() {
  const regName = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; //valida o email
  let isValid = false;
  if (regName.test(emailField.value)) {
    isValid = true;
    showError(emailField, isValid);
  } else {
    isValid = false;
    showError(emailField, isValid);
    alert("O email deve ser válido.");
  }
  return isValid;
}

function validatePhone() {
  const phoneFieldValue = phoneField.value.replace(/\D/g, '');
  //retira todos caractére que não sejam numéricos
  let isValid = false;
  console.log(phoneFieldValue);

  if (phoneFieldValue.length === 11) {
    isValid = true;
    showError(phoneField, isValid);
  } else {
    isValid = false;
    showError(phoneField, isValid);
    alert("O número de telefone deve ser válido.");
  }
  return isValid;
}

function validatePreference() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].classList.contains("checked")) {
      return true; //se tiver alguma preferência escolhida
    }
  }
  radioButtons.forEach(element => element.style.border = "3px #8B0000 solid");
  alert("Você deve selecionar uma preferência.");
  return false;
}

function validateFavoriteMeat() {
  if (buttonSelect.innerHTML != "Selecione") {
    buttonSelect.style.border = "2px solid black";
    return true;
  } else {
    alert("Você deve escolher uma carne favorita.");
    buttonSelect.style.border = "3px #8B0000 solid";
    return false;
  }
}

function validateMessage() {
  const msgFieldValue = msgField.value;
  let isValid = false;
  if (msgFieldValue.length >= 5) {
    isValid = true;
    showError(msgField, isValid);
  } else {
    isValid = false;
    showError(msgField, isValid);

    alert("A mensagem deve possuir pelo menos 5 caracteres.");
  }
  return isValid;
}
