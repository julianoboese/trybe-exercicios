const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

const p = document.createElement('p');
p.innerText = 'Exercícios DOM';
section.appendChild(p);

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
sectionLeft.appendChild(imagem);

const list = document.createElement('ul');
sectionRight.appendChild(list);
const values = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < values.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.innerText = values[i];
  list.appendChild(listItem);
}

for (let i = 1; i <= 3; i += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = `Tag ${i}`;
  main.appendChild(h3);
}
