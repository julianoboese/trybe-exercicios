// Inserção
// Exercício 1
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

// Exercício 2
const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// Exercício 3
const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// Exercício 4
const p = document.createElement('p');
p.innerText = 'Exercícios DOM';
section.appendChild(p);

// Exercício 5
const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// Exercício 6
const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// Exercício 7
const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
sectionLeft.appendChild(imagem);

// Exercício 8
const list = document.createElement('ul');
sectionRight.appendChild(list);
const values = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < values.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.innerText = values[i];
  list.appendChild(listItem);
}

// Exercício 9
for (let i = 1; i <= 3; i += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = `Tag ${i}`;
  main.appendChild(h3);
}

// Alteração e Remoção
// Exercício 1
h1.className = 'title';

// Exercício 2
const h3s = document.getElementsByTagName('h3');
for (let i = 0; i < h3s.length; i += 1) {
  h3s[i].className = 'description';
}

// Exercício 3
main.removeChild(sectionLeft);

// Exercício 4
sectionRight.style.marginRight = 'auto';

// Exercício 5
section.parentNode.style.backgroundColor = 'green';

// Exercício 6
list.lastChild.remove();
list.lastChild.remove();
