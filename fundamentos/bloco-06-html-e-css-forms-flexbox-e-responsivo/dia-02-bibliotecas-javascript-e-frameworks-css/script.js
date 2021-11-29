const name = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const type = document.getElementsByClassName('type');
const resume = document.getElementById('resume');
const position = document.getElementById('position');
const description = document.getElementById('description');
const date = document.getElementById('date');

const result = document.getElementById('result');

window.onload = function createStates() {
  new window.JustValidate('.js-form', { // eslint-disable-line no-new
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 40,
      },
      email: {
        required: true,
        email: true,
        maxLength: 50,
      },
      cpf: {
        required: true,
        minLength: 11,
        maxLength: 11,
      },
      address: {
        required: true,
        maxLength: 200,
      },
      city: {
        required: true,
        maxLength: 28,
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      resume: {
        required: true,
        maxLength: 1000,
      },
      position: {
        required: true,
        maxLength: 40,
      },
      description: {
        required: true,
        maxLength: 500,
      },
      date: {
        required: true,
      },
    },
    messages: {
      cpf: {
        required: 'Campo obrigatório',
        minLength: 'O CPF deve ter 11 dígitos',
        maxLength: 'O CPF deve ter 11 dígitos',
      },
    },
    focusWrongField: true,

    submitHandler(form, values, ajax) {
      ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'POST',
        data: values,
        async: true,
        callback(response) {
          console.log(`AJAX submit successful! \nResponse from server:${response}`);
        },
        error(response) {
          console.log(`AJAX submit error! \nResponse from server:${response}`);
        },
      });
    },

    invalidFormCallback(errors) {
      console.log(errors);
    },
  });
  date.DatePickerX.init({
    format: 'dd/mm/yyyy',
  });
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for (let i = 0; i < states.length; i += 1) {
    const eachState = document.createElement('option');
    eachState.innerHTML = states[i];
    eachState.value = states[i];
    eachState.id = states[i].toLowerCase();
    state.appendChild(eachState);
  }
};

date.addEventListener('change', () => {
  date.click();
});

// function checkRequiredErrors(errorString) {
//   let updatedString = errorString;
//   if (!name.value.trim()) {
//     updatedString += '<br>Preencha o campo "Nome"';
//   }
//   if (!email.value.trim()) {
//     updatedString += '<br>Preencha o campo "E-mail"';
//   }
//   if (!cpf.value.trim()) {
//     updatedString += '<br>Preencha o campo "CPF"';
//   }
//   if (!address.value.trim()) {
//     updatedString += '<br>Preencha o campo "Endereço"';
//   }
//   if (!city.value.trim()) {
//     updatedString += '<br>Preencha o campo "Cidade"';
//   }
//   if (!state.value.trim()) {
//     updatedString += '<br>Selecione o estado';
//   }
//   if (!type[0].checked && !type[1].checked) {
//     updatedString += '<br>Selecione "Casa" ou "Apartamento"';
//   }
//   if (!resume.value.trim()) {
//     updatedString += '<br>Preencha o campo "Resumo do Currículo"';
//   }
//   if (!position.value.trim()) {
//     updatedString += '<br>Preencha o campo "Cargo"';
//   }
//   if (!description.value.trim()) {
//     updatedString += '<br>Preencha o campo "Descrição do cargo"';
//   }
//   if (!date.value.trim()) {
//     updatedString += '<br>Preencha o campo "Data de início"';
//   }
//   return updatedString;
// }

// function checkLengthErrors(errorString) {
//   let updatedString = errorString;
//   if (name.value.length > 40) {
//     updatedString += '<br>Nome muito longo';
//   }
//   if (email.value.length > 50) {
//     updatedString += '<br>E-mail muito longo';
//   }
//   if (cpf.value.length !== 11 && cpf.value.trim()) {
//     updatedString += '<br>CPF inválido';
//   }
//   if (address.value.length > 200) {
//     updatedString += '<br>Endereço muito longo';
//   }
//   if (city.value.length > 28) {
//     updatedString += '<br>Cidade muito longa';
//   }
//   if (resume.value.length > 1000) {
//     updatedString += '<br>Resumo muito longo';
//   }
//   if (position.value.length > 40) {
//     updatedString += '<br>Cargo muito longo';
//   }
//   if (description.value.length > 500) {
//     updatedString += '<br>Descrição do cargo muito longa';
//   }
//   return updatedString;
// }

// function checkStyleErrors(errorString) {
//   let updatedString = errorString;
//   if (email.value.trim()) {
//     if (email.value.indexOf('@') === -1) {
//       updatedString += '<br>E-mail inválido';
//     }
//   }
// if (date.value.trim()) {
//   const sD = date.value.split('/');
//   const day = parseInt(sD[0], 10);
//   const month = parseInt(sD[1], 10);
//   const year = parseInt(sD[2], 10);
//   if (sD.length !== 3 || sD[0].length !== 2 || sD[1].length !== 2 || sD[2].length !== 4) {
//     updatedString += '<br>Formato de data incorreto';
//   } else {
//     if (day <= 0 || day > 31 || Number.isNaN(day)) {
//       updatedString += '<br>Dia inválido';
//     }
//     if (month <= 0 || month > 12 || Number.isNaN(month)) {
//       updatedString += '<br>Mês inválido';
//     }
//     if (year < 0 || Number.isNaN(year)) {
//       updatedString += '<br>Ano inválido';
//     }
//   }
// }
//   return updatedString;
// }

// function checkErrors() {
//   let errors = 'Erros:';
//   errors = checkRequiredErrors(errors);
//   errors = checkLengthErrors(errors);
//   errors = checkStyleErrors(errors);
//   if (errors !== 'Erros:') {
//     result.innerHTML = errors;
//   }
// }

function showResume() {
  let readyResume = 'Currículo:';
  readyResume += `<br>Nome: ${name.value}`;
  readyResume += `<br>E-mail: ${email.value}`;
  readyResume += `<br>CPF: ${cpf.value}`;
  readyResume += `<br>Endereço: ${address.value}`;
  readyResume += `<br>Cidade: ${city.value}`;
  readyResume += `<br>Estado: ${state.value}`;
  if (type[0].checked) {
    readyResume += '<br>Casa';
  } else {
    readyResume += '<br>Apartamento';
  }
  readyResume += `<br>Resumo do Currículo: ${resume.value}`;
  readyResume += `<br>Cargo: ${position.value}`;
  readyResume += `<br>Descrição do cargo: ${description.value}`;
  readyResume += `<br>Data de início: ${date.value}`;
  result.innerHTML = readyResume;
}

function sendForm() {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    result.innerHTML = '';
    // checkErrors();
    if (result.innerHTML === '') {
      showResume();
    }
  });
}

sendForm();

function resetForm() {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    result.innerHTML = '';
    name.value = '';
    email.value = '';
    cpf.value = '';
    address.value = '';
    city.value = '';
    const stateText = document.querySelector('div.search div.text');
    stateText.classList.add('default');
    stateText.innerHTML = 'Estado';
    type[0].checked = false;
    type[1].checked = false;
    resume.value = '';
    position.value = '';
    description.value = '';
    date.value = '';
  });
}

resetForm();

$('select.dropdown')
  .dropdown();

$('.ui.radio.checkbox')
  .checkbox();
