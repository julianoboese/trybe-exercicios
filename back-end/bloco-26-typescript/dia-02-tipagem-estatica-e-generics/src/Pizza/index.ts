import CommonPizza from './CommonPizza';
import SugarPizza from './SugarPizza';
import VegetarianPizza from './VegetarianPizza';

const calabresa: CommonPizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const frango: CommonPizza = {
  flavor: 'Frango',
  slices: 6,
};

const pepperoni: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 4,
};

const marguerita: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const palmito: VegetarianPizza = {
  flavor: 'Palmito',
  slices: 8,
};

const nutella: SugarPizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(calabresa);
console.log(frango);
console.log(pepperoni);
console.log(marguerita);
console.log(palmito);
console.log(nutella);
