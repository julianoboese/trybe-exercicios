import Pizza from './Pizza';
import { Sugar } from './PizzaTypes';

interface SugarPizza extends Pizza {
  flavor: Sugar,
  slices: 4
}

export default SugarPizza;
