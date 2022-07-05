import Pizza from './Pizza';
import { Common } from './PizzaTypes';

interface CommonPizza extends Pizza {
  flavor: Common
}

export default CommonPizza;
