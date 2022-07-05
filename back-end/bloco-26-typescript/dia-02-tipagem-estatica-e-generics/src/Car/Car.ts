import Colors from './Colors';
import Directions from './Directions';
import Doors from './Doors';

class Car {
  brand: string;

  color: Colors;

  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Honk: BEE BEE.');
  }

  turnOn(): void {
    console.log('Turning car on.');
  }

  turnOff(): void {
    console.log('Turning car off.');
  }

  speedUp(): void {
    console.log('Speeding car up.');
  }

  speedDown(): void {
    console.log('Speeding car down.');
  }

  stop(): void {
    console.log('Stopping car.');
  }

  openTheDoor(door: Doors): void {
    console.log(`Opening ${door} door.`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Closing ${door} door.`);
  }

  turn(direction: Directions) {
    console.log(`Turning ${direction}.`);
  }
}

export default Car;
