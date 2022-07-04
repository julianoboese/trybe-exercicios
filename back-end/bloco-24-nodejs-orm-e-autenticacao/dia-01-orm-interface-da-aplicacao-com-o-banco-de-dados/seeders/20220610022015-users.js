module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Harry Potter and the Philosopher\'s Stone ',
          author: 'J. K. Rowling',
          page_quantity: 223,
        },
        {
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          page_quantity: 310,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
