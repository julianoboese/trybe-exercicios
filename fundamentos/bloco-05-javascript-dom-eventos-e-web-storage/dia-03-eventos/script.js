function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function setDays(daysList) {
  for (let i = 0; i < daysList.length; i += 1) {
    const day = document.createElement('li');
    day.innerText = daysList[i];
    day.className = 'day';
    if (daysList[i] === 24 || daysList[i] === 25 || daysList[i] === 31) {
      day.classList.add('holiday');
    }
    if (daysList[i] === 4 || daysList[i] === 11 || daysList[i] === 18
    || daysList[i] === 25) {
      day.classList.add('friday');
    }
    days.appendChild(day);
  }
}

setDays(dezDaysList);

// Exercício 2
function setHolidays(holidays) {
  const buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = holidays;
  buttonHoliday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(buttonHoliday);
}

setHolidays('Feriados');

// Exercício 3
function highlightHolidays() {
  const buttonHoliday = document.getElementById('btn-holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const newColor = 'white';
  const holidays = document.getElementsByClassName('holiday');

  buttonHoliday.addEventListener('click', () => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = backgroundColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  });
}

highlightHolidays();

// Exercício 4
function setFridays(fridays) {
  const buttonFriday = document.createElement('button');
  buttonFriday.innerText = fridays;
  buttonFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(buttonFriday);
}

setFridays('Sexta-feira');

// Exercício 5
function highlightFridays(fridaysArray) {
  const buttonFriday = document.getElementById('btn-friday');
  const newText = 'SEXTOU o/';
  const fridays = document.getElementsByClassName('friday');

  buttonFriday.addEventListener('click', () => {
    for (let i = 0; i < fridaysArray.length; i += 1) {
      if (fridays[i].innerText !== newText) {
        fridays[i].innerText = newText;
      } else {
        fridays[i].innerText = fridaysArray[i];
      }
    }
  });
}

const dezFridays = [4, 11, 18, 25];
highlightFridays(dezFridays);

// Exercício 6
function increaseSize() {
  const days = document.getElementById('days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function decreaseSize() {
  const days = document.getElementById('days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

increaseSize();
decreaseSize();

// Exercício 7
function createTask(task) {
  const taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  document.querySelector('.my-tasks').appendChild(taskSpan);
}

createTask('Projeto');

// Exercício 8
function setTaskColor(colorString) {
  const taskColor = document.createElement('div');
  taskColor.className = 'task';
  taskColor.style.backgroundColor = colorString;
  document.querySelector('.my-tasks').appendChild(taskColor);
}

setTaskColor('green');
