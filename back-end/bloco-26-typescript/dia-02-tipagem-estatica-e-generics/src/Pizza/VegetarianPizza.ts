import Pizza from './Pizza';
import { Vegetarian } from './PizzaTypes';

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian
}

export default VegetarianPizza;
