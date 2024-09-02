'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notes', [
      {
        title: 'Buy milk',
        content: 'Buy milk at the supermarket.',
        isArchived: false,
        categoryId: 1, 
        userId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Send report',
        content: 'Send the sales report to clients.',
        isArchived: false,
        categoryId: 2, 
        userId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Prepare salad',
        content: 'Prepare fruit salad for dinner.',
        isArchived: false,
        categoryId: 3, 
        userId: 3, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more notes as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notes', null, {});
  }
};
