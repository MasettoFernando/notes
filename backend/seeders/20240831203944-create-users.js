'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        password: 'password1', // Make sure to encrypt passwords in a real environment
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        password: 'password2', // Make sure to encrypt passwords in a real environment
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user3',
        password: 'password3', // Make sure to encrypt passwords in a real environment
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
