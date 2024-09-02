'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Shopping',
        description: 'Shopping list',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Work',
        description: 'Tasks related to work',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Recipes',
        description: 'Cooking recipes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Studies',
        description: 'Tasks and reminders related to studying',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Projects',
        description: 'Management of personal or work-related projects',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Health',
        description: 'Reminders and tasks related to health',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Travel',
        description: 'Planning and tasks related to travel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Home',
        description: 'Tasks related to home maintenance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Events',
        description: 'Organization and planning of events',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Entertainment',
        description: 'Ideas and tasks for leisure and entertainment activities',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Finance',
        description: 'Management and control of personal finances',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        description: 'Tasks related to sports activities',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Technology',
        description: 'Tasks and reminders related to technology',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
