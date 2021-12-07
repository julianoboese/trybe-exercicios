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

const customerInfo = (order) => {
  const deliveryName = order.order.delivery.deliveryPerson;
  const buyer = order.name;
  const phone = order.phoneNumber;
  const buyerStreet = order.address.street;
  const buyerNumber = order.address.number;
  const buyerApartment = order.address.apartment;

  return `Olá ${deliveryName}, entrega para: ${buyer}, Telefone: ${phone}, R. ${buyerStreet}, Nº: ${buyerNumber}, AP: ${buyerApartment}.`;
};

console.log(customerInfo(order1));

const orderModifier = (order) => {
  const buyer = order.name;
  const pizzaFlavors = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const totalAmount = order.payment.total;

  return `Olá ${buyer}, o total do seu pedido de ${pizzaFlavors[0]}, ${pizzaFlavors[1]} e ${drink} é R$ ${totalAmount},00.`;
};

console.log(orderModifier(order1));
