window.onload = function setFonts() {
  const fontsToUse = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
  const selectList = document.getElementById('font-family');
  for (let i = 0; i < fontsToUse.length; i += 1) {
    const fontOption = document.createElement('option');
    fontOption.value = fontsToUse[i];
    fontOption.innerText = fontsToUse[i];
    selectList.appendChild(fontOption);
  }
  const text = document.getElementById('text-section');
  text.style.backgroundColor = localStorage.getItem('backgroundColor');
  text.style.color = localStorage.getItem('textColor');
  const fontSizeStored = localStorage.getItem('fontSize');
  text.style.fontSize = `${fontSizeStored}px`;
  text.style.lineHeight = localStorage.getItem('lineSpacing');
  text.style.fontFamily = localStorage.getItem('fontFamily');
};

function setBackColor() {
  const backColorInput = document.getElementById('back-color');
  const backColorButton = document.getElementById('back-button');
  const text = document.getElementById('text-section');
  backColorButton.addEventListener('click', () => {
    const newColor = backColorInput.value;
    text.style.backgroundColor = newColor;
    backColorInput.value = '';
    localStorage.setItem('backgroundColor', newColor);
  });
  backColorInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const newColor = backColorInput.value;
      text.style.backgroundColor = newColor;
      backColorInput.value = '';
      localStorage.setItem('backgroundColor', newColor);
    }
  });
}

setBackColor();

function setTextColor() {
  const textColorInput = document.getElementById('text-color');
  const textColorButton = document.getElementById('text-button');
  const text = document.getElementById('text-section');
  textColorButton.addEventListener('click', () => {
    const newColor = textColorInput.value;
    text.style.color = newColor;
    textColorInput.value = '';
    localStorage.setItem('textColor', newColor);
  });
  textColorInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const newColor = textColorInput.value;
      text.style.color = newColor;
      textColorInput.value = '';
      localStorage.setItem('textColor', newColor);
    }
  });
}

setTextColor();

function changeFontSize() {
  const fontSizeField = document.getElementById('font-field');
  const text = document.getElementById('text-section');
  fontSizeField.addEventListener('input', (event) => {
    const fontSizeSelected = event.target.value;
    text.style.fontSize = `${fontSizeSelected}px`;
    localStorage.setItem('fontSize', fontSizeSelected);
  });
}

changeFontSize();

function changeSpacing() {
  const spacingField = document.getElementById('spacing-field');
  const text = document.getElementById('text-section');
  spacingField.addEventListener('input', (event) => {
    const spacingSelected = event.target.value;
    text.style.lineHeight = spacingSelected;
    localStorage.setItem('lineSpacing', spacingSelected);
  });
}

changeSpacing();

function changeFont() {
  const selectFont = document.getElementById('font-family');
  const text = document.getElementById('text-section');
  selectFont.addEventListener('change', (event) => {
    const fontSelected = event.target.value;
    text.style.fontFamily = fontSelected;
    localStorage.setItem('fontFamily', fontSelected);
  });
}

changeFont();
