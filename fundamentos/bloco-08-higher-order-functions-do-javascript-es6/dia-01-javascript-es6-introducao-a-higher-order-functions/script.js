// Exercício 1
const employeesData = (fullName) => ({ fullName, email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com` });

const newEmployees = (employeesFunc) => {
  const employees = {
    id1: employeesFunc('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesFunc('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesFunc('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(employeesData));

// Exercício 2
