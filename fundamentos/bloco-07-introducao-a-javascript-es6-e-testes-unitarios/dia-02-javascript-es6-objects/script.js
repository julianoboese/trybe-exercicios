// Parte 1

const order1 = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 15,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 50,
  },
};

// Exercício 1
const customerInfo = (order) => {
  const deliveryName = order.order.delivery.deliveryPerson;
  const buyer = order.name;
  const phone = order.phoneNumber;
  const buyerStreet = order.address.street;
  const buyerNumber = order.address.number;
  const buyerApartment = order.address.apartment;

  return `Olá ${deliveryName}, entrega para: ${buyer}, Telefone: ${phone}, R. ${buyerStreet}, Nº: ${buyerNumber}, AP: ${buyerApartment}.`;
};

customerInfo(order1);

// Exercício 2
const orderModifier = (order) => {
  const buyer = order.name;
  const pizzaFlavors = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const totalAmount = order.payment.total;

  return `Olá ${buyer}, o total do seu pedido de ${pizzaFlavors[0]}, ${pizzaFlavors[1]} e ${drink} é R$ ${totalAmount},00.`;
};

orderModifier(order1);

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addKey = (object, key, value) => {
  object[key] = value;
};

addKey(lesson2, 'turno', 'noite');

// Exercício 2
const listKeys = (object) => Object.keys(object);

listKeys(lesson2);

// Exercício 3
const objSize = (object) => Object.keys(object).length;

objSize(lesson2);

// Exercício 4
const listValues = (object) => Object.values(object);

listValues(lesson2);

// Exercício 5
const allLessons = { lesson1, lesson2, lesson3 };
console.log(allLessons);

// Exercício 6
const allStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (const value of array) {
    total += object[value].numeroEstudantes;
  }
  return total;
};

allStudents(allLessons);

// Exercício 7
const getValueByNumber = (object, key) => Object.values(object)[key];

getValueByNumber(lesson1, 0);

// Exercício 8
const verifyPair = (object, key, value) => {
  const array = Object.entries(object);
  for (const item of array) {
    if (item[0] === key && item[1] === value) {
      return true;
    }
  }
  return false;
};

verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');
