const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

const section = document.createElement('section');
section.className = 'center-content';
document.querySelector('main').appendChild(section);

const p = document.createElement('p');
p.innerText = 'Exercícios DOM';
document.querySelector('.center-content').appendChild(p);
