function changeFontSize() {
  const fontSizeField = document.getElementById('font-field');
  const text = document.getElementById('text-section');
  fontSizeField.addEventListener('input', (event) => {
    const fontSizeSelected = event.target.value;
    text.style.fontSize = `${fontSizeSelected}px`;
  });
}

changeFontSize();
